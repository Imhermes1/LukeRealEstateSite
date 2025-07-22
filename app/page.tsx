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
      image: "/images/0361.01 5 Princely Tce, Templestowe-3.jpg",
      details: "Grand hillside residence with sweeping views, resort-style pool and refined European interiors."
    },
    {
      address: "9 Manton Street, Richmond",
      status: "SOLD",
      price: 2400000,
      image: "/images/LowRes_2k_17.jpg",
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
        propertyIndex={selectedProperty}
      />
    </>
  );
} 