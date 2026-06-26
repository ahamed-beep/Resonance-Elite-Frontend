// app/services/ServicesClient.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/Components/Home/Navbar";
import Footer from "@/Components/Home/Footer";

const servicesData = [
  {
    title: "System Consultation",
    subtitle: "Bespoke System Architecture",
    desc: "Professional car audio system consultation tailored to your vehicle, goals, and budget. We guide you in selecting the right components and system design for optimal sound performance and efficiency.",
    images: [
      "/Images/services/CONSULTATIONS/1.webp",
      "/Images/services/CONSULTATIONS/2.webp",
      "/Images/services/CONSULTATIONS/3.webp",
      "/Images/services/CONSULTATIONS/4.webp",
      "/Images/services/CONSULTATIONS/5.webp",
      "/Images/services/CONSULTATIONS/6.webp",
    ],
  },
  {
    title: "System Tuning",
    subtitle: "Competition-Grade DSP Calibration",
    desc: "Advanced DSP car audio tuning for precise sound staging, imaging, and clarity. We fine-tune every system to deliver true high-fidelity audio and an immersive listening experience.",
    images: [
      "/Images/services/TUNING/1.webp",
      "/Images/services/TUNING/2.webp",
      "/Images/services/TUNING/3.webp",
      "/Images/services/TUNING/4.webp",
      "/Images/services/TUNING/5.webp",
      "/Images/services/TUNING/6.webp",
    ],
  },
  {
    title: "A-Pillar Craftsmanship",
    subtitle: "Hand-Crafted Acoustic Architecture",
    desc: "Custom A-pillar fabrication designed for perfect speaker placement and acoustic performance. Built with precision to enhance soundstage, imaging, and overall system aesthetics.",
    images: [
      "/Images/services/A-PILLARS/1.webp",
      "/Images/services/A-PILLARS/2.webp",
      "/Images/services/A-PILLARS/3.webp",
      "/Images/services/A-PILLARS/4.webp",
      "/Images/services/A-PILLARS/5.webp",
      "/Images/services/A-PILLARS/6.webp",
    ],
  },
  {
    title: "Custom Amp Rack & CAD Designing",
    subtitle: "CAD-Engineered Integration",
    desc: "Precision-engineered amplifier racks with CAD-based design for optimal layout, cooling, and clean installation. Combines functionality, durability, and a premium finish.",
    images: [
      "/Images/services/AMPRACK/image1.webp",
      "/Images/services/AMPRACK/image2.webp",
      "/Images/services/AMPRACK/image3.webp",
      "/Images/services/AMPRACK/image4.webp",
      "/Images/services/AMPRACK/image5.webp",
      "/Images/services/AMPRACK/image6.webp",
    ],
  },
  {
    title: "Custom Subwoofer Enclosures",
    subtitle: "Premium Material Craftsmanship",
    desc: "High-performance custom subwoofer enclosures designed for accurate bass response and maximum efficiency. Engineered for both sound quality SQ and sound pressure SPL applications.",
    images: [
      "/Images/services/CUSTOMENCLOSURES/image1.webp",
      "/Images/services/CUSTOMENCLOSURES/image2.webp",
      "/Images/services/CUSTOMENCLOSURES/image3.webp",
      "/Images/services/CUSTOMENCLOSURES/image4.webp",
      "/Images/services/CUSTOMENCLOSURES/image5.webp",
      "/Images/services/CUSTOMENCLOSURES/image6.webp",
    ],
  },
  {
    title: "Soundproofing",
    subtitle: "Acoustic Isolation & Resonance Control",
    desc: "Professional car soundproofing solutions to reduce noise, vibration, and resonance. Enhances audio clarity, bass response, and overall cabin acoustics for a refined listening experience.",
    images: [
      "/Images/services/SOUNDPROOFING/1.webp",
      "/Images/services/SOUNDPROOFING/2.webp",
      "/Images/services/SOUNDPROOFING/3.webp",
      "/Images/services/SOUNDPROOFING/4.webp",
      "/Images/services/SOUNDPROOFING/5.webp",
      "/Images/services/SOUNDPROOFING/6.webp",
    ],
  },
];

export default function ServicesClient() {
  const [activeIndices, setActiveIndices] = useState(
    Object.fromEntries(servicesData.map((_, i) => [i, 0]))
  );

  const handleStateChange = (sectionIndex, imageIndex) => {
    setActiveIndices((prev) => ({ ...prev, [sectionIndex]: imageIndex }));
  };

  return (
    <div className="w-full bg-white text-zinc-900 overflow-x-hidden">
<Navbar/>
      {/* Hero */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden bg-zinc-950">
        <img
          src="/Images/about/hero.webp"
          alt="Resonance Elite about us"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/10">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-light tracking-tight uppercase">
            Our Services
          </h1>
          <div className="w-12 h-[1px] bg-white/40 mt-3 md:mt-4" aria-hidden="true" />
        </div>
      </div>

      {/* Services Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16 space-y-16 md:space-y-32">
        {servicesData.map((service, sectionIdx) => {
          const isEven = sectionIdx % 2 === 0;
          const currentActiveIdx = activeIndices[sectionIdx];

          return (
            <section
              key={sectionIdx}
              aria-label={service.title}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-6 sm:gap-8 md:gap-16`}
            >
              {/* Image Gallery */}
              <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
                <div className="w-full aspect-[4/3] max-h-[260px] sm:max-h-[340px] md:max-h-none md:h-[400px] overflow-hidden bg-zinc-50 border border-zinc-100 rounded-sm relative">
                  <Image
                    src={service.images[currentActiveIdx]}
                    alt={`${service.title} — ${service.subtitle}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading={sectionIdx === 0 ? "eager" : "lazy"}
                    className="object-cover transition-all duration-500"
                  />
                </div>

                {/* Thumbnails */}
                <div
                  className="flex gap-2 overflow-x-auto pb-1.5 pt-0.5 [-webkit-overflow-scrolling:touch] scrollbar-thin"
                  role="group"
                  aria-label={`${service.title} image thumbnails`}
                >
                  {service.images.map((img, imgIdx) => (
                    <button
                      key={imgIdx}
                      type="button"
                      onClick={() => handleStateChange(sectionIdx, imgIdx)}
                      aria-label={`View ${service.title} image ${imgIdx + 1}`}
                      aria-pressed={currentActiveIdx === imgIdx}
                      className={`relative w-14 h-10 sm:w-20 sm:h-14 flex-shrink-0 overflow-hidden border transition-all duration-300 rounded-sm cursor-pointer ${
                        currentActiveIdx === imgIdx
                          ? "border-black scale-95"
                          : "border-zinc-200 hover:border-zinc-400"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${service.title} thumbnail ${imgIdx + 1}`}
                        fill
                        sizes="80px"
                        loading="lazy"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-1 sm:px-2 md:px-0">
                <h2 className="text-xl md:text-3xl font-light text-zinc-950 tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-1.5 md:mt-2 text-[10px] md:text-sm font-medium tracking-wider uppercase text-zinc-400">
                  {service.subtitle}
                </p>
                <p className="mt-3 md:mt-5 text-zinc-500 leading-relaxed text-xs sm:text-sm md:text-base font-light max-w-xl">
                  {service.desc}
                </p>
                <div className="pt-1 md:pt-2">
                  <Link
                    href="/contact"
                    className="inline-block w-full sm:w-auto mt-4 md:mt-6 px-6 py-2.5 border border-black text-black text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition duration-300 text-center"
                    aria-label={`Book a consultation for ${service.title}`}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
}