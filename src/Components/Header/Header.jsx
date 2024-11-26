import React from "react";
// import SelectOptionHeader from "./SelectOptionHeader";
import "../../style/style.css";
import DownloadButton from "./DownloadButton";
import Menu from "./Menu";

const Header = ({ backgroundColor, img, color }) => {
  return (
    <div
      className="header w-full fixed flex flex-col items-center justify-between md:flex-row"
      style={{ paddingInline: "8%", backgroundImage: backgroundColor }}
    >
      <div>
        <div style={{ width: "90%" }}>
          <img
            className="w-16 md:w-32 lg:w-48 flex flex-col items-center justify-between"
            src={img} // "../../../images/afsu-logo.png"
            alt="Logo"
          />
        </div>
      </div>

      <div style={{ width: "55%" }}>
        <Menu backgroundImage={backgroundColor} />
      </div>

      <div style={{ width: "250px" }}>
        <DownloadButton
          className="download-button"
          text="Download CV"
          href="/files/Armenuhi Toroyan CV.pdf"
          download="Armenuhi Toroyan CV.pdf"
          backgroundColor="#6928e6"
          color="#6928e6"
        />
      </div>
    </div>
  );
};

export default Header;
