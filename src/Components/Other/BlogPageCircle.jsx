import React from "react";
import "../../style/PostedPageCircle.css";

const BlogPageCircle = ({ bgColor, icon }) => {
  return (
    <div className="PostedPageCircle" style={{ background: bgColor }}>
      <i className={icon} style={{ color: "white", fontSize: "20px" }}></i>
    </div>
  );
};

export default BlogPageCircle;
