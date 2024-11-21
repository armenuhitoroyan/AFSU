import React from "react";
import "../../style/ProgressCard.css";

const ProgressCard = ({ percentage, title }) => {
  return (
    <div className="progress-card">
      <h2 className="progress-percentage">{percentage}%</h2>
      <p className="progress-title">{title}</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressCard;
