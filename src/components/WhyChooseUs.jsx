"use client";

import { motion } from "framer-motion";
import { Clock, UserCheck, Tag, Plane, Sparkles, PhoneCall, Award } from "lucide-react";

export default function WhyChooseUs() {
  const proofItems = [
    {
      title: "15-Min Early Arrival",
      tagline: "GUARANTEED PUNCTUALITY",
      desc: "Chauffeurs arrive 15 minutes ahead of schedule for zero waiting anxiety before flights or meetings.",
      icon: Clock,
    },
    {
      title: "DBS Vetted Drivers",
      tagline: "TFL LICENSED & APPROVED",
      desc: "All chauffeurs undergo background checks, defensive driving certifications, and strict discretion standards.",
      icon: UserCheck,
    },
    {
      title: "Fixed All-Inclusive Rates",
      tagline: "NO SURGE FEES OR SURPRISES",
      desc: "Quotes include congestion charges, airport dropoff fees, parking, taxes, and gratuities with zero add-ons.",
      icon: Tag,
    },
    {
      title: "Live Flight Tracking",
      tagline: "60-MIN FREE WAIT TIME",
      desc: "We track your flight via radar and adjust pickup times automatically if your flight is delayed.",
      icon: Plane,
    },
    {
      title: "Showroom-Grade Fleet",
      tagline: "LATE-MODEL FLAGSHIP CARS",
      desc: "Immaculate Mercedes-Benz and Range Rover vehicles equipped with 5G Wi-Fi, chilled water, and chargers.",
      icon: Sparkles,
    },
    {
      title: "24/7 UK Dispatch Desk",
      tagline: "DIRECT PHONE & WHATSAPP",
      desc: "Our London dispatch desk is available round-the-clock to manage real-time flight changes or emergency trips.",
      icon: PhoneCall,
    },
  ];

  return (
    <section className="min-h-[100vh] flex items-center justify-center py-8 sm:py-12 bg-[#0B0D0C] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-6 space-y-1.5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-[#C9A45C]/30 bg-[#141817]">
            <Award className="w-3 h-3 text-[#C9A45C]" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
              MEASURABLE PROOF & USPs
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8]">
            Why Choose Elite Chauffeur
          </h2>

          <p className="text-xs sm:text-sm text-[#D8D3C8] font-normal">
            Measurable UK chauffeur standards engineered for executive peace of mind.
          </p>
        </motion.div>

        {/* Professional Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {proofItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-[#141817] p-4 sm:p-5 rounded-xl border border-[#C9A45C]/20 hover:border-[#C9A45C]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0B0D0C] border border-[#C9A45C]/30 flex items-center justify-center text-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#0B0D0C] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-[#C9A45C] bg-[#0B0D0C] px-2 py-0.5 rounded border border-[#C9A45C]/20">
                      {item.tagline}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#D8D3C8] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
