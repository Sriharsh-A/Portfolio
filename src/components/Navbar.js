import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom'; // 1. Added Link import
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === '/';

  const handleNavigation = (e, targetId) => {
    e.preventDefault(); 

    if (isHomePage) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { targetId: targetId } });
    }
  };

  return (
    <nav className="navbar">
      <div 
        className="logo" 
        onClick={(e) => handleNavigation(e, 'home')}
      >
        SRIHARSH
      </div>
      
      <ul className="nav-links">
        {/* 2. ADDED ABOUT LINK (Direct navigation) */}
        

        {/* 3. SCROLL SECTIONS */}
        <li><a href="/" onClick={(e) => handleNavigation(e, 'work')}>Projects</a></li>
        <li><a href="/" onClick={(e) => handleNavigation(e, 'experience')}>Experience</a></li>
        <li><a href="/" onClick={(e) => handleNavigation(e, 'skills')}>Skills</a></li>
        
        
        {/* REMOVED PHOTOGRAPHY */}

        <li><a href="/" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;