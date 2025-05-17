import React from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import Service from './components/Service';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <HeroSection />
        <Service/>
        <Features />
        {/* Add more sections as needed */}
      </div>
      <Footer />
    </div>
  );
}

export default App;