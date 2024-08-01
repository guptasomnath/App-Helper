import { rateLimit } from "express-rate-limit";
import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";

// Custom handler for rate limit exceeded
const rateLimitHandler = (req: Request, res: Response, next: NextFunction) => {
  res
    .status(429)
    .json(
      new ApiResponse(
        429,
        "You have made too many requests. Please try again later."
      )
    );
};

export const loginRateLimit = rateLimit({
  windowMs: 3 * 60 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  handler: rateLimitHandler,
});

export const getProjectsRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  handler: rateLimitHandler,
});

export const downloadProjectsRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  handler: rateLimitHandler,
});
