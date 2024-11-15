import React from "react";
import "../../style/Resume.css";
import Resume from "./Resume";

const ResumeComponent = ({ firstTitle, secondTitle }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-section">
        <h2 text-3xl font-bold underline>
          {firstTitle}
        </h2>
        <div className="timeline">
          <Resume
            year="2012 to 2014"
            info="Bachelor Degree"
            cardTitle="University of Studies"
            description="Lorem ipsum indolor st amet, cmetc ur adips locing elit, sedi dinm indolo sum indolor st ailmes."
          />

          <Resume
            year="2010 to 2012"
            info="Master Degree"
            cardTitle="University of South Education"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore."
          />

          <Resume
            year="2008 to 2010"
            info="Advanced Post Graduate"
            cardTitle="University of South Education"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore."
          />
        </div>
      </div>

      <div className="timeline-section">
        <h2 text-3xl font-bold underline>
          {secondTitle}
        </h2>
        <div className="timeline">
          <Resume
            year="2018 to Present"
            info="Graphic Designer / Web Designer"
            cardTitle="Company"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore."
          />
          <Resume
            year="2016 to 2018"
            info="Junior UI/UX Designer"
            cardTitle="Company"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore."
          />
          <Resume
            year="2004 to 2016"
            info="Senior UI/UX Designer"
            cardTitle="Company"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore."
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
