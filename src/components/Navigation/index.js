import React, { Component } from 'react';

import { Layout } from 'antd';
import {HeaderNav} from './HeaderNav';

class Navigation extends Component {
  render() {
    return(
      <Layout>
        <HeaderNav />
      </Layout>
    );
  }
}

export default Navigation;