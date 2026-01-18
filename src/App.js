import React from 'react';
// 1. THIS IMPORT IS CRITICAL
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Experience from './pages/Experience';
import AllExperience from './pages/AllExperience'; // Make sure this file exists!
import Skills from './pages/Skills';
import Photography from './pages/Photography';
import Contact from './pages/Contact'; 
import './App.css';
import Warning from './pages/Warning';

function App() {
  return (
    <Router>
      <div className="app-container">
        
        <Routes>
          {/* ROUTE 1: Main Landing Page */}
          <Route path="/" element={
            <>
              {/* Navbar and Sections go HERE, inside the element fragment */}
              <Navbar />
              
              <section id="home"><Home /></section>
              <section id="work"><Work /></section>
               <section id="experience"><Experience /></section>
              <section id="skills"><Skills /></section>
              <section id="photography"><Photography /></section>
              <section id="contact"><Contact /></section>
            </>
          } />

          {/* ROUTE 2: The Separate Page */}
          <Route path="/all-experience" element={<AllExperience />} />  
          <Route path="/warning" element={<Warning />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;