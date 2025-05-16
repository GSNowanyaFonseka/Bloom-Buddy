import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <div className="logo-text">Plant Tale</div>
        </div>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          
          <div className="nav-buttons">
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;