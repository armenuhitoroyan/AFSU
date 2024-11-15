import React from "react";
import SelectOptionHeader from "./Header/SelectOptionHeader";
import "../style/style.css";
import DownloadButton from "./Header/DownloadButton";

const Header = () => {
  return (
    <div
      className="header w-full fixed flex flex-col items-center justify-between md:flex-row"
      style={{ paddingInline: "8%" }}
    >
      <div>
        <div style={{ width: "90%"}}>
          <img
            className="w-16 md:w-32 lg:w-48 flex flex-col items-center justify-between"
            src="../../../images/afsu-logo.png"
            alt="Logo"
          />
        </div>
      </div>
      <div className="nav-items w-full fixed flex flex-col items-center justify-between md:flex-row">
        <SelectOptionHeader
          options={[
            "Home 1",
            "Home 2",
            "Home 3",
            "Home 4 (light)",
            "Home 4 (dark)",
          ]}
        />
        <SelectOptionHeader options={["Services", "Services Details"]} />
        <SelectOptionHeader
          options={["Portfolio 1", "Portfolio 2", "Portfolio 3"]}
        />
        <SelectOptionHeader
          options={["Our Blog", "Blog details 1", "Blog details 2"]}
        />
        <SelectOptionHeader options={["About", "Pricing Plans", "404"]} />
        <SelectOptionHeader options={["Contact"]} />
      </div>

      <div style={{ width: "250px" }}>
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
