import {
  Layout,
  Input,
  Button,
  Badge,
  Avatar,
  Drawer,
  Menu,
  Dropdown,
} from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
  SettingOutlined,
  ProfileOutlined,
  OrderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "../../css/header.css";
import { useState } from "react";

const { Header } = Layout;
const { Search } = Input;

const menu = (
  <Menu>
    <Menu.Item
      key="1"
      icon={<ProfileOutlined />}
      onClick={() => (window.location.href = "/my-profile")}
    >
      My Profile
    </Menu.Item>
    <Menu.Item
      key="2"
      icon={<OrderedListOutlined />}
      onClick={() => (window.location.href = "/orders")}
    >
      My Orders
    </Menu.Item>
    <Menu.Item
      key="3"
      icon={<SettingOutlined />}
      onClick={() => (window.location.href = "/settings")}
    >
      Settings
    </Menu.Item>
    <Menu.Item
      key="4"
      icon={<LogoutOutlined />}
      onClick={() => (window.location.href = "/logout")}
    >
      Logout
    </Menu.Item>
  </Menu>
);

function AppHeader({ sCount, cCount }) {
  const [visible, setVisible] = useState(false);

  const openDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const handleHome = () => {
    window.location.href = "/home";
  };

  const handleShopClick = () => {
    window.location.href = "/shop";
  };

  return (
    <Header className="app-header">
      <div className="header-right">
        <Button
          size="large"
          type="text"
          icon={<MenuOutlined />}
          className="menu-button"
          onClick={openDrawer}
        />
        <div className="logo" onClick={handleHome}>
          FutureTech
        </div>
      </div>
      <Search
        size={80}
        className="search-bar"
        placeholder="Search products..."
        enterButton
      />
      <div className="header-left">
        <Dropdown overlay={menu} trigger={["click"]}>
          <Avatar
            size={75}
            icon={<UserOutlined />}
            className="profile-icon hoverable"
          />
        </Dropdown>

        <Badge count={sCount} offset={[-10, 0]}>
          <Avatar
            size={75}
            icon={<ShoppingCartOutlined />}
            className="cart-icon hoverable"
            onClick={handleShopClick}
          />
        </Badge>
      </div>

      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        visible={visible}
        className="app-drawer"
      >
        <p>Content goes here</p>
      </Drawer>
    </Header>
  );
}

export default AppHeader;
