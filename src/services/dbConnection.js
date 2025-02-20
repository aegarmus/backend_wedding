import { connectDB } from '../config/db.config.js'

export const dbConnect = async() => {
    try {
        
        await connectDB();
        console.log('Logramos conectarnos a mongoDB');
    } catch (error) {
        console.error('No pudimos conectarnos a la DB', error);
        process.exit(1)
    }
}