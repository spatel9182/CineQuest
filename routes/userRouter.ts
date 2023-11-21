import express from 'express';
import { getProfile } from '../controllers/userController'; // Import the auth controller
import { authorize } from '../controllers/authController';

const userRouter = express.Router();

userRouter.use(authorize);
// User routes
userRouter.get('/profile', getProfile);

export default userRouter;
