import React from 'react';
import './Work.css';

const Work = () => {
  // 1. The Data: Easier to manage than hardcoding HTML
  const workData = [
    {
      id: 1,
      title: "E-Commerce Store",
      desc: "A fully functional online shop built with React and Redux.",
      tags: ["React", "Redux", "CSS"],
      link: "#" // You would put your GitHub or live link here
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      desc: "An analytics dashboard with dark mode toggle.",
      tags: ["React", "API", "Charts"],
      link: "#"
    },
    {
      id: 3,
      title: "Weather App",
      desc: "Real-time weather tracking using OpenWeather API.",
      tags: ["Javascript", "API", "HTML"],
      link: "#"
    },
    {
      id: 4,
      title: "Task Manager",
      desc: "A productivity tool with drag-and-drop features.",
      tags: ["React", "Firebase"],
      link: "#"
    },
  ];

  return (
    <div className="work-container">
      <h1 className="section-title">My Projects</h1>
      
      <div className="project-grid">
        {/* 2. The Map: Loops through data to create cards */}
        {workData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              
              <a href={project.link} className="card-btn">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;