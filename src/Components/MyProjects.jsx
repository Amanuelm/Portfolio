import React from 'react'
import './Myprojects.css'
import cityWatch from '../assets/cityWatch.jpg'
import but from '../assets/but.png'
import yet from '../assets/Yet.png'
import GitHubIcon from '@mui/icons-material/GitHub';

function MyProjects() {
  const projects = [
    {
      title: "CityWatch",
      image: cityWatch,
      description: "A real-time urban issue reporting app that allows citizens to report and track infrastructure problems.",
      techStack: ["React Native", "Express", "MongoDB"],
      github: "https://github.com/Amanuelm/CityWatchMobileApp1",
    },
    {
      title: "Build Our Team",
      image: but,
      description: "A football lineup builder application for organizing and managing sports teams effectively.",
      techStack: ["Flutter", "Firebase"],
      github: "https://github.com/Amanuelm/B.U.T",
    },
    {
      title: "Yet Foods",
      image: yet,
      description: "A restaurant recommendation app that helps users discover new places to eat based on preferences.",
      techStack: ["Flutter", "Firebase"],
      github: "https://github.com/Amanuelm/Yet-foods",
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A selection of my recent work.</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="GitHub Repository">
                  <GitHubIcon sx={{ fontSize: 32 }} />
                </a>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyProjects