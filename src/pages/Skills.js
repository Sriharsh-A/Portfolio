import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const constraintsRef = useRef(null);

  const allSkills = {
    technical: [
      "React JS", "JavaScript", "HTML5", "CSS3", "Redux", "Node.js", 
      "Git", "Firebase", "Python", "SQL", "REST API", "Tailwind"
    ],
    creative: [
      "UI/UX", "Photoshop", "Illustrator", "Figma", "Photography", 
      "Video Editing", "Color Theory", "Typography", "Branding", "Lightroom"
    ]
  };

  // --- SMART SCATTER ALGORITHM ---
  // This calculates positions ONCE when the category changes.
  // It uses a "Grid" system to ensure skills don't overlap.
  const positions = useMemo(() => {
    if (!activeCategory) return [];

    const skillsList = allSkills[activeCategory];
    const generatedPositions = [];
    
    // 1. Define a grid (e.g., 3 columns x 4 rows)
    const cols = 4; 
    const rows = 3;
    
    // 2. Calculate the size of each "cell" in the grid
    // We use a safe area (80% of screen) so they don't touch edges
    const cellWidth = (window.innerWidth * 0.8) / cols;
    const cellHeight = (window.innerHeight * 0.8) / rows;

    // 3. Create a list of all possible grid slots
    let slots = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        slots.push({ r, c });
      }
    }

    // 4. Shuffle the slots so skills appear in random places, not linear
    slots = slots.sort(() => Math.random() - 0.5);

    // 5. Assign each skill to a slot
    skillsList.forEach((skill, index) => {
      const slot = slots[index] || slots[0]; // Fallback if we have more skills than slots
      
      // Calculate center of the cell
      const startX = (slot.c * cellWidth) - (window.innerWidth * 0.4) + (cellWidth / 2);
      const startY = (slot.r * cellHeight) - (window.innerHeight * 0.4) + (cellHeight / 2);

      // Add a little "Jitter" (randomness) so it doesn't look like a perfect robot grid
      const jitterX = (Math.random() - 0.5) * (cellWidth * 0.4);
      const jitterY = (Math.random() - 0.5) * (cellHeight * 0.4);

      generatedPositions.push({
        id: index,
        x: startX + jitterX,
        y: startY + jitterY,
        rotation: Math.random() * 20 - 10 // Slight tilt (-10deg to 10deg)
      });
    });

    return generatedPositions;
  }, [activeCategory]); // Only recalculate when category changes

  return (
    <div className="skills-container">
      
      {/* 1. The Cards Wrapper */}
      <div className={`cards-wrapper ${activeCategory ? 'dimmed' : ''}`}>
        <div 
          className="category-card technical" 
          onClick={() => setActiveCategory('technical')}
        >
          <h2>Technical</h2>
          <p>Click to scatter</p>
        </div>

        <div 
          className="category-card creative" 
          onClick={() => setActiveCategory('creative')}
        >
          <h2>Creative</h2>
          <p>Click to scatter</p>
        </div>
      </div>

      {/* 2. The Scatter Zone */}
      {activeCategory && (
        <motion.div className="scatter-area" ref={constraintsRef}>
          
          <button className="close-btn" onClick={() => setActiveCategory(null)}>
            Reset Gravity
          </button>

          {allSkills[activeCategory].map((skill, index) => {
             const pos = positions[index];
             
             return (
              <motion.div 
                key={index}
                className="floating-skill"
                
                // Enable Dragging
                drag 
                dragConstraints={constraintsRef} 
                dragElastic={0.2} 
                
                // Animation
                initial={{ opacity: 0, scale: 0 }} 
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: pos.x, 
                  y: pos.y,
                  rotate: pos.rotation, // Random tilt
                  transition: { duration: 0.6, delay: index * 0.05, type: "spring" } // Staggered entrance
                }}
                
                // Interaction
                whileHover={{ scale: 1.1, cursor: "grab", zIndex: 100 }}
                whileDrag={{ scale: 1.2, cursor: "grabbing", zIndex: 100 }}
              >
                {skill}
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Skills;