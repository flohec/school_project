import { Card as AntCard } from "antd";
import "../../css/CardComponent.css";
import { Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Card({ data, sCount, cCount }) {
  const handleButtonClick = () => {
    // Update the count
    cCount((prevCount) => prevCount + 1);

    // Show success message with product title
    message.success(`${data.title} added to cart!`);
  };

  return (
    <AntCard
      hoverable
      className="product-card"
      cover={
        <div className="image-container">
          <img alt="product" src={data.image} className="product-image" />
        </div>
      }
    >
      <div className="card-title">{data.title}</div>
      <div className="price-section">
        <span className="price-old">{data.price}€</span>
        <span className="price-new">{data.reducedPrice}€</span>
        <Button
          type="primary"
          className="shopping-button"
          onClick={handleButtonClick}
        >
          <ShoppingCartOutlined />
        </Button>
      </div>
      <div className="add-to-cart-button"></div>
    </AntCard>
  );
}

export default Card;
