import React from "react";
import "../style/RoundedInput.css";

const RoundedInput = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    className="rounded-input"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default RoundedInput;
