import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema: Schema<IUser> = new Schema<IUser>(
  {
    username: {
      type: String,
      maxLength: 50,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      maxLength: 100,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      maxLength: 100,
      select: false,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<IUser>('User', userSchema);
