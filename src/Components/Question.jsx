// Import necessary libraries and components
import React from "react";
import InputContainer from "./InputContainer"; // Adjust the path as necessary
import ContactCard from "./ContactCard"; // Adjust the path as necessary
import { HiMiniEnvelope } from "react-icons/hi2"; // Import the icon
import { HiPhone } from "react-icons/hi2";
import { HiMiniMapPin } from "react-icons/hi2";

// Define a new component
const Question = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div style={{ marginTop: "10%" }}></div>
        <ContactCard
          IconComponent={HiMiniEnvelope} // Replace with another icon if needed
          title="Phone No"
          text="username@domain.com"
        />
        <div style={{ marginTop: "20px" }}></div>
        <ContactCard
          IconComponent={HiPhone} // Replace with another icon if needed
          title="Email Address"
          text="+(123) 456 7890"
        />
        <div style={{ marginTop: "20px" }}></div>
        <ContactCard
          IconComponent={HiMiniMapPin} // Replace with another icon if needed
          title="Location"
          text="Block Street No 2101 USA"
        />
      </div>
      <InputContainer />
    </div>
  );
};

export default Question;
