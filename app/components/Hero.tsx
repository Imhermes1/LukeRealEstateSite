'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Set playback rate for slow motion
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Ensure playback rate is set after video loads
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, [videoRef.current]);

  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      {/* Video Background */}
      <div className="hero-background">
        <video
          ref={videoRef}
          className="hero-video-bg"
          src="/videos/27-Cambridge-Drive-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ filter: 'grayscale(1)', objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      {/* Overlay and Effects */}
      <div className="hero-overlay"></div>
      <div className="hero-glassmorphism"></div>
      {/* Hero Content */}
      <div className={`hero-content ${isLoaded ? 'hero-content-fade-in' : ''}`}>
        <h1 className="hero-title">Real Estate Excellence</h1>
        <p className="hero-subtitle">Your trusted partner in Melbourne's property market</p>
        <a href="#contact" className="btn btn-primary btn-hero-large">Contact Us Today!</a>
      </div>
    </section>
  );
} 