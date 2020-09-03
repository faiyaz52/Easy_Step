import React from 'react';
import { Menu } from 'antd';
import {
  AlignLeftOutlined ,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined ,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';



class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 190,marginTop:"60px" }} className="fixed-top">
       
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
       
          className="shadow-lg"
          inlineCollapsed={this.state.collapsed}
          style={{ height: 656 }}
        >
           
            <AlignLeftOutlined  onClick={this.toggleCollapsed} style={{ fontSize: '23px', marginBottom:24,marginTop:12 }} className="ml-4"> {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}</AlignLeftOutlined  >
           
          <Menu.Item key="1" icon={<UserOutlined />}>
            Your Profile
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Education
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
           Jobs
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
           Location
          </Menu.Item>
          <Menu.Item key="5" icon={<ContainerOutlined />}>
           Achipment
          </Menu.Item>
          <Menu.Item key="6" icon={<ContainerOutlined />}>
           Setting
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default Sidebar