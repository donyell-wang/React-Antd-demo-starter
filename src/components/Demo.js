import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class Demo extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    }); 
  }
  render() {
    return (
      <Layout style={{height: '100%'}}>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
      </Layout>
    );
  }
}

export default Demo;
