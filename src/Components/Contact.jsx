import React from "react";
import DemoCarousel from "./Other/DemoCarousel";
import ParticlesContainer from "./Other/ParticlesContainer";
import image from "../images/bgimg.jpg";
import Footercomponent from "./Footer/FooterComponent";
import Map from "./Other/Map";
import OurService from "./Other/OurService";
import AddUser from "./Users/AddUser";

const Contact = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <ParticlesContainer title={`Contact Us`} img={image} />
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Adds space between the `GraphicsCard` components
          padding: "20px",
          margin: "10px auto", // Centers the inner div horizontally within the parent
          width: "80%", // Adjusts the width as needed
        }}
      >
        <OurService
          title={`Phone Number`}
          description={`+(123) 456 7890 
+(123) 456 7890`}
          icon={`https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png`}
        />
        <OurService
          title={`Email`}
          description={`Admin@example.com
info@example.com`}
          icon={`https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png`}
        />
        <OurService
          title={`Office Location`}
          description={`123 New York E Block 12670, Street 2101 
            USA`}
          icon={`https://cdn-icons-png.flaticon.com/512/2838/2838912.png`}
        />
      </div>
      {/* Send message */}
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          padding: "20px 0px",
        }}
      >
        <span style={{ fontSize: "19px", fontWeight: "bolder" }}>
          Have Question Contact Us?
        </span>
        <div style={{ width: "60%", margin: "0 auto" }}>
          <h1 style={{ fontSize: "65px", fontWeight: "bold" }}>
            Love to Hear From You, Get in Touch!
          </h1>
        </div>
        <div
          style={{
            width: "160%",
            marginLeft: "13%",
            margin: "0 auto",
          }}
        >
          <AddUser />
        </div>
      </div>
      {/* Map */}
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <Map />
      </div>
      <DemoCarousel />
      <Footercomponent />
    </div>
  );
};

export default Contact;
