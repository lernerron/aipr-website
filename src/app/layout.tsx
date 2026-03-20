import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aging-In-Place Remodeling | Safety & Accessibility Home Modifications",
  description:
    "Aging-In-Place Remodeling is San Diego's premiere safety and accessibility remodeling company. We install Stiltz lifts, ramps, accessible showers, grab bars, and more to help you stay in your home safely.",
  keywords: [
    "aging in place",
    "accessibility remodeling",
    "home modifications",
    "Stiltz lifts",
    "grab bars",
    "accessible showers",
    "ramps",
    "San Diego remodeling",
    "senior home safety",
  ],
  openGraph: {
    title: "Aging-In-Place Remodeling | Safety & Accessibility Home Modifications",
    description:
      "San Diego's premiere safety and accessibility remodeling company. Stiltz lifts, ramps, accessible showers, grab bars, and more.",
    url: "https://www.aipremodeling.com",
    siteName: "Aging-In-Place Remodeling",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aging-In-Place Remodeling",
    description:
      "San Diego's premiere safety and accessibility remodeling company.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.aipremodeling.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Aging-In-Place Remodeling",
  description:
    "Full service remodeling company specializing in safety and accessibility modifications for homes.",
  url: "https://www.aipremodeling.com",
  telephone: "(858) 776-8700",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "San Diego",
      addressRegion: "CA",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Orange County",
      addressRegion: "CA",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Southwest Riverside",
      addressRegion: "CA",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "St. George",
      addressRegion: "UT",
      addressCountry: "US",
    },
  ],
  sameAs: [
    "https://www.facebook.com/aginginplaceremodeling",
    "https://www.instagram.com/aginginplaceremodeling",
    "https://www.youtube.com/@AginginPlaceRemodeling",
    "https://www.houzz.com/pro/aipremodeling",
    "https://www.pinterest.com/aginginplaceremodeling",
  ],
  areaServed: ["San Diego", "Orange County", "Southwest Riverside", "St. George, Utah"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Modification Services",
    itemListElement: [
      "Stiltz Lifts and Other Lifts",
      "Ramps",
      "Accessible Showers",
      "Accessible Sinks",
      "Grab Bars & Handrails",
      "Ceiling Lifts",
      "Doors",
      "Bathroom Safety",
      "Traditional Remodels",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
