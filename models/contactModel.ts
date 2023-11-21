import mongoose, { Schema, Document } from 'mongoose';

interface IContact extends Document {
  name: string;
  email: string;
  message: string;
}

const contactSchema: Schema<IContact> = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ContactModel = mongoose.model<IContact>('Contact', contactSchema);
