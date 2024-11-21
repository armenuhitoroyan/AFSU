import React from "react";
import "../../style/SkillCard.css";

const GraphicsGrid = ({ path, title, text }) => {
  return (
    <div className="skills-card-grid w-full flex-col flex md:flex-column">
      <div className="svg-parent-div w-full flex justify-center md:flex-column">
        <svg
          style={{ color: "greenyellow" }}
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="70 -400 280 1200"
        >
          <g fill="#4219dc">
            <path d={path} />
          </g>
        </svg>
      </div>
      <h3 text-3xl font-bold underline>
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default GraphicsGrid;
