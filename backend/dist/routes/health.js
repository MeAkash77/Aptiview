"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Base health endpoint (supports all methods to avoid 405 from some monitors)
router.all('/', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'healthy' });
});
// Health check ping endpoint (supports all methods)
router.all('/ping', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'pong' });
});
exports.default = router;
