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

        {/* NEW "LEARN MORE" BUTTON */}
        <div style={{ marginTop: '40px' }}>
          <Link to="/about" style={{
            textDecoration: 'none',
            color: '#dfff00',              // Neon Text
            border: '1px solid #dfff00',   // Neon Border
            padding: '12px 30px',
            borderRadius: '50px',          // Pill Shape
            fontSize: '0.9rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#dfff00';
            e.target.style.color = 'black';
            e.target.style.boxShadow = '0 0 20px #dfff00'; // Glow effect
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#dfff00';
            e.target.style.boxShadow = 'none';
          }}
          >
            Learn More About Me
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Home;