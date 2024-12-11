import React from "react";
import "../../style/CategoryLink.css";

const CategoryLink = ({ hRef, prefNumber }) => {
  return (
    <div
      className="categories"
      style={{
        width: "100%",
        height: "70px",
        backgroundColor: "white",
        color: "black",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <a style={{ marginRight: "50px" }} href="#">
        {hRef}
      </a>
      <span style={{ marginLeft: "50px" }}>{prefNumber}</span>
    </div>
  );
};

export default CategoryLink;
