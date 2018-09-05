import React, { Component } from 'react';
import './App.css';

import Navigation from '../components/Navigation';
import {Map} from '../components/Map/Map.js';

import {
  SimpleButton
} from '@terrestris/react-geo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <p className="App-intro">
          <SimpleButton
            onClick={() => {alert('Hello World!');}}
          >
            Hello world!
          </SimpleButton>
        </p>
        <Map />
      </div>
    );
  }
}

export default App;
