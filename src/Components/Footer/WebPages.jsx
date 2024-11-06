import React from "react";
import ListWebPages from "./ListWebPages";

import facebookImage from "../../public/images/facebook.png";
import twitterImage from "../../public/images/twitter.png";
import vimeoImage from "../../public/images/vimeo.png";
import linkedinImage from "../../public/images/linkedin.png";

const WebPages = () => {
  return (
    <ul
      className="parent-web-icons"
      style={{
        width: "40%",
        display: "flex",
        justifyContent: "center",
        border: "2px solid blue",
        borderRadius: "50px",
        padding: "20px",
      }}
    >
      <ListWebPages imageName={facebookImage} webName="Facebook" />
      <ListWebPages imageName={twitterImage} webName="Twitter" />
      <ListWebPages imageName={vimeoImage} webName="Vimeo" />
      <ListWebPages imageName={linkedinImage} webName="Linked In" />
    </ul>
  );
};

export default WebPages;
