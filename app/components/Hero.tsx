export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      <div className="hero-background">
        <img 
          src="/images/hero-melbourne-skyline.jpg" 
          alt="Melbourne city skyline during day time" 
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