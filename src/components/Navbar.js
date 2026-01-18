import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      {/* "MY PORTFOLIO" replaced with "Home" */}
      <div className="logo" onClick={() => scrollToSection('home')}>SRIHARSH</div>
      
      <ul className="nav-links">
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