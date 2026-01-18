import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h2 className="greeting">HELLO, I AM</h2>
        <h1 className="name">SRIHARSH AKKALA</h1>
        <p className="description">
          A Creative Developer & Designer building digital experiences.
          <br /> 
          Specializing in React, UI/UX, and Photography.
        </p>

        <div className="button-group">
          {/* Primary Button */}
          <Link to="/work" className="btn btn-primary">
            View My Work
          </Link>
          
          {/* Secondary Button */}
          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;