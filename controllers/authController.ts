import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../models/userModel';
import { catchAsync } from '../utils/catchAsync';

export const signUp = catchAsync(async (req: Request, res: Response) => {
  const { username, email, password }: any = req.body;
  if (!password || !username || !email) {
    throw new Error('username, email, password field are required');
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new UserModel({ username, email, password: hashedPassword });
  await user.save();

  // Generate a JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || '', {
    expiresIn: '30d',
  });

  const newUser = await UserModel.findById(user._id);

  res.status(201).json({ message: 'Sign Up successful', user: newUser, token });
});

export const signIn = catchAsync(async (req: Request, res: Response) => {
  const { emailOrUsername, password } = req.body;
  if (!password || !emailOrUsername) {
    throw new Error('emailOrUsername, password field are required');
  }
  const user = await UserModel.findOne({
    $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
  }).select('password');

  if (!user) {
    return res.status(401).json({ error: 'Authentication failed' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Authentication failed' });
  }

  // Generate a JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || '', {
    expiresIn: '30d',
  });

  const newUser = await UserModel.findById(user._id);
  res
    .status(200)
    .json({ message: 'Authentication successful', token, user: newUser });
});

// Middleware function to check JWT token
export const authorize = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from the request header
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ error: 'Authorization token not found in request header' });
  }

  // Verify the token
  jwt.verify(
    token,
    process.env.JWT_SECRET || '',
    async (err: any, decoded: any) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }

      const user = await UserModel.findById(decoded?.userId);
      if (!user?._id) {
        throw new Error('Invalid authorization token');
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      req.user = user;
      next(); // Continue to the next middleware or route handler
    }
  );
};
