import React, { useState, useRef } from 'react';
import './Gallery.css';

// --- 1. IMPORT YOUR LOCAL PHOTOS (LEFT SIDE) ---
// Make sure these files exist in your src/assets folder!
import imgmonster from '../assets/monster.jpeg';
import imgCC from '../assets/cc.jpg';
import imgHS from '../assets/Hillscape.jpg';
import imgdog from '../assets/dog.jpeg';
import imglight from '../assets/light.jpeg';
import imgmdsh from '../assets/mdsh.jpeg';
// import imgtrails from '../assets/trails.jpeg';

// --- 2. DEFINE IMAGE ARRAYS ---
const photographyImages = [
  imgmonster,
  imgCC,
  imgHS,
  imgdog,
  imglight,
  imgmdsh,
];

// Placeholder designs for the Right Side (Replace with imports later)
const designImages = [
  "https://images.unsplash.com/photo-1626785774573-4b799314346d?w=600&q=80",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80",
];

const Gallery = () => {
  // --- STATE FOR TRAILS ---
  const [leftTrail, setLeftTrail] = useState([]);
  const [rightTrail, setRightTrail] = useState([]);

  // --- REFS (To track movement independently) ---
  const leftLastPos = useRef({ x: 0, y: 0 });
  const leftIndex = useRef(0);

  const rightLastPos = useRef({ x: 0, y: 0 });
  const rightIndex = useRef(0);

  // --- HANDLER: PHOTOGRAPHY (LEFT) ---
  const handleLeftMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    
    // Calculate distance from last image placed
    const distance = Math.hypot(
      offsetX - leftLastPos.current.x,
      offsetY - leftLastPos.current.y
    );

    // Only add image if mouse moved 50px
    if (distance > 100) {
      const newImage = {
        x: offsetX,
        y: offsetY,
        // Cycle through photography array
        src: photographyImages[leftIndex.current % photographyImages.length],
        id: Date.now(),
        rotation: Math.random() * 20 - 10, // Random tilt
      };

      setLeftTrail((prev) => [...prev, newImage]);
      leftLastPos.current = { x: offsetX, y: offsetY };
      leftIndex.current += 1;

      // Remove image after 1 second to keep DOM clean
      setTimeout(() => {
        setLeftTrail((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 1000);
    }
  };

  // --- HANDLER: GRAPHIC DESIGN (RIGHT) ---
  const handleRightMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    const distance = Math.hypot(
      offsetX - rightLastPos.current.x,
      offsetY - rightLastPos.current.y
    );

    if (distance > 100) {
      const newImage = {
        x: offsetX,
        y: offsetY,
        // Cycle through design array
        src: designImages[rightIndex.current % designImages.length],
        id: Date.now(),
        rotation: Math.random() * 20 - 10,
      };

      setRightTrail((prev) => [...prev, newImage]);
      rightLastPos.current = { x: offsetX, y: offsetY };
      rightIndex.current += 1;

      setTimeout(() => {
        setRightTrail((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 1000);
    }
  };

  return (
    <div className="gallery-split-page">
      <h1 className="gallery-center-title">GALLERY</h1>

      {/* --- LEFT ZONE: PHOTOGRAPHY --- */}
      <div className="gallery-zone left-zone" onMouseMove={handleLeftMove}>
        <h2 className="zone-label">PHOTOGRAPHY</h2>
        <p className="zone-sub">Move cursor to view</p>
        
        {leftTrail.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt="trail"
            className="trail-img"
            style={{
              left: img.x,
              top: img.y,
              transform: `translate(-50%, -50%) rotate(${img.rotation}deg)`,
            }}
          />
        ))}
      </div>

      {/* --- RIGHT ZONE: GRAPHIC DESIGN --- */}
      <div className="gallery-zone right-zone" onMouseMove={handleRightMove}>
        <h2 className="zone-label">GRAPHIC DESIGN</h2>
        <p className="zone-sub">Move cursor to view</p>

        {rightTrail.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt="trail"
            className="trail-img"
            style={{
              left: img.x,
              top: img.y,
              transform: `translate(-50%, -50%) rotate(${img.rotation}deg)`,
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default Gallery;