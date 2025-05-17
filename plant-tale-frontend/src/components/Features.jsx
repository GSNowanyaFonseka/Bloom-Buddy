import React from 'react';
import './Features.css';
import plantcare from '../assets/plantcare.avif';

const Features = () => {
  return (
    <div id="features" className="features-container">
      <div className="features-header">
        <h2>Key Features</h2>
        <div className="features-underline"></div>
        <p className="features-description">
          Discover how Plant Tale can transform your gardening experience with these powerful features
        </p>
      </div>
      
      <div className="features-content">
        <div className="features-image">
          <img src={plantcare} alt="Plant Tale App" />
        </div>
        
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-number">01</div>
            <div className="feature-details">
              <h3>AI Plant Recognition</h3>
              <p>Instantly identify any plant species by simply taking a photo with your device's camera</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-number">02</div>
            <div className="feature-details">
              <h3>Personalized Care Plans</h3>
              <p>Get tailored care instructions unique to each plant's species and your local environment</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-number">03</div>
            <div className="feature-details">
              <h3>Weather Integration</h3>
              <p>Our system adapts care recommendations based on real-time local weather conditions</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-number">04</div>
            <div className="feature-details">
              <h3>Care Reminders</h3>
              <p>Receive timely notifications when your plants need watering, fertilizing, or other care</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-number">05</div>
            <div className="feature-details">
              <h3>Plant Health Monitoring</h3>
              <p>Track your plants' growth and health over time with visual progress charts</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-number">06</div>
            <div className="feature-details">
              <h3>Community Garden</h3>
              <p>Connect with fellow plant enthusiasts to share tips, success stories, and advice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;