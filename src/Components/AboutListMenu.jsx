import React from "react";

const AboutListMenu = ({ data, responseData, style }) => {
  return (
    <li style={style}>
      <h6 style={{ marginInlineStart: "10px" }}>
        {data} <span>{responseData}</span>
      </h6>
    </li>
  );
};

export default AboutListMenu;
