import React, { useEffect } from 'react'; // 1. Import useEffect
// 2. Import useLocation
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Experience from './pages/Experience';
import AllExperience from './pages/AllExperience';
import Skills from './pages/Skills';
import Contact from './pages/Contact'; 
import Warning from './pages/Warning';
import About from './pages/About';
import './App.css';

// --- NEW COMPONENT: SCROLL HANDLER ---
// This component listens for the "hidden" navigation state and scrolls to the section.
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the Navbar sent a targetId (e.g., "work", "skills") via state
    if (location.state && location.state.targetId) {
      const element = document.getElementById(location.state.targetId);
      if (element) {
        // Slight delay ensures the DOM is ready before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null; // This component renders nothing visually
};

function App() {
  return (
    <Router>
      {/* 3. ACTIVATE THE SCROLL HANDLER INSIDE THE ROUTER */}
      <ScrollHandler />

      <div className="app-container">
        
        <Routes>
          {/* ROUTE 1: Main Landing Page */}
          <Route path="/" element={
            <>
              {/* Navbar and Sections */}
              <Navbar />
              
              <section id="home"><Home /></section>
              <section id="work"><Work /></section>
              <section id="experience"><Experience /></section>
              <section id="skills"><Skills /></section>
              <section id="contact"><Contact /></section>
            </>
          } />

          {/* ROUTE 2: Separate Pages */}
          <Route path="/all-experience" element={<AllExperience />} />  
          <Route path="/warning" element={<Warning />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;