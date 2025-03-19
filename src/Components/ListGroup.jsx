import React from "react";
import "./List.css";

function ListGroup() {

  const items = [
    { name: "HTML", iconClass: "devicon-html5-plain" },
    { name: "CSS", iconClass: "devicon-css3-plain" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain" },
    { name: "React", iconClass: "devicon-react-original" },
    { name: "React Native", iconClass: "devicon-react-original" },
    { name: "Flutter", iconClass: "devicon-flutter-plain" },
    { name: "Dart", iconClass: "devicon-dart-plain" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain" },
    { name: "Express", iconClass: "devicon-express-original" },
    { name: "SQL", iconClass: "devicon-mysql-plain" },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
    { name: "Python", iconClass: "devicon-python-plain" },
    { name: "FastAPI", iconClass: "devicon-fastapi-plain" },
  ];

  return (
    <div className="list-group">
      <div className="header">
        <h1>My Skills</h1>
        <p>
          These are the different technologies I have worked with during my time
          as a developer.
        </p>
      </div>
      <div className="space"></div>
      {items.map((item) => (
        <div className="list-group-item" key={item.name}>
          <i className={`${item.iconClass} iconn`}
          ></i> <p className="stackname">{item.name}</p>
        </div>
      ))}

      <div className="space1"></div>
    </div>
  );
}

export default ListGroup;