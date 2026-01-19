import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'; // Import icons
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      {/* --- Background Decor --- */}
      <div className="contact-bg-grid"></div>
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>

      <div className="contact-content">
        {/* Main Title with Outline Effect */}
        <h1 className="contact-title">
          LET'S BUILD <br />
          <span className="highlight">THE FUTURE</span>
        </h1>
        
        <p className="contact-text">
          Have a project in mind or just want to chat tech? 
          <br />I'm currently open to new opportunities and collaborations.
        </p>
        
        {/* Main Call to Action */}
        <a href="mailto:your.email@example.com" className="main-email-btn">
          SHARE YOUR IDEAS &rarr;
        </a>

        {/* Social Links Row */}
        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
        </div>

      </div>

      <div className="footer">
        <p>© {new Date().getFullYear()} SRIHARSH AKKALA. // CODED WITH REACT.</p>
      </div>
    </div>
  );
};

export default Contact;