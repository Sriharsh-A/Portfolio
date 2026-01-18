import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Work from './pages/Work';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Photography from './pages/Photography';
import Contact from './pages/Contact'; // We will create this next
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      {/* SECTIONS: We assign IDs so the Navbar links can find them */}
      <section id="home">
        <Home />
      </section>

      <section id="work">
        <Work />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      
      <section id="skills">
        <Skills />
      </section>

      <section id="photography">
        <Photography />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;