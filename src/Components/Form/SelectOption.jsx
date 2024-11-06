import React from "react";
import Option from "./Option";
import "../../style/RoundedInput.css";

const SelectOption = () => (
  <select
    style={{
      marginTop: "10px",
      marginBottom: "20px",
      width: "97%",
      padding: "10px",
    }}
  >
    <Option option="Select Topic" />
    <Option option="Select Topic 1" />
    <Option option="Select Topic 2" />
    <Option option="Select Topic 3" />
    <Option option="Select Topic 4" />
  </select>
);

export default SelectOption;
