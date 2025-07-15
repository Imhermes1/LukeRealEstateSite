'use client';

import { useState, useEffect } from 'react';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
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

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lukeforn"
        );
        if (!response.ok) throw new Error("Network error");
        const data = await response.json();
        const items = data.items.slice(0, 3);
        setMediumPosts(items);
      } catch (err) {
        console.error(err);
        setError("Unable to load Medium posts at this time.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMediumPosts();
  }, []);

  return (
    <section id="social" className="section bg-light" aria-label="Social Media">
      <div className="container">
        <h2 className="section-title">Stay Connected</h2>
        <div className="social-grid">
          <div className="social-column">
            <h3 className="social-subtitle">Follow on Instagram</h3>
            <div className="instagram-placeholder">
              <div className="instagram-post">
                <div className="instagram-header">
                  <div className="instagram-avatar"></div>
                  <div className="instagram-info">
                    <h4>@lukefornieri</h4>
                    <p>Melbourne Real Estate</p>
                  </div>
                </div>
                <div className="instagram-image"></div>
                <div className="instagram-caption">
                  <p>Just closed another record-breaking sale in Melbourne's luxury market! 🏠✨ #RealEstate #Melbourne #LuxuryHomes</p>
                </div>
              </div>
            </div>
            <p className="social-fallback">
              <a href="https://instagram.com/lukefornieri" target="_blank" rel="noopener noreferrer">View on Instagram</a>
            </p>
          </div>
          <div className="social-column">
            <h3 className="social-subtitle">Latest Articles</h3>
            <div className="medium-posts" role="region" aria-live="polite" aria-label="Medium articles">
              {isLoading && <p className="loading-message">Loading latest articles...</p>}
              {error && <p className="error-message">{error}</p>}
              {!isLoading && !error && mediumPosts.map((post, index) => (
                <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="medium-post">
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
          </div>
        </div>
      </div>
    </section>
  );
} 