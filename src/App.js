import React, { useEffect } from 'react';
import './App.css';
import Gallery from './Gallery';
import logo from './logo.png'; // Adjust the path if your logo is in a subdirectory


function App() {

  useEffect(() => {
    // Function to handle the context menu event
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    // Add the event listener
    document.addEventListener('contextmenu', handleContextMenu);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} alt="My Logo" style={{ width: '200px' }} />
      </header>
      <Gallery />
    </div>
  );
}

export default App;
