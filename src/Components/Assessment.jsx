import React from "react";
import "../style/Assessment.css";
import Animation from "./Animation/Animation";

const Assessment = () => (
  <div className="container">
    {/* <div className="contentWrapper"> */}
    <div className="leftSection ">
      <h2 className="title">1M+ Satisfied Customers</h2>
      <p className="subtitle">
        Vestibulum vitae lorim tellus nec dui dictum lorim ac, place uilm rat
        Lorse ipsom
      </p>
      <div
        style={{
          position: "relative", // Add this line
          marginInlineStart: "55%",
          zIndex: 3,
          width: "300px",
          marginTop: "-300px",
        }}
      >
        <Animation />
      </div>
      <div className="navButtons">
        <button className="button"></button>
        <button className="button"></button>
      </div>
    </div>

    {/* <div className="rightSection">
        <p className="testimonialText">
          We help our clients from the definition of their strategy to the
          realization of their digital ecosystem. At the heart of our approach
          is the constant search for the juncture between aesthetic.
        </p>
        <div className="profile">
          <div className="avatar">Q</div>
          <div>
            <span className="name">Edison Cavani</span>
            <span className="position">Product Management at Spotify</span>
          </div>
        </div>
      </div> */}
    {/* </div> */}
  </div>
);

export default Assessment;
