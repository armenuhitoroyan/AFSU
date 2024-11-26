import React from "react";
import RoundedButton from "../Form/RoundedButton";

import "../../style/style.css";

const AboutUser = ({ color }) => {
  return (
    <div
      style={{
        width: "36%",
        marginTop: "200px",
        color: { color },
        marginLeft: "15%",
      }}
      className="header-box-container"
    >
      <h2
        className="text-3xl font-bold "
        style={{ WebkitTextStrokeColor: { color } }}
      >
        HELLO I AM
      </h2>
      <h1 className="text-3xl font-bold ">Tohidur Hasan</h1>
      <p>Graphic Designer, HTML Coder, PHP Programmer and Project Manager</p>
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
    </div>
  );
};

export default AboutUser;
