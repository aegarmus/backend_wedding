import { Router } from "express";
import { createPlaylistItem } from "../controllers/playlistController.js";

const router = Router();

router.post('/playlist', createPlaylistItem);

// ...otras rutas para actualizar, eliminar y obtener canciones de la playlist...

export default router;
