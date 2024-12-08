// PricingCard.js
import React from "react";
import "../../style/PricingCard.css";

const CardHeader = ({ supply, price }) => {
  return (
    <div className="card-header">
      <h3>{supply}</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{price}</h1>
        <span style={{ marginLeft: "20px", marginTop: "20px" }}>/ month</span>
      </div>
    </div>
  );
};

export default CardHeader;
