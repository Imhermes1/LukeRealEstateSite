interface Property {
  address: string;
  status: string;
  price: number;
  image: string;
  details: string;
}

interface CareerHighlightsProps {
  properties: Property[];
  onPropertyClick: (index: number) => void;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

export default function CareerHighlights({ properties, onPropertyClick }: CareerHighlightsProps) {
  return (
    <section id="career-highlights" className="section" aria-label="Career Highlight Sales">
      <div className="container">
        <h2 className="section-title">Career Highlight Sales</h2>
        <p className="section-subtitle">Record-breaking achievements in Melbourne's luxury property market</p>
        <div className="sales-grid">
          {properties.map((property, index) => {
            const [street, suburb] = property.address.split(", ");
            return (
              <article 
                key={index}
                className="property-card" 
                onClick={() => onPropertyClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onPropertyClick(index);
                  }
                }}
                aria-label={`View details for ${property.address}`}
              >
                <div className="property-image-wrapper">
                  <img 
                    src={property.image} 
                    alt={`${street} in ${suburb}`} 
                    className="property-image"
                  />
                  <div className="property-status">
                    <span className="status-badge status-sold">{property.status}</span>
                  </div>
                </div>
                <div className="property-content">
                  <h3 className="property-title">{street}</h3>
                  <p className="property-location">{suburb}, Melbourne</p>
                  <p className="property-price">{formatPrice(property.price)}</p>
                  <p className="property-description">{property.details}</p>
                  <button 
                    className="btn btn-secondary property-details-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onPropertyClick(index);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
} 