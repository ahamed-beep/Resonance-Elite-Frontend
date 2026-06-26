"use client";

import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const brandsData = [
  {
    id: "brax",
    name: "BRAX",
    tagline: "The Reference of High-End Car Audio",
    description:
      "BRAX represents the pinnacle of German high-end car audio, driven by a passion for reproducing music with absolute realism and emotional impact. Since 1990, Audiotec Fischer has developed and handcrafted BRAX components in Germany, using only the finest materials and uncompromising quality standards. Every product is custom-made, with manually selected and meticulously matched components—including power transistors classified into over 300 categories using proprietary measuring technology—to ensure unmatched performance, homogeneity, and sound quality. For BRAX, “Made in Germany” is not just a label, but a promise of perfection, precision, and an uncompromising pursuit of the ultimate in-car listening experience.",
    image: "/Images/brands/BRAX.webp",
  },
  {
    id: "blam",
    name: "BLAM",
    tagline: "Experience the Signature 'French Sound'",
    description:
      "Born in 2013 from the singular vision of Guy Bonneville, a master loudspeaker designer with decades behind the craft, BLAM exists for one purpose: to give discerning ears an uncompromising sound of their own. Engineered and hand-developed in Saint-Étienne, France, BLAM is defined by its signature French Sound — an exquisite balance of warmth, vocal purity, and natural depth that elevates every note inside the cabin. From precision-tuned upgrades to flagship audiophile component systems, BLAM doesn't just reproduce music — it distills Bonneville's lifelong pursuit of sonic perfection into every detail.",
    image: "/Images/brands/BLAM.webp",
  },
  {
    id: "morel",
    name: "MOREL",
    tagline: "Mastering the Art of Speaker Technology",
    description:
      "For over 50 years, MOREL has been at the forefront of high-end audio innovation, earning a reputation for developing some of the world’s most technologically advanced loudspeaker technologies. Under the leadership of Meir Mordechai, the company has pioneered numerous breakthroughs in speaker design, combining proprietary engineering, in-house manufacturing, and meticulous craftsmanship to achieve exceptional sound quality. Every MOREL speaker is designed to deliver remarkable accuracy, musicality, and emotional impact, reflecting the brand’s unwavering commitment to acoustic excellence and innovation. With five decades of expertise, MOREL continues to set the benchmark for premium audio performance worldwide.",
    image: "/Images/brands/MOREL.webp",
  },
  {
    id: "gladen",
    name: "GLADEN",
    tagline: "German Engineering & Performance Excellence",
    description:
      "Founded in 1997 by Henning Gladen, an aerospace engineer turned audio perfectionist, GLADEN was built on a singular obsession: applying the precision of aerospace engineering to the pursuit of perfect sound. FEM analysis, aerodynamics, and elastostatics — tools more at home in an aircraft design studio — are engineered into every driver basket and enclosure, hand-built by specialists in the Swabian region of Germany. The result is the Aerospace series and beyond: speakers and subwoofers crafted not just to play music, but to perform under the same exacting tolerances as the industries that inspired them.",
    image: "/Images/brands/GLADEN.webp",
  },
  {
    id: "helix",
    name: "HELIX",
    tagline: "The Global Leader in Digital Signal Processing",
    description:
      "Born from the same German engineering house as BRAX, HELIX carries that same reference-level pedigree — but with a sharper focus: making true high-end sound work seamlessly inside the modern vehicle. Designed and built in Germany with premium materials and decades of acoustic expertise, HELIX systems integrate via patented FlexMount and FlexConnect solutions, engineered for fast, precise, fully reversible installation in today's OEM architectures. The result is sound quality that doesn't compromise for the sake of integration — and integration that doesn't compromise for the sake of sound.",
    image: "/Images/brands/HELIX.webp",
  },
  {
    id: "mosconi",
    name: "MOSCONI",
    tagline: "Italian Design Meets High-End Performance",
    description:
      "Founded in 2008 by Ivan Mosconi, the brand was built on a singular passion: marrying decades of professional audio engineering with an unmistakably Italian sound — round in the highs, smooth through the vocal range, and powerful in the bass. Often called the Ferrari of amplifiers, Mosconi designs and manufactures every product entirely in-house, in their own factory in Italy — the only car-audio brand in the country to do so. That same obsession with control, precision, and performance defines a modular architecture that isolates signal circuitry from power electronics, eliminating interference and unlocking pure, uncolored output. It's a philosophy with no shortcuts: world-class amplification, engineered without compromise, for listeners who hear the difference.",
    image: "/Images/brands/MOSCONI.webp",
  },
  {
    id: "match",
    name: "MATCH",
    tagline: "Premium Plug & Play Audio Upgrades",
    description:
      "Born from the same German engineering house as BRAX and HELIX, MATCH was created to solve a different problem: how to deliver true high-end sound without touching a single wire of the factory system. Every MATCH amplifier is true plug & play — installing alongside the original radio and speakers, and removable without a trace if the car is ever sold or returned. Built in Germany with the same DSP technology and sonic DNA inherited from BRAX and HELIX, MATCH proves that effortless installation and uncompromising sound were never meant to be a trade-off.",
    image: "/Images/brands/MATCH.webp",
  },
  {
    id: "dd-audio",
    name: "DD AUDIO",
    tagline: "Engineered for Extreme Sound Pressure",
    description:
      "Founded in 1986 by Jassa and Vicki Langford as Digital Designs, DD Audio has earned its reputation as the world's best SPL car audio brand — built in competition and dB drag battles, setting world records where raw output and engineering had nowhere to hide. Hand-built at their Oklahoma City headquarters, DD Audio products are engineered for one purpose — to perform under the most extreme conditions and keep performing, year after year. From record-setting subwoofers to amplifiers built for serious power, DD Audio's philosophy is simple and uncompromising: Built to Perform.",
    image: "/Images/brands/DDAUDIO.webp",
  },
  {
    id: "db-drive",
    name: "DB DRIVE",
    tagline: "Unleashing the Power of Sound",
    description:
      "Born over 30 years ago in South Texas out of dB Research's passion for audio, DB Drive has grown into a global force in car audio — distributed across more than 32 countries and proven on the competition floor through IASCA and beyond. Built for drivers who demand power, precision, and unmatched sound quality, DB Drive's lineup spans everything from sound-quality-focused systems to no-compromise, competition-level output. From street builds to record-chasing demo cars, DB Drive's mission stays the same: drive it louder.",
    image: "/Images/brands/DBDRIVE.webp",
  },
  {
    id: "db-link",
    name: "DB LINK",
    tagline: "Professional Connection & Power Management",
    description:
      "Born from the same dB Research family as DB Drive, DB Link is the connection behind every great audio system — the cables, wiring, and installation accessories engineered to deliver reliable power and pure signal integrity. From high-strand, oxygen-free copper cable to fuses, RCA connections, and complete amp-wiring kits, every DB Link product is built to handle serious current without compromise. Because a system is only as powerful as the wire that feeds it — and DB Link makes sure nothing gets lost along the way.",
    image: "/Images/brands/DBLINK.webp",
  },
];

