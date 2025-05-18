import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <a href="#services" className="nav-link">Services</a>
          <a href="#features" className="nav-link">Features</a>

          <div className="nav-buttons">
            <button className="login-button" onClick={() => navigate('/login')}>Login</button>
            <button className="signup-button" onClick={() => navigate('/signup')}>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;