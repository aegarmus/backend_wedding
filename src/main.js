import express from 'express';
import cors from 'cors';

import guestRoutes from './routes/guestRoutes.js';
import playlistRoutes from './routes/playlistRoutes.js';

import { errorHandler } from './middlewares/errorHandlers.js';
import { dbConnect } from './services/dbConnection.js';

const app = express();

// Configuración de CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Agregar configuraciones y middlewares para rutas
// Rutas
app.use('/api', guestRoutes);
app.use('/api', playlistRoutes);

app.use(errorHandler);

(async () =>{ 
    await dbConnect();

})()


export default app