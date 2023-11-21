import * as mongoose from 'mongoose';

let isConnected: any;

export const db = async (DB_STRING?: string) => {
  try {
    if (isConnected) {
      console.log('Using existing Database connection');
    } else if (!process.env.MONGODB_URL && !DB_STRING) {
      throw new Error('Database Connection string not found');
    } else {
      const db = await mongoose.connect(
        DB_STRING || process.env.MONGODB_URL || ''
      );
      isConnected = db.connections[0].readyState;
      console.log('Database Connection Successful!');
    }
  } catch (error: any) {
    console.log('Database Connection Failed', error?.message);
  }
};
