import React from "react";
import { Layout } from "antd";

import "./App.css";
import "antd/dist/antd.css";

const { Sider, Content } = Layout;

const App = () => {
  return (
    <Layout className="App">
      <Sider className='sider' width='25%'>Sider</Sider>
      <Layout>
        <Content className="content">Content</Content>
      </Layout>
    </Layout>
  );
};

export default App;
