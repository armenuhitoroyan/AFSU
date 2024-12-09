import React from "react";

const PouchMockup = ({ src, width, height }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { width },
        height: { height },
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: "15px",
          position: "relative",
          transition: "transform 0.5s ease, box-shadow 0.5s ease",
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
            borderRadius: "15px",
            transition: "transform 0.5s ease",
          }}
          className="pouch-image"
        />
      </div>

      <style>
        {`
          .pouch-container:hover {
            transform: scale(1.1) rotate(45deg);
            box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </div>
  );
};

export default PouchMockup;
