import { createPlaylistItemService } from '../services/playlistService.js';

export const createPlaylistItem = async (req, res) => {
    try {
        const playlistItem = await createPlaylistItemService(req.body);
        res.status(201).json(playlistItem);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

// ...otros métodos para actualizar, eliminar y obtener canciones de la playlist...
