import React from "react";
import ParticlesContainer from "../Other/ParticlesContainer";
import Footercomponent from "../Footer/FooterComponent";
import AboutPage from "../AboutComponent";
import ResumeComponent from "../Resume/ResumeComponent";
import DemoCarousel from "../Other/DemoCarousel";
import image from "../../images/bgimg.jpg";

const AboutMe = () => {
  return (
    <>
      <ParticlesContainer title="About Us" img={image} />
      <div style={{ width: "100%", height: "100%" }}>
        <AboutPage />
        <div style={{ marginTop: "10px" }}></div>
        <h4 className="text-3xl font-bold underline">
          Professional Experience
        </h4>
        <h2 className="text-3xl font-bold underline">My Resume</h2>
        <ResumeComponent firstTitle="Education" secondTitle="Experience" />
        <div style={{ marginTop: "10px" }}></div>
        <DemoCarousel />
      </div>
      <Footercomponent />
    </>
  );
};

export default AboutMe;
