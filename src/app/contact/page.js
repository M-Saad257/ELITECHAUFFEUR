"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import AIChatbot from "@/components/AIChatbot";

export default function ContactPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);

  const handleOpenQuote = (data = null) => {
    setQuoteInitialData(data);
    setIsQuoteOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#08090C] text-white selection:bg-[#C9A45C] selection:text-[#0B0D0C]">
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <div className="pt-24 sm:pt-28 pb-6 bg-[#0B0D0C] text-center border-b border-white/10">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A45C] block mb-1">
          24/7 CONCIERGE & DISPATCH
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5F1E8]">
          Contact Elite Chauffeur
        </h1>
        <p className="text-xs sm:text-sm text-[#D8D3C8] max-w-xl mx-auto mt-2 px-4">
          Mayfair Dispatch Desk • Instant Phone & Email Response
        </p>
      </div>

      <ContactSection />
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
