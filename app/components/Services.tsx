export default function Services() {
  return (
    <section id="services" className="section bg-light" aria-label="Services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-title">Luxury Sales</h3>
            <p className="service-description">Specialized in high-end residential properties with personalized marketing strategies.</p>
          </div>
          <div className="service-card">
            <h3 className="service-title">Investment Advisory</h3>
            <p className="service-description">Expert guidance on property investments with market analysis and portfolio optimization.</p>
          </div>
          <div className="service-card">
            <h3 className="service-title">Property Management</h3>
            <p className="service-description">Comprehensive property management services for investors and landlords.</p>
          </div>
        </div>
        
        <div className="services-video-section">
          <h3 className="video-title">Market Insights & Expertise</h3>
          <p className="video-description">Watch Luke share insights on Melbourne's luxury property market and what makes MAK REALTY the preferred choice for discerning clients.</p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/z6rLeOVZcpU?autoplay=1&mute=1"
              title="Luke Fornieri - Melbourne Luxury Real Estate Market Insights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="services-video"
            ></iframe>
          </div>
          <div className="video-subtitle">
            <p><strong>Auction Campaign Lead Agent:Luke Fornieri</strong></p>
            <p>Auctioneer: Claude Makdesi on 1/4 Chute Street Mordialloc</p>
            <p>Selling $150,000 Above the Vendors Reserve price</p>
          </div>
        </div>
      </div>
    </section>
  );
} 