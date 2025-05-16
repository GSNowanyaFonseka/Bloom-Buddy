import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-content">
        <div className="hero-subheading">Nurture Your Garden</div>
        <h1 className="hero-heading">BLOOM - REAL PASSION</h1>
        <div className="hero-divider"></div>
        <p className="hero-description">
          BloomBuddy is a smart flower care companion that helps you identify plants, 
          provides personalized care instructions, and sends timely reminders to keep 
          your plants thriving and beautiful.
        </p>
        <button className="hero-button">VIEW MORE</button>
      </div>
      
      {/* Plant decorations - we'll use SVG for actual implementation */}
      <div className="plant-decoration plant-left"></div>
      <div className="plant-decoration plant-right"></div>
    </section>
  );
};

export default HeroSection;