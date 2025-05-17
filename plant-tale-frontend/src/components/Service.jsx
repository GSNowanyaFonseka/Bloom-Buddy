import React from 'react';
import './Service.css';
import plantrecognition from '../assets/9440165.png'; 
import careinstruction from '../assets/images.jpg'; 
import smartReminders from '../assets/images.png';
import whetherintegration from '../assets/9440198.png';

const Service = () => {
  return (
    <div id="services" className="services-container">
      <div className="services-header">
        <h2>Our Services</h2>
        <div className="underline"></div>
        <p className="services-description">
          Plant Tale helps you care for your plants with personalized recommendations and timely reminders.
        </p>
      </div>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <img src={plantrecognition} alt="plant recognition" />
          </div>
          <h3>PLANT RECOGNITION</h3>
          <div className="service-underline"></div>
          <p>
            Identify any plant instantly with our AI-powered plant recognition technology. 
            Just upload a photo and receive accurate identification.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <img src={careinstruction} alt="care instruction" />
          </div>
          <h3>CARE INSTRUCTIONS</h3>
          <div className="service-underline"></div>
          <p>
            Get personalized care advice for each of your plants, including watering schedules, 
            sunlight requirements, and soil recommendations.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <img src={smartReminders} alt="Smart Reminders" />
          </div>
          <h3>SMART REMINDERS</h3>
          <div className="service-underline"></div>
          <p>
            Never forget to water your plants again. Receive timely notifications 
            customized to each plant's specific needs.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <img src={whetherintegration} alt="Whether Integration" />
          </div>
          <h3>WEATHER INTEGRATION</h3>
          <div className="service-underline"></div>
          <p>
            Our app uses local weather data to adjust care recommendations, 
            ensuring your plants get exactly what they need in any climate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
