// ContactCard.js
import React from "react";
import "../style/ContactCard.css"; // Import the CSS file

const ContactCard = ({ IconComponent, title, text }) => {
  return (
    <div className="card">
      <div className="icon">
        <span className="icon-content">
          {IconComponent && <IconComponent style={{ color: "white" }} />}
        </span>
      </div>
      <div className="texts">
        <div className="title">{title}</div>
        <div className="email">{text}</div>
      </div>
    </div>
  );
};

export default ContactCard;
