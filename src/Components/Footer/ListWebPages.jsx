import React from "react";

const ListWebPages = ({ imageName, webName }) => {
  return (
    <li style={{ display: "flex" }}>
      <img
        src={imageName}
        style={{ marginInlineStart: "10px", borderRadius: "50%" }}
        alt={webName}
      />
      {/* Updated alt attribute */}
      <h3 style={{ marginInlineStart: "10px", color: "white" }}>{webName}</h3>
    </li>
  );
};

export default ListWebPages;
