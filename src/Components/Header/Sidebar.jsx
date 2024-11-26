import React from "react";
import "../../style/Sidebar.css";
import { IoHomeOutline } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
import { SlGraduation } from "react-icons/sl";
import { SlBriefcase } from "react-icons/sl";
import { FaRegFolder } from "react-icons/fa";
import { SlEnvelopeOpen } from "react-icons/sl";
import { SlCursor } from "react-icons/sl";

const Sidebar = ({ logo, color }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* Replace with logo */}
        <img src={logo} alt="Logo" />
      </div>
      <div style={{ height: "70px" }}></div>
      <nav className="nav-icons">
        <a href="./Home.jsx">
          {/*   fa-solid fa-bars */}
          <IoHomeOutline style={{ fontSize: "25px", color: { color } }} />
        </a>
        <a href="../Other/AboutUser.jsx">
          <SlUser
            className="sl-user"
            style={{ fontSize: "25px", marginTop: "5px", color: { color } }}
          />
        </a>
        <a href="./Home3.jsx">
          <SlGraduation
            className="sl-graduation"
            style={{ fontSize: "25px", marginTop: "5px", color: { color } }}
          />
        </a>
        <a href="../Portfolio/Portfolio.jsx">
          <SlBriefcase
            className="sl-briefcase"
            style={{ fontSize: "25px", marginTop: "5px", color: { color } }}
          />
        </a>
        <a href="../Portfolio/Portfolio.jsx">
          <FaRegFolder
            className="fa-reg-folder"
            style={{ fontSize: "25px", marginTop: "5px", color: { color } }}
          />
        </a>
        <a href="../Portfolio/Portfolio.jsx">
          <SlEnvelopeOpen
            className="sl-envelop-open"
            style={{ fontSize: "25px", marginTop: "5px", color: { color } }}
          />
        </a>
      </nav>
      <div className="send-icon">
        <SlCursor
          className="sl-cursor"
          style={{ fontSize: "25px", color: "white" }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
