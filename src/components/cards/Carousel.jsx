import "../../css/imageWithTitle.css"; // CSS file
import { useState } from "react";

const CarouselCard = () => {
  const [image, setImage] = useState(1);

  const onPrev = () => {
    setImage(image <= 1 ? 3 : image - 1);
  };

  const onNext = () => {
    setImage(image >= 3 ? 1 : image + 1);
  };

  return (
    <div className="carousel-container">
      <button className="nav-button left" onClick={onPrev}>
          <span className="material-symbols-outlined">
            chevron_left
          </span>
      </button>
      <div className="image-container-2">
        <img
          src={`images/premium${image}.jpg`}
          alt="example"
          className="image-2"
        />
      </div>
      <button className="nav-button right" onClick={onNext}>
        <span className="material-symbols-outlined">
          chevron_right
        </span>
      </button>

      {/* Dot indicators */}
      <div className="dot-indicators">
        <span className={`dot ${image === 1 ? "active" : ""}`}></span>
        <span className={`dot ${image === 2 ? "active" : ""}`}></span>
        <span className={`dot ${image === 3 ? "active" : ""}`}></span>
      </div>
    </div>
  );
};

export default CarouselCard;
