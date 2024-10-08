import { Card as AntCard } from "antd";
import "../../css/CardComponent.css";
import { Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Card({ data, sCount, cCount }) {
  var discount;
  var centValue;
  centValue = Math.round((data.reducedPrice - Math.floor(data.reducedPrice)) * 100) 

  const handleButtonClick = () => {
    cCount((prevCount) => prevCount + 1);

    message.success(`${data.title} added to cart!`);
  };

  const handleCardClick = () => {
    window.location.href = "/item/" + data.title;
  };

  if (data.reducedPrice) {
    let tempPercentage = 100 - ((data.reducedPrice / data.price) * 100);
    discount  = Math.round(tempPercentage * 10) / 10;
  }

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
      <div className="card-item-title">{data.title}</div>
      <div className="price-section">
        <div>
          {discount > 0 && <span className="discount-percent">-{discount}%</span>}
          <div className="price">
            <span className="price-new">{Math.floor(data.reducedPrice)}</span>
            <span className="price-cent">{Math.floor(centValue)}€</span>
          </div>
        </div>
        <span className="price-old">{discount > 0 &&<span>{data.price}€</span>}</span>
        <Button
          type="primary"
          className="shopping-button"
          onClick={(e) => {
            e.stopPropagation();
            handleButtonClick();
          }}
        >
          Add to Card
        </Button>
      </div>
      <div className="add-to-cart-button"></div>
    </AntCard>
  );
}

export default Card;
