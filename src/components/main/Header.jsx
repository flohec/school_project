import { Layout, Input, Button, Badge } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import "../../css/header.css";

const { Header } = Layout;
const { Search } = Input;

const AppHeader = () => {
  return (
    <Header className="app-header">
      <div className="logo">MyShop</div>
      <Search
        className="search-bar"
        placeholder="Search products..."
        enterButton
      />
      <div className="header-right">
        <Button type="primary" icon={<UserOutlined />}>
          Login
        </Button>
        <Badge count={3} offset={[10, 0]}>
          <ShoppingCartOutlined className="cart-icon" />
        </Badge>
      </div>
    </Header>
  );
};

export default AppHeader;
