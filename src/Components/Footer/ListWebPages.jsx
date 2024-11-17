import React from "react";

const ListWebPages = ({ imageName, webName, bgColor, href }) => {
  return (
    <li className="w-full flex flex-col items-center md:flex-row">
      <a
        className="magic-hover magic-hover__square w-full flex flex-col items-center md:flex-row"
        href={href}
      >
        <div
          className="w-full flex flex-col items-center justify-center md:flex-row"
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: bgColor,
            borderRadius: "50%",
            margin: "10px",
          }}
        >
          <i
            className={imageName}
            style={{ color: "white", fontSize: "20px" }}
          ></i>
        </div>

        <h3
          style={{
            marginTop: "5px",
            color: "white",
            fontSize: "18px",
            fontWeigh: "bold",
          }}
        >
          {webName}
        </h3>
      </a>
    </li>
  );
};

export default ListWebPages;
