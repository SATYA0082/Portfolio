import React from "react";
import "../styles/Education.css";

function EducationCard({ year, degree, institution, grade }) {
  return (
    <div className="educationCard">
      <h3>{year}</h3>
      <p className="degree">{degree}</p>
      <p className="institution">{institution}</p>
      <p className="grade">Grade : {grade}</p>
    </div>
  );
}

function Education() {
  const educationData = [
    {
      year: "2020 - 2023",
      degree: "Bachelor of Technology",
      institution: "BVC Engineering College",
      grade: "8.50",
    },
    {
      year: "2017 - 2020",
      degree: "Diploma (CME)",
      institution: "BVC Institute of Technology & Science",
      grade: "8.00",
    },
    {
      year: "2016 - 2017",
      degree: "Higher Secondary School",
      institution: "Vignan EM High School",
      grade: "First  Class Distinction",
    },
  ];

  return (
    <div>
      <h2 className="educationSectionHeader">Education</h2>
      <hr className="educationSectionDivider" />
      <div className="educationCardsContainer">
        {educationData.map((education, index) => (
          <EducationCard key={index} {...education} />
        ))}
      </div>
    </div>
  );
}

export default Education;