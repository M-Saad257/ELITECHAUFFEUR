import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { DemoDataProvider } from "@/context/DemoDataContext";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://elitechauffeur.co.uk"),
  title: {
    default: "ELITE CHAUFFEUR | #1 Executive & Luxury Chauffeur Services UK",
    template: "%s | ELITE CHAUFFEUR UK",
  },
  description:
    "Arrive with total confidence. Premium UK chauffeur services for Heathrow T5, Gatwick, Mayfair, & corporate roadshows. Flagship Mercedes S-Class, Maybach, & Rolls-Royce Phantom.",
  keywords: [
    "UK Chauffeur Service",
    "London Executive Chauffeur",
    "Heathrow Airport Transfer Chauffeur",
    "Gatwick Airport Chauffeur",
    "Mercedes S Class Chauffeur London",
    "Mercedes Maybach Chauffeur UK",
    "Rolls Royce Chauffeur London",
    "Corporate Accounts Chauffeur",
    "Private Jet FBO Chauffeur Farnborough",
  ],
  authors: [{ name: "Elite Chauffeur UK Limited" }],
  creator: "Elite Chauffeur UK Limited",
  publisher: "Elite Chauffeur UK Limited",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "ELITE CHAUFFEUR | #1 Executive & Luxury Chauffeur Services UK",
    description:
      "Arrive with confidence. London's finest executive chauffeur fleet featuring Mercedes S-Class, Maybach S680 & Rolls-Royce Phantom with 24/7 flight radar tracking.",
    url: "https://elitechauffeur.co.uk",
    siteName: "ELITE CHAUFFEUR UK",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Elite UK Luxury Executive Chauffeur Service London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELITE CHAUFFEUR | Executive & Luxury Chauffeur Services UK",
    description:
      "London's premier chauffeur service for airport transfers, corporate roadshows, and private VIP travel.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LimousineService",
  "name": "ELITE CHAUFFEUR UK",
  "image": "https://elitechauffeur.co.uk/images/hero.jpg",
  "@id": "https://elitechauffeur.co.uk",
  "url": "https://elitechauffeur.co.uk",
  "telephone": "+442079460912",
  "priceRange": "££££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mayfair",
    "addressLocality": "London",
    "postalCode": "W1J 7NT",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5074,
    "longitude": -0.1278
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.98",
    "reviewCount": "1240"
  },
  "areaServed": [
    { "@type": "City", "name": "London" },
    { "@type": "City", "name": "Heathrow Airport (LHR)" },
    { "@type": "City", "name": "Gatwick Airport (LGW)" },
    { "@type": "City", "name": "Manchester" },
    { "@type": "City", "name": "Birmingham" },
    { "@type": "City", "name": "Edinburgh" }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-[#0B0D0C] text-[#F5F1E8] antialiased selection:bg-[#C9A45C] selection:text-[#0B0D0C]">
        <AuthProvider>
          <DemoDataProvider>{children}</DemoDataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

