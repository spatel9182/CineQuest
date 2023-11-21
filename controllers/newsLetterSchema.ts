import { Request, Response, NextFunction } from 'express';
import { NewsLetterModel } from '../models/newsletterModel';

export const addEmailToNewsLetter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await NewsLetterModel.create(req.body);
    res.json({ status: 'success', message: 'Email Added to news letter' });
  } catch (error) {
    next(error);
  }
};
