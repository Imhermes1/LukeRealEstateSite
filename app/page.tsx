'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CareerHighlights from './components/CareerHighlights';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import MediaCoverage from './components/MediaCoverage';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PropertyModal from './components/PropertyModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(0);

  const properties = [
    {
      address: "5 Princely Terrace, Templestowe",
      status: "SOLD",
      price: 6250000,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      details: "Grand hillside residence with sweeping views, resort-style pool and refined European interiors."
    },
    {
      address: "9 Manton Street, Richmond",
      status: "SOLD",
      price: 2400000,
      image: "https://images.unsplash.com/photo-1616486333466-3e2916a8e30d?auto=format&fit=crop&w=1200&q=80",
      details: "Architect-designed contemporary terrace blending heritage façade with light-filled modern living zones."
    }
  ];

  const openModal = (propertyIndex: number) => {
    setSelectedProperty(propertyIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CareerHighlights properties={properties} onPropertyClick={openModal} />
        <Services />
        <About />
        <Testimonials />
        <MediaCoverage />
        <Social />
        <Contact />
      </main>
      <Footer />
      <PropertyModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        property={properties[selectedProperty]}
      />
    </>
  );
} 