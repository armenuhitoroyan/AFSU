import React, { useEffect } from "react";
// import bgImage from "../../images/bgimg.jpg";

const ParticlesContainer = ({ title, img }) => {
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
          backgroundImage: `url(${img})`,
          fontSize: "80px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2
          style={{
            width: "90%",
            color: "white",
            position: "absolute",
            zIndex: "1",
            marginTop: "90px",
            fontWeight: "bold",
          }}
        >
          {title}
        </h2>
      </div>
    </>
  );
};

export default ParticlesContainer;
