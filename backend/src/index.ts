import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { prisma } from './db';
import userRoutes from './routes/user';
import interviewRoutes from './routes/interview';
import healthRoutes from './routes/health';
import { clerkMiddleware } from '@clerk/express';
import { setupWebSocketServer } from './websocketServer';

const app = express();

// -------------------- CORS CONFIG --------------------
app.use(cors({
  origin: [
    "http://localhost:3000", 
    "https://aptiview-pi.vercel.app", 
    process.env.FRONTEND_URL || "http://localhost:3000"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

// -------------------- BODY PARSER --------------------
app.use(express.json({ limit: process.env.JSON_BODY_LIMIT || '15mb' }));
app.use(express.urlencoded({ extended: true, limit: process.env.JSON_BODY_LIMIT || '15mb' }));

// -------------------- CLERK AUTH --------------------
app.use(clerkMiddleware({
  publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  secretKey: process.env.CLERK_SECRET_KEY,
}));

// -------------------- STATIC FILES --------------------
app.use('/uploads', express.static(path.join(__dirname, '../uploads'))); // legacy (use ImageKit for new media)

// -------------------- HEALTH CHECKS --------------------
// Minimal
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

// Basic health
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: 'Aptiview Backend',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Detailed health (DB + WebSocket + Prisma check)
app.get('/health/detailed', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`; // DB test
    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      services: {
        database: 'connected',
        websocket: 'running',
        server: 'running',
        prisma: 'connected'
      },
      environment: process.env.NODE_ENV || 'development',
      version: '1.0.0'
    });
  } catch (error) {
    console.error('❌ Detailed health check failed:', error);
    res.status(503).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      services: {
        database: 'disconnected',
        server: 'running'
      },
      error: 'Database connection failed',
      environment: process.env.NODE_ENV || 'development'
    });
  }
});

// Env var validation endpoint (for debugging deploys)
app.get('/env-check', (req, res) => {
  const requiredEnvs = {
    'DATABASE_URL': !!process.env.DATABASE_URL,
    'OPENAI_API_KEY': !!process.env.OPENAI_API_KEY,
    'CLERK_SECRET_KEY': !!process.env.CLERK_SECRET_KEY,
    'CLERK_PUBLISHABLE_KEY': !!process.env.CLERK_PUBLISHABLE_KEY,
    'FRONTEND_URL': !!process.env.FRONTEND_URL,
    'IMAGEKIT_PUBLIC_KEY': !!process.env.IMAGEKIT_PUBLIC_KEY,
    'IMAGEKIT_PRIVATE_KEY': !!process.env.IMAGEKIT_PRIVATE_KEY,
    'IMAGEKIT_URL_ENDPOINT': !!process.env.IMAGEKIT_URL_ENDPOINT
  };

  const missingEnvs = Object.entries(requiredEnvs)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  res.json({
    status: missingEnvs.length === 0 ? 'OK' : 'MISSING_ENV_VARS',
    envStatus: requiredEnvs,
    missingEnvs,
    nodeEnv: process.env.NODE_ENV || 'not_set',
    port: process.env.PORT || 'not_set'
  });
});

// -------------------- API ROUTES --------------------
app.use('/api/users', userRoutes);
app.use('/api/interviews', interviewRoutes);
app.use('/api/health', healthRoutes); // central place for health routes

// -------------------- ERROR HANDLER --------------------
app.use((err, req, res, next) => {
  console.error("❌ Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// -------------------- SERVER START --------------------
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// -------------------- WEBSOCKET --------------------
setupWebSocketServer(server);
console.log(`🔌 WebSocket server attached to HTTP server on port ${PORT}`);

