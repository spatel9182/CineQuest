import { Request, Response, NextFunction } from 'express';
import { IMovie, MovieModel } from '../models/movieModel';
// import { saveMoviesToDatabase } from '../data/loadMovies';

export const getAllMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1; // Get the page number from the query parameters
    const limit = parseInt(req.query.limit as string) || 20; // Get the limit (number of movies per page) from the query parameters
    const searchQuery = req.query.search?.toString() || ''; // Get the search query from the query parameters

    const skip = (page - 1) * limit; // Calculate the number of documents to skip based on the page number and limit

    const moviesQuery = MovieModel.find();
    const countQuery = MovieModel.countDocuments();

    if (searchQuery) {
      // Add partial search by title field
      moviesQuery.where('title', new RegExp(searchQuery, 'i'));
      countQuery.where('title', new RegExp(searchQuery, 'i'));
    }

    // Apply pagination to the movie query
    moviesQuery.skip(skip).limit(limit);

    const movies: IMovie[] = await moviesQuery.exec();
    const count = await countQuery.exec();

    res.json({ status: 'success', movies, count });
  } catch (error) {
    next(error);
  }
};

export const getMovieById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movieId: string = req.params.id;
    const movie: IMovie | null = await MovieModel.findById(movieId);

    if (!movie) {
      res.sendStatus(404);
      return;
    }

    res.json(movie);
  } catch (error) {
    next(error);
  }
};

// export const loadMoviesController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     await saveMoviesToDatabase();
//     res.json({ status: 'success' });
//   } catch (error) {
//     next(error);
//   }
// };

// export const createMovie = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { title, genreId, releaseYear, director, languageId } = req.body;

//     const movie: IMovie = new MovieModel({
//       title,
//       genreId,
//       releaseYear,
//       director,
//       languageId,
//     });

//     const createdMovie: IMovie = await movie.save();

//     res.status(201).json(createdMovie);
//   } catch (error) {
//     next(error);
//   }
// };

// export const updateMovie = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const movieId: string = req.params.id;
//     const { title, genreId, releaseYear, director, languageId } = req.body;

//     const updatedMovie: IMovie | null = await MovieModel.findByIdAndUpdate(
//       movieId,
//       { title, genreId, releaseYear, director, languageId },
//       { new: true }
//     );

//     if (!updatedMovie) {
//       res.sendStatus(404);
//       return;
//     }

//     res.json(updatedMovie);
//   } catch (error) {
//     next(error);
//   }
// };

// export const deleteMovie = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const movieId: string = req.params.id;
//     const deletedMovie: IMovie | null = await MovieModel.findByIdAndDelete(
//       movieId
//     );

//     if (!deletedMovie) {
//       res.sendStatus(404);
//       return;
//     }

//     res.status(204).json({ status: 'success', message: 'Movie was deleted' });
//   } catch (error) {
//     next(error);
//   }
// };
