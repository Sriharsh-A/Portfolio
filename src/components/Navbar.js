import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for Navbar styles

const Navbar = () => {
  // Helper to scroll smoothly (optional fallback, but good practice)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scrollToSection('home')}>MY PORTFOLIO</div>
      <ul className="nav-links">
        {/* We use onClick to trigger scroll, or just href="#id" */}
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#photography">Photography</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;