import React from "react";
import DownloadButton from "./Header/DownloadButton";
import Pages from "./Pages";
import AboutListMenu from "./AboutListMenu";
import SkillsGrid from "./Card/SkillCard";

const AboutPage = () => {
  return (
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
                lorimes aul erdum. erdum. Vestibulum vi rat Lorse ipsom lorimes
                aul erdum. erdum.
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
  );
};

export default AboutPage;
