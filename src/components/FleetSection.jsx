"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FleetCard from "./FleetCard";
import FleetModal from "./FleetModal";
import { Sparkles } from "lucide-react";

export default function FleetSection({ onBookVehicle }) {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const fleetData = [
    {
      id: "maybach",
      category: "First-Class VIP",
      name: "Mercedes-Maybach S680",
      tagline: "The Ultimate First-Class VIP Suite on Wheels",
      description: "Ultra-exclusive extended wheelbase Maybach with first-class reclining seats, champagne chiller, and acoustic privacy.",
      passengers: 3,
      luggage: 2,
      priceHr: 150,
      priceTransfer: 180,
      image: "/images/lifestyle.jpg",
      features: [
        "First-Class Executive Reclining Seats",
        "Acoustic Glass & Ambient Privacy",
        "5G Wi-Fi & Device Charging Stations",
      ],
      fullFeatures: [
        "First-Class Executive Reclining Seats with Calf Rests",
        "Active Road Noise Compensation & Acoustic Glass",
        "High-Speed 5G Wi-Fi & AC Power Laptop Outlets",
        "Complimentary Hildon Mineral Water & Daily Financial Times",
        "Silver-Plated Champagne Flutes & Refrigerated Compartment",
      ],
    },
    {
      id: "rolls-royce",
      category: "Sovereign Luxury",
      name: "Rolls-Royce Phantom VIII",
      tagline: "Unrivalled Majesty & Royal Transit Standard",
      description: "Handcrafted pinnacle automobile featuring Starlight Headliner, lambswool carpets, and effortless V12 power.",
      passengers: 3,
      luggage: 2,
      priceHr: 220,
      priceTransfer: 250,
      image: "/images/fleet-rolls-royce.jpg",
      features: [
        "Handcrafted Starlight Leather Suite",
        "Whisper-Quiet Magic Carpet Ride",
        "Complimentary Bar & Private Chauffeur",
      ],
      fullFeatures: [
        "Handcrafted Starlight Headliner with Custom LED Constellations",
        "Thick Lambswool Floor Rugs & Soft-Close Coach Doors",
        "Bespoke Rear Theater Screens & Rotary Executive Controller",
        "Whisper-Quiet Dual-Insulated Acoustic Architecture",
        "Complimentary Chilled Refreshments & Personalized Concierge",
      ],
    },
    {
      id: "s-class",
      category: "Executive Sedan",
      name: "Mercedes-Benz S-Class",
      tagline: "The Pinnacle of Flagship Executive Transport",
      description: "Flagship luxury sedan with long wheelbase comfort, reclining leather seats, and quiet cabin.",
      passengers: 3,
      luggage: 2,
      priceHr: 95,
      priceTransfer: 110,
      image: "/images/fleet-s-class.jpg",
      features: [
        "Executive Long Wheelbase",
        "Rear Reclining Leather Seats",
        "Complimentary High-Speed Wi-Fi",
      ],
      fullFeatures: [
        "Executive Long Wheelbase with extended legroom",
        "Nappa Leather Heated & Ventilated Massaging Seats",
        "Burmester High-End Surround Sound System",
        "Complimentary High-Speed 5G Wi-Fi & Device Chargers",
        "Chilled Hildon Mineral Water & Daily Financial Times",
        "Rear Privacy Blinds & Ambient LED Lighting",
      ],
    },
    {
      id: "e-class",
      category: "Business Sedan",
      name: "Mercedes-Benz E-Class",
      tagline: "Sleek & Efficient Corporate Travel Standard",
      description: "Preferred choice for corporate executives, financial roadshows, and point-to-point transfers.",
      passengers: 3,
      luggage: 2,
      priceHr: 75,
      priceTransfer: 90,
      image: "/images/fleet-e-class.jpg",
      features: [
        "Plush Leather Interior",
        "Climate Controlled Cabin",
        "Wi-Fi & USB Charging",
      ],
      fullFeatures: [
        "Premium Leather Upholstery & Dual-Zone Climate Control",
        "Quiet Executive Acoustic Glass Insulation",
        "Integrated High-Speed Wi-Fi & Universal Chargers",
        "Complimentary Bottled Mineral Water",
        "Precision Flight Tracking & Guaranteed Punctuality",
      ],
    },
    {
      id: "v-class",
      category: "Luxury Van",
      name: "Mercedes-Benz V-Class",
      tagline: "VIP Group & Family Chauffeur Experience",
      description: "Spacious luxury MPV with conference seating layout, ideal for executive teams and family luggage.",
      passengers: 7,
      luggage: 6,
      priceHr: 110,
      priceTransfer: 130,
      image: "/images/fleet-v-class.jpg",
      features: [
        "Conference Seating",
        "Large Luggage Capacity",
        "Dual Power Sliding Doors",
      ],
      fullFeatures: [
        "7 Luxury Leather Captain Armchairs in Conference Layout",
        "Enormous Luggage Storage for Up to 6 Large Cases",
        "Dual Electric Power Sliding Doors for Effortless Entry",
        "Onboard 5G Wi-Fi, AC Power Outlets & Ambient Lighting",
        "Privacy Tinted Glass & Individual Passenger AC Control",
      ],
    },
    {
      id: "range-rover",
      category: "Luxury SUV",
      name: "Range Rover Autobiography",
      tagline: "Commanding Luxury All-Terrain VIP Travel",
      description: "Imposing presence, elevated seating position, plush luxury interior, and smooth all-terrain ride.",
      passengers: 3,
      luggage: 2,
      priceHr: 125,
      priceTransfer: 150,
      image: "/images/fleet-range-rover.jpg",
      features: [
        "Elevated SUV View & Ride",
        "Executive Rear Seats",
        "All-Weather Comfort",
      ],
      fullFeatures: [
        "Autobiography Executive Class Rear Seating",
        "Meridian Signature 3D Surround Sound System",
        "All-Terrain Quad Drive for Smooth Rural & City Transit",
        "Complimentary Refreshments & Premium Chargers",
        "Exclusive Access for Airport Apron & Private Jet FBOs",
      ],
    },
  ];

  return (
    <section id="fleet" className="min-h-[100vh] flex items-center justify-center py-8 sm:py-12 bg-[#0B0D0C] relative border-t border-white/5 overflow-hidden">
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
            <Sparkles className="w-3 h-3 text-[#C9A45C]" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
              OUR EXCLUSIVE FLEET
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8]">
            Choose Your Perfect Ride
          </h2>

          <p className="text-xs sm:text-sm text-[#D8D3C8] font-normal">
            From flagship executive sedans to sovereign luxury motorcars and spacious vans.
          </p>
        </motion.div>

        {/* Perfectly Balanced 6-Card Grid (3 Rows x 2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {fleetData.map((vehicle, idx) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <FleetCard
                vehicle={vehicle}
                onViewDetails={(v) => setSelectedVehicle(v)}
                onBookVehicle={(v) => onBookVehicle(v)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fleet Spec Modal */}
      {selectedVehicle && (
        <FleetModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onBook={(v) => onBookVehicle(v)}
        />
      )}
    </section>
  );
}
