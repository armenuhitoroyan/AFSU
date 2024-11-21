import React from "react";

const TitleContainer = ({ title, description }) => {
  return (
    <div className="w-full flex-col justify-center md:flex-column">
      <div>
        <img
          style={{ width: "50px", position: "static", margin: "0 auto" }}
          src="../../images/dots-1.png"
          alt="dots-1"
        />
      </div>
      <h5 style={{ color: "#555", fontSize: "18px", fontWeight: "bold" }}>
        {title}
        {/* WHO I AM */}
      </h5>
      <h2 style={{ color: "#000", fontSize: "50px", fontWeight: "bold" }}>
        {description}
        {/* About My Resume */}
      </h2>
    </div>
  );
};

export default TitleContainer;
