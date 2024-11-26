import React from "react";
import "../../style/Circle.css";
import Sidebar from "../Header/Sidebar";
import AboutUser from "../Other/AboutUser";
import ProfileCard from "../Card/ProfileCard";
import "../../style/Homepage4Light.css";
import logo from "../../images/logo-black.png";

const Homepage4Light = () => {
  return (
    <div
      className="container-p flex justify-between md:flex-row"
      style={{ backgroundColor: "#f8f9fa", width: "100%", height: "100vh" }}
    >
      <Sidebar logo={logo} color="black" />
      <AboutUser color="black" />
      <ProfileCard />
    </div>
  );
};

export default Homepage4Light;
