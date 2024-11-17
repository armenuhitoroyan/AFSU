import React from "react";

const GraphicsGrid = ({ svg, title, text }) => {
  return (
    <div className="skills-grid  w-full flex-col flex md:flex-column">
      <svg className={svg} />
      <h3 text-3xl font-bold underline>
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default GraphicsGrid;
