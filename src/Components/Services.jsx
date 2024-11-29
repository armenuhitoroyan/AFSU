import React from "react";

import Service from "./Other/Service";
import ParticlesContainer from "./Other/ParticlesContainer";

import Footercomponent from "./Footer/FooterComponent";

const Services = () => {
  return (
    <>
      <ParticlesContainer title="Our Services" />
      <div style={{ width: "100%", height: "100%" }}>
        <Service />
      </div>
      <Footercomponent />
    </>
  );
};

export default Services;
