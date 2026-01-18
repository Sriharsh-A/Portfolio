import React, { useState, useRef } from 'react';
import './Photography.css';

// Placeholder images - replace these with your actual photography URLs later
const photos = [
  "https://picsum.photos/id/101/200/300",
  "https://picsum.photos/id/102/200/300",
  "https://picsum.photos/id/103/200/300",
  "https://picsum.photos/id/104/200/300",
];

const Photography = () => {
  const [trail, setTrail] = useState([]);
  const lastPosition = useRef({ x: 0, y: 0 }); // To track distance
  const imageIndex = useRef(0); // To cycle through the photos array

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    
    // Calculate distance from the last image placed
    const distance = Math.hypot(
      clientX - lastPosition.current.x, 
      clientY - lastPosition.current.y
    );

    // Only add an image if mouse moved more than 50px
    if (distance > 50) {
      const newImage = {
        x: clientX,
        y: clientY,
        src: photos[imageIndex.current % photos.length], // Cycle images
        id: Date.now(), // Unique ID for React key
        rotation: Math.random() * 20 - 10, // Random tilt between -10 and 10 deg
      };

      setTrail((prev) => [...prev, newImage]);
      
      // Update tracking refs
      lastPosition.current = { x: clientX, y: clientY };
      imageIndex.current += 1;

      // Remove this specific image after 1 second (1000ms)
      setTimeout(() => {
        setTrail((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 1000);
    }
  };

  return (
    <div className="photo-container" onMouseMove={handleMouseMove}>
      <h1 className="photo-title">Move your cursor around</h1>
      
      {/* Render the trail of images */}
      {trail.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt="trail"
          className="trail-image"
          style={{
            left: img.x,
            top: img.y,
            transform: `translate(-50%, -50%) rotate(${img.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Photography;