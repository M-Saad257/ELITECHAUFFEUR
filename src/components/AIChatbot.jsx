"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, Bot, ArrowRight, RefreshCw, CheckCircle2 } from "lucide-react";

export default function AIChatbot({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const initialMessages = [
    {
      id: "welcome-1",
      sender: "bot",
      title: "Welcome to Elite Chauffeur UK",
      subtitle: "AI Concierge",
      text: "I am your Executive AI Assistant. How may I assist with your luxury journey today?",
      time: "Just now",
      suggestions: [
        "What is the fare to Heathrow?",
        "Rolls Royce price & specs",
        "Compare Maybach & S-Class",
        "How do Corporate Accounts work?",
      ],
    },
  ];

  const [messages, setMessages] = useState(initialMessages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Comprehensive Knowledge-Base Response Generator with Structured Data
  const getAIResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes("heathrow") || q.includes("gatwick") || q.includes("airport") || q.includes("fbo") || q.includes("flight")) {
      return {
        title: "London Airport Transfers Hub",
        subtitle: "Fixed Tariff",
        text: "All-inclusive luxury airport transfers with flight tracking and terminal meet & greet.",
        specs: [
          { label: "Heathrow Airport (LHR)", value: "From £90 fixed" },
          { label: "Gatwick Airport (LGW)", value: "From £110 fixed" },
          { label: "Farnborough FBO (FAB)", value: "VIP Tarmac Access" },
        ],
        features: [
          "Automated radar flight tracking for delays",
          "60 mins complimentary waiting time included",
          "Inside-terminal meet & greet with iPad name board",
        ],
        actionText: "Book Airport Transfer",
        actionData: { type: "airport", pickup: "London Heathrow Airport (LHR T5)" },
      };
    }

    if (q.includes("maybach") || q.includes("s680")) {
      return {
        title: "Mercedes-Maybach S680",
        subtitle: "VIP First-Class Suite",
        specs: [
          { label: "Hourly Rate", value: "£150 / hour" },
          { label: "Transfer Rate", value: "£180 transfer" },
          { label: "Capacity", value: "3 Passengers, 2 Large Cases" },
        ],
        features: [
          "First-class reclining calf-rest seats",
          "Acoustic glass road noise compensation",
          "Silver champagne flutes & 5G Wi-Fi",
        ],
        actionText: "Book Mercedes-Maybach",
        actionData: { vehicleId: "maybach" },
      };
    }

    if (q.includes("rolls") || q.includes("phantom")) {
      return {
        title: "Rolls-Royce Phantom VIII",
        subtitle: "Sovereign Luxury",
        specs: [
          { label: "Hourly Rate", value: "£220 / hour" },
          { label: "Transfer Rate", value: "£250 transfer" },
          { label: "Capacity", value: "3 Passengers, 2 Large Cases" },
        ],
        features: [
          "Handcrafted Starlight LED headliner",
          "Lambswool floor rugs & whisper-quiet V12 ride",
          "Bespoke rear theater screens & chilled bar",
        ],
        actionText: "Book Rolls-Royce Phantom",
        actionData: { vehicleId: "rolls-royce" },
      };
    }

    if (q.includes("s-class") || q.includes("s class") || q.includes("sedan")) {
      return {
        title: "Mercedes-Benz S-Class",
        subtitle: "Flagship Executive",
        specs: [
          { label: "Hourly Rate", value: "£95 / hour" },
          { label: "Transfer Rate", value: "£110 transfer" },
          { label: "Capacity", value: "3 Passengers, 2 Large Cases" },
        ],
        features: [
          "Long wheelbase extended legroom",
          "Nappa heated/ventilated leather seats",
          "Burmester surround sound & Hildon water",
        ],
        actionText: "Book Mercedes S-Class",
        actionData: { vehicleId: "s-class" },
      };
    }

    if (q.includes("v-class") || q.includes("v class") || q.includes("van") || q.includes("group")) {
      return {
        title: "Mercedes-Benz V-Class XL",
        subtitle: "VIP Group Travel",
        specs: [
          { label: "Hourly Rate", value: "£110 / hour" },
          { label: "Transfer Rate", value: "£130 transfer" },
          { label: "Capacity", value: "7 Passengers, 6 Large Cases" },
        ],
        features: [
          "Face-to-face conference leather seating",
          "Dual power sliding doors & ambient lighting",
          "Massive luggage space for group travel",
        ],
        actionText: "Book Mercedes V-Class",
        actionData: { vehicleId: "v-class" },
      };
    }

    if (q.includes("range rover") || q.includes("suv")) {
      return {
        title: "Range Rover Autobiography",
        subtitle: "Commanding Luxury SUV",
        specs: [
          { label: "Hourly Rate", value: "£125 / hour" },
          { label: "Transfer Rate", value: "£150 transfer" },
          { label: "Capacity", value: "3 Passengers, 2 Large Cases" },
        ],
        features: [
          "Elevated executive seating position",
          "Meridian 3D surround sound audio",
          "All-terrain quad drive & FBO tarmac access",
        ],
        actionText: "Book Range Rover",
        actionData: { vehicleId: "range-rover" },
      };
    }

    if (q.includes("fleet") || q.includes("cars") || q.includes("vehicle")) {
      return {
        title: "Elite Chauffeur UK Fleet",
        subtitle: "5 Luxury Classes",
        text: "Select your desired vehicle class for instant booking with guaranteed fixed rates.",
        specs: [
          { label: "Mercedes S-Class", value: "£95/hr | £110 transfer" },
          { label: "Mercedes V-Class (7-Seat)", value: "£110/hr | £130 transfer" },
          { label: "Range Rover Autobiography", value: "£125/hr | £150 transfer" },
          { label: "Mercedes-Maybach S680", value: "£150/hr | £180 transfer" },
          { label: "Rolls-Royce Phantom VIII", value: "£220/hr | £250 transfer" },
        ],
        features: [
          "Complimentary onboard 5G Wi-Fi & bottled water",
          "Professional TfL licensed executive chauffeur",
        ],
        actionText: "Explore Fleet & Book",
        actionData: null,
      };
    }

    if (q.includes("corporate") || q.includes("account") || q.includes("billing") || q.includes("b2b")) {
      return {
        title: "Corporate B2B Accounts",
        subtitle: "Enterprise Privileges",
        text: "Dedicated corporate mobility for financial institutions, law firms & executive offices.",
        specs: [
          { label: "Billing Terms", value: "30-Day Itemized VAT Invoicing" },
          { label: "Dispatch Priority", value: "Guaranteed Peak London Access" },
          { label: "Account Manager", value: "Dedicated EA Support Lead" },
        ],
        features: [
          "Centralized roadshow and event booking platform",
          "Tailored enterprise tariff sheets",
        ],
        actionText: "Apply For Corporate Account",
        actionData: { type: "corporate" },
      };
    }

    if (q.includes("price") || q.includes("cost") || q.includes("rate") || q.includes("include") || q.includes("surge")) {
      return {
        title: "All-Inclusive Fixed Pricing",
        subtitle: "Zero Surge Rates",
        text: "Transparent, guaranteed rates with zero surge pricing during peak hours or bad weather.",
        specs: [
          { label: "Congestion & ULEZ", value: "100% Included" },
          { label: "Airport Parking & Tolls", value: "100% Included" },
          { label: "Airport Flight Waiting", value: "60 Mins Free Included" },
        ],
        features: [
          "15 mins complimentary waiting for city pickups",
          "All taxes and driver gratuities included",
        ],
        actionText: "Calculate Fare Quote",
        actionData: null,
      };
    }

    if (q.includes("driver") || q.includes("dbs") || q.includes("license") || q.includes("tfl") || q.includes("safe")) {
      return {
        title: "Chauffeur Safety & Accreditation",
        subtitle: "TfL Licensed",
        specs: [
          { label: "Operator License", value: "TfL Approved #009872" },
          { label: "Vetting", value: "Enhanced Criminal DBS Checked" },
          { label: "Driver Contact", value: "Sent 2 hrs Prior to Pickup" },
        ],
        features: [
          "Uniformed, discreet, and defensive driving certified",
          "Real-time GPS tracking & vehicle telematics",
        ],
        actionText: "Book Verified Chauffeur",
        actionData: null,
      };
    }

    if (q.includes("contact") || q.includes("phone") || q.includes("call") || q.includes("office") || q.includes("location")) {
      return {
        title: "London Concierge Desk",
        subtitle: "24/7 Support",
        specs: [
          { label: "Phone", value: "+44 (0)20 7946 0912" },
          { label: "Email", value: "bookings@elitechauffeur.co.uk" },
          { label: "Headquarters", value: "Mayfair, London W1J 7NT" },
        ],
        features: [
          "24/7 Live dispatch response team",
          "Instant booking confirmation & flight monitoring",
        ],
        actionText: "Get Instant Fare Quote",
        actionData: null,
      };
    }

    return {
      title: "Elite Chauffeur UK Concierge",
      subtitle: "Executive Service",
      text: "We provide fixed-rate executive chauffeur transfers across London, UK airports, and nationwide destinations.",
      features: [
        "Mercedes S-Class, V-Class, Maybach & Rolls-Royce fleet",
        "All-inclusive fixed transparent pricing",
        "24/7 flight tracking and professional DBS chauffeurs",
      ],
      actionText: "Calculate Instant Fare Quote",
      actionData: null,
    };
  };

  const handleSend = (textToSend = null) => {
    const messageText = textToSend || inputMsg;
    if (!messageText.trim()) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMsg("");
    setIsTyping(true);

    setTimeout(() => {
      const resp = getAIResponse(messageText);
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        ...resp,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating AI Trigger Button - Icon only by default, expands text on hover */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#0B0D0C] border-2 border-[#C9A45C] text-[#C9A45C] hover:bg-[#141817] p-3.5 rounded-full shadow-[0_0_25px_rgba(201,164,92,0.4)] flex items-center justify-center group transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Open Executive AI Assistant"
      >
        {/* Glowing Aura Ring */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C9A45C]/40 to-[#A98B52]/40 blur-md animate-pulse pointer-events-none" />

        {/* Live Green Ping Badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-[#0B0D0C]" />
        </span>

        <div className="relative z-10 flex items-center">
          <Sparkles className="w-5 h-5 text-[#C9A45C] animate-pulse group-hover:rotate-45 transition-transform duration-500 shrink-0" />
          <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 whitespace-nowrap transition-all duration-500 ease-in-out text-xs font-bold uppercase tracking-wider text-white pl-0 group-hover:pl-2">
            AI Assistant
          </span>
        </div>
      </button>

      {/* Expandable Luxury AI Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[340px] sm:w-[380px] bg-[#141817] border border-[#C9A45C]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[540px] transition-all">
          {/* Header */}
          <div className="p-3.5 bg-[#0B0D0C] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#141817] border border-[#C9A45C] flex items-center justify-center text-[#C9A45C]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-xs font-bold text-white leading-tight">
                  Executive AI Assistant
                </h4>
                <div className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>24/7 Knowledge Base Active</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages(initialMessages)}
                className="p-1 text-white/40 hover:text-white transition-colors cursor-pointer"
                title="Reset Chat"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 max-h-[360px] text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                {m.sender === "bot" ? (
                  <div className="bg-[#0B0D0C] text-[#F5F1E8] border border-[#C9A45C]/30 rounded-2xl rounded-bl-none p-3.5 space-y-2.5 max-w-[92%] shadow-xl">
                    {/* Header with Luxury Gold Badge */}
                    {m.title && (
                      <div className="border-b border-white/10 pb-2 flex items-center justify-between gap-2">
                        <h5 className="font-serif text-xs font-bold text-white leading-snug">
                          {m.title}
                        </h5>
                        {m.subtitle && (
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#C9A45C]/15 text-[#C9A45C] border border-[#C9A45C]/30 uppercase font-sans font-bold tracking-wider shrink-0">
                            {m.subtitle}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Main Description */}
                    {m.text && (
                      <p className="text-[11px] leading-relaxed text-white/80 font-normal">
                        {m.text}
                      </p>
                    )}

                    {/* Key-Value Specifications Box */}
                    {m.specs && m.specs.length > 0 && (
                      <div className="grid grid-cols-1 gap-1.5 my-1.5 bg-[#141817] p-2.5 rounded-xl border border-white/10">
                        {m.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-start justify-between text-[11px] gap-2">
                            <span className="text-white/50 font-medium shrink-0">{spec.label}:</span>
                            <span className="text-[#C9A45C] font-semibold text-right">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Features List with Gold Checkmarks */}
                    {m.features && m.features.length > 0 && (
                      <div className="space-y-1.5 pt-0.5">
                        {m.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[10.5px] text-white/85">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C] shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action Button */}
                    {m.actionText && (
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          if (onOpenQuote) onOpenQuote(m.actionData);
                        }}
                        className="mt-2 w-full py-2 px-3 bg-gradient-to-r from-[#C9A45C] to-[#B38F46] hover:from-[#d8b46b] hover:to-[#C9A45C] text-[#0B0D0C] font-bold text-[11px] rounded-xl transition-all flex items-center justify-center gap-2 shadow-md border border-[#C9A45C] cursor-pointer group"
                      >
                        <span>{m.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#0B0D0C] group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="bg-[#C9A45C] text-[#0B0D0C] font-semibold rounded-2xl rounded-br-none p-3 max-w-[85%] text-xs leading-relaxed shadow-md">
                    {m.text}
                  </div>
                )}

                {/* Suggestions Chips for Bot Messages */}
                {m.suggestions && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {m.suggestions.map((sug, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(sug)}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#0B0D0C] text-[#C9A45C] border border-[#C9A45C]/30 hover:bg-[#C9A45C] hover:text-[#0B0D0C] transition-all cursor-pointer text-left shadow-sm"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[9px] text-white/30 mt-1 px-1">{m.time}</span>
              </div>
            ))}

            {/* Typing State Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-2 bg-[#0B0D0C] rounded-xl border border-white/10 w-20">
                <span className="w-1.5 h-1.5 bg-[#C9A45C] rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-[#C9A45C] rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-[#C9A45C] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#0B0D0C] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder="Ask about rates, fleet, airports..."
              className="flex-1 bg-[#141817] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#C9A45C] text-[#0B0D0C] hover:bg-[#d8b46b] font-bold transition-all cursor-pointer shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
