import React, { useState, useEffect } from "react";
import profilePhoto from "../images/Photo.jpg";
import "../styles/Home.css";

function Home() {
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

  const showResume = () => {
    window.open("https://satya0082.github.io/MyResume/", "_blank");
  };

  return (
    <div className="homeContent">
      <div className="contentContainer">
        <h3>Hello, Iam</h3>
        <h1>Satyanarayana Jakkampudi</h1>
        <h3>And I'm a </h3>
        <p className="typingAnimation">
          {typingText}
          <span className="cursor"></span>
        </p>
        <button className="resumeButton" onClick={showResume}>
          Download CV
        </button>
      </div>
      <div className="imageContainer">
        <img src={profilePhoto} alt="Your Photo" className="profilePhoto" />
      </div>
    </div>
  );
}

export default Home;