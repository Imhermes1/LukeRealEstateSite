'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      <div className="hero-background">
        {/* MAK Logo Background */}
        <div className={`hero-logo-background ${isLoaded ? 'hero-logo-fade-out' : ''}`}>
          <img 
            src="/images/MakRealty_Transparent.png" 
            alt="MAK Realty Logo" 
            className="hero-logo"
          />
        </div>
        
        {/* Hero Image */}
        <div className="hero-image-container">
          <img 
            src="/images/hero-optimized.jpg"
            alt="Melbourne Real Estate Hero"
            className={`hero-image ${isLoaded ? 'hero-image-fade-in' : ''}`}
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-glassmorphism"></div>
      </div>
      
      {/* Hero Content with Animation */}
      <div className={`hero-content ${isLoaded ? 'hero-content-fade-in' : ''}`}>
        <h1 className="hero-title">Real Estate Excellence</h1>
        <p className="hero-subtitle">Your trusted partner in Melbourne's property market</p>
        <a href="#contact" className="btn btn-primary btn-hero-large">Contact Us Today!</a>
      </div>
    </section>
  );
} 