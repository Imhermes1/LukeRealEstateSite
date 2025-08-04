'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
  color: string;
}

interface PDFGuide {
  title: string;
  description: string;
  fields: string[];
  downloadUrl: string;
}

export default function Social() {
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [buyerFormData, setBuyerFormData] = useState({ firstName: '', lastName: '', email: '' });
  const [sellerFormData, setSellerFormData] = useState({ firstName: '', lastName: '', email: '', address: '' });
  const [showBuyerForm, setShowBuyerForm] = useState(false);
  const [showSellerForm, setShowSellerForm] = useState(false);

  const socialLinks: SocialLink[] = [
    {
      platform: 'Instagram',
      url: 'https://instagram.com/lukefornieri',
      icon: '📷',
      label: 'Follow my Instagram',
      color: '#E4405F'
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/@lukefornieri',
      icon: '▶️',
      label: 'Subscribe to my YouTube',
      color: '#FF0000'
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/lukefornieri',
      icon: '📘',
      label: 'Connect on Facebook',
      color: '#1877F2'
    }
  ];

  const pdfGuides: PDFGuide[] = [
    {
      title: "Complete Guide to Buying Real Estate",
      description: "Everything you need to know about purchasing property in Melbourne's premium market",
      fields: ['First Name', 'Last Name', 'Email'],
      downloadUrl: '/guides/buying-real-estate-guide.pdf'
    },
    {
      title: "Selling Your Property in 2025",
      description: "Strategic guide to maximize your property's value and achieve the best sale price",
      fields: ['First Name', 'Last Name', 'Email', 'Property Address'],
      downloadUrl: '/guides/selling-2025-guide.pdf'
    }
  ];

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-AU", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }

  useEffect(() => {
    async function fetchContent() {
      try {
        const mediumResponse = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lukeforn"
        );
        if (mediumResponse.ok) {
                  const mediumData = await mediumResponse.json();
        setMediumPosts(mediumData.items.slice(0, 2));
        }
      } catch (err) {
        console.error('❌ Error fetching articles:', err);
        setError("Unable to load articles at this time.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchContent();
  }, []);

  const handleBuyerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Buyer guide requested:', buyerFormData);
    // For now, just show a success message and provide the link
    alert('Thank you! Your guide will be emailed to you shortly.');
    setShowBuyerForm(false);
    setBuyerFormData({ firstName: '', lastName: '', email: '' });
  };

  const handleSellerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Seller guide requested:', sellerFormData);
    alert('Thank you! Your guide will be emailed to you shortly.');
    setShowSellerForm(false);
    setSellerFormData({ firstName: '', lastName: '', email: '', address: '' });
  };

  return (
    <section className="section" aria-label="Real Estate Academy">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Real Estate Academy</h2>
          <p className="section-subtitle">Connect, learn, and stay informed with Melbourne's premium property insights</p>
        </div>

        <div className="academy-outer-container">
          <div className="academy-grid">
            
            {/* Column 1: Luke's Photo */}
            <div className="academy-column">
              <div className="luke-photo-container">
                <Image 
                  src="/images/IMG_2310.jpg" 
                  alt="Luke Fornieri - Real Estate Expert" 
                  width={300} 
                  height={400}
                  className="luke-photo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80';
                  }}
                />
              </div>
            </div>

            {/* Column 2: Social Links & PDF Guides */}
            <div className="academy-column">
              <div className="resources-section">
                
                {/* Social Links */}
                <div className="social-links-section">
                  <h3 className="resources-title">Connect With Me</h3>
                  <div className="social-links-grid">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-button"
                        style={{ '--accent-color': link.color } as React.CSSProperties}
                      >
                        <span className="social-icon">
                          {link.platform === 'Instagram' && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          )}
                          {link.platform === 'YouTube' && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          )}
                          {link.platform === 'Facebook' && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          )}
                        </span>
                        <span className="social-label">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* PDF Guides */}
                <div className="guides-section">
                  <h3 className="resources-title">Free Property Guides</h3>
                  <div className="guides-grid">
                    <div className="guide-card">
                      <h4 className="guide-title">📖 Buying Guide</h4>
                      <button 
                        className="guide-button"
                        onClick={() => setShowBuyerForm(true)}
                      >
                        Download Free Guide
                      </button>
                    </div>
                    
                    <div className="guide-card">
                      <h4 className="guide-title">📈 Selling Guide 2025</h4>
                      <button 
                        className="guide-button"
                        onClick={() => setShowSellerForm(true)}
                      >
                        Download Free Guide
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Medium Articles */}
            <div className="academy-column">
              <div className="articles-section">
                <h3 className="resources-title">Latest Market Insights</h3>
                <div className="articles-grid">
                  {isLoading && <p className="loading-message">Loading latest insights...</p>}
                  {error && <p className="error-message">{error}</p>}
                  {!isLoading && !error && mediumPosts.map((post, index) => (
                    <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="article-card">
                      <h4 className="article-title">{post.title}</h4>
                      <time className="article-date" dateTime={post.pubDate}>
                        {formatDate(post.pubDate)}
                      </time>
                      <p className="article-excerpt">
                        {post.description.replace(/<[^>]*>/g, '').substring(0, 150)}…
                      </p>
                    </a>
                  ))}
                </div>
                
                <div className="articles-cta">
                  <a 
                    href="https://medium.com/@lukeforn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="articles-button"
                  >
                    Read More Articles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buyer Guide Modal */}
      {showBuyerForm && (
        <div className="modal-overlay" onClick={() => setShowBuyerForm(false)}>
          <div className="modal-content guide-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Download Buying Guide</h3>
              <button className="modal-close" onClick={() => setShowBuyerForm(false)}>×</button>
            </div>
            <form onSubmit={handleBuyerFormSubmit} className="guide-form">
              <div className="form-group">
                <label htmlFor="buyer-firstName">First Name</label>
                <input
                  type="text"
                  id="buyer-firstName"
                  value={buyerFormData.firstName}
                  onChange={(e) => setBuyerFormData({...buyerFormData, firstName: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="buyer-lastName">Last Name</label>
                <input
                  type="text"
                  id="buyer-lastName"
                  value={buyerFormData.lastName}
                  onChange={(e) => setBuyerFormData({...buyerFormData, lastName: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="buyer-email">Email</label>
                <input
                  type="email"
                  id="buyer-email"
                  value={buyerFormData.email}
                  onChange={(e) => setBuyerFormData({...buyerFormData, email: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Download Guide</button>
            </form>
          </div>
        </div>
      )}

      {/* Seller Guide Modal */}
      {showSellerForm && (
        <div className="modal-overlay" onClick={() => setShowSellerForm(false)}>
          <div className="modal-content guide-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Download Selling Guide</h3>
              <button className="modal-close" onClick={() => setShowSellerForm(false)}>×</button>
            </div>
            <form onSubmit={handleSellerFormSubmit} className="guide-form">
              <div className="form-group">
                <label htmlFor="seller-firstName">First Name</label>
                <input
                  type="text"
                  id="seller-firstName"
                  value={sellerFormData.firstName}
                  onChange={(e) => setSellerFormData({...sellerFormData, firstName: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="seller-lastName">Last Name</label>
                <input
                  type="text"
                  id="seller-lastName"
                  value={sellerFormData.lastName}
                  onChange={(e) => setSellerFormData({...sellerFormData, lastName: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="seller-email">Email</label>
                <input
                  type="email"
                  id="seller-email"
                  value={sellerFormData.email}
                  onChange={(e) => setSellerFormData({...sellerFormData, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="seller-address">Property Address</label>
                <input
                  type="text"
                  id="seller-address"
                  value={sellerFormData.address}
                  onChange={(e) => setSellerFormData({...sellerFormData, address: e.target.value})}
                  placeholder="Optional"
                />
              </div>
              <button type="submit" className="btn btn-primary">Download Guide</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
} 