import React, { Component } from 'react';
import 'ol/ol.css';

import 'antd/dist/antd.css';
import '../../react-geo.css';

import OlMap from 'ol/map';
import OlView from 'ol/view';
import OlLayerTile from 'ol/layer/tile';
import OlSourceOsm from 'ol/source/osm';
import OlProjection from 'ol/proj';

import { MapComponent } from '@terrestris/react-geo';
import { Layout } from 'antd';

import './Map.css';

const layer = new OlLayerTile({
  source: new OlSourceOsm()
});

// const center = [ 788453.4890155146, 6573085.729161344 ];
const center = [ 95.3160473, 5.5477057 ];

// create a new instance of ol.map in ES6 syntax
const map = new OlMap({
  view: new OlView({
    center: OlProjection.fromLonLat(center),
    zoom: 16,
  }),
  layers: [layer]
});


class Map extends Component {
  render() {
    return (
      <Layout>
        <MapComponent 
          map={map}
        />
      </Layout>
    );
  }
}

export { Map };
