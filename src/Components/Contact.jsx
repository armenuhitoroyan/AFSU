import React from "react";
import DemoCarousel from "./Other/DemoCarousel";
import ParticlesContainer from "./Other/ParticlesContainer";
import image from "../images/bgimg.jpg";

const Contact = () => {
  return (
    <>
      <ParticlesContainer title={`Contact Us`} img={image} />
      <DemoCarousel />
    </>
  );
};

export default Contact;
