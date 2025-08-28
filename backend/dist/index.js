import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import { clerkMiddleware } from "@clerk/express";
import { prisma } from "./db";

import userRoutes from "./routes/user";
import interviewRoutes from "./routes/interview";
import authRoutes from "./routes/auth";
import questionRoutes from "./routes/question";

import errorHandler from "./middleware/errorHandler";
import { setupWebSocketServer } from "./websocketServer";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 4000;

// ✅ Middleware
app.use(express.json({ limit: process.env.JSON_BODY_LIMIT || "15mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: process.env.JSON_BODY_LIMIT || "15mb",
  })
);
app.use(cookieParser());

// ✅ CORS Setup (frontend + localhost for dev)
app.use(
  cors({
    origin: [
      "http://localhost:3000",            // Local frontend (dev)
      "https://aptiview-pi.vercel.app",   // Deployed frontend
    ],
    credentials: true, // allow cookies/auth headers
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

// ✅ Preflight requests (important for CORS)
app.options("*", cors());

// ✅ Clerk Middleware
app.use(
  clerkMiddleware({
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    secretKey: process.env.CLERK_SECRET_KEY,
  })
);

// ✅ Static uploads
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// ✅ Health Check
app.get("/", (req: Request, res: Response) => {
  res.send("🚀 API is running...");
});

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong");
});

// ✅ Environment check route
app.get("/env-check", (req: Request, res: Response) => {
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
app.use("/api/users", userRoutes);
app.use("/api/interviews", interviewRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);

// ✅ Error Handling
app.use(errorHandler);

// ✅ Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// ✅ WebSocket
setupWebSocketServer(server);
console.log(`🔌 WebSocket server running on port ${PORT}`);
