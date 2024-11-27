import React from "react";
import { useNavigate } from "react-router-dom";
import DownloadButton from "../Components/Header/DownloadButton";

const Navbar = () => {
  const navigate = useNavigate();

  // Handle select navigation
  const handleNavigation = (event) => {
    const path = event.target.value;
    if (path) navigate(path);
  };

  return (
    <div
      style={{
        display: "flex",
        paddingInline: "10%",
        paddingTop: "2%",
        width: "100%",
        background: "linear-gradient(90deg, #00003d, #010060)",
      }}
    >
      <div style={{ width: "25%" }}>
        <img
          style={{ width: "55%" }}
          src="../images/afsu-logo.png"
          alt="Logo"
        />
      </div>

      <div style={{ width: "50%", marginInline: "3%" }} className="flex">
        <select
          className="nav-select"
          onChange={handleNavigation}
          defaultValue=""
        >
          <option value="" disabled>
            Home
          </option>
          <option value="/home1" path="../Components/Homepages/Home">
            Home 1
          </option>
          <option value="/home2">Home 2</option>
          <option value="/home3">Home 3</option>
          <option value="/home4-light">Home 4 (light)</option>
          <option value="/home4-dark">Home 4 (dark)</option>
        </select>

        <select
          className="nav-select"
          onChange={handleNavigation}
          defaultValue=""
        >
          <option value="" disabled>
            Services
          </option>
          <option value="/services">Services</option>
          <option value="/services-details">Services Details</option>
        </select>

        <select
          className="nav-select"
          onChange={handleNavigation}
          defaultValue=""
        >
          <option value="" disabled>
            Portfolio
          </option>
          <option value="/portfolio1">Portfolio 1</option>
          <option value="/portfolio2">Portfolio 2</option>
          <option value="/portfolio3">Portfolio 3</option>
        </select>

        <select
          className="nav-select"
          onChange={handleNavigation}
          defaultValue=""
        >
          <option value="" disabled>
            Blog
          </option>
          <option value="/blog">Our Blog</option>
          <option value="/blog-details1">Blog Details 1</option>
          <option value="/blog-details2">Blog Details 2</option>
        </select>

        <select
          className="nav-select"
          onChange={handleNavigation}
          defaultValue=""
        >
          <option value="" disabled>
            Pages
          </option>
          <option value="/about">About</option>
          <option value="/pricing-plans">Pricing Plans</option>
          <option value="/404">404</option>
        </select>

        <select
          className="nav-select"
          onChange={handleNavigation}
          defaultValue=""
        >
          <option value="" disabled>
            Contact
          </option>
          {/* <option value="/contact">Contact</option> */}
        </select>
      </div>

      <div style={{ width: "25%" }}>
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

export default Navbar;
