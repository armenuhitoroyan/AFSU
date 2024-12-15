import React from "react";
import "../../style/Comment.css";

const CommentComponent = ({ name, img, date, aboutAuthor }) => {
  return (
    <div className="about-comment">
      <img
        style={{ borderRadius: "20px" }}
        src={img}
        alt={`${img} not found!`}
      />
      <div style={{ marginLeft: "15px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>{name}</h2>
          <span>{date}</span>
        </div>
        <div>
          <h6>{aboutAuthor}</h6>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
