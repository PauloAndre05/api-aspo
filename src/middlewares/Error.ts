import { NextFunction, Response, Request } from "express";
import { ErrorApi } from "../appErrors/ErrorApi";

export const errorMiddleware = (
  error: Error & Partial<ErrorApi>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Server error";
  return res.status(statusCode).json({ message });
};