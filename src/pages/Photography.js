import React, { useState, useRef } from 'react';
import './Photography.css';

// 1. DEFINE PHOTOS ARRAY (This was missing)
const photos = [
  "https://picsum.photos/id/101/200/300",
  "https://picsum.photos/id/102/200/300",
  "https://picsum.photos/id/103/200/300",
  "https://picsum.photos/id/104/200/300",
];

const Photography = () => {
  // 2. DEFINE STATE AND REFS (This was missing)
  const [trail, setTrail] = useState([]);
  const lastPosition = useRef({ x: 0, y: 0 }); 
  const imageIndex = useRef(0);

  const handleMouseMove = (e) => {
    // Use offsetX for relative position in the container
    const { offsetX, offsetY } = e.nativeEvent; 
    
    const distance = Math.hypot(
      offsetX - lastPosition.current.x, 
      offsetY - lastPosition.current.y
    );

    if (distance > 50) {
      const newImage = {
        x: offsetX,
        y: offsetY,
        src: photos[imageIndex.current % photos.length],
        id: Date.now(),
        rotation: Math.random() * 20 - 10,
      };

      setTrail((prev) => [...prev, newImage]);
      
      lastPosition.current = { x: offsetX, y: offsetY };
      imageIndex.current += 1;

      setTimeout(() => {
        setTrail((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 1000);
    }
  };

  return (
    <div className="photo-container" onMouseMove={handleMouseMove}>
      <h1 className="photo-title">Photography</h1>
      
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