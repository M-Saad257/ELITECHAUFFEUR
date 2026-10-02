"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import AIChatbot from "@/components/AIChatbot";

export default function ServicesPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);

  const handleOpenQuote = (data = null) => {
    setQuoteInitialData(data);
    setIsQuoteOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#08090C] text-white selection:bg-[#C9A45C] selection:text-[#0B0D0C]">
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <div className="pt-24 sm:pt-28 pb-6 bg-[#FAF9F5] text-center border-b border-slate-200 text-[#0F172A]">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8860B] block mb-1">
          TAILORED CHAUFFEUR SERVICES
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F172A]">
          UK Executive Services
        </h1>
        <p className="text-xs sm:text-sm text-[#475569] max-w-xl mx-auto mt-2 px-4">
          Airport transfers, C-suite roadshows, inter-city road transit, and hourly standby rentals
        </p>
      </div>

      <ServicesSection onSelectService={(service) => handleOpenQuote({ type: service.id })} />
      <ExperienceSection onExperienceClick={() => handleOpenQuote()} />
      <FinalCTA onOpenQuote={() => handleOpenQuote()} />
      <Footer onOpenQuote={() => handleOpenQuote()} />
      <AIChatbot onOpenQuote={(data) => handleOpenQuote(data)} />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialData={quoteInitialData}
      />
    </main>
  );
}
