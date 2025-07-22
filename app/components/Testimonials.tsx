import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah',
    review: `Luke negotiated the sale of our family home with professionalism and empathy, achieving an amazing price, that exceeded our expectations.`
  },
  {
    name: 'David',
    review: `Seamless experience from listing to settlement, Luke's market insight is second to none.`
  },
  {
    name: 'Angelo',
    review: `Luke was very quick to act on selling this property and has no problem meeting buyers at anytime of the day or week. We were in a hurry to sell and Luke did not dissapoint us, sold very quicky and to the right buyers. Thanks Luke.`
  },
  {
    name: 'Reynold',
    review: `I recently worked with Luke to sell my apartment, and I couldn't be happier with the experience. His communication was excellent, and his knowledge of the market was impressive. Luke managed to sell my apartment within just two weeks of listing. His professionalism and efficiency made the process smooth and stress-free. I highly recommend Luke to anyone looking to buy or sell property. Thank you, Luke, for your outstanding service!`
  }
];

function getFirstSentence(text: string) {
  const match = text.match(/.*?[.!?](\s|$)/);
  return match ? match[0] : text;
}

export default function Testimonials() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="testimonials" className="section" aria-label="Testimonials">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              className="testimonial glass-card"
              key={i}
              tabIndex={0}
              role="button"
              aria-label={`Read full review from ${t.name}`}
              onClick={() => setOpenIndex(i)}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpenIndex(i)}
              style={{ cursor: 'pointer' }}
            >
              <p>"{getFirstSentence(t.review)}"</p>
              <cite>- {t.name}</cite>
              <div className="testimonial-readmore">Read full review</div>
            </div>
          ))}
        </div>
        {openIndex !== null && (
          <div className="modal modal-open testimonial-modal" role="dialog" aria-modal="true">
            <div className="modal-overlay" onClick={() => setOpenIndex(null)}></div>
            <div className="modal-content testimonial-modal-content animate-glass-modal">
              <div className="modal-header">
                <h3 className="modal-title">{testimonials[openIndex].name}</h3>
                <button className="modal-close" aria-label="Close modal" onClick={() => setOpenIndex(null)}>&times;</button>
              </div>
              <div className="modal-body">
                <p style={{ fontStyle: 'italic', fontSize: '1.1em' }}>
                  "{testimonials[openIndex].review}"
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 
