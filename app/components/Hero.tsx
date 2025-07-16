export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      <div className="hero-background">
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'blue',
            backgroundImage: 'url(/images/hero-optimized.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-glassmorphism"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Real Estate Excellence</h1>
        <p className="hero-subtitle">Your trusted partner in Melbourne's property market</p>
        <a href="#contact" className="btn btn-primary btn-hero-large">Contact Us Today!</a>
      </div>
    </section>
  );
} 