import express from 'express';
import cors from 'cors';

import { serverInit } from './services/ServerInit.js';
import guestRoutes from './routes/guestRoutes.js';
import playlistRoutes from './routes/playlistRoutes.js';

import { errorHandler } from './middlewares/errorHandlers.js';


const app = express();

const allowedOrigins = [
  "https://alan-mariel-test.netlify.app",
  "http://localhost:3000",
  "https://alanmariel.netlify.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Agregar configuraciones y middlewares para rutas
// Rutas
app.use('/api', guestRoutes);
app.use('/api', playlistRoutes);

app.use(errorHandler);

serverInit(app)