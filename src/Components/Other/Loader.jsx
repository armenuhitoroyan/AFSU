import React from "react";
import "../../style/Loader.css";
import TextLoader from "./TextLoader";
import CirclePart from "./CirclePart";

const Loader = () => {
  return (
    <div className="loader-container">
      <CirclePart borderColor="#ffffff" />
      <TextLoader text="loading..." />
    </div>
  );
};

export default Loader;
