import { useState } from 'react';

const mediaArticles = [
  {
    title: 'Herald Sun Templestowe',
    url: 'https://www.realestate.com.au/news/templestowe-europeaninspired-mansion-dubbed-a-mini-museum-with-3m-marble-and-imported-fountain/',
    summary: 'A feature on the sale of 5 Princely Tce, Templestowe, highlighting its European-inspired design, $3M marble, and imported fountain.',
    image: '/images/0361.01 5 Princely Tce, Templestowe-3.jpg'
  },
  {
    title: 'Herald Sun Richmond',
    url: 'https://www.realestate.com.au/news/richmond-house-similar-to-a-wog-boy-setpiece-will-get-you-saying-opa/',
    summary: 'A spotlight on 9 Manton St, Richmond, a home reminiscent of a Wog Boy setpiece, with unique character and strong buyer interest.',
    image: '/images/LowRes_2k_17.jpg'
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
              <img src={article.image} alt={article.title + ' image'} className="media-article-image" />
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
              <div className="modal-header">
                <h3 className="modal-title">{mediaArticles[openIndex].title}</h3>
                <button className="modal-close" aria-label="Close modal" onClick={() => setOpenIndex(null)}>&times;</button>
              </div>
              <div className="modal-body">
                <img src={mediaArticles[openIndex].image} alt={mediaArticles[openIndex].title + ' image'} className="media-article-image" />
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