import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar so it shows on this page too
import './About.css';

// Import your profile picture
// import myImg from '../assets/my-profile.jpg'; 

const About = () => {
  return (
    <>
      <Navbar /> 
      <div className="about-page">
        <div className="about-container">
          
          {/* LEFT: Image Section */}
          <div className="about-image-section">
            <div className="image-frame">
              {/* Replace src with your actual image variable or URL */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                alt="Profile" 
              />
              <div className="frame-glow"></div>
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="about-text-section">
            <h1 className="about-title">ABOUT <span className="highlight">ME</span></h1>
            <h3 className="about-subtitle">Developer. Designer. Creator.</h3>
            
            <p className="about-bio">
              I am <strong>Sriharsh Akkala</strong>, a multidisciplinary developer based in India. 
              My journey sits at the intersection of <strong>logic and creativity</strong>. 
              I don't just write code; I build immersive digital experiences that tell a story.
            </p>
            
            <p className="about-bio">
              With a background in <strong>Full Stack Development</strong> and a passion for 
              <strong>UI/UX Design</strong>, I specialize in creating applications that are 
              visually striking and technically robust. When I'm not debugging, I'm exploring 
              the world through my camera lens or sketching new ideas.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">03+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Coffee</span>
              </div>
            </div>
            
            {/* Optional Resume Button */}
            <button className="resume-btn">Download Resume</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;