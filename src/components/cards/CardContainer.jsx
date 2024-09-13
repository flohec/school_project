import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/CardContainer.css";
import Card from "./Card.jsx";

function CardContainer({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div class="card-container">
      {data.map((card, index) => (
        <div key={index}>
          <Card data={card} />
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
