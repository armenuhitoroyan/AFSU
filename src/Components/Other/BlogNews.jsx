import React from "react";

const BlogNews = ({ img, date, title }) => {
  return (
    <>
      <div style={{ marginTop: "20px", display: "flex" }}>
        <div>
          <img
            style={{ borderRadius: "20px", width: "130%" }}
            src={img}
            alt="Blog News image"
          />
        </div>
        <div>
          <h4 style={{ color: "#4219dc", marginLeft: "10%" }}>{date}</h4>
          <a style={{ marginLeft: "10%", fontSize: "20px" }} href="#">
            {title}
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogNews;
