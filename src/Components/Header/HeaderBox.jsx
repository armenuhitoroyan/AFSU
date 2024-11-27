import React from "react";

import "../../style/style.css";
import RoundedButton from "../Form/RoundedButton";

import CountFollwers from "../Users/CountFollwers";
import Circle from "./Circle";
import Animation from "../Animation/Animation";
import user from "../../images/armt.png";

const HeaderBox = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #00003d, #010060)",
        borderBottomLeftRadius: "115%",
        borderBottomRightRadius: "170%",
      }} // #4219dc
      className="headerBoxContent"
    >
      <div>
        <div
          className="flex justify-between md:flex-row"
          style={{ height: "450px", color: "white" }}
        >
          <div className="header-box-container">
            <h2 className="text-3xl font-bold " style={{ fontSize: "30px" }}>
              HELLO I AM
            </h2>
            <h1 className="text-3xl font-bold " style={{ fontSize: "40px" }}>
              Armenuhi Toroyan
            </h1>
            <p style={{ fontSize: "20px" }}>
              {/* Graphic Designer, HTML Coder, PHP Programmer and Project Manager */}
              Web Developer
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
                marginInlineStart: "160%",
                zIndex: 3,
                width: "250px",
                marginTop: "-450px",
              }}
            >
              <Animation />
            </div>
            <div>
              <Circle left="120%" top="-130px" />
            </div>
            <div>
              <CountFollwers title="10K" text="Happy Satisfied Customer" />
            </div>
          </div>
          <div>
            <img
              className="w-16 md:w-32 lg:w-48"
              src={user}
              alt="User"
              style={{
                borderRadius: "50%",
                width: "600px",
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
