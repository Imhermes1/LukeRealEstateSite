'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky-header" role="banner">
      <nav className="nav-container" aria-label="Main navigation">
        <div className="nav-brand">
          <img 
            src="/images/PNG-03.jpeg" 
            alt="MAK REALTY Logo" 
            className="brand-logo"
          />
          <div className="brand-text">
            <h1 className="brand-title">Luke Fornieri</h1>
          </div>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu--open' : ''}`} role="menubar">
          <li role="none"><a href="#hero" role="menuitem" onClick={closeMenu}>Home</a></li>
          <li role="none"><a href="#career-highlights" role="menuitem" onClick={closeMenu}>Career Highlights</a></li>
          <li role="none"><a href="#services" role="menuitem" onClick={closeMenu}>Services</a></li>
          <li role="none"><a href="#about" role="menuitem" onClick={closeMenu}>About</a></li>
          <li role="none"><a href="#testimonials" role="menuitem" onClick={closeMenu}>Testimonials</a></li>
          <li role="none"><a href="#media-coverage" role="menuitem" onClick={closeMenu}>Media</a></li>
          <li role="none"><a href="#social" role="menuitem" onClick={closeMenu}>Social</a></li>
          <li role="none"><a href="#contact" role="menuitem" onClick={closeMenu}>Contact</a></li>
        </ul>
        <button 
          className="nav-toggle" 
          aria-label="Toggle navigation menu" 
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
} 