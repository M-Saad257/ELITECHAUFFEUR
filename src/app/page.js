"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import FleetSection from "@/components/FleetSection";
import ServicesSection from "@/components/ServicesSection";
import AirportSection from "@/components/AirportSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExperienceSection from "@/components/ExperienceSection";
import Testimonials from "@/components/Testimonials";
import CorporateSection from "@/components/CorporateSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);

  const handleOpenQuote = (data = null) => {
    setQuoteInitialData(data);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteInitialData(null);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#08090C] text-white selection:bg-[#D4AF37] selection:text-[#08090C] overflow-x-hidden">
      {/* Sticky Luxury Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Hero Section with Embedded Booking Card */}
      <Hero
        onOpenQuote={(data) => handleOpenQuote(data)}
        onExploreFleet={() => scrollToSection("fleet")}
      />

      {/* Trust Strip */}
      <TrustBar />

      {/* Introduction Section */}
      <AboutSection />

      {/* Fleet Showcase Section */}
      <FleetSection onBookVehicle={(vehicle) => handleOpenQuote({ vehicleId: vehicle.id })} />

      {/* Tailored Services Section */}
      <ServicesSection onSelectService={(service) => handleOpenQuote({ type: service.id })} />

      {/* Airport Transfer Feature */}
      <AirportSection onBookAirport={() => handleOpenQuote({ type: "airport", pickup: "London Heathrow Airport (LHR)" })} />

      {/* 3-Step Process with Connected Pipe Line */}
      <HowItWorks onStartBooking={() => handleOpenQuote()} />

    
      {/* Why Choose Us Feature Grid */}
      <WhyChooseUs />

      {/* Full-width Experience Lifestyle Section */}
      <ExperienceSection onExperienceClick={() => handleOpenQuote()} />

      {/* Executive Testimonials */}
      <Testimonials />

      {/* Corporate Travel Section */}
      <CorporateSection onCorporateEnquiry={() => handleOpenQuote({ type: "corporate" })} />

      {/* Final Dramatic CTA */}
      <FinalCTA onOpenQuote={() => handleOpenQuote()} />

      {/* Multi-Column Luxury Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Booking & Quote Calculation Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialData={quoteInitialData}
      />
    </main>
  );
}
