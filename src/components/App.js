import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import {Map} from '../components/Map/Map.js';

import {
  SimpleButton
} from '@terrestris/react-geo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
