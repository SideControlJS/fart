import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import YouTubeShorts from './components/YouTubeShorts';
import TwitchStream from './components/TwitchStream';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/youtube" element={<YouTubeShorts />} />
        <Route path="/twitch" element={<TwitchStream />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}


