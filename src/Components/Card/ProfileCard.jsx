import React from "react";
import "../../style/ProfileCard.css";
import DownloadButton from "../Header/DownloadButton";

const ProfileCard = () => {
  return (
    <div className="card">
      <div className="image-container">
        <img
          src="../../images/630.png"
          alt="Profile"
          className="profile-image"
        />
      </div>
      <h3
        className="name"
        style={{ fontWeight: "bold", paddingTop: "20px", paddingBottom: "5px" }}
      >
        Tohidur Hasan
      </h3>
      <p className="description" style={{ marginTop: "20px" }}>
        Graphic Designer, HTML Coder, and Project Manager
      </p>
      <div style={{ width: "100%", marginTop: "35px" }}>
        <DownloadButton
          className="download-button"
          text="Download CV"
          href="/files/Armenuhi Toroyan CV.pdf"
          download="Armenuhi Toroyan CV.pdf"
          backgroundColor="#6928e6"
          color="#white"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
