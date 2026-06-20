import { Suspense } from "react";
import Navbar from "@/Components/Home/Navbar";
import Footer from "@/Components/Home/Footer";
import BrandsSinglePage from "@/Components/Brands/BrandsSinglePage";

export const metadata = {
  title: "Premium Audio Brands | Resonance Elite",
  description:
    "Explore Resonance Elite's authorized premium brand partners — BRAX, BLAM, Morel, Gladen, Helix, Mosconi, Match, DD Audio, DB Drive, and DB Link. World-class car and home audio equipment available in Pakistan.",
  keywords: [
    "BRAX car audio Pakistan",
    "BLAM speakers Pakistan",
    "Morel speakers",
    "Gladen audio",
    "Helix DSP Pakistan",
    "Mosconi amplifiers",
    "Match audio",
    "DD Audio subwoofers",
    "DB Drive Pakistan",
    "premium car audio brands",
    "Resonance Elite brands",
  ],
  openGraph: {
    title: "Premium Audio Brands | Resonance Elite",
    description:
      "Authorized premium partner for the world's finest car and home audio brands. Browse BRAX, Helix, Morel, Mosconi, and more at Resonance Elite.",
    url: "https://resonanceelite.com/brands",
    siteName: "Resonance Elite",
    images: [
      {
        url: "/Brands page/BRAX.webp",
        width: 1200,
        height: 630,
        alt: "Resonance Elite Premium Audio Brands",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Audio Brands | Resonance Elite",
    description:
      "Authorized premium partner for the world's finest car and home audio brands.",
    images: ["/Brands page/BRAX.webp"],
  },
  alternates: {
    canonical: "https://resonanceelite.com/brands",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const brandsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Premium Audio Brands | Resonance Elite",
  description:
    "Authorized premium partner for BRAX, BLAM, Morel, Gladen, Helix, Mosconi, Match, DD Audio, DB Drive, and DB Link in Pakistan.",
  url: "https://resonanceelite.com/brands",
  publisher: {
    "@type": "Organization",
    name: "Resonance Elite",
    url: "https://resonanceelite.com",
  },
};

export default function BrandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandsJsonLd) }}
      />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <BrandsSinglePage />
      </Suspense>
      <Footer />
    </>
  );
}