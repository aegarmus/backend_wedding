import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
    artists: { type: Array, required: true },
    name: { type: String, required: true },
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;
