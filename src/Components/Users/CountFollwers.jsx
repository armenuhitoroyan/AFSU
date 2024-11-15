import React from "react";
import "../../style/CountFollwers.css";

const CountFollwers = ({ title, text }) => {
  return (
    <div className="happy-satisfied">
      <h2 text-3xl font-bold underline>
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default CountFollwers;
