"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Crown } from "lucide-react";

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#141817]/95 backdrop-blur-md border-b border-[#C9A45C]/20 py-3 shadow-2xl"
          : "bg-gradient-to-b from-[#0B0D0C] via-[#0B0D0C]/70 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#141817] border border-[#C9A45C]/40 flex items-center justify-center">
            <Crown className="w-4 h-4 text-[#C9A45C]" />
          </div>
          <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-[#F5F1E8]">
            ELITE<span className="text-[#C9A45C] font-light ml-1">CHAUFFEUR</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#F5F1E8]">
          <a href="#services" className="hover:text-[#C9A45C] transition-colors">Services</a>
          <a href="#fleet" className="hover:text-[#C9A45C] transition-colors">Fleet</a>
          <a href="#airports" className="hover:text-[#C9A45C] transition-colors">Airports</a>
          <a href="#corporate" className="hover:text-[#C9A45C] transition-colors">Corporate</a>
          <a href="#contact" className="hover:text-[#C9A45C] transition-colors">Contact</a>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="tel:+442079460912"
            className="flex items-center gap-1.5 text-xs font-semibold text-[#F5F1E8] hover:text-[#C9A45C] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>+44 20 7946 0912</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="quote py-2 px-4 text-[11px]"
          >
            GET A QUOTE
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#F5F1E8] hover:text-[#C9A45C]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#0B0D0C]/98 pt-20 px-6 pb-8 flex flex-col justify-between">
          <div className="space-y-5 text-lg font-serif text-[#F5F1E8]">
            <a href="#services" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 pb-3">Services</a>
            <a href="#fleet" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 pb-3">Fleet</a>
            <a href="#airports" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 pb-3">Airports</a>
            <a href="#corporate" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 pb-3">Corporate</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="block border-b border-white/10 pb-3">Contact</a>
          </div>

          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenQuote();
            }}
            className="w-full btn-gold-primary py-3 text-xs"
          >
            GET A QUOTE
          </button>
        </div>
      )}
    </header>
  );
}
