import React from "react";
import "../../style/Resume.css";

const Resume = ({ year, info, cardTitle, description }) => {
  return (
    <div className="timeline">
      <div className="timeline-item">
        <span className="timeline-year">{year}</span>
        <h3>{info}</h3>
        <div className="timeline-content">
          <h4>{cardTitle}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
