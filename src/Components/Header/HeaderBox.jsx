import React from "react";

import "../../style/style.css";
import RoundedButton from "../RoundedButton";

import CountFollwers from "../Users/CountFollwers";
import Circle from "./Circle";
import Animation from "../Animation/Animation";

const HeaderBox = () => {
  return (
    <div
      style={{ backgroundColor: "#00005f" }} // #4219dc
      className="headerBoxContent"
    >
      <div>
        <div
          className="flex justify-between md:flex-row"
          style={{ height: "450px" }}
        >
          <div className="header-box-container">
            <h2 className="text-3xl font-bold ">HELLO I AM</h2>
            <h1 className="text-3xl font-bold ">Tohidur Hasan</h1>
            <p>
              Graphic Designer, HTML Coder, PHP Programmer and Project Manager
            </p>
            <div className="flex md:flex-row freelance-available">
              <RoundedButton
                className="rounded-button"
                text="Start consulting"
                onClick={() => alert("Start consulting")}
              />
              <ul className="custom-list">
                <li>Available for Freelance</li>
              </ul>
            </div>
            <div
              style={{
                position: "relative", // Add this line
                marginInlineStart: "150%",
                zIndex: 3,
                width: "300px",
                marginTop: "-450px",
              }}
            >
              <Animation />
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
              className="w-16 md:w-32 lg:w-48"
              src="../../images/630.png"
              alt="User"
              style={{
                borderRadius: "50%",
                width: "80%",
                marginTop: "-200px",
                marginRight: "170px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBox;
