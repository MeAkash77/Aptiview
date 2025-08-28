"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_2 = require("@clerk/express");
const user_1 = __importDefault(require("./routes/user"));
const interview_1 = __importDefault(require("./routes/interview"));
const auth_1 = __importDefault(require("./routes/auth"));
const question_1 = __importDefault(require("./routes/question"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const websocketServer_1 = require("./websocketServer");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// ✅ Middleware
app.use(express_1.default.json({ limit: process.env.JSON_BODY_LIMIT || "15mb" }));
app.use(express_1.default.urlencoded({
    extended: true,
    limit: process.env.JSON_BODY_LIMIT || "15mb",
}));
app.use((0, cookie_parser_1.default)());
// ✅ Allowed Origins
const allowedOrigins = [
    "http://localhost:3000", // Local frontend (dev)
    "https://aptiview-pi.vercel.app", // Deployed frontend
];
if (process.env.FRONTEND_URL) {
    allowedOrigins.push(process.env.FRONTEND_URL);
}
// ✅ CORS Options
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, origin); // Allow the requesting origin
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true, // allow cookies/auth headers
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};
// ✅ Apply CORS globally
app.use((0, cors_1.default)(corsOptions));
app.options("*", (0, cors_1.default)(corsOptions)); // Preflight requests
// ✅ Clerk Middleware
app.use((0, express_2.clerkMiddleware)({
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    secretKey: process.env.CLERK_SECRET_KEY,
}));
// ✅ Static uploads
app.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "../uploads")));
// ✅ Health Check
app.get("/", (req, res) => {
    res.send("🚀 API is running...");
});
app.get("/ping", (req, res) => {
    res.status(200).send("pong");
});
// ✅ Environment check route
app.get("/env-check", (req, res) => {
    const requiredEnvs = {
        DATABASE_URL: !!process.env.DATABASE_URL,
        OPENAI_API_KEY: !!process.env.OPENAI_API_KEY,
        CLERK_SECRET_KEY: !!process.env.CLERK_SECRET_KEY,
        CLERK_PUBLISHABLE_KEY: !!process.env.CLERK_PUBLISHABLE_KEY,
        FRONTEND_URL: !!process.env.FRONTEND_URL,
        IMAGEKIT_PUBLIC_KEY: !!process.env.IMAGEKIT_PUBLIC_KEY,
        IMAGEKIT_PRIVATE_KEY: !!process.env.IMAGEKIT_PRIVATE_KEY,
        IMAGEKIT_URL_ENDPOINT: !!process.env.IMAGEKIT_URL_ENDPOINT,
    };
    const missingEnvs = Object.entries(requiredEnvs)
        .filter(([_, value]) => !value)
        .map(([key]) => key);
    res.json({
        status: missingEnvs.length === 0 ? "OK" : "MISSING_ENV_VARS",
        envStatus: requiredEnvs,
        missingEnvs,
        nodeEnv: process.env.NODE_ENV || "not_set",
        port: process.env.PORT || "not_set",
    });
});
// ✅ Routes
app.use("/api/users", user_1.default);
app.use("/api/interviews", interview_1.default);
app.use("/api/auth", auth_1.default);
app.use("/api/questions", question_1.default);
// ✅ Error Handling
app.use(errorHandler_1.default);
// ✅ Start server
const server = app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
// ✅ WebSocket
(0, websocketServer_1.setupWebSocketServer)(server);
console.log(`🔌 WebSocket server running on port ${PORT}`);
