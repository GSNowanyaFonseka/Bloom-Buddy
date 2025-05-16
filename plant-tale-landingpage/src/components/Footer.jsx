import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <div className="footer-logo-text">BloomBuddy</div>
            </div>
            <p className="footer-description">
              BloomBuddy is a smart flower care companion that helps you identify plants, 
              provides personalized care instructions, and sends timely reminders to keep 
              your plants thriving and beautiful.
            </p>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#home">Home</a></li>
              <li className="footer-link"><a href="#features">Features</a></li>
              <li className="footer-link"><a href="#services">Services</a></li>
              <li className="footer-link"><a href="#about">About</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📧</span>
              <span>info@bloombuddy.com</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📱</span>
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span>123 Garden St, Plant City</span>
            </div>
            
            <div className="footer-social">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">t</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">ig</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} BloomBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;