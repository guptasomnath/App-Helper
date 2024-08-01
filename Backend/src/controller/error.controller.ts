import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { IError } from "../types";

const backErrorResponse = (
  err: IError,
  res: Response,
  mode: "prod" | "dev"
) => {
  if (err.isOperational) {
    res
      .status(err.statusCode)
      .json(
        new ApiResponse(err.statusCode, err.message, mode == "dev" ? err : null)
      );
  } else {
    res.status(500).json(new ApiResponse(500, "Internal Server Error", err));
  }
};

export const globalErrorController = (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  backErrorResponse(err, res, "dev");
};
