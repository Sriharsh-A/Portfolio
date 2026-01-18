import React from 'react';
import './Work.css';

const workData = [
  {
    id: 1,
    title: "E-Commerce",
    category: "React / Redux",
    desc: "A fully functional shopping cart with payment integration and user authentication.",
    link: "#"
  },
  {
    id: 2,
    title: "Dashboard",
    category: "Analytics / API",
    desc: "Real-time data visualization using Recharts, Node.js, and WebSocket connections.",
    link: "#"
  },
  {
    id: 3,
    title: "Weather App",
    category: "Real-time Data",
    desc: "Live weather tracking with location services and 5-day forecasting.",
    link: "#"
  },
  {
    id: 4,
    title: "Task Manager",
    category: "Productivity",
    desc: "Drag and drop task management with Firebase auth and cloud storage.",
    link: "#"
  },
];

const Work = () => {
  return (
    <div className="work-main">
      <h1 className="section-title">Projects</h1>
      
      <div className="work-grid">
        {workData.map((project) => (
          <div className="normal-card" key={project.id}>
            
            <div className="card-header">
               <span>0{project.id}</span>
               <span className="category">{project.category}</span>
            </div>
            
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            
            <a href={project.link} className="card-link">View Project → </a>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;