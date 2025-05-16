import React from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <HeroSection />
        <Features />
        {/* Add more sections as needed */}
      </div>
      <Footer />
    </div>
  );
}

export default App;