'use client';

import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    console.log('Menu toggle clicked!', !isMenuOpen);
    setIsMenuOpen((open) => !open);
  };

  const handleMenuClick = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'career-highlights', label: 'Career Highlights' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'media-coverage', label: 'Media' },
    { id: 'social', label: 'Social' },
    { id: 'contact', label: 'Contact' }
  ];

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

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
              {menuItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
} 