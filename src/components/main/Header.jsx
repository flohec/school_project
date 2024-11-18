import {
  Layout,
  Input,
  Button,
  Badge,
  Avatar,
  Drawer,
  Menu,
  Dropdown,
  Modal,
  Form,
  message,
  Card as AntCard,
} from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
  SettingOutlined,
  ProfileOutlined,
  OrderedListOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import "../../css/header.css";
import {useEffect, useState} from "react";

const { Header } = Layout;
const { Search } = Input;

function AppHeader({ sCount, cCount, data = [], loginDefault = true }) {
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setLogin(loggedIn);
  }, [login]);

  const handleSearch = (value) => {
    const search = value.currentTarget.value;
    if (!value.currentTarget.value) {
      setSearchResults([]);
      return;
    }

    const results = [...data.cards, ...data.cards2, ...data.cards3].filter(
      (item) => item.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log(results);

    setSearchResults(results);
  };

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

  const handleLoginLogout = () => {
    if (login) {
      // Log out
      setLogin(false);
      localStorage.removeItem("isLoggedIn");
      message.success("You have been logged out!");
    } else {
      setIsModalVisible(true);
    }
  };


  const handleLogin = () => {
    form
        .validateFields()
        .then((values) => {
          setLogin(true);
          localStorage.setItem("isLoggedIn", "true");
          setIsModalVisible(false);
          message.success("Logged in successfully!");
        })
        .catch((info) => {
          console.log("Validation Failed:", info);
        });
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleResultClick = (title) => {
    console.log(title);
    window.location.href = "/item/" + title;
  };

  const menuItems = login ? (
    <>
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
        onClick={handleLoginLogout}
      >
        Logout
      </Menu.Item>
    </>
  ) : (
    <Menu.Item key="4" icon={<LoginOutlined />} onClick={handleLoginLogout}>
      Login
    </Menu.Item>
  );
  
  const menu = <Menu>{menuItems}</Menu>;
  

  return (
    <Header className="app-header">
      <div className="app-header-top">
        <div className="header-left">
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

        <div className="search-container">
          <Search
            size="large"
            className="search-bar"
            placeholder="Search products..."
            enterButton="Search"
            onChange={handleSearch}
          />

          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((item, index) => (
                <div
                  key={index}
                  className="search-result-item"
                  onClick={() => handleResultClick(item.title)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="result-image"
                  />
                  <div className="result-info">
                    <div className="result-title">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="header-right">
          {login ? (
            <Dropdown overlay={menu} trigger={["click"]}>
              <Avatar
                size={50}
                icon={<UserOutlined />}
                className="profile-icon hoverable"
              />
            </Dropdown>
          ) : (
            <Avatar
              size={50}
              icon={<LoginOutlined />}
              className="login-button hoverable"
              onClick={handleLoginLogout}
            >
              Login
            </Avatar>
          )}

          <Badge count={sCount} offset={[-10, 10]}>
            <Avatar
              size={50}
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
        open={visible}
        className="app-drawer"
      >
        <p>Content goes here</p>
      </Drawer>

        <Modal
          title="Login"
          open={isModalVisible}
          onOk={handleLogin}
          onCancel={handleCancel}
          okText="Login"
        >
          <Form
            form={form}
            layout="vertical"
            name="login_form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <div className="app-header-bottom">
      </div>
    </Header>
  );
}

export default AppHeader;
