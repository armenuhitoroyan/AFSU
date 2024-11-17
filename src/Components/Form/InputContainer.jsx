// InputContainer.js
import React, { useState } from "react";
import RoundedInput from "./RoundedInput";
import RoundedButton from "./RoundedButton";
import RoundedTextArea from "./TextArea";
import "../../style/InputContainer.css";
import SelectOption from "./SelectOption";

const InputContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPhone = (e) => {
    setPhone(e.target.value);
  };

  const handleInputMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="Question" style={{ marginInlineStart: "25px" }}>
      <RoundedInput
        type="text"
        placeholder="Your Name *"
        value={name}
        onChange={handleInputName}
      />
      <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
        <RoundedInput
          type="email"
          placeholder="Your Email *"
          value={email}
          onChange={handleInputEmail}
        />
        <RoundedInput
          type="text"
          placeholder="Your Phone *"
          value={phone}
          onChange={handleInputPhone}
        />
      </div>
      <SelectOption />
      <RoundedTextArea
        placeholder="Your message *"
        value={message}
        onChange={handleInputMessage}
      />
      <div style={{ marginTop: "10px" }}></div>
      <RoundedButton
        className="rounded-button"
        text="Send Message"
        onClick={() => alert("Send Message!")}
      />
    </div>
  );
};

export default InputContainer;
