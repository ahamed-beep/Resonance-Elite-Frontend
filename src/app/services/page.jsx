// app/services/page.jsx

import { Suspense } from "react";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Expert Car Audio Services | Resonance Elite Pakistan",
  description:
    "Professional car audio services in Pakistan — DSP tuning, A-pillar fabrication, custom amp racks, subwoofer enclosures, soundproofing, and system consultation by Resonance Elite.",
  keywords: [
    "car audio services Pakistan",
    "DSP tuning Pakistan",
    "custom amp rack Lahore",
    "A-pillar fabrication Pakistan",
    "subwoofer enclosure custom",
    "car soundproofing Pakistan",
    "car audio consultation",
    "Resonance Elite services",
    "car audio installation Lahore",
    "sound system tuning Pakistan",
  ],
  openGraph: {
    title: "Expert Car Audio Services | Resonance Elite Pakistan",
    description:
      "From DSP calibration to custom fabrication — explore Resonance Elite's premium car audio services crafted for audiophiles.",
    url: "https://resonanceelite.com/services",
    siteName: "Resonance Elite",
    images: [
      {
        url: "https://resonanceelite.com/services.webp",
        width: 1200,
        height: 630,
        alt: "Resonance Elite Car Audio Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Car Audio Services | Resonance Elite Pakistan",
    description:
      "DSP tuning, custom fabrication, soundproofing and more — premium car audio services by Resonance Elite.",
    images: ["https://resonanceelite.com/services.webp"],
  },
  alternates: {
    canonical: "https://resonanceelite.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Car Audio Installation & Customization",
  provider: {
    "@type": "LocalBusiness",
    name: "Resonance Elite",
    url: "https://resonanceelite.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "Pakistan",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Car Audio Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "System Consultation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "System Tuning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "A-Pillar Craftsmanship" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Amp Rack & CAD Designing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Subwoofer Enclosures" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soundproofing" } },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <ServicesClient />
      </Suspense>
    </>
  );
}