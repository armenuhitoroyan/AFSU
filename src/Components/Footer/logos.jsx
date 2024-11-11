import React from "react";
import "../../style/Logos.css";

const Logos = ({ imageName }) => {
  return (
    <div
      className="logo"
      style={{
        backgroundImage: `url(${imageName})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default Logos;
