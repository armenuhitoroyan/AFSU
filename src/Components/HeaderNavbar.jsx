import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Layout from "./Layout";
import Portfolio from "./Portfolio";
import Blogs from "./Blog";
import NoPage from "./NoPage";
import Contact from "./Contact";
import Home1 from "./Homepages/Home";

const HeaderNavbar = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home1 />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="pages" element={<NoPage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default HeaderNavbar;
