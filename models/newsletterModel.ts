import mongoose, { Schema, Document } from 'mongoose';

interface INewsLetter extends Document {
  email: string;
}

const newsletterSchema: Schema<INewsLetter> = new Schema<INewsLetter>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const NewsLetterModel = mongoose.model<INewsLetter>(
  'NewsLetter',
  newsletterSchema
);
