import React from "react";
import { Carousel } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/reset.css"; // Import Ant Design styles

const CarouselCard = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={carouselItemStyle}>Slide 1</h3>
      </div>
      <div>
        <h3 style={carouselItemStyle}>Slide 2</h3>
      </div>
      <div>
        <h3 style={carouselItemStyle}>Slide 3</h3>
      </div>
      <div>
        <h3 style={carouselItemStyle}>Slide 4</h3>
      </div>
    </Carousel>
  );
};

const carouselItemStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default CarouselCard;
