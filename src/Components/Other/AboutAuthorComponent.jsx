import React from "react";
import "../../style/AboutAuthorComponent.css";

const AboutAuthorComponent = ({ name, img, role, aboutAuthor }) => {
  return (
    <div className="about-author">
      <img
        style={{ borderRadius: "20px" }}
        src={img}
        alt={`${img} not found!`}
      />
      <div style={{ marginLeft: "15px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>{name}</h2>
          <span>{role}</span>
        </div>
        <div>
          <h6>{aboutAuthor}</h6>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthorComponent;
