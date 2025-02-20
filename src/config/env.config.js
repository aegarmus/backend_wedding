import dotenv from 'dotenv';
dotenv.config()

export const config = {
    port: process.env.PORT || 3000,
    db: {
        dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/wedding_invitation',
    },
}