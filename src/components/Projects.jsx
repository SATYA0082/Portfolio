import React, { useState, useRef, useEffect } from "react";
import "../styles/Projects.css";

function Projects() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const modalRef = useRef(null);

  const projects = [
       {
      title: "Cook Hiring System",
      period: "Feb 2023 to July 2023",
      technology: "React js, ASP.Net API, MySQL",
      moreInfo:
        "This application is built to help customers to post cooking jobs and the cooks can apply for the particular job posting online. While applying for the job, jobseekers can filter profile by uploading required documents and basic information. Customers have provision for submitting their reviews and profile to post the jobs. The Admins can view all the jobs submitted by customers and applied by the Job Seekers. Admin can either accept or reject the job.",
      repo: "https://github.com/SATYA0082/CookHiringSystem",
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentProject(null);
  };

  useEffect(() => {
    if (modalVisible && modalRef.current) {
      modalRef.current.focus();
    }
  }, [modalVisible]);

  return (
    <div>
      <h2 className="projectsSectionHeader">Projects</h2>
      <hr className="projectsSectionDivider" />
      <div className="projectsList">
        {projects.map((project, index) => (
          <Project key={index} project={project} openModal={openModal} />
        ))}
      </div>
      {modalVisible && (
        <Modal project={currentProject} onClose={closeModal} ref={modalRef} />
      )}
      <div className="gitDiv">
        <button className="gitButton">
          <a
            href="https://github.com/SATYA0082?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my Github profile for more projects
          </a>
        </button>
      </div>
    </div>
  );
}

const Project = ({ project, openModal }) => (
  <div className="myproject">
    <h2>{project.title}</h2>
    <h3>{project.period}</h3>
    <p className="projectTechnology">Technology Stack: {project.technology}</p>
    <button onClick={() => openModal(project)}>More Info</button>
  </div>
);

const Modal = React.forwardRef(({ project, onClose }, ref) => (
  <div className="modalOverlay" onClick={onClose}>
    <div
      className="modalContent"
      onClick={(e) => e.stopPropagation()}
      ref={ref}
    >
      <div className="modalHeader">
        <h2>{project.title}</h2>
        <i className="fas fa-times closeIcon" onClick={onClose}></i>
      </div>
      <h3>{project.period}</h3>
      <p>{project.moreInfo}</p>
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      )}
    </div>
  </div>
));

export default Projects;