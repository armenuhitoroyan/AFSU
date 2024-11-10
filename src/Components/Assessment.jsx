import React from "react";
import "../style/Assessment.css";
import AnimatedShapes from "./Animations/AnimatedShapes";

const Assessment = () => (
  <div class="container">
    <div class="contentWrapper">
      <div class="leftSection">
        <title class="title">1M+ Satisfied Customers</title>
        <p class="subtitle">
          Vestibulum vitae lorim tellus nec dui dictum lorim ac, place uilm rat
          Lorse ipsom
        </p>
        <div style={{ marginInlineStart: "50%", height: "50px" }}>
          <AnimatedShapes />
        </div>
        <div class="navButtons">
          <button class="button"></button>
          <button class="button"></button>
        </div>
      </div>

      <div class="rightSection">
        <p class="testimonialText">
          We help our clients from the definition of their strategy to the
          realization of their digital ecosystem. At the heart of our approach
          is the constant search for the juncture between aesthetic.
        </p>
        <div class="profile">
          <div class="avatar">Q</div>
          <div>
            <span class="name">Edison Cavani</span>
            <span class="position">Product Management at Spotify</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Assessment;
