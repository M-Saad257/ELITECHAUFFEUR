"use client";

import { Building2, ArrowRight, PhoneCall, CreditCard, ShieldCheck, Zap, Briefcase } from "lucide-react";

export default function CorporateSection({ onCorporateEnquiry }) {
  const B2BHighlights = [
    { title: "30-Day Account Billing", desc: "Itemized monthly statements & VAT receipts.", icon: CreditCard },
    { title: "Priority Dispatch Desk", desc: "Guaranteed vehicle allocation during London peak.", icon: Zap },
    { title: "Dedicated Account Lead", desc: "Single point of contact for Executive EAs.", icon: ShieldCheck },
    { title: "Roadshows & Delegations", desc: "Multi-car fleet coordination for summits.", icon: Briefcase },
  ];

  return (
    <section id="corporate" className="min-h-[100vh] flex items-center justify-center py-10 sm:py-14 bg-[#0B0D0C] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side: Clean Executive Overview */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-[#C9A45C]/30 bg-[#141817]">
              <Building2 className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
                ENTERPRISE B2B ACCOUNTS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F1E8] leading-tight">
              Executive Mobility. <br />
              <span className="text-[#C9A45C]">Zero Friction.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#D8D3C8] font-normal leading-relaxed">
              Streamlined ground transport management engineered for London financial institutions, law firms, and executive offices.
            </p>

            {/* 4 Sleek Compact Feature Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {B2BHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="card-charcoal p-3.5 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0B0D0C] border border-[#C9A45C]/30 flex items-center justify-center shrink-0 text-[#C9A45C]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#F5F1E8]">{item.title}</h4>
                      <p className="text-[11px] text-[#D8D3C8]/80 font-normal mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="tel:+442079460912"
                className="btn-gold-secondary py-2.5 px-4 text-xs"
              >
                <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-[#C9A45C]" />
                <span>Call: +44 20 7946 0912</span>
              </a>
            </div>
          </div>

          {/* Right Side: Streamlined Corporate Application Form */}
          <div className="lg:col-span-6 card-charcoal p-5 sm:p-6 shadow-2xl relative">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5F1E8] mb-1">
              Setup Your Corporate Account
            </h3>
            <p className="text-xs text-[#D8D3C8] font-normal mb-4">
              Receive enterprise tariff sheets and account credentials within 24 hours.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onCorporateEnquiry();
              }}
              className="space-y-3"
            >
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Goldman Sachs UK / Rothschild & Co"
                  className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-lg px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Executive Assistant / Travel Lead"
                    className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-lg px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.co.uk"
                    className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-lg px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                  Monthly Chauffeur Volume
                </label>
                <select className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-lg px-3 py-2 text-xs text-white focus:outline-none">
                  <option value="1-10">1 - 10 Executive Journeys / Month</option>
                  <option value="10-50">10 - 50 Executive Journeys / Month</option>
                  <option value="50+">50+ Journeys / Month (Enterprise Account)</option>
                  <option value="roadshow">Investor Roadshow Project</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full btn-gold-primary justify-center py-2.5 text-xs mt-2"
              >
                <span>APPLY FOR CORPORATE ACCOUNT</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#0B0D0C]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
