import React from "react";
import HeaderBox from "../Header/HeaderBox";
import RoundedButton from "../Form/RoundedButton";
import ArticleCard from "../Card/ArticleCard";
import Assessment from "../Assessment";
import ImageCard from "../Card/ImageCard";
import ResumeComponent from "../Resume/ResumeComponent";
import GraphicsCard from "../Card/GraphicsCard";
import Question from "../Form/Question";
import AboutComponent from "../AboutComponent";

import Footercomponent from "../../Components/Footer/FooterComponent";

const Home = () => {
  return (
    <>
      {/* <Header /> */}

      <HeaderBox />
      <AboutComponent />
      {/* ----------------------- */}

      <h4 className="text-3xl font-bold underline">What We Do</h4>
      <h2 className="text-3xl font-bold underline">Our Services</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Centers vertically if needed
          minHeight: "100vh", // Ensures it takes the full height of the viewport for vertical centering
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1200px", // Restricts the width for better centering
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around", // Adds space between the `GraphicsCard` components
                padding: "10px",
                margin: "10px auto", // Centers the inner div horizontally within the parent
                width: "80%", // Adjusts the width as needed
              }}
            >
              <GraphicsCard
                svg="svg-img"
                title="Graphics Design"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <GraphicsCard
                svg="svg-img"
                title="Graphics Design"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <GraphicsCard
                svg="svg-img"
                title="Stunning Design"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around", // Adds space between `GraphicsCard` components
                padding: "10px",
                margin: "10px auto", // Centers this inner div as well
                width: "80%", // Adjust the width as needed
              }}
            >
              <GraphicsCard
                svg="svg-img"
                title="Immigration Application"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <GraphicsCard
                svg="svg-img"
                title="Innovative Ideas"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <GraphicsCard
                svg="svg-img"
                title="Project Management"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "10px" }}></div>
      <h4 className="text-3xl font-bold underline">Professional Experience</h4>
      <h2 className="text-3xl font-bold underline">My Resume</h2>
      <ResumeComponent firstTitle="Education" secondTitle="Experience" />
      <div style={{ marginTop: "10px" }}></div>
      <h4 className="text-3xl font-bold underline">Collection of my project</h4>
      <h2 className="text-3xl font-bold underline">Work Showcase</h2>
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
      <Assessment />
      <div style={{ marginTop: "10px" }}></div>
      <h2 text-3xl font-bold underline>
        Recent Articles
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px",
          grid: "10px",
        }}
      >
        <ArticleCard
          image="../../../images/blog-1.jpg"
          commentBadge="12"
          dateAndUser="December 5, 2023 | John Smith"
          title="Interview Photographer Mark Seliger"
          description="Duis sed odio sit amet nibh vulputate cursus a sit Using an interactive app amet nibh roach."
        />
        <ArticleCard
          image="../../../images/blog-2.jpg"
          commentBadge="22"
          dateAndUser="December 5, 2023 | John Smith"
          title="Professionals with a Global Mindset"
          description="Duis sed odio sit amet nibh vulputate cursus a sit Using an interactive app amet nibh roach."
        />
        <ArticleCard
          image="../../../images/blog-3.jpg"
          commentBadge="12"
          dateAndUser="December 5, 2023 | John Smith"
          title="Reimagine, Restructure and Renew Business"
          description="Duis sed odio sit amet nibh vulputate cursus a sit Using an interactive app amet nibh roach."
        />
      </div>
      <div style={{ marginTop: "10px" }}></div>

      <RoundedButton
        className="rounded-button"
        text="Start Consulting"
        onClick={() => alert("Button clicked!")}
      />
      <div style={{ marginTop: "10px" }}></div>
      <Question />
      <div style={{ width: "100%", height: "70px" }}></div>
      <Footercomponent />
    </>
  );
};

export default Home;
