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
    <div className="w-full bg-white text-zinc-900 ">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[42vh] min-h-[280px] sm:h-[50vh] md:h-[58vh] lg:h-[65vh] min-[1920px]:h-[70vh] min-[2560px]:h-[72vh] overflow-hidden bg-zinc-950">
        <img
          src="/Images/about/hero.webp"
          alt="Resonance Elite services"
          className="w-full h-full object-cover object-center opacity-60"
          loading="eager"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/10">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl min-[1920px]:text-7xl min-[2560px]:text-8xl font-light tracking-tight uppercase">
            Our Services
          </h1>

          <div
            className="w-12 md:w-16 min-[1920px]:w-20 h-[1px] bg-white/40 mt-3 md:mt-5"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Services Sections */}
      <main className="max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] min-[3200px]:max-w-[2600px] mx-auto px-4 sm:px-6 md:px-10 min-[1920px]:px-16 min-[2560px]:px-20 py-12 md:py-16 lg:py-20 min-[1920px]:py-28 min-[2560px]:py-36 space-y-16 md:space-y-24 lg:space-y-32 min-[1920px]:space-y-40 min-[2560px]:space-y-52">
        {servicesData.map((service, sectionIdx) => {
          const isEven = sectionIdx % 2 === 0;
          const currentActiveIdx = activeIndices[sectionIdx];

          return (
            <section
              key={sectionIdx}
              aria-label={service.title}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 min-[1920px]:gap-24 min-[2560px]:gap-32`}
            >
              {/* Image Gallery */}
              <div className="w-full lg:w-1/2 space-y-3 md:space-y-4 min-[1920px]:space-y-6">
                <div className="relative w-full aspect-[4/3] bg-zinc-50 border border-zinc-100 rounded-sm overflow-hidden flex items-center justify-center">
                  <Image
                    src={service.images[currentActiveIdx]}
                    alt={`${service.title} — ${service.subtitle}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={sectionIdx === 0}
                    className="object-contain object-center transition-all duration-500"
                  />
                </div>

                {/* Thumbnails */}
                <div
                  className="flex gap-2 sm:gap-3 min-[1920px]:gap-4 overflow-x-auto pb-2 pt-1 [-webkit-overflow-scrolling:touch]"
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
                      className={`relative w-16 h-11 sm:w-20 sm:h-14 md:w-24 md:h-16 min-[1920px]:w-32 min-[1920px]:h-20 min-[2560px]:w-40 min-[2560px]:h-24 flex-shrink-0 overflow-hidden border transition-all duration-300 rounded-sm cursor-pointer ${
                        currentActiveIdx === imgIdx
                          ? "border-black scale-95"
                          : "border-zinc-200 hover:border-zinc-400"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${service.title} thumbnail ${imgIdx + 1}`}
                        fill
                        sizes="160px"
                        loading="lazy"
                        className="object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-left px-1 sm:px-2 lg:px-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl min-[1920px]:text-5xl min-[2560px]:text-6xl font-light text-zinc-950 tracking-tight leading-tight">
                  {service.title}
                </h2>

                <p className="mt-2 md:mt-3 text-[10px] sm:text-xs md:text-sm min-[1920px]:text-base min-[2560px]:text-xl font-medium tracking-[0.18em] uppercase text-zinc-400 leading-snug">
                  {service.subtitle}
                </p>

                <p className="mt-4 md:mt-5 min-[1920px]:mt-7 text-zinc-500 leading-relaxed text-sm md:text-base min-[1920px]:text-lg min-[2560px]:text-2xl font-light max-w-xl min-[1920px]:max-w-2xl min-[2560px]:max-w-4xl">
                  {service.desc}
                </p>

                <div className="pt-2 md:pt-3 min-[1920px]:pt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full sm:w-auto mt-4 md:mt-6 min-[1920px]:mt-8 px-6 md:px-7 min-[1920px]:px-10 min-[2560px]:px-14 py-2.5 md:py-3 min-[1920px]:py-4 min-[2560px]:py-6 border border-black text-black text-xs md:text-sm min-[1920px]:text-base min-[2560px]:text-xl font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition duration-300 text-center"
                    aria-label={`Book a consultation for ${service.title}`}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}