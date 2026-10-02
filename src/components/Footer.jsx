"use client";

import { Crown, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Footer({ onOpenQuote }) {
  return (
    <footer id="contact" className="bg-[#0B0D0C] text-[#D8D3C8] pt-10 pb-8 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#C9A45C]/50 bg-[#141817] flex items-center justify-center">
                <Crown className="w-4 h-4 text-[#C9A45C]" />
              </div>
              <span className="font-serif text-xl font-bold tracking-widest text-[#F5F1E8]">
                ELITE<span className="text-[#C9A45C] font-light ml-1">CHAUFFEUR</span>
              </span>
            </div>

            <p className="text-xs font-normal text-[#D8D3C8] leading-relaxed max-w-sm">
              The United Kingdom's premier executive chauffeur service. Delivering luxury, discretion, and guaranteed punctuality across London, UK airports, and national corporate roadshows.
            </p>

            <div className="pt-1 space-y-1.5 text-xs text-[#F5F1E8] font-medium">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>+44 (0)20 7946 0912</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>bookings@elitechauffeur.co.uk</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Mayfair, London W1J 7NT, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#F5F1E8] font-serif">
              Company
            </h4>
            <ul className="space-y-1.5 text-xs text-[#D8D3C8]">
              <li><a href="#about" className="hover:text-[#C9A45C] transition-colors">About Us</a></li>
              <li><a href="#fleet" className="hover:text-[#C9A45C] transition-colors">Our Fleet</a></li>
              <li><a href="#services" className="hover:text-[#C9A45C] transition-colors">Services</a></li>
              <li><a href="#corporate" className="hover:text-[#C9A45C] transition-colors">Corporate Travel</a></li>
              <li><a href="#airports" className="hover:text-[#C9A45C] transition-colors">Airport Hubs</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#F5F1E8] font-serif">
              Services
            </h4>
            <ul className="space-y-1.5 text-xs text-[#D8D3C8]">
              <li><a href="#services" className="hover:text-[#C9A45C] transition-colors">Airport Transfers</a></li>
              <li><a href="#services" className="hover:text-[#C9A45C] transition-colors">Executive Travel</a></li>
              <li><a href="#services" className="hover:text-[#C9A45C] transition-colors">Corporate Accounts</a></li>
              <li><a href="#services" className="hover:text-[#C9A45C] transition-colors">Long Distance Travel</a></li>
              <li><a href="#services" className="hover:text-[#C9A45C] transition-colors">Hourly Chauffeur</a></li>
            </ul>
          </div>

          {/* Column 3: Support & Book */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#F5F1E8] font-serif">
              Support & Book
            </h4>
            <ul className="space-y-1.5 text-xs text-[#D8D3C8]">
              <li><a href="#contact" className="hover:text-[#C9A45C] transition-colors">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-[#C9A45C] transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-[#C9A45C] transition-colors">TfL Operator License</a></li>
            </ul>

            <div className="pt-1">
              <button
                onClick={onOpenQuote}
                className="w-full btn-gold-primary py-2 px-3 text-[11px]"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#D8D3C8]/70">
          <p>© {new Date().getFullYear()} ELITE CHAUFFEUR UK LIMITED. TfL PCO License #009872. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">TfL Compliance</span>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/442079460912"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300 transform hover:scale-110 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-[11px] font-bold uppercase tracking-wider pl-0 group-hover:pl-2">
          WhatsApp Us
        </span>
      </a>
    </footer>
  );
}
