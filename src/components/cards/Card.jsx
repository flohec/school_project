import { Card as AntCard } from "antd";
import "../../css/CardComponent.css";
import { Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Card({ data, sCount, cCount }) {
  const handleButtonClick = () => {
    cCount((prevCount) => prevCount + 1);

    message.success(`${data.title} added to cart!`);
  };

  const handleCardClick = () => {
    window.location.href = "/item/" + data.title;
  };

  return (
    <AntCard
      hoverable
      onClick={handleCardClick}
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
          onClick={(e) => {
            e.stopPropagation();
            handleButtonClick();
          }}
        >
          <ShoppingCartOutlined />
        </Button>
      </div>
      <div className="add-to-cart-button"></div>
    </AntCard>
  );
}

export default Card;
