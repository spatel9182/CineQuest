import { Request, Response } from 'express';
import { catchAsync } from '../utils/catchAsync';
import { genre } from '../data/genre';

// Get all genres
export const getAllGenres = catchAsync(async (req: Request, res: Response) => {
  res.json({ status: 'success', genres: genre });
});
