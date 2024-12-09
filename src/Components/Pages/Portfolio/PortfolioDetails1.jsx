import React from "react";
import ParticlesContainer from "../../Other/ParticlesContainer";
import profile1img from "../../../images/profile-pag-1.jpg";
import Footercomponent from "../../Footer/FooterComponent";
import PortfolioDetails from "./PortfolioDetails";
import PouchMockup from "../../Other/PouchMockup";
import FeatureContainer from "../../Other/FeatureContainer";
import PreviewNextComponent from "../../Other/PreviewNextComponent";

const PortfolioDetails1 = () => {
  return (
    <>
      <ParticlesContainer title="Portfolio Details" />
      <div
        style={{
          width: "100%",
          height: "100%",
          paddingTop: "70px",
          paddingBottom: "70px",
        }}
      >
        <div style={{ width: "90%", margin: "0 auto" }}>
          <img
            style={{ borderRadius: "20px" }}
            src={profile1img}
            alt="Profile Page 1"
          />
          <div style={{ display: "flex", marginTop: "50px" }}>
            <div style={{ width: "60%", textAlign: "left" }}>
              <span
                style={{
                  fontSize: "15px",
                  color: "lightgray",
                  fontWeight: "bold",
                }}
              >
                Photography, Design, Ideas
              </span>
              <h2 style={{ fontSize: "65px", fontWeight: "bold" }}>
                Brand Consistency
              </h2>
              <p style={{ fontWeight: "unset", color: "lightgray" }}>
                Lorem ipsum dolor sit amet co adipiscing elit sed do eusmoori
                sit amet co adipiscing elit sed do eusm t ut labore ilms Lorem
                ipsumolor sit amet co adipiscing elit sed do eusm odcididunt ut
                lausm od cididL orem ipsum dolor sit amet co adipiscing elit sed
                do eusmoori sit amet co adipiscing elit sed do eusmt ut labore
                ilms Lorem ipsumolor sit amet co adipisc od cididun ut labore ut
                labore ilms Lorem ipsum ori sit amet co adipiscing elit sed do
                eusm odcididunt ut lisum dolor sit amet co adipiscing elit sed
                do eus orem ipsum dolor sit amet co adipiscing elit sed do
                eusmoori sit amet co adipiscing elit sed do eusmt moori sit
                ang.Lorem ipsumolor sit amet co adipisc.
              </p>
              <p style={{ fontWeight: "unset", color: "lightgray" }}>
                ed do eusm odcididunt ut lausm od cididunt eu sm od cididunt ut
                labore ut labore ilms ilLorem ipsum ri sit amet co adipiscing
                elit sed do eusm odcididunt ut ling elitsed do eusm od cididunt
                ut labore ilmu nt ut labore ut labore ilms. od cididLorem ipsum
                dolor sit amet co adipiscing elit sed do eusmoori sit a met co
                adipiscing elit sed.
              </p>
            </div>
            <div
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <PortfolioDetails />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <div>
              <PouchMockup
                src={`https://afsu.tohidur.com/img/profile-pag-2.jpg`}
                width={`430px`}
                height={`60vh`}
              />
            </div>
            <div style={{ marginInline: "20px" }}>
              <PouchMockup
                src={`https://afsu.tohidur.com/img/profile-pag-4.jpg`}
                width={`430px`}
                height={`60vh`}
              />
            </div>
            <div>
              <PouchMockup
                src={`https://afsu.tohidur.com/img/profile-pag-6.jpg`}
                width={`430px`}
                height={`60vh`}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div>
              <PouchMockup
                src={`https://afsu.tohidur.com/img/profile-pag-3.jpg`}
                width={`430px`}
                height={`60vh`}
              />
            </div>
            <div style={{ marginInline: "20px" }}>
              <PouchMockup
                src={`https://afsu.tohidur.com/img/profile-pag-5.jpg`}
                width={`430px`}
                height={`60vh`}
              />
            </div>
            <div>
              <PouchMockup
                src={`https://afsu.tohidur.com/img/profile-pag-7.jpg`}
                width={`430px`}
                height={`60vh`}
              />
            </div>
          </div>
          <div style={{ marginTop: "100px" }}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "30%",
                  position: "absolute",
                  zIndex: "2",
                  marginTop: "7%",
                }}
              >
                <FeatureContainer />
              </div>
              <div style={{ width: "70%", marginLeft: "30%" }}>
                <PouchMockup
                  src={`https://afsu.tohidur.com/img/profile-pag-8.jpg`}
                  width={`500px`}
                  height={`80vh`}
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "50px", marginBottom: "50px" }}>
            <PreviewNextComponent />
          </div>
        </div>
      </div>
      <Footercomponent />
    </>
  );
};

export default PortfolioDetails1;
