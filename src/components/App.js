import React, { Component } from 'react';
import './App.css';

import Navigation from '../components/Navigation';
import MapPage from '../components/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <MapPage />
      </div>
    );
  }
}

export default App;
