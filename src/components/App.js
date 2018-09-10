import React, { Component } from 'react';
import './App.css';

import { Layout } from 'antd';
import Navigation from '../components/Navigation';
import MapPage from '../components/Map';

import {
  SimpleButton
} from '@terrestris/react-geo';

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
