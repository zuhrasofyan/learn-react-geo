import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'ol/ol.css'

import 'antd/dist/antd.css';
import './react-geo.css';

import './index.css';

import OlMap from 'ol/map';
import OlView from 'ol/view';
import OlLayerTile from 'ol/layer/tile';
import OlSourceOsm from 'ol/source/osm';

import {
  SimpleButton
} from '@terrestris/react-geo';

import {
  MapComponent
} from '@terrestris/react-geo';

const layer = new OlLayerTile({
  source: new OlSourceOsm()
});

const center = [ 788453.4890155146, 6573085.729161344 ];

// create a new instance of ol.map in ES6 syntax
const map = new OlMap({
  view: new OlView({
    center: center,
    zoom: 16,
  }),
  layers: [layer]
});


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
        <MapComponent 
          map={map}
        />
      </div>
    );
  }
}

export default App;
