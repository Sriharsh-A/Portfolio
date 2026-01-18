import React from 'react';
// REMOVE THIS LINE: import { Link } from 'react-router-dom'; 
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

        
      </div>
    </div>
  );
};

export default Home;