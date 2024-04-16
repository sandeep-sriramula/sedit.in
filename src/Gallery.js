import React, { useState } from 'react';
import ImageTile from './ImageTile';
import ImageModal from './ImageModal';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/images/big_door.jpg', alt: 'Concept 3d art - Mysterious Gate' },
    { id: 2, src: '/images/DBM_3.jpg', alt: 'Concept art - Dawn of Blue Moon (3/3)' },
    { id: 3, src: '/images/DBM_2.jpg', alt: 'Concept art - Dawn of Blue Moon (2/3)' },
    { id: 4, src: '/images/DBM_1.jpg', alt: 'Concept art - Dawn of Blue Moon (1/3)' },
    { id: 5, src: '/images/Cube.jpg', alt: '3d model of a cuboid made using Cinema4D and JS placement' },
    { id: 6, src: '/images/sunset.jpg', alt: 'Concept art of Sunset. Made using cinema4D' }
    
    // Add more images here
];

return (
  <div className="gallery">
    {images.map(image => (
      <div key={image.id} onClick={() => setSelectedImage(image)}>
        <ImageTile src={image.src} alt={image.alt} />
      </div>
    ))}
    <ImageModal src={selectedImage?.src} alt={selectedImage?.alt} onClose={() => setSelectedImage(null)} isOpen={!!selectedImage} />
  </div>
);
}

export default Gallery;