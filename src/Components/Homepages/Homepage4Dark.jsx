import React from "react";
import "../../style/Circle.css";
import Sidebar from "../Header/Sidebar";
import AboutUser from "../Other/AboutUser";
import ProfileCard from "../Card/ProfileCard";
import "../../style/Homepage4Light.css";
import logo from "../../images/logo-white.png";

const Homepage4Dark = () => {
  return (
    <div
      className="container-p flex justify-between md:flex-row"
      style={{ backgroundColor: "#1d2030", width: "100%", height: "100vh" }}
    >
      <Sidebar logo={logo} color="white" />
      <AboutUser color={`white`} />
      <ProfileCard />
    </div>
  );
};

export default Homepage4Dark;
