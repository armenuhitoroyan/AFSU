import React from "react";
import "../../style/RoundedInput.css";

const RoundedTextArea = ({ placeholder, name, value, onChange }) => (
  <textarea
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    rows={4}
  />
);

export default RoundedTextArea;
