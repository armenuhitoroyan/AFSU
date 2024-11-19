import React from "react";

const CirclePart = ({ borderColor }) => {
  return (
    <div className="circle-part" style={{ borderTopColor: borderColor }}></div>
  );
};

export default CirclePart;
