import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { response } from 'express';

function YouTubeShorts() {
    const [shorts, setShorts] = useState([]);

    useEffect(() => {
        axios.get('/api/youtube-shorts')
            .then(response
                .setShorts(response.data.items));
            })
            .catch(error => {
                console.error('There was an error fetching the YouTube Shorts: ', error))
            });

}