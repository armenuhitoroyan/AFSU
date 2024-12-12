import React from "react";
import ParticlesContainer from "../Other/ParticlesContainer";
import Footercomponent from "../Footer/FooterComponent";
import PricingCard from "../Card/PricingCard";
import AssignmentsPackages from "../Other/AssignmentsPackages";
import RoundedButton from "../Form/RoundedButton";
import image from "../../images/bgimg.jpg";

const PricingPlans = () => {
  return (
    <>
      <ParticlesContainer title="Pricing Plans" img={image} />
      <div
        style={{
          width: "100%",
          height: "35vh",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <PricingCard supply={`Premium Package`} price={`$350`} />
        <div style={{ marginInline: "100px" }}>
          <PricingCard supply={`Business Packages`} price={`$470`} />
        </div>
        <PricingCard supply={`Premium Package`} price={`$650`} />
      </div>
      <div
        style={{
          marginTop: "40vh",
          display: "flex",
          justifyContent: "center",
          height: "70vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "80%",
            height: "60vh",
            background: "#38006b",
            borderRadius: "25px",
            padding: "25px",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: "60px", fontWeight: "bold", width: "80%" }}>
            Let's Create Something Creative Together
          </h2>
          <p>We can't wait to hear from making something beautiful and new!</p>
          <RoundedButton
            text={`Start Consulting`}
            // color={`white`}
            className={`rounded-button`}
            onClick={() => {
              console.log("Start Consulting butten clicked");
            }}
          />
        </div>
      </div>
      <div
        style={{
          //   marginTop: "40vh",
          display: "flex",
          justifyContent: "center",
          height: "70vh",
          padding: "20px",
        }}
      >
        <div style={{ marginRight: "400px" }}>
          <AssignmentsPackages supply={`Premium Package`} price={`$350`} />
        </div>
        <div>
          <AssignmentsPackages supply={`Business Packages`} price={`$470`} />
        </div>
      </div>

      <Footercomponent />
    </>
  );
};

export default PricingPlans;
