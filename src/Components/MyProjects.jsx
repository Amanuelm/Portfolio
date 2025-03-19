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
    description: "A real-time urban issue reporting app.",
    techStack: ["ReactNative", "Express", "MongoDB"],
    github:"https://github.com/Amanuelm/CityWatchMobileApp1",
        },
    {
      title: "Biuld our team",
      image: but,
      description: "A football lineup biulder app.",
      techStack: ["Flutter", "Firebase"],
      github:"https://github.com/Amanuelm/B.U.T",
    },
    {
      title: "Yet foods",
      image: yet,
      description: "A resturant recomendation app",
      techStack: ["Flutter", "Firebase"],
      github:"https://github.com/Amanuelm/Yet-foods",
    }
    ]
  return (
    <div className='myprojects'>

    <div className='alltext'>
    <h1>My Projects</h1>
    <p>These are my projects that i have previously worked on.</p>
    </div>
    <div className='scroll-conatiner'>
    {projects.map((project) => ( <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tech-stack">
      <a href={project.github} target="_blank">
      <GitHubIcon className='iconlinkdin' sx={{ fontSize: 30 }}/>
      </a>
        {project.techStack.map((tech, index) => (
          <span key={index} className="tech-item">{tech}</span>
        ))}
      </div>
    </div>))}
</div>


    </div>
  )
}

export default MyProjects