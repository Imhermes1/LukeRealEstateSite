import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section" aria-label="About">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Luke Fornieri</h2>
            <p>Luke Fornieri is a Licensed Estate Agent & Sales Partner at MAK Realty. Specialising in Melbourne's Eastern and South Eastern suburbs Premium property market. Luke has successfully closed over 50 property transactions valued at nearly $100 million. Known for his tailored approach, strong negotiation skills, and clear communication, Luke consistently delivers outstanding results.</p>
            <p>Luke's innovative marketing strategies and ability to think outside the box ensure maximum exposure and excellent outcomes for his clients. His commitment to excellence helps clients achieve their property goals with confidence.</p>
            <p>Luke prioritises clear and consistent vendor communication, ensuring clients are well-informed and confident throughout the process. As a proud member of MAK REALTY, "I combine local expertise with cutting-edge marketing strategies to deliver results that exceed expectations."</p>
          </div>
          <div className="about-image">
            <Image 
              src="/images/Luke_004_HiRes.jpg" 
              alt="Luke Fornieri, Professional Real Estate Agent" 
              width={500}
              height={500}
              className="about-photo"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </div>
    </section>
  );
} 