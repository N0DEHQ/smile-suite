import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Smile Suite | Family & Cosmetic Dentist in Midland, TX",
  description:
    "Gentle, modern dentistry for every stage of life. Dr. Mallory Gonzales offers Invisalign, cosmetic dentistry, teeth whitening, emergency care & more in Midland, TX. Se Habla Español.",
  keywords: [
    "dentist midland tx",
    "cosmetic dentist midland",
    "family dentist midland tx",
    "invisalign midland tx",
    "emergency dentist midland",
    "teeth whitening midland tx",
    "teeth whitening midland",
    "the smile suite",
    "dr mallory gonzales",
    "dentist odessa tx",
  ],
  openGraph: {
    title: "The Smile Suite | Family & Cosmetic Dentist in Midland, TX",
    description:
      "Gentle, modern dentistry for every stage of life. Advanced technology, comfort-first care, and beautiful results.",
    url: "https://www.smilemidland.com",
    siteName: "The Smile Suite",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Midland",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "The Smile Suite",
  description:
    "Family and cosmetic dentistry in Midland, TX. Led by Dr. Mallory Gonzales, DDS.",
  url: "https://www.smilemidland.com",
  telephone: "+14326920239",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 Desta Drive, Suite 2700",
    addressLocality: "Midland",
    addressRegion: "TX",
    postalCode: "79705",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.9973,
    longitude: -102.0779,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "15:00",
    },
  ],
  priceRange: "$$",
  image: "https://www.smilemidland.com/og-image.jpg",
  areaServed: [
    "Midland, TX",
    "Odessa, TX",
    "Andrews, TX",
    "Monahans, TX",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Invisalign" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cosmetic Dentistry" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Dentistry" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teeth Whitening" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Periodontal Therapy" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-charcoal bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
