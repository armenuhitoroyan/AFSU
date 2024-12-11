import React from "react";
import RoundedButton from "../Form/RoundedButton";

const BlogInfo = ({ img, profileImg, date, author, title, text, h2Size, pSize }) => {
  return (
    <>
      <div>
        <img style={{ borderRadius: "20px" }} src={img} alt="Profile Page 1" />

        <div
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            display: "flex",
          }}
        >
          <p>{date}</p>
          <img
            style={{
              borderRadius: "20px",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              marginLeft: "30px",
              marginRight: "15px",
            }}
            src={profileImg}
            alt="Profile Page 1"
          />
          <p>{author}</p>
        </div>

        <div style={{ textAlign: "start" }}>
          <h2 style={{ fontSize: {h2Size}, fontWeight: "bold" }}>{title}</h2>
          <p style={{ color: "lightgray", fontSize: {pSize} }}>{text}</p>
          <div style={{ width: "150px" }}>
            <RoundedButton
              text={`Select Now`}
              className={`rounded-button`}
              onClick={() => {
                console.log("Our Blog Page");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogInfo;
