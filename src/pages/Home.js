import React from 'react';
// REMOVE THIS LINE: import { Link } from 'react-router-dom'; 
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
        <div style={{ marginTop: '50px' }}>
          <Link to="/warning" style={{
            textDecoration: 'none',
            color: '#333', // Dark grey (hard to see intentionally)
            fontSize: '0.8rem',
            border: '1px dashed #333',
            padding: '10px 20px',
            borderRadius: '5px',
            transition: 'color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.color = '#dfff00'}
          onMouseOut={(e) => e.target.style.color = '#333'}
          >
            click here
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Home;