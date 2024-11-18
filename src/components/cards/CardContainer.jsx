import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/CardContainer.css";
import Card from "./Card.jsx";

function CardContainer({ title, data, sCount, cCount }) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedCards = data.slice(startIndex, startIndex + itemsPerPage);

  // Handlers for page navigation
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-title">{title}</h2>
      <div className="pagination-container">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          <span className="material-symbols-outlined">
            chevron_left
          </span>
        </button>
        <div className="card-list">
          {selectedCards.map((card, index) => (
            <div key={index} className="card-item">
              <Card data={card} sCount={sCount} cCount={cCount} />
            </div>
          ))}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          <span className="material-symbols-outlined">
            chevron_right
          </span>
        </button>
      </div>
      <div className="dot-container">
        <span className={`dot ${currentPage === 1 ? "active" : ""}`}></span>
        <span className={`dot ${currentPage === 2 ? "active" : ""}`}></span>
      </div>{" "}
    </div>
  );
}

export default CardContainer;
