import React from "react";

import "../../style/style.css";
import RoundedButton from "../RoundedButton";
import AnimatedShapes from "../Animations/AnimatedShapes";
import CountFollwers from "../Users/CountFollwers";
import Circle from "./Circle";

const HeaderBox = () => {
  return (
    <div
      style={{ padding: "10px", backgroundColor: "#4219dc" }}
      className="headerBoxContent"
    >
      <div>
        <div
          style={{ display: "flex", justifyContent: "center", height: "450px" }}
        >
          <div style={{ color: "white", padding: "10px" }}>
            <h2>HELLO I AM</h2>
            <h1>Tohidur Hasan</h1>
            <p>
              Graphic Designer, HTML Coder, PHP Programmer and Project Manager
            </p>
            <div style={{ display: "flex", padding: "10px" }}>
              <RoundedButton
                text="Start consulting"
                onClick={() => alert("Start consulting")}
              />
              <ul>
                <li style={{ color: "white" }}>Available for Freelance</li>
              </ul>
            </div>
            <div style={{ marginTop: "-50%", marginInlineStart: "160%" }}>
              <AnimatedShapes />
            </div>
            <div>
              <Circle />
            </div>
            <div>
              <CountFollwers title="10K" text="Happy Satisfied Customer" />
            </div>
          </div>
          <div>
            <img
              src="../../images/630.png"
              alt="User"
              style={{ borderRadius: "50%", width: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBox;
