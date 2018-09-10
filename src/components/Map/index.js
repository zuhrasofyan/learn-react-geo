import React, { Component } from 'react';
import { Layout } from 'antd';

import { Map } from './Map';
import {SiderMap } from './SiderMap'; 

import './Map.css';

const { Content } = Layout;

class MapPage extends Component {
  render() {
    return(
      <Layout>
        <SiderMap />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Map />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MapPage;