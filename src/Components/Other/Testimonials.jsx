import React from "react";
import "../../style/Testimonials.css";
import quote from "../../images/quote-1.png";

const Testimonials = ({ text, title, icon, descripttion }) => {
  return (
    <div className="testimonials-container">
      <p>{text}</p>
      <div className="title-container flex justify-between md:flex-row">
        <div className="icon">
          <img style={{ width: "70px" }} src={quote} alt="Quote" />
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
