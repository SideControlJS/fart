// src/components/TwitchStream.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TwitchStream() {
  const [stream, setStream] = useState(null);

  useEffect(() => {
    // Example: Fetching stream information from your backend
    axios.get('/api/twitch-streams')
      .then(response => {
        // Assuming the backend returns the stream data
        setStream(response.data);
      })
      .catch(error => console.error('Error fetching Twitch stream:', error));
  }, []);

  return (
    <div className="twitch-stream">
      {stream ? (
        <iframe
          src={`https://player.twitch.tv/?channel=${stream.user_name}&parent=yourwebsite.com`}
          height="720"
          width="1280"
          frameborder="0"
          scrolling="no"
          allowfullscreen={true}>
        </iframe>
      ) : (
        <p>Loading stream...</p>
      )}
    </div>
  );
}

export default TwitchStream;
