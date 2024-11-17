import React from "react";
import "../../style/RoundedInput.css";

// const RoundedInput = ({ placeholder, value, onChange, type, name }) => (
//   <input
//     type={type}
//     className="rounded-input"
//     placeholder={placeholder}
//     value={value}
//     onChange={onChange}
//     name={name}
//   />
// );


const RoundedInput = ({ type, placeholder, name, value, onChange, error }) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-2 rounded-full border ${
      error ? "border-red-500" : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
  />
);

export default RoundedInput;
