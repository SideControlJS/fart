require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());

// Routes
// YouTube API route
app.get('/api/youtube-shorts', async (req, res) => {
    // ... (YouTube API call logic here)
});

// Twitch API route
app.get('/api/twitch-clips', async (req, res) => {
    // ... (Twitch API call logic here)
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });