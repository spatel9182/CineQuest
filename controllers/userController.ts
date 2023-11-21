import { Response } from 'express';
import { catchAsync } from '../utils/catchAsync';
import { IRequest } from '../types/common';

export const getProfile = catchAsync(async (req: IRequest, res: Response) => {
  res.json({
    status: 'success',
    data: req.user,
  });
});
