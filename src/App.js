import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Skills from './pages/Skills'; // Import Skills
import Photography from './pages/Photography';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* FIX: Changed path from "/" to "/work" */}
          <Route path="/work" element={<Work />} />
          
          {/* Added Skills Route */}
          <Route path="/skills" element={<Skills />} />
          
          <Route path="/photography" element={<Photography />} />
          
          {/* Placeholder for Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;