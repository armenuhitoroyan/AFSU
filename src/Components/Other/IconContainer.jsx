// PricingCard.js
import React from "react";
import "../../style/PricingCard.css";

const IconContainer = () => {
  return (
    <div className="icon-container">
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="rocket-icon"
          style={{ width: "30px" }}
        >
          <path
            strokeLinecap="0.025"
            strokeLinejoin="0.025"
            d="M15.59 14.37a2.53 2.53 0 0 1-1.06 1.06m-5.06 2.81-1.4 4.34a.75.75 0 0 0 .92.92l4.34-1.4a10.06 10.06 0 0 0 5.91-5.91l1.4-4.34a.75.75 0 0 0-.92-.92l-4.34 1.4a10.06 10.06 0 0 0-5.91 5.91zm-5.22 3.14a2.5 2.5 0 1 1 3.54 3.54"
          />
        </svg>
      </div>
    </div>
  );
};

export default IconContainer;
