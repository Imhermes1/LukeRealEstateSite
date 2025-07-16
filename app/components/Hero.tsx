export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      <div className="hero-background">
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'blue',
            backgroundImage: 'url(/images/urlaubstracker-dW8dOC8r7O4-unsplash.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
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