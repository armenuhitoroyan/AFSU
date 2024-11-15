// Question.js
import React from "react";
import InputContainer from "./InputContainer"; // Adjust the path as necessary
import ContactCard from "./ContactCard"; // Adjust the path as necessary
import { HiMiniEnvelope } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import { HiMiniMapPin } from "react-icons/hi2";

const Question = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div style={{ marginTop: "10%" }}></div>
        <ContactCard
          IconComponent={HiPhone}
          title="Phone No"
          text="+(123) 456 7890"
        />
        <div style={{ marginTop: "20px" }}></div>
        <ContactCard
          IconComponent={HiMiniEnvelope}
          title="Email Address"
          text="username@domain.com"
        />
        <div style={{ marginTop: "20px" }}></div>
        <ContactCard
          IconComponent={HiMiniMapPin}
          title="Location"
          text="Block Street No 2101 USA"
        />
      </div>
      <InputContainer />
    </div>
  );
};

export default Question;
