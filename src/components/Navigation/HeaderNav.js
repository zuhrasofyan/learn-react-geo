import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './HeaderNav.css';

const { Header } = Layout;

class HeaderNav extends Component {
  render() {
    return(

          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Bagian 1</Menu.Item>
              <Menu.Item key="2">Bagian 2</Menu.Item>
              <Menu.Item key="3">Bagian 3</Menu.Item>
            </Menu>
          </Header>

    );
  }
}

export { HeaderNav };