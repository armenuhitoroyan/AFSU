import React from "react";
import DemoCarousel from "../Other/DemoCarousel";
import Footercomponent from "../Footer/FooterComponent";
import AboutUser from "../Other/AboutUser";
import OurServices from "../Other/Services";
import TitleContainer from "./TitleContainer";
import PouchMockup from "../Other/PouchMockup";

const Home2 = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#f9f9f9",
        }}
      >
        <AboutUser color="black" />
        <div
          style={{
            display: "flex",
            marginBottom: "10%",
            backgroundColor: "rgb(0, 0, 95)",
            paddingBottom: "10%",
            paddingTop: "10%",
            paddingLeft: "2.5px",
            borderBottomLeftRadius: "20%",
            color: " white",
          }}
        >
          <img
            style={{ borderRadius: "20px", width: "60%", height: "500px" }}
            src={`https://afsu.tohidur.com/img/girl.png`}
            alt="Profile Page 1"
          />
          <div style={{ textAlign: "start", marginLeft: "2%" }}>
            <div>
              <h2 style={{ fontSize: "60px" }}>12 +</h2>
              <p>Years Working Experience</p>
            </div>
            <div
              style={{
                width: "200px",
                height: "3px",
                background: "lightgray",
                marginTop: "20px",
              }}
            ></div>
            <div>
              <h2 style={{ fontSize: "60px", marginTop: "20px" }}>10 k</h2>
              <p>Happy Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#f9f9f9" }}>
        <TitleContainer title="What We Do" description={`Our Services`} />
      </div>
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <OurServices />
      </div>

      <div style={{ backgroundColor: "#f9f9f9" }}>
        <TitleContainer
          title="Collection of my project"
          description={`Work Showcase`}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "start",
          backgroundColor: "#f9f9f9",
          paddingTop: "70px",
        }}
      >
        <div>
          <div>
            <PouchMockup
              src={`https://afsu.tohidur.com/img/profile-home-img-1.jpg`}
            />
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Doerner Investigations
            </h2>
            <span style={{ color: "gray" }}>Website Design, Branding</span>
          </div>
        </div>
        <div>
          <PouchMockup src={`https://afsu.tohidur.com/img/profile-6.jpg`} />
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Doerner Investigations
          </h2>
          <span style={{ color: "gray" }}>Website Design, Branding</span>
        </div>
      </div>
      {/* ++++++++++++ */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "start",
          backgroundColor: "#f9f9f9",
          paddingTop: "70px",
        }}
      >
        <div>
          <div>
            <PouchMockup
              src={`https://afsu.tohidur.com/img/profile-home-img-5.jpg`}
            />
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Web Mockup
            </h2>
            <span style={{ color: "gray" }}>Studio, Branding</span>
          </div>
        </div>
        <div style={{ marginLeft: "55px", marginRight: "55px" }}>
          <PouchMockup
            src={`https://afsu.tohidur.com/img/profile-home-img-6.jpg`}
          />
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Illustrator Design
          </h2>
          <span style={{ color: "gray" }}>Website Design, Branding</span>
        </div>
        <div>
          <PouchMockup
            src={`https://afsu.tohidur.com/img/profile-home-img-7.jpg`}
          />
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Vector Art
          </h2>
          <span style={{ color: "gray" }}>Website Design, Branding</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "start",
          backgroundColor: "#f9f9f9",
          paddingTop: "70px",
        }}
      >
        <div>
          <div style={{ marginRight: "10px" }}>
            <PouchMockup
              src={`https://afsu.tohidur.com/img/profile-home-img-3.jpg`}
            />
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Branding Identity
            </h2>
            <span style={{ color: "gray" }}>Website Design, Branding</span>
          </div>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <PouchMockup
            src={`https://afsu.tohidur.com/img/profile-home-img-4.jpg`}
          />
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            App UX UI Design
          </h2>
          <span style={{ color: "gray" }}>Website Design, Branding</span>
        </div>
      </div>

      <DemoCarousel />
      <Footercomponent />
    </>
  );
};

export default Home2;
