import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div className="logo">MY PORTFOLIO</div>
      <ul style={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/photography">Photography</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#eee' },
  links: { display: 'flex', listStyle: 'none', gap: '20px' }
};

export default Navbar;