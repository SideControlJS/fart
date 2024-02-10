import React, { useState, useEffect } from 'react';
import axios from 'axios';

function YouTubeShorts() {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    axios.get('/api/youtube-shorts')
      .then(response => {
        // Assuming your backend sends the data in response.data.items
        setShorts(response.data.items);
      })
      .catch(error => {
        console.error('There was an error fetching the YouTube shorts:', error);
      });
  }, []);

  return (
    <div>
      {shorts.map(short => (
        // Render each short as you see fit
        <div key={short.id}>{short.title}</div>
      ))}
    </div>
  );
}

export default YouTubeShorts;
