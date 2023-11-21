import dotenv from 'dotenv';
dotenv.config();
import { db } from '../utils/db';
import { MovieModel } from '../models/movieModel';
import { getCastByMovieId } from '../controllers/movieApi';

db();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function run() {
  await db();
  const movies = await MovieModel.find();
  //   console.log(movies);

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.cast.length <= 0) {
      console.log(`${i + 1}). adding cast`);
      const tmdbMovieId = movie.tmdbId;
      console.log(tmdbMovieId);
      const rawCast = await getCastByMovieId(tmdbMovieId);
      console.log(rawCast?.length);
      const cast = rawCast?.map((c: any) => {
        const newObject = { ...c };
        newObject.tmdbId = newObject.id;
        delete newObject.id;
        return newObject;
      });
      await MovieModel.findByIdAndUpdate(movie?._id, { cast: cast });
    } else {
      console.log(`${i + 1}). cast is already present`);
    }
  }
}

// run();
