import React from "react";
import "../style/RoundedButton.css";

const RoundedButton = ({ text, onClick }) => (
  <button className="rounded-button" onClick={onClick}>
    {text}
  </button>
);

export default RoundedButton;
