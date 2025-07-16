import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src="/images/logo.svg" 
              alt="MAK REALTY Logo" 
              className="footer-logo"
            />
            <div className="footer-brand-text">
              <h3>Luke Fornieri</h3>
              <p>Your trusted partner in Melbourne's luxury real estate market. Specializing in premium properties and exceptional service.</p>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Luxury Sales</a></li>
              <li><a href="#services">Property Management</a></li>
              <li><a href="#services">Investment Advisory</a></li>
              <li><a href="#services">Market Analysis</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li>📧 info@lukefornieri.com</li>
              <li>📞 +61 3 1234 5678</li>
              <li>📍 Melbourne, VIC</li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://instagram.com/lukefornieri" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="https://youtube.com/@lukefornieri" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">YouTube</span>
                ▶️
              </a>
              <a href="https://medium.com/@lukeforn" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Medium</span>
                📝
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 Luke Fornieri Real Estate. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/deletion">Data Deletion</Link>
            <a href="#contact">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 