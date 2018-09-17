import React, { Component } from 'react';
import 'ol/ol.css';

import 'antd/dist/antd.css';
import '../../react-geo.css';

import OlMap from 'ol/map';
import OlView from 'ol/view';
import OlLayerTile from 'ol/layer/tile';
import OlSourceOsm from 'ol/source/osm';
import OlLayerGroup from 'ol/layer/group';
import OlSourceTileJson from 'ol/source/tilejson';
import OlSourceTileWMS from 'ol/source/tilewms';
import OlProjection from 'ol/proj';


import { MapComponent } from '@terrestris/react-geo';
import { Layout } from 'antd';

import './Map.css';

const layerBase = new OlLayerTile({
  name: 'OSM',
  source: new OlSourceOsm()
});

const layerGroup = new OlLayerGroup({
  name: 'Layergroup',
  layers: [
    new OlLayerTile({
      name: 'Food insecurity layer',
      minResolution: 200,
      maxResolution: 2000,
      source: new OlSourceTileJson({
        url: 'https://api.tiles.mapbox.com/v3/mapbox.20110804-hoa-foodinsecurity-3month.json?secure',
        crossOrigin: 'anonymous'
      })
    }),
    new OlLayerTile({
      name: 'World borders layer',
      minResolution: 2000,
      maxResolution: 20000,
      source: new OlSourceTileJson({
        url: 'https://api.tiles.mapbox.com/v3/mapbox.world-borders-light.json?secure',
        crossOrigin: 'anonymous'
      })
    })
  ]
});

const layerKecamatan = new OlLayerTile({
  name: 'LayerKecamatan',
  source: new OlSourceTileWMS({
    url: 'https://bappeda.bandaacehkota.go.id/geoserver/uptb_gis_bna/wms',
    params: {'LAYERS': 'uptb_gis_bna:Bna_kecamatan', 'TILED': true},
    serverType: 'geoserver',
    transition: 0
  }),
  opacity: 0.5,
  visible: true
});


// const center = [ 788453.4890155146, 6573085.729161344 ];
const center = [ 95.3160473, 5.5477057 ];

// create a new instance of ol.map in ES6 syntax
const map = new OlMap({
  test: 0,
  view: new OlView({
    center: OlProjection.fromLonLat(center),
    zoom: 16,
  }),
  layers: [
    layerBase,
    layerGroup,
    layerKecamatan
  ]
});

class Map extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      layerKecamatan: layerKecamatan,
      map: map
    }
  }

  handleChange(event) {
    console.log(this.state.layerKecamatan);
    let layerKecamatan = Object.assign({}, this.state.layerKecamatan);
    layerKecamatan.values_.visible = !layerKecamatan.values_.visible;
    this.setState({layerKecamatan});
    console.log(this.state.layerKecamatan); 
  }

  render() {
    return (
      <Layout>
        <MapComponent 
          map={this.state.map}
        />
        <button
          onClick={this.handleChange}
          type="button"
        >
          Click Me
        </button>
      </Layout>
    );
  }
}

export { Map };
