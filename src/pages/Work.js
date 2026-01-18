import React, { useState } from 'react';
import './Work.css';

// Instagram Icon
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const workData = [
  {
    id: 1,
    title: "CoLearn",
    category: "Learning",
    year: "Dec 2025 - Present",
    desc: "CoLearn is a collaborative learning platform where students can create unique rooms to study and build together. It supports collaborative coding with commit-based change tracking, shared study materials with real-time edits, and secure authentication.",
    tools: ["React"],
    link: "#" 
  },
  {
    id: 2,
    title: "IMGE",
    category: "Shopify",
    year: "Sep 2025 - Present",
    desc: "An Indian streetwear brand focused on oversized silhouettes and bold, conceptual design. IMGE blends art, emotion, and identity to create pieces that feel personal rather than trend-driven.",
    tools: ["Shopify Liquid", "Photoshop", "Blender"],
    link: "https://www.wearimge.in", 
    instagram: "https://www.instagram.com/wearimge.in" 
  },
  {
    id: 3,
    title: "Phishing Detection",
    category: "Real-time Data",
    year: "Jan 2025 - June 2025",
    desc: "A Chrome browser extension that uses machine learning to analyze URLs in real time and detect potential phishing or malicious websites. The system evaluates multiple features such as domain structure and URL patterns.",
    tools: ["Python", "React", "Chrome Extension API"],
    link: "https://github.com/Sriharsh-A/phising-detection"
  },
  {
    id: 4,
    title: "Feelit",
    category: "Machine Learning",
    year: "Jan 2024 - June 2024",
    desc: "Feelit is a machine learning–based music player that detects a user’s emotional state and recommends music accordingly. The system captures facial expressions through a camera to classify emotions.",
    tools: ["Python", "OpenCV", "TensorFlow", "Spotify API"],
    link: "https://github.com/Sriharsh-A/Feelit"
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
          
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            

            {/* 2. Instagram Button (Cleaner Code) */}
            {selectedProject.instagram && (
              <a 
                href={selectedProject.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="instagram-btn"
              >
                <InstagramIcon /> 
              </a>
            )}

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

           <div className="modal-actions">
                {/* CONDITIONAL RENDERING: Check if ID is 1 */}
                {selectedProject.id === 1 ? (
                  // Render "Currently Working" text for ID 1
                  <span 
                    className="view-project-btn" 
                    style={{ 
                      cursor: 'default', 
                      opacity: 0.7,
                      color: '#dfff00' 
                    }}
                  >
                    Currently Working 
                  </span>
                ) : (
                  // Render standard Link for everyone else
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="view-project-btn"
                  >
                    View Project &rarr;
                  </a>
                )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Work;