import { Response, NextFunction, RequestHandler } from 'express';
import { IRequest } from '../types/common';

export const catchAsync = (handler: RequestHandler): RequestHandler => {
  return async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
