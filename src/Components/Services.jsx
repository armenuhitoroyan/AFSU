import React, { useEffect } from "react";
import bgImage from "../images/bgimg.jpg";
import Service from "./Other/Service";
import Footercomponent from "./Footer/FooterComponent";

const Services = () => {
  useEffect(() => {
    window.particlesJS("particles-container", {
      particles: {
        number: { value: 200 },
        size: { value: 3 },
        move: { speed: 5 },
        line_linked: { enable: true },
      },
    });
  }, []);

  return (
    <>
      <div
        id="particles-container"
        style={{
          width: "100%",
          height: "326px",
          backgroundImage: `url(${bgImage})`,
          fontSize: "50px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div style={{ width: "100%", height: "100%" }}>
        <Service />
      </div>
      <Footercomponent />
    </>
  );
};

export default Services;
