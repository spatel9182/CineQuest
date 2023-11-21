import { Schema, model, Document, Types } from 'mongoose';

export interface IFavorite extends Document {
  userId: Types.ObjectId | any;
  movieId: Types.ObjectId | any;
}

const favoritesSchema = new Schema<IFavorite>(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    movieId: { type: Types.ObjectId, ref: 'Movie', required: true },
  },
  { timestamps: true }
);

export const FavoriteModel = model<IFavorite>('Favorite', favoritesSchema);
