import React from "react";
import "../../style/ImageCard.css";

const ImageCard = ({ image, title, subtitle }) => {
  return (
    <div className="image-card">
      <img src={image} alt={title} className="image" />
      <div className="overlay">
        <h3 className="title">{title}</h3>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default ImageCard;
