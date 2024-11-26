import React from "react";
import "../../style/style.css";
import DownloadButton from "./DownloadButton";
import Layout from "../Layout";
import Services from "../Services";
import Portfolio from "../Portfolio";
import Blogs from "../Blog";
import NoPage from "../NoPage";
import Contact from "../Contact";
import { Route, Routes } from "react-router-dom";
import Home1 from "../Homepages/Home";

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
        <div style={{ width: "40%" }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home1 />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="*" element={<NoPage />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
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
