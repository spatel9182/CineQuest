import { Request, Response, NextFunction } from 'express';
import { ContactModel } from '../models/contactModel';

export const createContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await ContactModel.create(req.body);
    res.json({ status: 'success', message: 'Messaged saved successfully' });
  } catch (error) {
    next(error);
  }
};
