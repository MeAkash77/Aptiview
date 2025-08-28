"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
function errorHandler(err, req, res, _next) {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    res.status(status).json({
        error: message,
        ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
    });
}
