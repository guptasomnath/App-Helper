import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../utils/ErrorHandler";
import jwt from "jsonwebtoken";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return next(new ErrorHandler(401, "Unauthorized user"));
  }

  //check is token is valid or not
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY || "");
    next();
  } catch (error) {
    next(new ErrorHandler(401, "Unauthorized user"));
  }
};
