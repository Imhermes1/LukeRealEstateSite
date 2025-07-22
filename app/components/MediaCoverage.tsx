import { useState } from 'react';

const mediaArticles = [
  {
    title: 'Templestowe Mansion Mini Museum',
    url: 'https://www.realestate.com.au/news/templestowe-europeaninspired-mansion-dubbed-a-mini-museum-with-3m-marble-and-imported-fountain/',
    summary: 'A Templestowe mansion featuring an estimated $3.6m in marble stonework has been designed as a “mini museum” to showcase its owners’ art collection...',
    image: '/images/5-Princely-lg.jpg'
  },
  {
    title: 'Retro Richmond Greek Family Home',
    url: 'https://www.realestate.com.au/news/richmond-house-similar-to-a-wog-boy-setpiece-will-get-you-saying-opa/',
    summary: 'A retro Richmond house that’s been owned by the same Greek family for five decades has hit the market amid suggestions it would be perfect for a Wog Boy flick or Sooshi Mango sketch...',
    image: '/images/richmond-article.jpg'
  }
];

export default function MediaCoverage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="media-coverage" className="section" aria-label="Media Coverage">
      <div className="container">
        <h2 className="section-title">In the Media</h2>
        <div className="media-logos">
          {mediaArticles.map((article, i) => (
            <button
              key={i}
              className="media-btn-glass"
              onClick={() => setOpenIndex(i)}
              aria-label={`View media article: ${article.title}`}
            >
              <div className="media-logo-placeholder">
                <span className="logo-text">{article.title}</span>
              </div>
            </button>
          ))}
        </div>
        {openIndex !== null && (
          <div className="modal modal-open media-modal" role="dialog" aria-modal="true">
            <div className="modal-overlay" onClick={() => setOpenIndex(null)}></div>
            <div className="modal-content media-modal-content animate-glass-modal">
              <div className="modal-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={mediaArticles[openIndex].image} alt={mediaArticles[openIndex].title + ' image'} className="media-article-image media-article-image-large" />
                <button className="modal-close" aria-label="Close modal" onClick={() => setOpenIndex(null)}>&times;</button>
              </div>
              <div className="modal-body">
                <p style={{ fontSize: '1.05em', marginBottom: 24 }}>{mediaArticles[openIndex].summary}</p>
                <a
                  href={mediaArticles[openIndex].url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: 8 }}
                >
                  Read full article
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 