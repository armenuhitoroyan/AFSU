import "./App.css";
import RoundedButton from "./Components/RoundedButton";
import Question from "./Components/Question";
import Footercomponent from "./Components/Footer/FooterComponent";
import Header from "./Components/Header/Header";
import AboutListMenu from "./Components/AboutListMenu";
import SkillsGrid from "./Components/Card/SkillCard";
import GraphicsCard from "./Components/Card/GraphicsCard";
import ResumeComponent from "./Components/Resume/ResumeComponent";

function App() {
  return (
    <div className="App">
      <div style={{ marginTop: "10px" }}></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Header />
      </div>
      <h2>About Me</h2>
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
        <SkillsGrid />
      </div>
      <h4>What We Do</h4>
      <h2>Our Services</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "10px",
            margin: "10px",
            width: "25%",
          }}
        >
          <GraphicsCard
            svg="svg-img"
            title="Graphichs Design"
            text="Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy
        magnam maores."
          />
          <GraphicsCard
            svg="svg-img"
            title="Graphichs Design"
            text="Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy
        magnam maores."
          />
          <GraphicsCard
            svg="svg-img"
            title="Stunning Design"
            text="Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy
        magnam maores."
          />
        </div>
        <div
          style={{
            display: "flex",
            padding: "10px",
            margin: "10px",
            width: "25%",
          }}
        >
          <GraphicsCard
            svg="svg-img"
            title="Immigration Application"
            text="Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy
        magnam maores."
          />
          <GraphicsCard
            svg="svg-img"
            title="Innovative Ideas"
            text="Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy
        magnam maores."
          />
          <GraphicsCard
            svg="svg-img"
            title="Project Management"
            text="Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy
        magnam maores."
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}></div>
      <h4>Professional Experience</h4>
      <h2>My Resume</h2>
      <ResumeComponent firstTitle="Education" secondTitle="Experience" />
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
