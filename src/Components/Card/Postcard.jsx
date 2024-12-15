import React from "react";

const PostCard = ({ text, content, textAlign }) => {
  return (
    <div
      className="PostCard"
      style={{
        textAlign: textAlign,
        border: "1px solid lightgray",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <h2 style={{ fontSize: "16px", fontWeight: "bolder" }}>{text}</h2>
      <a style={{ color: "#6928e6", fontWeight: "bolder" }} href="#">
        {content}
      </a>
    </div>
  );
}; 

export default PostCard;
