import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/CardContainer.css";
import Card from "./Card.jsx";

function CardContainer({ title, data, sCount, cCount }) {
  return (
    <div className="card-container">
      <h2 className="card-title">{title}</h2>
      <div className="card-list">
        {data.map((card, index) => (
          <div key={index} className="card-item">
            <Card data={card} sCount={sCount} cCount={cCount} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
