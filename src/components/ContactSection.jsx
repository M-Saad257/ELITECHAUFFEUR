"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Airport Transfer",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="min-h-[100vh] flex items-center justify-center py-12 sm:py-16 bg-[#0B0D0C] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A45C]/30 bg-[#141817]">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9A45C]">
              24/7 EXECUTIVE CONCIERGE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F1E8]">
            Get In Touch With Us
          </h2>

          <p className="text-xs sm:text-sm text-[#D8D3C8] font-normal leading-relaxed">
            Have a custom travel itinerary, corporate fleet inquiry, or urgent booking? Our London dispatch team is at your service 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Live Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#141817] p-5 rounded-2xl border border-[#C9A45C]/30 shadow-2xl space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#F5F1E8] border-b border-white/10 pb-3">
                London Dispatch Office
              </h3>

              <div className="space-y-8">
                <a
                  href="https://wa.me/442079460912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0D0C] border border-white/10 hover:border-[#25D366] transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#25D366] block">WhatsApp Concierge</span>
                    <strong className="text-xs font-bold text-[#F5F1E8]">Chat on WhatsApp</strong>
                    <p className="text-[10px] text-[#D8D3C8]">Instant quote & driver ETA tracking</p>
                  </div>
                </a>

                <a
                  href="mailto:bookings@elitechauffeur.co.uk"
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0D0C] border border-white/10 hover:border-[#C9A45C] transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#141817] border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#C9A45C] block">Email Inquiries</span>
                    <strong className="text-xs font-bold text-[#F5F1E8]">bookings@elitechauffeur.co.uk</strong>
                    <p className="text-[10px] text-[#D8D3C8]">Corporate tariff sheets & custom invoices</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B0D0C] border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-[#141817] border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#C9A45C] block">Mayfair Office Address</span>
                    <strong className="text-xs font-bold text-[#F5F1E8]">Mayfair, London W1J 7NT, UK</strong>
                    <p className="text-[10px] text-[#D8D3C8]">Central London Operations Hub</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#D8D3C8] font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                  15-Min Reply Guarantee
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  TfL Licensed
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Theme Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#141817] p-6 sm:p-7 rounded-2xl border border-[#C9A45C]/30 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-500/40 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#F5F1E8]">
                  Message Received Successfully
                </h3>
                <p className="text-xs text-[#D8D3C8] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our London dispatch coordinator has received your message and will contact you via email or phone within 15 minutes.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", subject: "Airport Transfer", message: "" });
                  }}
                  className="btn-gold-primary py-2.5 px-6 text-xs mt-2"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <h3 className="font-serif text-lg font-bold text-[#F5F1E8]">
                    Send Us A Direct Message
                  </h3>
                  <p className="text-xs text-[#D8D3C8]">
                    Fill in your details below and our team will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Wright"
                      className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] placeholder-white/40 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] placeholder-white/40 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7911 123456"
                      className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] placeholder-white/40 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                    >
                      <option value="Airport Transfer">Airport Transfer (LHR / LGW / FBO)</option>
                      <option value="Executive Roadshow">Executive Corporate Roadshow</option>
                      <option value="Hourly Chauffeur">Hourly Chauffeur Standby</option>
                      <option value="Inter-City UK">Inter-City UK Transit</option>
                      <option value="Corporate Account Setup">Corporate Account Setup</option>
                      <option value="General Inquiry">General Concierge Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                    Your Message / Travel Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your flight details, pickup time, luggage requirements, or specific requests..."
                    className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] placeholder-white/40 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold-primary py-3 px-6 text-xs justify-center font-bold tracking-wider rounded-xl cursor-pointer shadow-lg"
                >
                  <span>SEND MESSAGE TO DISPATCH</span>
                  <Send className="w-3.5 h-3.5 ml-2 text-[#0B0D0C]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
