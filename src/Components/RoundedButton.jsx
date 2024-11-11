import React from "react";
import "../style/RoundedButton.css";

const RoundedButton = ({ text, onClick, className }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);

export default RoundedButton;
