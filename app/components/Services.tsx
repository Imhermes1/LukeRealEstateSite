export default function Services() {
  return (
    <section id="services" className="section" aria-label="Services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-title">Property Sales</h3>
            <p className="service-description">Specialised in Premium & High End residential properties with personalised marketing strategies. We can sell it all</p>
          </div>
          <div className="service-card">
          <h3 className="service-title">Investment & Buyer Advisory</h3>
          <p className="service-description">Strategic guidance for investors and buyers, including market analysis, portfolio planning, and access to exclusive off-market opportunities.</p>
          </div>
          <div className="service-card">
            <h3 className="service-title">Property Management</h3>
            <p className="service-description">Comprehensive property management services for investors and landlords.</p>
          </div>
        </div>
        
        <div className="services-video-section">
          <h3 className="video-title">Auction Campaigns</h3>
          <p className="video-description">Tailored auction campaigns designed to maximise competition and deliver premium results.</p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/z6rLeOVZcpU?autoplay=1&mute=1"
              title="Luke Fornieri - Melbourne Premium Real Estate Market"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="services-video"
            ></iframe>
          </div>
          <div className="video-subtitle">
            <p><strong>MAK Realty Auction Campaign. Lead Agent: Luke Fornieri Auctioneer: Claude Makdesi</strong></p>
            <p>Address: 1/4 Chute Street Mordialloc. Selling $150,000 Above the Vendors Reserve price</p>
          </div>
        </div>
      </div>
    </section>
  );
} 