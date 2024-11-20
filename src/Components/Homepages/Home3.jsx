import React from "react";

import DownloadButton from "../Header/DownloadButton";
import RoundedButton from "../Form/RoundedButton";
import ArticleCard from "../Card/ArticleCard";
import Assessment from "../Assessment";
import ImageCard from "../Card/ImageCard";
import ResumeComponent from "../Resume/ResumeComponent";
import GraphicsCard from "../Card/GraphicsCard";
import SkillsGrid from "../Card/SkillCard";
import AboutListMenu from "../AboutListMenu";
import Question from "../Form/Question";
import Pages from "../Pages";
// import Menu from "../../Components/Header/Header";
import Footercomponent from "../../Components/Footer/FooterComponent";
import HeaderBoxH3 from "../Header/HeaderBoxH3";
import Header from "../../Components/Header/Header";

const Home3 = () => {
  return (
    <>
      <Header
        backgroundColor="linear-gradient(90deg, #f4c7e5, #c6c6d8)"
        img="../../images/black-logo.png"
      />
      <HeaderBoxH3 />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "99%",
        }}
      >
        <div>
          <div>
            <div
              className="w-full flex-col flex md:flex-row"
              style={{ marginTop: "5%" }}
            >
              <div style={{ width: "33%" }}>
                <div>
                  <h2 text-3xl font-bold underline>
                    About Me
                  </h2>
                </div>
                <div>
                  <p>I like creating a cool design project.</p>
                </div>
              </div>
              <div style={{ width: "30%" }}>
                <p>
                  Vestibulum vitae lorim tellus nec dui dictum lorim viverra ac,
                  place uilm rat Lorse viverra a eros ac, pl rat Lorse ipsom
                  lorimes aul erdum. erdum. Vestibulum vi rat Lorse ipsom
                  lorimes aul erdum. erdum.
                </p>
              </div>
            </div>
            className="w-full flex-col flex md:flex-row"
            <div
              className="w-full flex-col flex md:flex-row"
              style={{ marginTop: "2%" }}
            >
              <div
                style={{ width: "40%" }}
                className="w-full flex-col flex md:flex-row"
              >
                <div
                  style={{
                    marginLeft: "20%",
                    width: "250px",
                  }}
                >
                  <DownloadButton
                    className="rounded-button"
                    text="Download CV"
                    href="/files/Armenuhi Toroyan CV.pdf"
                    download="Armenuhi Toroyan CV.pdf"
                  />
                </div>
                <div>
                  <Pages />
                </div>
              </div>
              <div style={{ width: "40%" }}>
                <img src="../../../images/sine.png" alt="sine" />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
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
            <div style={{ marginLeft: "25px" }}>
              <SkillsGrid />
            </div>
          </div>
        </div>
      </div>

      <h4 text-3xl font-bold underline>
        What We Do
      </h4>
      <h2 text-3xl font-bold underline>
        Our Services
      </h2>
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
      <h4 text-3xl font-bold underline>
        Professional Experience
      </h4>
      <h2 text-3xl font-bold underline>
        My Resume
      </h2>
      <ResumeComponent firstTitle="Education" secondTitle="Experience" />
      <div style={{ marginTop: "10px" }}></div>
      <h4 text-3xl font-bold underline>
        Collection of my project
      </h4>
      <h2 text-3xl font-bold underline>
        Work Showcase
      </h2>
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

export default Home3;
