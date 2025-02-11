import React, { useState, useEffect } from "react";
import "../styles/Main.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import { Link as ScrollLink } from "react-scroll";

function Main() {
  const [activeSection, setActiveSection] = useState("home");
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const buffer = 80;

    const sections = [
      { id: "home", top: 0, bottom: 0 },
      { id: "about", top: 0, bottom: 0 },
      { id: "skills", top: 0, bottom: 0 },
      { id: "education", top: 0, bottom: 0 },
      { id: "projects", top: 0, bottom: 0 },
      { id: "contact", top: 0, bottom: 0 },
    ];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        section.top = element.offsetTop - buffer;
        section.bottom = element.offsetTop + element.offsetHeight - buffer;
      }
    });

    const scrollTop = window.scrollY + buffer;

    sections.forEach((section) => {
      if (scrollTop >= section.top && scrollTop < section.bottom) {
        setActiveSection(section.id);
      }
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <a href="#" className="nav-logo">
          Satyanarayana
          <span> Jakkampudi</span>
        </a>
        <nav className={`nav-items ${isMenuOpen ? "show" : ""}`}>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className={activeSection === "home" ? "active" : ""}
            onClick={handleMenuItemClick}
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={activeSection === "about" ? "active" : ""}
            onClick={handleMenuItemClick}
          >
            About
          </ScrollLink>

          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className={activeSection === "skills" ? "active" : ""}
            onClick={handleMenuItemClick}
          >
            Skills
          </ScrollLink>

          <ScrollLink
            to="education"
            smooth={true}
            duration={500}
            className={activeSection === "education" ? "active" : ""}
            onClick={handleMenuItemClick}
          >
            Education
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className={activeSection === "projects" ? "active" : ""}
            onClick={handleMenuItemClick}
          >
            Projects
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={activeSection === "contact" ? "active" : ""}
            onClick={handleMenuItemClick}
          >
            Contact
          </ScrollLink>
        </nav>
        <div id="mobile-nav" onClick={toggleMenu}>
          <i
            id="bar"
            className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Main;