import Playlist from '../models/playlist.js';

export const createPlaylistItemService = async (playlistData) => {
    playlistData.forEach(async (song) => {
        const { name, artists } = song;
        if (!name || !artists) {
            throw new Error('Name and artists are required');
        }
        const songItem = new Playlist({ name, artists });
        return await songItem.save();
    })
};

// ...otros métodos para actualizar, eliminar y obtener canciones de la playlist...
