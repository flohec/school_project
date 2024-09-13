import { Card as AntCard } from "antd";
import "../../css/CardComponent.css";

function Card({ data }) {
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
      {/* Directly display title */}
      <div className="card-title">{data.title}</div>
      <div className="price-section">
        <span className="price-old">{data.price}€</span>
        <span className="price-new">{data.reducedPrice}€</span>
      </div>
    </AntCard>
  );
}

export default Card;
