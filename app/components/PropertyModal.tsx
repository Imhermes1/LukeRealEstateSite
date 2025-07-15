'use client';

import { useEffect } from 'react';

interface Property {
  address: string;
  status: string;
  price: number;
  image: string;
  details: string;
}

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: Property;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

export default function PropertyModal({ isOpen, onClose, property }: PropertyModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!property) return null;

  const [street, suburb] = property.address.split(", ");

  const handleEnquire = () => {
    onClose();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const nameInput = document.getElementById('name') as HTMLInputElement;
          if (nameInput) nameInput.focus();
        }, 500);
      }
    }, 100);
  };

  return (
    <div 
      className={`modal ${isOpen ? 'modal-open' : ''}`} 
      role="dialog" 
      aria-labelledby="modal-title" 
      aria-describedby="modal-description" 
      aria-hidden={!isOpen}
    >
      <div className="modal-overlay" aria-label="Close modal" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">{street}</h2>
          <button className="modal-close" aria-label="Close modal" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div className="modal-image-container">
            <img 
              id="modal-image" 
              src={property.image} 
              alt={`${street} in ${suburb}`} 
              className="modal-image"
            />
            <div className="modal-status">
              <span className="status-badge status-sold">{property.status}</span>
            </div>
          </div>
          <div className="modal-info">
            <p id="modal-location" className="modal-location">{suburb}</p>
            <p id="modal-price" className="modal-price">{formatPrice(property.price)}</p>
            <p id="modal-description" className="modal-description">{property.details}</p>
            <div className="modal-actions">
              <button className="btn btn-primary enquire-btn" onClick={handleEnquire}>
                Enquire about similar properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 