import React from "react";
import "../style/style.css";
import DownloadButton from "./Header/DownloadButton";

const Header = ({ backgroundColor, img }) => {
  return (
    <div
      className="header w-full fixed flex flex-col items-center justify-between md:flex-row"
      style={{ paddingInline: "8%", backgroundImage: backgroundColor }}
    >
      <div>
        <img className="w-16 md:w-32 lg:w-48" src={img} alt="Logo" />
      </div>
      <div>
        <DownloadButton
          className="download-button"
          text="Download CV"
          href="/files/Armenuhi Toroyan CV.pdf"
          download="Armenuhi Toroyan CV.pdf"
        />
      </div>
    </div>
  );
};

export default Header;
