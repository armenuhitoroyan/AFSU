import React from "react";

const GraphicsGrid = ({ svg, title, text }) => {
  return (
    <div
      className="skills-grid"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <svg className={svg} style={{backgroundColor: "red"}}/>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default GraphicsGrid;
