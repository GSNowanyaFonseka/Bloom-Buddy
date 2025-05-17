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
          Plant Tale is your intelligent gardening companion powered by AI and weather-aware technology helping home gardeners recognize plants, 
          understand their unique needs, and care for them effortlessly. Whether you're a beginner or a seasoned green thumb, Plant Tale guides you with 
          personalized tips, photo-based plant identification, and timely reminders to keep your garden blooming beautifully all year round.
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