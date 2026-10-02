"use client";

import { Phone, ArrowRight, ShieldCheck, FileCheck, Clock, Crown, Award } from "lucide-react";
import Image from "next/image";

export default function FinalCTA({ onOpenQuote }) {
  return (
    <section className="min-h-[100vh] flex items-center justify-center py-12 sm:py-16 bg-[#FAF9F5] relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 2-Column Split Luxury Showcase Card */}
        <div className="rounded-3xl p-6 sm:p-10 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Crystal Clear High-Definition Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C9A45C]/40 shadow-xl group">
                <div className="aspect-[4/3] relative w-full bg-[#0F172A]">
                  <Image
                    src="/images/fleet-rolls-royce.jpg"
                    alt="Rolls Royce Phantom Sovereign UK Chauffeur"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C]/80 via-transparent to-transparent" />

                {/* Floating Quality Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B0D0C]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#C9A45C]/40 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A45C] flex items-center justify-center shrink-0 text-[#0B0D0C] font-bold">
                    <Award className="w-5 h-5 text-[#0B0D0C]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-serif font-bold text-[#F5F1E8]">UK Sovereign Chauffeur Standards</h4>
                    <p className="text-[11px] text-[#C9A45C]">Full Commercial Insurance • TfL Operator License #009872</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Pristine Executive Call-To-Action */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C9A45C]/40 bg-[#FAF9F5] shadow-sm">
                <Crown className="w-3.5 h-3.5 text-[#B8860B]" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#B8860B]">
                  ELITE CHAUFFEUR • UNITED KINGDOM
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
                Your Journey Deserves More.
              </h2>

              <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                Book a professional UK chauffeur today and experience travel designed around your schedule, your refined comfort, and your total peace of mind.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="btn-gold-primary py-3.5 px-7 text-xs shadow-lg"
                >
                  <span>GET AN INSTANT QUOTE</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#0B0D0C]" />
                </button>

                <a
                  href="tel:+442079460912"
                  className="bg-[#FAF9F5] text-[#0F172A] border border-[#C9A45C] hover:bg-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-all inline-flex items-center justify-center shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 mr-2 text-[#B8860B]" />
                  <span>CALL: +44 20 7946 0912</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#334155]">
                <div className="flex items-center gap-2 font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#B8860B] shrink-0" />
                  <span>Fixed Pricing Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <FileCheck className="w-4 h-4 text-[#B8860B] shrink-0" />
                  <span>Instant Confirmation</span>
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <Clock className="w-4 h-4 text-[#B8860B] shrink-0" />
                  <span>24/7 Dispatch Desk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
