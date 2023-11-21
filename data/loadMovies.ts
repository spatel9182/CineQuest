import axios from 'axios';
import { IMovie, MovieModel } from '../models/movieModel';

const genreMap = new Map<number, string>([
  [28, 'Action'],
  [12, 'Adventure'],
  [16, 'Animation'],
  [35, 'Comedy'],
  [80, 'Crime'],
  [99, 'Documentary'],
  [18, 'Drama'],
  [10751, 'Family'],
  [14, 'Fantasy'],
  [36, 'History'],
  [27, 'Horror'],
  [10402, 'Music'],
  [9648, 'Mystery'],
  [10749, 'Romance'],
  [878, 'Science Fiction'],
  [10770, 'TV Movie'],
  [53, 'Thriller'],
  [10752, 'War'],
  [37, 'Western'],
]);

async function fetchMovies(page: number): Promise<any[]> {
  const apiKey = process.env.MOVIE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;

  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error: any) {
    console.error('Failed to fetch movies:', error.message);
    return [];
  }
}

export async function saveMoviesToDatabase(): Promise<void> {
  let totalMoviesSaved = 0;
  let currentPage = 1;

  while (totalMoviesSaved < 200) {
    const movies = await fetchMovies(currentPage);

    if (movies.length === 0) {
      console.log('No more movies to fetch.');
      break;
    }

    for (const movieData of movies) {
      const {
        id,
        title,
        genre_ids,
        release_date,
        director,
        original_language,
        backdrop_path,
        overview,
        popularity,
        poster_path,
        video,
        vote_average,
        vote_count,
      } = movieData;

      const genreStrings = genre_ids
        .map((genreId: number) => genreMap.get(genreId))
        .filter(Boolean);

      const movie: IMovie = new MovieModel({
        tmdbId: id.toString(),
        title,
        genre: genreStrings,
        release_date,
        director,
        original_language,
        backdrop_path,
        overview,
        popularity,
        poster_path,
        video,
        vote_average,
        vote_count,
      });

      try {
        await movie.save();
        console.log(`Saved movie '${title}' to the database.`);
        totalMoviesSaved++;
      } catch (error: any) {
        console.error(`Failed to save movie '${title}':`, error.message);
      }

      if (totalMoviesSaved >= 200) {
        break;
      }
    }

    currentPage++;
  }
}

// saveMoviesToDatabase()
//   .then(() => {
//     console.log('All movies saved to the database.');
//     process.exit(0);
//   })
//   .catch((error) => {
//     console.error('An error occurred:', error);
//     process.exit(1);
//   });
