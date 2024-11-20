import React from "react";
import "../../style/style.css";

const RoundedSelect = ({
  name,
  value,
  onChange,
  options = [],
  className,
  backgroundColor,
}) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className={`${className} w-full px-6 py-3`}
    style={{ backgroundImage: backgroundColor }}
  >
    {options.map((option) => (
      <option
        key={option.value}
        value={option.value}
        className="r-option border-gray-300"
      >
        {option.label}
      </option>
    ))}
  </select>
);
export default RoundedSelect;
