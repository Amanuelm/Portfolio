import React from "react";
import "./List.css";

function ListGroup() {
  const items = [
    { name: "HTML", iconClass: "devicon-html5-plain colored" },
    { name: "CSS", iconClass: "devicon-css3-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "React", iconClass: "devicon-react-original colored" },
    { name: "React Native", iconClass: "devicon-react-original colored" },
    { name: "Flutter", iconClass: "devicon-flutter-plain colored" },
    { name: "Dart", iconClass: "devicon-dart-plain colored" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
    { name: "Express", iconClass: "devicon-express-original" },
    { name: "SQL", iconClass: "devicon-mysql-plain colored" },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
    { name: "Python", iconClass: "devicon-python-plain colored" },
    { name: "FastAPI", iconClass: "devicon-fastapi-plain colored" },
  ];

  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </div>
      <div className="skills-grid">
        {items.map((item) => (
          <div className="skill-card" key={item.name}>
            <i className={`${item.iconClass} skill-icon`}></i>
            <span className="skill-name">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ListGroup;