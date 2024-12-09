import React from "react";
import ParticlesContainer from "../../Other/ParticlesContainer";
import Footercomponent from "../../Footer/FooterComponent";
import PreviewNextComponent from "../../Other/PreviewNextComponent";
import PouchMockup from "../../Other/PouchMockup";
import PortfolioDetails from "./PortfolioDetails";

const PortfolioDetails3 = () => {
  return (
    <>
      <ParticlesContainer title="Portfolio Details" />
      <div style={{ width: "90%", margin: "0 auto" }}>
        <img
          style={{ borderRadius: "20px", marginTop: "70px" }}
          src={`https://afsu.tohidur.com/img/services-1.jpg`}
          alt="Profile Page 1"
        />
        {/* ------------------- */}
        <div
          style={{ marginTop: "50px", marginBottom: "50px", display: "flex" }}
        >
          <div style={{ width: "50%" }}>
            <PortfolioDetails />
          </div>
          <div style={{ width: "50%", textAlign: "start" }}>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "50px",
                marginLeft: "50px",
              }}
            >
              Description
            </h2>
            <p style={{ color: "lightgray", marginLeft: "50px" }}>
              Lorem ipsum dolor sit amet co adipiscing elit sed do eusmoori sit
              amet co a t ut labore ilms Lorem ipsumolor sit amet co adipiscing
              elit sed do eusm od orem ipsum dolor sit amet co adipiscing elit
              sed do eusmoori sit amet co at ut labore ilms Lorem ipsumolor sit
              amet co adipisc od cididun ut labore ut la sit amet co adipiscing
              elit sed do eusm odcididunt ut lisum dolor sit amet co orem ipsum
              dolor sit amet co adipiscing elit sed do eusmoori sit amet co adi
              moori sit ang.
            </p>
            <p style={{ color: "lightgray", marginLeft: "50px" }}>
              ed do eusm odcididunt ut lausm od cididunt eu sm od cididunt ut
              labore ut ri sit amet co adipiscing elit sed do eusm odcididunt ut
              ling elitsed do eusm nt ut labore ut labore ilms. od cididLorem
              ipsum dolor sit amet co adipiscing met co adipiscing elit sed.
            </p>
          </div>
        </div>
        {/* //////////////////////////// */}
        <div
          style={{ marginTop: "50px", marginBottom: "50px", display: "flex" }}
        >
          <div style={{ width: "50%", textAlign: "start" }}>
            <div style={{ display: "flex" }}>
              <PouchMockup
                src={`https://afsu.tohidur.com/img/showcase-1.jpg`}
              />
              <PouchMockup
                src={`https://afsu.tohidur.com/img/showcase-4.jpg`}
              />
            </div>
            <div>
              <PouchMockup
                src={`https://afsu.tohidur.com/img/showcase-5.jpg`}
              />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <PouchMockup src={`https://afsu.tohidur.com/img/showcase-6.jpg`} />
          </div>
        </div>
        {/* ************************** */}
        <div
          style={{ marginTop: "50px", marginBottom: "50px", display: "flex" }}
        >
          <div
            style={{ width: "50%", display: "flex", paddingInline: "20px" }}
          ></div>
          <div style={{ width: "50%", textAlign: "start" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "50px" }}>
              What We Provide
            </h2>
            <p style={{ color: "gray", marginRight: "50px" }}>
              Dedication to client satisfaction
            </p>
            <p style={{ color: "gray", marginRight: "50px" }}>
              Teamwork and collabration
            </p>
            <p style={{ color: "gray", marginRight: "50px" }}>
              Being leader in our profession
            </p>
            <p style={{ color: "gray", marginRight: "50px" }}>
              Teamwork and collabration
            </p>
            <p style={{ color: "gray", marginRight: "50px" }}>
              Pride in our works and excellences
            </p>
          </div>
        </div>
        {/* +++++++++++++++++++++++++ */}
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <PreviewNextComponent />
        </div>
      </div>
      <Footercomponent />
    </>
  );
};

export default PortfolioDetails3;
