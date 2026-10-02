"use client";

import { Phone, ArrowRight, ShieldCheck, FileCheck, Clock, Crown } from "lucide-react";
import Image from "next/image";

export default function FinalCTA({ onOpenQuote }) {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center py-12 sm:py-16 bg-[#0B0D0C] overflow-hidden border-t border-[#C9A45C]/20">
      {/* Background Cinematic Photography with Rich Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Elite UK Chauffeur Luxury Background"
          fill
          priority
          className="object-cover object-center brightness-[3] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/80 to-[#0B0D0C]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0C]/90 via-transparent to-[#0B0D0C]/90" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C9A45C]/40 bg-[#141817]/90 backdrop-blur-md shadow-xl">
          <Crown className="w-3.5 h-3.5 text-[#C9A45C]" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
            ELITE CHAUFFEUR • UNITED KINGDOM
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5F1E8] tracking-tight leading-tight">
          Your Journey Deserves More.
        </h2>

        <p className="text-xs sm:text-sm text-[#D8D3C8] font-normal max-w-xl mx-auto leading-relaxed">
          Book a professional UK chauffeur today and experience travel designed around your schedule, your comfort, and your total peace of mind.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <button
            onClick={onOpenQuote}
            className="btn-gold-primary py-3 px-7 text-xs"
          >
            <span>GET AN INSTANT QUOTE</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#0B0D0C]" />
          </button>

          <a
            href="tel:+442079460912"
            className="btn-gold-secondary py-3 px-6 text-xs"
          >
            <Phone className="w-3.5 h-3.5 mr-2 text-[#C9A45C]" />
            <span>CALL: +44 20 7946 0912</span>
          </a>
        </div>

        {/* Trust Badges Bar with Golden Icons for ALL items */}
        <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#D8D3C8]">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#C9A45C] shrink-0" />
            <span>Fixed Pricing Guaranteed</span>
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <FileCheck className="w-4 h-4 text-[#C9A45C] shrink-0" />
            <span>Instant Voucher Confirmation</span>
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-[#C9A45C] shrink-0" />
            <span>24/7 UK Dispatch Desk</span>
          </span>
        </div>
      </div>
    </section>
  );
}
