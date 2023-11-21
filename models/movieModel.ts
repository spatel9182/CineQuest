import { Schema, model, Document, Types } from 'mongoose';

export interface IMovie extends Document {
  _id: Types.ObjectId;
  tmdbId: string;
  title: string;
  genre: string[];
  release_date: string;
  director: string;
  original_language: string;
  backdrop_path: string;
  overview: string;
  popularity: number;
  poster_path: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  cast: any;
}

export interface ICast extends Document {
  tmdbId: string;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

const artistSchema = new Schema<ICast>({
  tmdbId: { type: String, unique: true },
  adult: {
    type: Boolean,
  },
  gender: {
    type: Number,
  },
  id: {
    type: Number,
  },
  known_for_department: {
    type: String,
  },
  name: {
    type: String,
  },
  original_name: {
    type: String,
  },
  popularity: {
    type: Number,
  },
  profile_path: {
    type: String,
  },
  cast_id: {
    type: Number,
  },
  character: {
    type: String,
  },
  credit_id: String,
  order: {
    type: Number,
  },
});

const movieSchema = new Schema<IMovie>(
  {
    tmdbId: { type: String, unique: true },
    title: { type: String, unique: true, required: true },
    genre: [{ type: String, required: true }],
    release_date: { type: String, required: true },
    director: { type: String, default: '' },
    original_language: { type: String, required: true },
    backdrop_path: { type: String, required: true },
    overview: { type: String, required: true },
    popularity: { type: Number, required: true },
    poster_path: { type: String, required: true },
    video: { type: Boolean, required: true, default: false },
    vote_average: { type: Number, required: true },
    vote_count: { type: Number, required: true },
    cast: { type: [artistSchema], default: [] },
  },
  { timestamps: true }
);

export const MovieModel = model<IMovie>('Movie', movieSchema);
