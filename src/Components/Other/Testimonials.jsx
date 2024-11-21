import React from "react";
import "../../style/Testimonials.css";

const Testimonials = ({ text, title, icon, descripttion }) => {
  return (
    <div className="testimonials-container">
      <p>{text}</p>
      <div className="title-container flex justify-between md:flex-row">
        <div className="icon">
          <img
            style={{ width: "70px" }}
            src="../../../../public/images/quote.png"
            alt="Quote"
          />
        </div>
        <div>
          <h4>{title}</h4>
          <span>Product Management at Spotify</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
