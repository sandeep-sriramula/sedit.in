import React, { useEffect, useState } from 'react';

function ImageModal({ src, alt, onClose, isOpen }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300); // Wait for animation to finish before closing
  };

  return (
    <div className={`modal-backdrop ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className={`modal-content ${show ? 'show' : ''}`} onClick={e => e.stopPropagation()}>
        <img src={src} alt={alt} />
        <button className="modal-close-btn" onClick={handleClose}>×</button>
      </div>
    </div>
  );
}

export default ImageModal;
