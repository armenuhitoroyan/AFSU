import React from "react";
import "../../style/OurServices.css";

const services = [
  {
    title: "Graphics Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "layers", // Replace with actual icons or SVGs.
    bgColor: "#4CAF50", // Green
  },
  {
    title: "Graphics Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "pen-tool", // Replace with actual icons or SVGs.
    bgColor: "#FF9800", // Orange
  },
  {
    title: "Stunning Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "smartphone", // Replace with actual icons or SVGs.
    bgColor: "#E91E63", // Pink
  },
  {
    title: "Project Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "cloud", // Replace with actual icons or SVGs.
    bgColor: "#2196F3", // Blue
  },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{
              backgroundColor: "white",
              padding: "50px",
              width: "300px",
              height: "450px",
            }}
          >
            {/* <div className="icon">{service.icon}</div> */}
            <div
              style={{
                width: "120px",
                height: "150px",
                backgroundColor: service.bgColor,
                margin: "0 auto",
                borderRadius: "15px",
                transform: "rotate(90deg)",
              }}
            ></div>
            <div
              style={{
                width: "120px",
                height: "150px",
                backgroundColor: service.bgColor,
                margin: "0 auto",
                borderRadius: "15px",
                position: "absolute",
                zIndex: 2,
                marginTop: "-150px",
                marginLeft: "40px",
              }}
            ></div>
            <h4>{service.title}</h4>
            <p style={{ color: "black" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
