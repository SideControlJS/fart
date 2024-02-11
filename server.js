import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';



const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(process.cwd(), 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Middleware
app.use(cors());

// Routes
// YouTube API route
app.get('/api/youtube-shorts', async (req, res) => {
    const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=YOUR_PLAYLIST_ID&key=${process.env.YOUTUBE_API_KEY}`;

});

// Twitch API route
app.get('/api/twitch-clips', async (req, res) => {
    const twitchApiUrl = `https://api.twitch.tv/helix/streams?user_login=YOUR_TWITCH_USERNAME`;

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });