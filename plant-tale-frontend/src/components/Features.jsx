import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Plant Recognition",
      description: "Identify any plant instantly with our AI-powered plant recognition technology. Just upload a photo and receive accurate identification.",
      icon: "🔍" // We'll use actual SVG icons in the final implementation
    },
    {
      id: 2,
      title: "Care Instructions",
      description: "Get personalized care advice for each of your plants, including watering schedules, sunlight requirements, and soil recommendations.",
      icon: "🌱"
    },
    {
      id: 3,
      title: "Smart Reminders",
      description: "Never forget to water your plants again. Receive timely notifications customized to each plant's specific needs.",
      icon: "⏰"
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-heading">
          <h2 className="section-title">Our Services</h2>
          <div className="features-divider"></div>
          <p className="section-subtitle">
            BloomBuddy helps you care for your plants with personalized recommendations and timely reminders.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map(feature => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <div className="features-divider"></div>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;