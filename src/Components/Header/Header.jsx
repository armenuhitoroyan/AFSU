import React from "react";
import "../../style/style.css";
// import DownloadButton from "./DownloadButton";

import HeaderNavbar from "../HeaderNavbar";

const Header = ({ backgroundColor, img }) => {
  return (
    <div
      className="header w-full fixed flex flex-col items-center justify-between md:flex-row"
      style={{ paddingInline: "0%", backgroundImage: backgroundColor }}
    >
      <div>
        <div style={{ width: "40%" }}>
          <HeaderNavbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
