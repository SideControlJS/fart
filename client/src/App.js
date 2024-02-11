import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import YouTubeShorts from './components/YouTubeShorts';
import TwitchStream from './components/TwitchStream';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/youtube" component={YouTubeShorts} />
        <Route path="/twitch" component={TwitchStream} />
        {/* Add other routes as needed */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

