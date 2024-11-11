import "./App.css";
import RoundedButton from "./Components/RoundedButton";
import Question from "./Components/Question";
import Footercomponent from "./Components/Footer/FooterComponent";
// import Header from "./Components/Header/Header";
import AboutListMenu from "./Components/AboutListMenu";
import SkillsGrid from "./Components/Card/SkillCard";
import GraphicsCard from "./Components/Card/GraphicsCard";
import ResumeComponent from "./Components/Resume/ResumeComponent";
import ArticleCard from "./Components/Card/ArticleCard";
import ImageCard from "./Components/Card/ImageCard";
import Assessment from "./Components/Assessment";
import "./style/style.css";
import Header from "./Components/Header";
import HeaderBox from "./Components/Header/HeaderBox";
import Pages from "./Components/Pages";
import DownloadButton from "./Components/Header/DownloadButton";
// import AnimatedShapes from "./Components/Animations/AnimatedShapes";

function App() {
  return (
    <div className="App">
      <div style={{ marginTop: "10px" }}></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <Header /> */}
        <Header />
      </div>
      <div>
        <HeaderBox />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "99%",
        }}
      >
        <div>
          <div>
            <div style={{ display: "flex", marginTop: "5%" }}>
              <div style={{ width: "30%" }}>
                <div>
                  <h2>About Me</h2>
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
            <div style={{ display: "flex", marginTop: "2%" }}>
              <div style={{ width: "30%", display: "flex" }}>
                <div style={{ marginLeft: "5%" }}>
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
              <div style={{ width: "30%" }}>
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
                { data: "Address:", responseData: "88 Some Street, Some Town" },
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
      <h4>What We Do</h4>
      <h2>Our Services</h2>
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
      <h4>Professional Experience</h4>
      <h2>My Resume</h2>
      <ResumeComponent firstTitle="Education" secondTitle="Experience" />
      <div style={{ marginTop: "10px" }}></div>
      <h4>Collection of my project</h4>
      <h2>Work Showcase</h2>
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
      <h2>Recent Articles</h2>
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
        text="Start Consulting"
        onClick={() => alert("Button clicked!")}
      />
      <div style={{ marginTop: "10px" }}></div>
      <Question />
      <div style={{ marginTop: "10px" }}></div>
      <h4>What We Do</h4>
      <Footercomponent />
    </div>
  );
}

export default App;
