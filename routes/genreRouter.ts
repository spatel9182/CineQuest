import express from 'express';
import { getAllGenres } from '../controllers/genreController';

const genreRouter = express.Router();

genreRouter.get('/', getAllGenres);

export default genreRouter;
