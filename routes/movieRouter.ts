import express, { Router } from 'express';
import {
  getAllMovies,
  getMovieById,
  // loadMoviesController,
  // createMovie,
  // updateMovie,
  // deleteMovie,
} from '../controllers/movieController';
// import { authorize } from '../controllers/authController';

// Create Express router
const movieRouter: Router = express.Router();

// Get all movies
movieRouter.get('/', getAllMovies);

// Get a specific movie by ID
movieRouter.get('/:id', getMovieById);

// movieRouter.use(authorize);
// // Create a movie
// movieRouter.post('/', createMovie);

// // Update a movie
// movieRouter.put('/:id', updateMovie);

// // Delete a movie
// movieRouter.delete('/:id', deleteMovie);

export default movieRouter;
