// PricingCard.js
import React from "react";
import "../../style/PricingCard.css";

const FeatureContainer = () => {
  return (
    <div className="features-container">
      <ul className="features">
        <li>✔ Website Design</li>
        <li>✔ Graphic Designing</li>
        <li>✔ Web Development</li>
        <li>✔ Business Consulting</li>
      </ul>
      <button className="select-btn">Select Now</button>
    </div>
  );
};

export default FeatureContainer;
