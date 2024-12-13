import React from "react";
import DemoCarousel from "./Other/DemoCarousel";
import ParticlesContainer from "./Other/ParticlesContainer";
import image from "../images/bgimg.jpg";
import Footercomponent from "./Footer/FooterComponent";
import Map from "./Other/Map";


const Contact = () => {
  
  return (
    <>
      <ParticlesContainer title={`Contact Us`} img={image} />
      <div
        style={{
          width: "85%",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <Map />
      </div>
      <DemoCarousel />
      <Footercomponent />
    </>
  );
};

export default Contact;
