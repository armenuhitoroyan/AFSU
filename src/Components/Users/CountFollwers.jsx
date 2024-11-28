import React from "react";
import "../../style/CountFollwers.css";

const CountFollwers = ({ title, text }) => {
  return (
    <div className="happy-satisfied">
      <h2 style={{ fontSize: "60px" }} className="font-bold underline">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default CountFollwers;
