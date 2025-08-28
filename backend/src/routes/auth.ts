import { Router } from "express";
const router = Router();

// placeholder route
router.get("/", (req, res) => {
  res.json({ message: "Auth routes placeholder" });
});

export default router;
