// PricingCard.js
import React from "react";
import "../../style/PricingCard.css";
import CardHeader from "../Other/CardHeader";
import FeatureContainer from "../Other/FeatureContainer";
import IconContainer from "../Other/IconContainer";

const PricingCard = ({ supply, price }) => {
  return (
    <div className="pricing-card">
      <CardHeader supply={supply} price={price} />
      <div style={{ marginTop: "50px", marginLeft: "20px" }}>
        <IconContainer />
      </div>
      <div style={{ marginTop: "-20px" }}>
        <FeatureContainer />
      </div>
    </div>
  );
};

export default PricingCard;
