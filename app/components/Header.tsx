'use client';

import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    
    // Prevent menu from closing when clicking inside it
    function handleMenuClick(event: MouseEvent) {
      event.stopPropagation();
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    
    if (menuRef.current) {
      menuRef.current.addEventListener('click', handleMenuClick);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (menuRef.current) {
        menuRef.current.removeEventListener('click', handleMenuClick);
      }
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky-header" role="banner">
      <nav className="nav-container" aria-label="Main navigation">
        <div className="nav-brand">
          <img 
            src="/images/logo.svg" 
            alt="MAK REALTY Logo" 
            className="brand-logo"
          />
          <div className="brand-text">
            <h1 className="brand-title">Luke Fornieri</h1>
          </div>
        </div>
        <div className="nav-hamburger-wrapper" ref={menuRef}>
          <button 
            className={`nav-toggle${isMenuOpen ? ' nav-toggle--open' : ''}`} 
            aria-label="Toggle navigation menu" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {isMenuOpen && (
            <div className="nav-dropdown-menu" role="menu">
              <a href="#hero" role="menuitem" onClick={closeMenu}>Home</a>
              <a href="#career-highlights" role="menuitem" onClick={closeMenu}>Career Highlights</a>
              <a href="#services" role="menuitem" onClick={closeMenu}>Services</a>
              <a href="#about" role="menuitem" onClick={closeMenu}>About</a>
              <a href="#testimonials" role="menuitem" onClick={closeMenu}>Testimonials</a>
              <a href="#media-coverage" role="menuitem" onClick={closeMenu}>Media</a>
              <a href="#social" role="menuitem" onClick={closeMenu}>Social</a>
              <a href="#contact" role="menuitem" onClick={closeMenu}>Contact</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
} 