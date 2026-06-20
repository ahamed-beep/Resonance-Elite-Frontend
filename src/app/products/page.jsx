import Image from "next/image";
import { products, brands, categoryGroups } from "@/lib/products";
import { Suspense } from "react";
import Navbar from "@/Components/Home/Navbar";
import Footer from "@/Components/Home/Footer";
import ProductsClient from "./ProductsClient";


export const metadata = {
  title: "Premium Car & Home Audio Products | Resonance Elite",
  description:
    "Browse Resonance Elite's full range of premium car and home audio products — amplifiers, subwoofers, speakers, DSPs and more from top brands like Helix, Brax, Morel, Mosconi, and DD Audio.",
  keywords: [
    "car audio products Pakistan",
    "premium car audio",
    "Helix DSP",
    "Brax amplifiers",
    "Morel speakers",
    "Mosconi amplifiers",
    "DD Audio subwoofers",
    "home audio Pakistan",
    "Resonance Elite products",
    "buy car audio online Pakistan",
  ],
  openGraph: {
    title: "Premium Car & Home Audio Products | Resonance Elite",
    description:
      "Explore our curated collection of high-end car and home audio equipment from the world's finest brands.",
    url: "https://resonanceelite.com/products",
    siteName: "Resonance Elite",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Resonance Elite Premium Audio Products",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Car & Home Audio Products | Resonance Elite",
    description:
      "Explore our curated collection of high-end car and home audio equipment.",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://resonanceelite.com/products",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Premium Audio Products | Resonance Elite",
  description:
    "Car and home audio products from top global brands available at Resonance Elite.",
  url: "https://resonanceelite.com/products",
  publisher: {
    "@type": "Organization",
    name: "Resonance Elite",
    url: "https://resonanceelite.com",
  },
  numberOfItems: products.length,
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <Navbar/>

      <div className="min-h-screen bg-white text-black antialiased">

        {/* Hero Banner */}
        <div className="relative w-full h-36 sm:h-48 md:h-60 lg:h-72 overflow-hidden bg-zinc-950">
          <Image
            src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2070&auto=format&fit=crop"
            alt="Resonance Elite premium audio equipment collection"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 flex items-center justify-center">
            <div className="text-center px-4 sm:px-6">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                Premium Audio
              </h1>
              <p className="text-zinc-300 text-xs sm:text-sm md:text-base mt-1.5 max-w-md mx-auto font-light">
                Experience signature sound mechanics
              </p>
            </div>
          </div>
        </div>

        {/* Client Component handles all filtering, sorting, pagination */}
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
  <ProductsClient
    initialProducts={products}
    brands={brands}
    categoryGroups={categoryGroups}
  />
</Suspense>

      </div>
      <Footer/>
    </>
  );
}