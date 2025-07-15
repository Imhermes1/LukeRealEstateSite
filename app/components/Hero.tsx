export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1502333772257-6b67ca3d0958?auto=format&fit=crop&w=1600&q=80" 
          alt="Melbourne city skyline at dusk" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Premium Real Estate Excellence</h1>
        <p className="hero-subtitle">Your trusted partner in Melbourne's luxury property market</p>
        <a href="#contact" className="btn btn-primary">Get Started Today</a>
      </div>
    </section>
  );
} 