// Brand ID → exact name used in Navbar & ProductsClient brands array
const brandIdToName = {
  "brax": "Brax",
  "blam": "Blam",
  "morel": "Morel",
  "gladen": "Gladen",
  "helix": "Helix",
  "mosconi": "Mosconi",
  "match": "Match",
  "dd-audio": "DD Audio",
  "db-drive": "DB Drive",
  "db-link": "DB Link",
};

const BrandsSinglePage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, searchParams]);

  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-950 selection:text-white antialiased">
      {brandsData.map((brand, index) => {
        const isOdd = index % 2 !== 0;
        const brandName = brandIdToName[brand.id] || brand.name;
        const catalogHref = `/products?brand=${encodeURIComponent(brandName)}`;

        return (
          <section
            key={brand.id}
            id={brand.id}
            className="min-h-[60vh] lg:min-h-[70vh] flex flex-col md:flex-row items-stretch border-b border-zinc-100 overflow-hidden"
          >
            {/* IMAGE COLUMN */}
            <div
              className={`w-full md:w-1/2 h-[32vh] sm:h-[40vh] md:h-auto flex items-center justify-center  sm:p-8 md:p-12 bg-zinc-50/50 relative group ${
                isOdd
                  ? "md:order-last border-l border-zinc-100/50"
                  : "border-r border-zinc-100/50"
              }`}
            >
              <img
                src={brand.image}
                alt={`${brand.name} Product Hardware`}
                loading={index < 2 ? "eager" : "lazy"}
                className="w-full h-full max-h-[260px] sm:max-h-[320px] md:max-h-[380px] object-contain transition-transform duration-[2s] ease-out will-change-transform lg:group-hover:scale-103"
              />
            </div>

            {/* EDITORIAL CONTENT COLUMN */}
            <div
              className={`w-full md:w-1/2 px-6 py-12 sm:p-14 md:p-16 lg:p-20 flex flex-col justify-center transition-colors duration-300 ${
                isOdd ? "bg-zinc-50/20" : "bg-white"
              }`}
            >
              {/* Partner Label */}
              <span className="text-[10px] tracking-[0.25em] text-zinc-400 mb-2.5 font-bold uppercase block">
                Authorized Premium Partner
              </span>

              {/* Brand Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-zinc-950 mb-1.5 uppercase">
                {brand.name}
              </h2>

              {/* Tagline */}
              <p className="text-[10px] sm:text-[11px] tracking-[0.15em] text-zinc-500 mb-5 font-semibold uppercase max-w-md">
                {brand.tagline}
              </p>

              {/* Accent Divider */}
              <div className="w-8 h-[1px] bg-zinc-950 mb-5"></div>

              {/* Description */}
              <p className="text-zinc-600 text-xs sm:text-sm leading-6 sm:leading-7 font-light tracking-wide max-w-prose text-left mb-6">
                {brand.description}
              </p>

              {/* CTA — Next.js Link */}
              <div className="pt-1">
                <Link
                  href={catalogHref}
                  className="inline-block w-full sm:w-auto px-7 py-3 border border-zinc-950 text-zinc-950 bg-transparent hover:bg-zinc-950 hover:text-white transition-all duration-500 ease-in-out text-[10px] tracking-[0.2em] font-semibold uppercase rounded-none shadow-sm active:scale-[0.99] text-center"
                >
                  View {brand.name} Catalog
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default BrandsSinglePage;