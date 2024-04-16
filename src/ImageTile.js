import React, { useState } from 'react';

function ImageTile({ src, alt }) {
  const [isHovered, setIsHovered] = useState(false);
  const preventDragHandler = (e) => {
    e.preventDefault();
  };
  
  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent overlay
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px', // Adjust font size as necessary
    textAlign: 'center',
    padding: '10px',
    transition: 'opacity 0.3s ease-in-out', // Smooth transition for the overlay
    opacity: isHovered ? 1 : 0, // Control the opacity based on hover state
    pointerEvents: 'none', // Prevents the overlay from blocking mouse events
  };

  return (
    <div className="image-tile"
    onDragStart={preventDragHandler} 
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={src} alt={alt} 
      draggable="false"
      onDragStart={preventDragHandler}
      style={{ width: '100%', display: 'block' }} />
      <div style={overlayStyle}>
        {alt}
      </div>
    </div>
  );
}

export default ImageTile;
