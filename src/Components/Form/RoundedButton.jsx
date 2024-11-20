import React from "react";
import "../../style/RoundedButton.css";

const RoundedButton = ({ text, onClick, className, color }) => (
  <button
    style={{ color: color, borderColor: color }}
    className={className}
    onClick={onClick}
  >
    {text}
  </button>
);

export default RoundedButton;
