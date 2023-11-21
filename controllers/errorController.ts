/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req: any,
  res: any,
  next
) => {
  const statusCode = err?.statusCode || 500;
  const status = err?.status || 'error';
  const message = err?.message || 'Something went wrong, Please try again';
  return res.status(statusCode).json({
    status,
    message,
  });
};
