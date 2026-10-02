"use client";

import { Star, Quote, Award, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Exceptional service from Heathrow T5 to Mayfair. The chauffeur met us inside arrivals with an iPad name board and handled all luggage after a long flight from NYC.",
      author: "James Wilson",
      title: "Operations Director",
      company: "Apex Capital Partners",
      location: "London & New York",
      stars: 5,
      service: "Heathrow T5 • S-Class",
    },
    {
      quote:
        "Our executive team relies on Elite Chauffeur for all London investor roadshows and board member transfers. Punctual, discreet, and immaculate vehicles.",
      author: "Sarah Jenkins",
      title: "VP of Corporate Mobility",
      company: "TechGlobal UK",
      location: "Canary Wharf, London",
      stars: 5,
      service: "Roadshow • V-Class XL",
    },
    {
      quote:
        "Traveling from Central London to Edinburgh for an urgent summit was effortless. High-speed Wi-Fi and complete quiet allowed 4 hours of focused work.",
      author: "Marcus Vance",
      title: "Senior Partner",
      company: "Rothschild & Co",
      location: "Mayfair, London",
      stars: 5,
      service: "UK Long Distance • Range Rover",
    },
    {
      quote:
        "Farnborough Private Jet terminal transfer was executed to perfection. Direct tarmac tarmac coordination with our pilot. Unmatched UK executive chauffeur.",
      author: "Lord Alistair Sterling",
      title: "Chairman",
      company: "Sterling Holdings",
      location: "Farnborough / Knightsbridge",
      stars: 5,
      service: "Private Jet Hub • Mayfair First",
    },
    {
      quote:
        "Flawless handling of our annual London Tech Summit VIP guests. 14 Mercedes S-Class vehicles dispatched with zero delays and real-time coordinator updates.",
      author: "Elena Rostova",
      title: "Global Event Director",
      company: "Vanguard Media",
      location: "London & Geneva",
      stars: 5,
      service: "Corporate Fleet Dispatch",
    },
    {
      quote:
        "Prompt, professional, and elegant. The driver knew every bypass around M25 traffic during rush hour. I will never book another executive car service.",
      author: "David Chen",
      title: "Managing Director",
      company: "Blackstone Asia",
      location: "City of London",
      stars: 5,
      service: "City Airport Transfer • S-Class",
    },
  ];

  // Duplicate for seamless infinite loop scroll
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="min-h-[100vh] flex flex-col justify-center py-8 sm:py-10 bg-[#0B0D0C] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        {/* Compact Header */}
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-[#C9A45C]/30 bg-[#141817] mb-2">
          <Award className="w-3 h-3 text-[#C9A45C]" />
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
            VERIFIED REVIEWS
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8]">
            Trusted By Executive Travelers
          </h2>
          <div className="hidden sm:block text-white/20">|</div>
          <div className="flex items-center gap-1.5 text-xs text-[#D8D3C8]">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C9A45C] text-[#C9A45C]" />
              ))}
            </div>
            <strong className="text-white font-bold text-xs">4.98 / 5</strong>
            <span className="text-[11px] text-[#D8D3C8]/80">(1,200+ Corporate Trips)</span>
          </div>
        </div>
      </div>

      {/* Marquee Carousel Container with Gradient Edges */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left & Right Gradient Shadows for Seamless Fade Effect */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0B0D0C] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0B0D0C] to-transparent z-10" />

        {/* Animated Infinite Marquee Track */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-5 px-4">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="w-[320px] sm:w-[380px] shrink-0 card-charcoal p-4 sm:p-5 relative shadow-lg hover:border-[#C9A45C]/60 transition-all cursor-pointer group"
            >
              <Quote className="w-6 h-6 text-[#C9A45C]/15 absolute top-4 right-4 group-hover:text-[#C9A45C]/30 transition-colors" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-2">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A45C] text-[#C9A45C]" />
                ))}
              </div>

              {/* Compact Quote Text */}
              <p className="font-serif text-xs sm:text-sm text-[#F5F1E8] italic leading-relaxed line-clamp-3 mb-4">
                “{item.quote}”
              </p>

              {/* Author & Transfer Tag */}
              <div className="pt-3 border-t border-white/10 flex items-end justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-[#F5F1E8] leading-tight flex items-center gap-1.5">
                    <span className="truncate">{item.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                  </h4>
                  <p className="text-[11px] text-[#C9A45C] font-medium truncate">
                    {item.title} • {item.company}
                  </p>
                </div>

                <div className="shrink-0 bg-[#0B0D0C] px-2 py-1 rounded border border-white/10 text-right">
                  <span className="text-[10px] font-medium text-[#D8D3C8] block whitespace-nowrap">
                    {item.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <p className="text-center text-[11px] text-[#D8D3C8]/60 mt-3 italic">
        Hover over any card to pause scrolling
      </p>
    </section>
  );
}
