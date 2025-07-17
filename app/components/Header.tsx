'use client';

import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

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
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu--open' : ''}`} role="menubar">
          <li role="none"><a href="#hero" role="menuitem" onClick={closeMenu}>Home</a></li>
          <li role="none"><a href="#career-highlights" role="menuitem" onClick={closeMenu}>Career Highlights</a></li>
          {/* Dropdown menu for Services */}
          <li
            role="none"
            className="nav-dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="nav-dropdown-toggle"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onClick={e => {
                e.preventDefault();
                setIsDropdownOpen(open => !open);
              }}
            >
              Services <span aria-hidden="true">▼</span>
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu" role="menu">
                <li role="none"><a href="#services" role="menuitem" onClick={() => { setIsDropdownOpen(false); closeMenu(); }}>All Services</a></li>
                <li role="none"><a href="#buyers" role="menuitem" onClick={() => { setIsDropdownOpen(false); closeMenu(); }}>Buyers</a></li>
                <li role="none"><a href="#sellers" role="menuitem" onClick={() => { setIsDropdownOpen(false); closeMenu(); }}>Sellers</a></li>
                {/* Add more dropdown items as needed */}
              </ul>
            )}
          </li>
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