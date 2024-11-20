import React from "react";
import "../../style/Circle.css";

const Circle = ({ width, height, borderPx, color }) => {
  return (
    <div
      className="circle"
      style={{
        width: width,
        height: height,
        border: `${borderPx} solid ${color}`,
        position: "static",
        marginInline: "10px",
      }}
    ></div>
  );
};

export default Circle;
