// ContactCard.js
import React from "react";
import "../../style/ContactCard.css"; // Import the CSS file

const ContactCard = ({ IconComponent, title, text }) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
      <div className="shrink-0">
        {IconComponent && <IconComponent style={{ color: "white" }} />}
      </div>
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-slate-500">{text}</p>
      </div>
    </div>
  );
};

export default ContactCard;