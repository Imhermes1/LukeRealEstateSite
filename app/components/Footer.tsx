import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Luke Fornieri Real Estate</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner in Melbourne's luxury real estate market. 
              Specializing in premium properties and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/lukefornieri" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="https://youtube.com/@lukefornieri" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                ▶️
              </a>
              <a href="https://medium.com/@lukeforn" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Medium</span>
                📝
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Luxury Sales</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Property Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Investment Advisory</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Market Analysis</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 info@lukefornieri.com</li>
              <li>📞 +61 3 1234 5678</li>
              <li>📍 Melbourne, VIC</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Luke Fornieri Real Estate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 