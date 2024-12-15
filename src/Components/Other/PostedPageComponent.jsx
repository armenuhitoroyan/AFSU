import React from "react";
import "../../style/PostedPageComponent.css";
import BlogPageCircle from "./BlogPageCircle";

const PostedPageComponent = () => {
  return (
    <div className="PostedPageContainer">
      <div>
        <span style={{ color: "#6928e6" }}>Posted In :</span>
        <a href="#" rel="noopener noreferrer">
          Graphic Designer,
        </a>
        <a href="#" rel="noopener noreferrer">
          Website Design
        </a>
      </div>
      <div className="pages">
        <BlogPageCircle bgColor={`#2052c5`} icon={`fa-brands fa-facebook-f`} />
        <BlogPageCircle
          bgColor={`linear-gradient(to right, #2b009a, #da001b, #ff1600, #ff7b00, #fff700)`}
          icon={`fa-brands fa-instagram`}
        />
        <BlogPageCircle bgColor={`#2f98e1`} icon={`fa-brands fa-twitter`} />
      </div>
    </div>
  );
};

export default PostedPageComponent;
