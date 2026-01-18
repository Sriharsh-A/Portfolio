import React, { useState } from 'react';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    role: "Brand Identity Designer",
    company: "Freelance Project",
    duration: "Oct 2025",
    description: "Designed a complete logo and visual identity system. Created vector assets, defined color palettes, and ensured brand consistency across digital platforms.",
    link: "https://dribbble.com/", 
    // ADD PHOTOS HERE:
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799312c95d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    role: "Graphic Designer",
    company: "College Event",
    duration: "Aug 2025",
    description: "Created social media assets and promotional posters. Collaborated with the marketing team to increase engagement through visual storytelling.",
    link: "#",
    images: [] // Empty array if no images
  },
  {
    id: 3,
    role: "UI Contributor",
    company: "Open Source",
    duration: "2024",
    description: "Contributed UI concepts and visual assets for community-driven projects, focusing on accessibility and dark mode aesthetics.",
    link: "#",
    images: [] 
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <div className="experience-main">
      <h1 className="section-title">Experience</h1>
      
      {/* THE DECK */}
      <div className="experience-deck">
        {experienceData.map((item) => (
          <div 
            className="xp-card" 
            key={item.id} 
            onClick={() => setSelectedExp(item)}
          >
            <div className="xp-header">
              <span className="xp-date">{item.duration}</span>
              <span className="xp-company">{item.company}</span>
            </div>

            <div className="xp-body">
              <h3>{item.role}</h3>
              <p>{item.description.substring(0, 100)}...</p> 
            </div>
            
            <div className="xp-footer">
               <div className="neon-line"></div>
               <span className="click-hint">Click for details</span>
            </div>
          </div>
        ))}
      </div>

      {/* THE MODAL (With Unique 'xp-' Classes) */}
      {selectedExp && (
        <div className="xp-modal-overlay" onClick={() => setSelectedExp(null)}>
          <div className="xp-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="xp-close-btn" onClick={() => setSelectedExp(null)}>×</button>

            <div className="xp-modal-header">
              <span className="xp-modal-date">{selectedExp.duration}</span>
              <h2>{selectedExp.role}</h2>
              <h4 className="xp-modal-company">{selectedExp.company}</h4>
            </div>

            {/* --- IMAGE SECTION --- */}
            {selectedExp.images && selectedExp.images.length > 0 && (
              <div className="xp-image-grid">
                {selectedExp.images.map((img, index) => (
                  <div key={index} className="xp-img-wrapper">
                    <img src={img} alt="Work Proof" className="xp-proof-img" />
                  </div>
                ))}
              </div>
            )}

            <p className="xp-full-desc">{selectedExp.description}</p>

            {selectedExp.link && (
              <div className="xp-modal-actions">
                <a 
                  href={selectedExp.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="xp-view-btn"
                >
                  View Work &rarr;
                </a>
              </div>
            )}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;