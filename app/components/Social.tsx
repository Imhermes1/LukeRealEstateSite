'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

interface CompanyHighlight {
  icon: string;
  title: string;
  description: string;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

export default function Social() {
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const companyHighlights: CompanyHighlight[] = [
    {
      icon: "🏆",
      title: "Award-Winning Service",
      description: "Recognized for excellence in Melbourne's luxury real estate market"
    },
    {
      icon: "📈",
      title: "Market Expertise",
      description: "Deep understanding of Melbourne's premium property landscape"
    },
    {
      icon: "🤝",
      title: "Personal Approach",
      description: "Tailored service for discerning buyers and sellers"
    }
  ];

  useEffect(() => {
    async function fetchContent() {
      try {
        // Fetch Medium posts
        const mediumResponse = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lukeforn"
        );
        if (mediumResponse.ok) {
          const mediumData = await mediumResponse.json();
          setMediumPosts(mediumData.items.slice(0, 3));
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

  return (
    <section id="social" className="section" aria-label="Company Information">
      <div className="container">
        <h2 className="section-title">About Luke Fornieri</h2>
        <div className="social-grid">
          
          {/* Brand Showcase */}
          <div className="social-column">
            <div className="brand-showcase glass-card gold-glass-border">
              <div className="brand-logo">
                <Image 
                  src="/images/MakRealty_Transparent.png" 
                  alt="Luke Fornieri Real Estate" 
                  width={200} 
                  height={80}
                  className="company-logo"
                />
              </div>
              <div className="brand-info">
                <h3 className="brand-title">Luke Fornieri</h3>
                <p className="brand-subtitle">Luxury Real Estate Specialist</p>
                <p className="brand-description">
                  Dedicated to providing exceptional service in Melbourne's most prestigious neighborhoods. 
                  Your trusted partner in luxury real estate.
                </p>
                <div className="brand-stats">
                  <div className="stat">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Properties Sold</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Highlights */}
          <div className="social-column">
            <h3 className="social-subtitle">Why Choose Luke</h3>
            <div className="highlights-grid">
              {companyHighlights.map((highlight, index) => (
                <div key={index} className="highlight-card glass-card gold-glass-border">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h4 className="highlight-title">{highlight.title}</h4>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              ))}
            </div>
            
            <div className="contact-cta">
              <a 
                href="#contact" 
                className="contact-button"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Latest Articles */}
          <div className="social-column">
            <h3 className="social-subtitle">Latest Insights</h3>
            <div className="medium-posts" role="region" aria-live="polite" aria-label="Latest articles">
              {isLoading && <p className="loading-message">Loading latest insights...</p>}
              {error && <p className="error-message">{error}</p>}
              {!isLoading && !error && mediumPosts.map((post, index) => (
                <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="medium-post glass-card gold-glass-border">
                  <h4 className="medium-post-title">{post.title}</h4>
                  <time className="medium-post-date" dateTime={post.pubDate}>
                    {formatDate(post.pubDate)}
                  </time>
                  <p className="medium-post-excerpt">
                    {post.description.replace(/<[^>]*>/g, '').substring(0, 120)}…
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
    </section>
  );
} 