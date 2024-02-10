import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import YouTubeShorts from './components/YouTubeShorts';
import TwitchStream from './components/TwitchStream';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      {/* Other components or routing logic */}
      <YouTubeShorts />
      <TwitchStream />
      <Footer />
    </div>
  );
}

export default App;
