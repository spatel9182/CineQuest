import express from 'express';
import { signUp, signIn } from '../controllers/authController'; // Import the auth controller

const authRouter = express.Router();

// Auth routes
authRouter.post('/signup', signUp);
authRouter.post('/signin', signIn);

export default authRouter;
