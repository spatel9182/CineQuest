import { Request, Response } from 'express';
import axios from 'axios';

const apiKey = process.env.MOVIE_API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

const baseUrl = 'https://image.tmdb.org/t/p/w500';

export const getAllMoviesFromApi = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await axios.get(url);
    const movieData = response.data;
    const modifiedMovies = movieData.results.map((movie: any) => {
      const modifiedMovie = { ...movie };
      if (modifiedMovie.poster_path) {
        modifiedMovie.poster_path = `${baseUrl}${modifiedMovie.poster_path}`;
      } else {
        modifiedMovie.poster_path = 'No poster available';
      }
      if (modifiedMovie.backdrop_path) {
        modifiedMovie.backdrop_path = `${baseUrl}${modifiedMovie.backdrop_path}`;
      } else {
        modifiedMovie.backdrop_path = 'No poster available';
      }
      return modifiedMovie;
    });

    res.json(modifiedMovies);
  } catch (error) {
    res.status(500).json({ error: 'Error occurred while fetching movies' });
  }
};

export const getCastByMovieId = async (tmdbMovieId: string) => {
  const url = `https://api.themoviedb.org/3/movie/${tmdbMovieId}/credits?api_key=${apiKey}`;
  const response = await axios.get(url);
  return response.data.cast || [];
};

export const getArtistDetails = async (req: Request, res: Response) => {
  const artistId: string = req.params.id;
  const url = `https://api.themoviedb.org/3/person/${artistId}?api_key=${apiKey}`;
  const response = await axios.get(url);
  const url2 = `https://api.themoviedb.org/3/person/${artistId}/movie_credits?api_key=${apiKey}`;
  const response2 = await axios.get(url2);
  res.json({ ...response.data, ...response2.data });
};
