import React from "react";
import "../../style/RoundedInput.css";

const RoundedTextArea = ({ placeholder, value, onChange }) => (
  <textarea placeholder={placeholder} value={value} onChange={onChange} />
);

export default RoundedTextArea;
