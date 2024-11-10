import React from "react";
import SelectOptionHeader from "./Header/SelectOptionHeader";
import "../style/style.css";

const Header = () => {
  return (
    <div className="header">
      <div
        className="logo"
        style={{
          marginRight: "10px",
        }}
      >
        <img src="../../../images/afsu-logo.png" alt="Logo" />
      </div>
      <div className="nav-items">
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
      <button className="download-button" style={{ marginLeft: "10px" }}>
        Download CV
      </button>
    </div>
  );
};

export default Header;
