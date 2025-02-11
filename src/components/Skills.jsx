import React from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    { name: "Java", proficiency: 90 },
    { name: "HTML", proficiency: 95 },
    { name: "CSS", proficiency: 90 },
    { name: "React", proficiency: 75 },
    { name: "JavaScript", proficiency: 75 },
    { name: "MySQL", proficiency: 80 },
  ];

  const interpersonalSkills = [
    { name: "Communication", proficiency: 85 },
    { name: "Teamwork", proficiency: 75 },
    { name: "Creativity", proficiency: 80 },
    { name: "Problem Solving", proficiency: 90 },
  ];

  const Skill = ({ name, proficiency }) => {
    return (
      <div className="skill">
        <div className="skillName">
          {name} {proficiency}%
        </div>
        <div className="progressContainer">
          <div
            className="progressBar"
            style={{ width: `${proficiency}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="skillSection">
      <h2 className="skillSectionHeader">
        My <span>Skills</span>
      </h2>
      <hr className="skillsSectionDivider" />
      <div className="totalSkills">
        <div className="skillList1">
          <h2 className="skillHeading1">Technical Skills</h2>
          {skills.map((skill, index) => (
            <Skill
              key={index}
              name={skill.name}
              proficiency={skill.proficiency}
            />
          ))}
        </div>
        <div className="skillList2">
          <h2 className="skillHeading2">Interpersonal Skills</h2>
          <div className="interpersonalSkills">
            {interpersonalSkills.map((skill, index) => (
              <div className="interpersonalSkill" key={index}>
                <div className="skillName">{skill.name}</div>
                <div className="circleProgressBar">
                  <svg viewBox="0 0 100 100">
                    <circle className="progressBg" cx="50" cy="50" r="40" />
                    <circle
                      className="progressFill"
                      cx="50"
                      cy="50"
                      r="40"
                      style={{
                        strokeDasharray: `${
                          (2 * Math.PI * 40 * skill.proficiency) / 100
                        } ${2 * Math.PI * 40}`,
                        transform: "rotate(-90deg)",
                        transformOrigin: "center",
                      }}
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;