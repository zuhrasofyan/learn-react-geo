import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './react-geo.css';

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
      </div>
    );
  }
}

export default App;
