import React from "react";
import "../../style/SkillCard.css";

const SkillCard = ({ percentage, skill }) => {
  return (
    <div className="skill-card">
      <h2>{percentage}%</h2>
      <p>{skill}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const SkillsGrid = () => {
  const skills = [
    { percentage: 50, skill: "Graphic Design" },
    { percentage: 75, skill: "Development" },
    { percentage: 38, skill: "Marketing Ideas" },
    { percentage: 63, skill: "Web Management" },
  ];

  return (
    <div className="skills-grid">
      {skills.map((item, index) => (
        <SkillCard
          key={index}
          percentage={item.percentage}
          skill={item.skill}
        />
      ))}
    </div>
  );
};

export default SkillsGrid;
