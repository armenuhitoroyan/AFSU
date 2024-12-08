// PricingCard.js
import React from "react";
import "../../style/PricingCard.css";
import CardHeader from "../Other/CardHeader";
import FeatureContainer from "../Other/FeatureContainer";
import IconContainer from "../Other/IconContainer";

const AssignmentsPackages = ({ supply, price }) => {
  return (
    <div className="pricing-card">
      <div>
        <CardHeader supply={supply} price={price} />
      </div>
      <div style={{ marginTop: "50px", marginLeft: "20px" }}>
        <IconContainer />
      </div>
      <div style={{ marginTop: "-125px", marginLeft: "220px", width: "250px" }}>
        <FeatureContainer />
      </div>
    </div>
  );
};

export default AssignmentsPackages;
