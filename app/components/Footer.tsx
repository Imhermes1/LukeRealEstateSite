export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Luke Fornieri</h3>
            <p>MAK REALTY</p>
          </div>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://au.linkedin.com/in/lukefornieri" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://instagram.com/lukefornieri" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://medium.com/@lukeforn" target="_blank" rel="noopener noreferrer" aria-label="Medium">Medium</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Luke Fornieri, MAK REALTY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 