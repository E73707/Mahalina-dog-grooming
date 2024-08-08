import React, { useState } from "react";
import "../../styles/card.css";

const CardProps = {
  image: String,
};

const Card = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="carousel-card">
      {showOverlay && (
        <div className="overlay">
          <div className="d-overlay"></div>
        </div>
      )}
      <img
        className="carousel-card-img"
        src={image}
        alt={image}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Card;
