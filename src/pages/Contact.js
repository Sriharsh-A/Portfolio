import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's Work Together</h1>
      <p className="contact-text">
        Have a project in mind? I'm currently open to new opportunities.
      </p>
      
      <a href="mailto:your.email@example.com" className="email-btn">
        Say Hello
      </a>

      <div className="footer">
        <p>© 2026 Your Name. Made with React.</p>
      </div>
    </div>
  );
};

export default Contact;