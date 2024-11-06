import React from "react";
import "../../style/RoundedInput.css";
import Option from "../Form/Option";

const SelectOptionHeader = ({ options }) => (
  <select
    style={{
      marginTop: "10px",
      marginBottom: "20px",
      width: "97%",
      padding: "10px",
      marginLeft: "10px",
      marginRight: "10px",
    }}
  >
    {options.map((text, index) => (
      <Option key={index} option={text} />
    ))}
  </select>
);

export default SelectOptionHeader;
