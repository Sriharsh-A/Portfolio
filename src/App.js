import React, { useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Experience from './pages/Experience';
import AllExperience from './pages/AllExperience';
import Skills from './pages/Skills';
import Gallery from './pages/Gallery'; // 1. IMPORT GALLERY
import Contact from './pages/Contact'; 
import Warning from './pages/Warning';
import About from './pages/About';
import './App.css';

// --- SCROLL HANDLER ---
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.targetId) {
      const element = document.getElementById(location.state.targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollHandler />

      <div className="app-container">
        
        <Routes>
          {/* ROUTE 1: Main Landing Page */}
          <Route path="/" element={
            <>
              <Navbar />
              
              <section id="home"><Home /></section>
              <section id="work"><Work /></section>
              <section id="experience"><Experience /></section>
              <section id="skills"><Skills /></section>
              
              {/* 2. ADD GALLERY SECTION HERE */}
              <section id="gallery"><Gallery /></section>
              
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