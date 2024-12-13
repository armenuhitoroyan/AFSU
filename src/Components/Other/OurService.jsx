import React from "react";
import "../../style/OurServices.css";

const OurService = ({ title, icon, description }) => {
  return (
    <section className="our-services" style={{ backgroundColor: "white" }}>
      <div className="services-container">
        <div
          className="service-card"
          style={{
            backgroundColor: "#f9f9f9",
            padding: "50px",
            width: "380px",
            height: "450px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "150px",
              backgroundColor: "white",
              margin: "0 auto",
              borderRadius: "15px",
              transform: "rotate(90deg)",
            }}
          ></div>
          <div
            style={{
              width: "120px",
              height: "150px",
              backgroundColor: "white",
              margin: "0 auto",
              borderRadius: "15px",
              position: "absolute",
              zIndex: 2,
              marginTop: "-150px",
              marginLeft: "5.3%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={icon}
              alt={`${icon} not found `}
              style={{ width: "70px" }}
            />
          </div>
          <h4>{title}</h4>
          <p style={{ color: "black" }}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default OurService;
