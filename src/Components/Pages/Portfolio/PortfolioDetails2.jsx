import React from "react";
import ParticlesContainer from "../../Other/ParticlesContainer";
import Footercomponent from "../../Footer/FooterComponent";
import PreviewNextComponent from "../../Other/PreviewNextComponent";
import DownloadButton from "../../Header/DownloadButton";
import PouchMockup from "../../Other/PouchMockup";
import image from "../../../images/bgimg.jpg";

const PortfolioDetails2 = () => {
  return (
    <>
      <ParticlesContainer title="Portfolio Details" img={image} />
      <div style={{ width: "90%", margin: "0 auto" }}>
        <div
          style={{ marginTop: "50px", marginBottom: "50px", display: "flex" }}
        >
          <div style={{ width: "50%", textAlign: "start" }}>
            <span style={{ fontWeight: "bold", color: "lightgray" }}>
              Photography, Design, Ideas
            </span>
            <h2 style={{ fontWeight: "bold", fontSize: "50px" }}>
              Brand Consistency
            </h2>
            <div
              style={{ width: "50%", textAlign: "center", marginLeft: "-5%" }}
            >
              <DownloadButton
                className="rounded-button"
                text="Download CV"
                href="/files/Armenuhi Toroyan CV.pdf"
                download="Armenuhi Toroyan CV.pdf"
              />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <PouchMockup src={`https://afsu.tohidur.com/img/showcase-2.jpg`} />
          </div>
        </div>
        {/* ------------------- */}
        <div
          style={{ marginTop: "50px", marginBottom: "50px", display: "flex" }}
        >
          <div style={{ width: "50%", textAlign: "start" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "50px" }}>
              Description
            </h2>
            <p style={{ color: "lightgray", marginRight: "50px" }}>
              Lorem ipsum dolor sit amet co adipiscing elit sed do eusmoori sit
              amet co a t ut labore ilms Lorem ipsumolor sit amet co adipiscing
              elit sed do eusm od orem ipsum dolor sit amet co adipiscing elit
              sed do eusmoori sit amet co at ut labore ilms Lorem ipsumolor sit
              amet co adipisc od cididun ut labore ut la sit amet co adipiscing
              elit sed do eusm odcididunt ut lisum dolor sit amet co orem ipsum
              dolor sit amet co adipiscing elit sed do eusmoori sit amet co adi
              moori sit ang.
            </p>
            <p style={{ color: "lightgray", marginRight: "50px" }}>
              ed do eusm odcididunt ut lausm od cididunt eu sm od cididunt ut
              labore ut ri sit amet co adipiscing elit sed do eusm odcididunt ut
              ling elitsed do eusm nt ut labore ut labore ilms. od cididLorem
              ipsum dolor sit amet co adipiscing met co adipiscing elit sed.
            </p>
          </div>
          <div style={{ width: "50%" }}>
            <PouchMockup src={`https://afsu.tohidur.com/img/showcase-3.jpg`} />
          </div>
        </div>
        {/* ************************** */}
        <div
          style={{ marginTop: "50px", marginBottom: "50px", display: "flex" }}
        >
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
          <div style={{ width: "50%", display: "flex", paddingInline: "20px" }}>
            <div style={{ marginInline: "10px" }}>
              <PouchMockup
                src={`https://afsu.tohidur.com/img/showcase-5.jpg`}
              />
            </div>
            <div style={{ marginInline: "10px" }}>
              <PouchMockup
                src={`https://afsu.tohidur.com/img/showcase-4.jpg`}
              />
            </div>
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

export default PortfolioDetails2;
