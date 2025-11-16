import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <h3>terastudio</h3>
          </div>
          
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link">Beranda</a>
            <a href="#games" className="nav-link">Games</a>
            <a href="#meme-generator" className="nav-link">Meme Generator</a>
            <a href="#community" className="nav-link">Komunitas</a>
            <a href="#contact" className="nav-link">Kontak</a>
          </div>

          <button 
            className="nav-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;