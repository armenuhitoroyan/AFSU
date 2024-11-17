import React from "react";
import ListWebPages from "./ListWebPages";

const WebPages = () => {
  return (
    <ul
      className="parent-web-icons flex w-full flex-col justify-center md:flex-row"
      style={{
        width: "65%",
        border: "5px solid #451ade",
        borderRadius: "70px",
        padding: "10px",
      }}
    >
      <ListWebPages
        imageName="fa-brands fa-facebook-f"
        webName="Facebook"
        bgColor="#6928e6"
        href="#"
      />
      <ListWebPages
        imageName="fa-brands fa-twitter"
        webName="Twitter"
        bgColor="#4fa6ff"
        href="#"
      />
      <ListWebPages
        imageName="fa-brands fa-vimeo-v"
        webName="Vimeo"
        bgColor="#ff006c"
        href="#"
      />
      <ListWebPages
        imageName="fa-brands fa-linkedin-in"
        webName="LinkedIn"
        bgColor="#6928e6"
        href="#"
      />
    </ul>
  );
};

export default WebPages;
