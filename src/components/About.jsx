import React, { useState, useEffect } from "react";
import profilePhoto from "../images/Photo.jpg";
import "../styles/About.css";

function About() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const [textPhrases] = useState([
    "Frontend Developer",
    "Designer",
    "Web Developer",
    "Learner",
  ]);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [typingText, typingIndex, isDeleting, typingSpeed]);

  const handleTyping = () => {
    const currentText = textPhrases[typingIndex];
    const currentIndex = typingText.length;

    if (!isDeleting) {
      // Typing
      setTypingText(currentText.substring(0, currentIndex + 1));
    } else {
      // Deleting
      setTypingText(currentText.substring(0, currentIndex - 1));
    }

    setTypingSpeed(isDeleting ? 50 : 100);

    if (!isDeleting && typingText === currentText) {
      // Start deleting
      setIsDeleting(true);
    } else if (isDeleting && typingText === "") {
      setTypingIndex((prevIndex) => (prevIndex + 1) % textPhrases.length);
      setIsDeleting(false);
    }
  };

  return (
    <div className="aboutSection">
      <h2 className="aboutSectionHeader">
        About <span>Me</span>
      </h2>
      <hr className="aboutSectionDivider" />
      <div className="aboutContent">
        <div>
          <img
            src={profilePhoto}
            alt="Your Photo"
            className="profilePhotoAbout"
          />
        </div>
        <div className="aboutMatter">
          <h3 className="typingAnimation">
            <span className="im-in-about">I'm a</span> {typingText}{" "}
            <span className="cursor"></span>
          </h3>

          <p>
            A Computer Science Engineer and dedicated learner with extensive
            knowledge of Computer Science concepts and creative Web Designer. A
            budding web developer passionate about crafting engaging user
            experiences with hands-on experience in React.js, ASP .NET, and
            database management.
          </p>
          <div className="aboutInterests">
             <p>
                  <strong>Profile</strong> <b>:</b> Software Development
             </p>
             <p>
                  <strong>Domain</strong> <b>:</b> Web Development
             </p>
             <p>
                  <strong>Education</strong> <b>:</b> Bachelor of Technology (B.Tech in CS)
            </p>
            <p>
                  <strong>Interests</strong> <b>:</b> Travelling, Information Gathering, Reading
            </p>
             <p>
                  <strong>Languages Known</strong> <b>:</b> English, Telugu, Hindi
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;