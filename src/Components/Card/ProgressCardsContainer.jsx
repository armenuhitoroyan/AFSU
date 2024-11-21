import React from "react";
import ProgressCard from "./ProgressCard";
import "../../style/ProgressCard.css";

const ProgressCardsContainer = () => {
  const data = [
    { percentage: 50, title: "Graphic Design" },
    { percentage: 75, title: "Development" },
    { percentage: 38, title: "Marketing Ideas" },
    { percentage: 63, title: "Web Management" },
  ];

  return (
    <div className="progress-cards-container">
      {data.map((item, index) => (
        <ProgressCard
          key={index}
          percentage={item.percentage}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default ProgressCardsContainer;
