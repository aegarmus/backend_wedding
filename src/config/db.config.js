import mongoose from 'mongoose';
import { config } from './env.config.js';

const { dbUrl } = config.db;

export const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};


