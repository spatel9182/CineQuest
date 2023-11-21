import { Request } from 'express';
import { IUser } from '../models/userModel';

export interface IRequest extends Request {
  user?: IUser;
}
