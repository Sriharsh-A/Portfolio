import React, { useState } from 'react';
import './Work.css';

const workData = [
  {
    id: 1,
    title: "CoLearn",
    category: "Learning",
    year: "Dec 2025 - Present",
    desc: "CoLearn is a collaborative learning platform where students can create unique rooms to study and build together. It supports collaborative coding with commit-based change tracking, shared study materials with real-time edits, and secure authentication.",
    tools: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
    link: "#"
  },
  {
    id: 2,
    title: "IMGE",
    category: "Shopify",
    year: "Sep 2025 - Present",
    desc: "An Indian streetwear brand focused on oversized silhouettes and bold, conceptual design. IMGE blends art, emotion, and identity to create pieces that feel personal rather than trend-driven.",
    tools: ["Shopify Liquid", "CSS3", "JavaScript", "Adobe Illustrator"],
    link: "#"
  },
  {
    id: 3,
    title: "Phishing Detection",
    category: "Real-time Data",
    year: "Jan 2025 - June 2025",
    desc: "A Chrome browser extension that uses machine learning to analyze URLs in real time and detect potential phishing or malicious websites. The system evaluates multiple features such as domain structure and URL patterns.",
    tools: ["Python", "Flask", "Scikit-Learn", "Chrome Extension API"],
    link: "#"
  },
  {
    id: 4,
    title: "Feelit",
    category: "Machine Learning",
    year: "Jan 2024 - June 2024",
    desc: "Feelit is a machine learning–based music player that detects a user’s emotional state and recommends music accordingly. The system captures facial expressions through a camera to classify emotions.",
    tools: ["Python", "OpenCV", "TensorFlow", "Spotify API"],
    link: "#"
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="work-main">
      <h1 className="section-title">Projects</h1>
      
      <div className="work-grid">
        {workData.map((project) => (
          <div 
            className="normal-card" 
            key={project.id}
            onClick={() => setSelectedProject(project)} 
          >
            <div className="card-header">
               <span>0{project.id}</span>
               <span className="year">{project.year}</span>
               <span className="category">{project.category}</span>
            </div>
            
            <h3>{project.title}</h3>
            <p>{project.desc.substring(0, 200)}...</p>
            
            <span className="card-link">Click to open &rarr; </span>
          </div>
        ))}
      </div>

     
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          
          {/* Stop click inside modal from closing it */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <span className="category-tag">{selectedProject.category}</span>
            </div>

            <p className="full-desc">{selectedProject.desc}</p>
            
            <div className="tools-section">
              <h4>Tech Stack Used:</h4>
              <div className="tools-grid">
                {selectedProject.tools.map((tool, index) => (
                  <span key={index} className="tool-badge">{tool}</span>
                ))}
              </div>
            </div>

            <a href={selectedProject.link} className="view-project-btn">
              View Project &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;