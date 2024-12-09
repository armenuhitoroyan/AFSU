import React from "react";
import "../../style/PouchMockup.css"; // External CSS file for styles

const PouchMockup = ({ src, width, height }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: width,
        height: height,
        borderRadius: "15px",
        overflow: "hidden",
        position: "relative",
      }}
      className="pouch-container"
    >
      <img
        src={src}
        alt="Paper Pouch Mockup"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        className="pouch-image"
      />
    </div>
  );
};

export default PouchMockup;
