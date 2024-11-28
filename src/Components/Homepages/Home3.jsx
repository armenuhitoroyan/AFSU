import React from "react";

import RoundedButton from "../Form/RoundedButton";
import ImageCard from "../Card/ImageCard";
import ResumeComponent from "../Resume/ResumeComponent";
// import GraphicsCard from "../Card/GraphicsCard";

import AboutListMenu from "../AboutListMenu";
import Question from "../Form/Question";

import Footercomponent from "../../Components/Footer/FooterComponent";
import HeaderBoxH3 from "../Header/HeaderBoxH3";
// import Header from "../../Components/Header/Header";
import SizeBoxContainer from "../Other/SizeBoxContainer";
import ProgressCardsContainer from "../Card/ProgressCardsContainer";
import TitleContainer from "./TitleContainer";
import Testimonials from "../Other/Testimonials";

import girl from "../../images/girl.png";
import Service from "../Other/Service";

const Home3 = () => {
  return (
    <>
      {/* <Header
        backgroundColor={`linear-gradient(90deg, #f4c7e5, #c6c6d8)`}
        img="../../images/black-logo.png"
      /> */}
      <HeaderBoxH3 />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "99%",
        }}
      >
        <div>
          <SizeBoxContainer />
          <TitleContainer title="WHO I AM" description="About My Resume" />
          <div className="flex justify-center md:flex-row">
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                listStyleType: "none",
                padding: 0,
              }}
            >
              {[
                { data: "Age:", responseData: "29" },
                { data: "Residence:", responseData: "USA" },
                {
                  data: "Address:",
                  responseData: "88 Some Street, Some Town",
                },
                { data: "E-mail:", responseData: "email@example.com" },
                { data: "Phone:", responseData: "+0123 123 456 789" },
                { data: "Freelance:", responseData: "Available" },
              ].map((item, index) => (
                <AboutListMenu
                  key={index}
                  data={item.data}
                  responseData={item.responseData}
                  style={{
                    backgroundColor: index % 2 === 0 ? "white" : "lightgray",
                    padding: "10px",
                  }}
                />
              ))}
            </ul>
            <div
              style={{ marginLeft: "25px", width: "250px", background: "red" }}
            >
              <img
                style={{ width: "250px", height: "auto" }}
                src={girl}
                alt="Girl"
              />
            </div>
          </div>
          <div>
            <ProgressCardsContainer />
          </div>
        </div>
      </div>

      <SizeBoxContainer />
      {/* **************************** */}
      <Service />
      {/* **************** */}
      <SizeBoxContainer />
      <TitleContainer title="Testimonials" description="Client’s Reviews" />
      <div className="flex justify-between md:flex-row">
        <Testimonials
          title="Edison Cavani"
          text="We help our clients from the definition of their strategy to the realization of their digital ecosystem.
         At the heart of our approach is the constant search for the juncture between aesthetic."
          descripttion="Product Management at Spotify"
        />

        <Testimonials
          title="Edison Cavani"
          text="We help our clients from the definition of their strategy to the realization of their digital ecosystem.
         At the heart of our approach is the constant search for the juncture between aesthetic."
          descripttion="Product Management at Spotify"
        />
      </div>

      <div style={{ marginTop: "10px" }}></div>
      <h4 text-3xl font-bold underline>
        Professional Experience
      </h4>
      <h2 text-3xl font-bold underline>
        My Resume
      </h2>
      <ResumeComponent firstTitle="Education" secondTitle="Experience" />
      <div style={{ marginTop: "10px" }}></div>

      <SizeBoxContainer />
      <TitleContainer
        title="Collection of my project"
        description="Work Showcase"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px",
          grid: "10px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageCard
            image="../../../images/clock.jpg"
            title="List of brands"
            subtitle="Digital Web"
          />
          <ImageCard
            image="../../../images/apple.jpg"
            title="App UX UI Design"
            subtitle="Website Design & Development"
          />
          <ImageCard
            image="../../../images/brain.jpg"
            title="List of brands"
            subtitle="Digital Web"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageCard
            image="../../../images/phone.jpg"
            title="List of brands"
            subtitle="Digital Web"
          />
          <ImageCard
            image="../../../images/smart-watch.jpg"
            title="App UX UI Design"
            subtitle="Website Design & Development"
          />
          <ImageCard
            image="../../../images/flowers.jpg"
            title="profile imgPresentation Mockup"
            subtitle="Website Design & Development"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageCard
            image="../../../images/banana.jpg"
            title="List of brands"
            subtitle="Digital Web"
          />
          <ImageCard
            image="../../../images/pineapple.jpg"
            title="App UX UI Design"
            subtitle="Website Design & Development"
          />
          <ImageCard
            image="../../../images/balloon.jpg"
            title="profile imgPresentation Mockup"
            subtitle="Website Design & Development"
          />
        </div>
      </div>

      <div style={{ marginTop: "10px" }}></div>

      <RoundedButton
        className="rounded-button"
        text="Load More"
        onClick={() => alert("Button clicked!")}
      />
      <SizeBoxContainer />
      <TitleContainer
        title="Have Question Contact Us?"
        description={`Love to Hear From You,
           Get in Touch!`}
      />
      <Question />
      <div style={{ width: "100%", height: "70px" }}></div>
      <Footercomponent />
    </>
  );
};

export default Home3;
