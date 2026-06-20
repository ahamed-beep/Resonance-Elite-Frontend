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
      "Handcrafted in Germany by Audiotec Fischer, BRAX represents the absolute pinnacle of automotive high-fidelity. Every component, from power amplifiers to high-end speakers, is engineered without compromise. Utilizing gold-plated circuit boards, hand-selected components, and precision-tooled heatsinks, BRAX delivers an unparalleled sonic experience that reveals the finest details in your music. It is the first choice for audiophiles who demand the most natural and powerful sound reproduction possible in a vehicle environment.",
    image: "/Images/brands/BRAX.webp",
  },
  {
    id: "blam",
    name: "BLAM",
    tagline: "Experience the Signature 'French Sound'",
    description:
      "Driven by the philosophy of 'French Sound,' BLAM (Bonneville Laboratory And Acoustic Musical) focuses on the emotional impact of music. With over 25 years of experience in high-end speaker design, founder Guy Bonneville creates systems that emphasize mid-range clarity and vocal warmth. Their Signature and Live series utilize high-quality materials like carbon fiber and silk domes to reproduce the nuance of a live performance, making them ideal for listeners who appreciate jazz, classical, and acoustic genres.",
    image: "/Images/brands/BLAM.webp",
  },
  {
    id: "morel",
    name: "MOREL",
    tagline: "Mastering the Art of Speaker Technology",
    description:
      "Since 1975, Morel has been at the forefront of acoustic innovation. Known for their unique Hexatech voice coils and Acuflex hand-coated silk dome tweeters, Morel speakers deliver a smooth, non-fatiguing sound that is legendary in the car audio industry. From the entry-level Maximo to the flagship Supremo series, Morel integrates advanced aerodynamics and neodymium magnets to ensure every driver performs with precision, even in the challenging acoustic spaces of modern car interiors.",
    image: "/Images/brands/MOREL.webp",
  },
  {
    id: "gladen",
    name: "GLADEN",
    tagline: "German Engineering & Performance Excellence",
    description:
      "Gladen Audio combines aerospace-grade materials with traditional German craftsmanship to create high-performance car audio solutions. Their philosophy is centered on technical perfection; whether it's their line of high-efficiency subwoofers or their award-winning speaker components. Gladen products are designed to withstand the rigors of automotive use while providing a linear frequency response and high power handling, ensuring that your audio system stays crystal clear at any volume level.",
    image: "/Images/brands/GLADEN.webp",
  },
  {
    id: "helix",
    name: "HELIX",
    tagline: "The Global Leader in Digital Signal Processing",
    description:
      "Helix has redefined the modern car audio landscape through its world-class Digital Signal Processors (DSP) and intelligent amplifiers. As modern factory radios become harder to replace, Helix offers the technology to integrate seamlessly with OEM systems while providing professional-grade tuning capabilities. With features like Real-Time Analyzers (RTA) and Virtual Channel Processing, Helix allows enthusiasts to correct time-alignment and equalization, transforming a standard car cabin into a world-class concert hall.",
    image: "/Images/brands/HELIX.webp",
  },
  {
    id: "mosconi",
    name: "MOSCONI",
    tagline: "Italian Design Meets High-End Performance",
    description:
      "Mosconi amplifiers and processors are a testament to Italian elegance and power. Merging aesthetic beauty with raw performance, Mosconi Gladen units are designed to deliver massive power without sacrificing sound quality. Their amplifiers are celebrated for their 'Class AB' warmth and control, providing a sophisticated sound stage and incredible dynamic range. For those who want their audio equipment to look as good as it sounds, Mosconi is the ultimate statement in boutique automotive electronics.",
    image: "/Images/brands/MOSCONI.webp",
  },
  {
    id: "match",
    name: "MATCH",
    tagline: "Premium Plug & Play Audio Upgrades",
    description:
      "Match by Audiotec Fischer provides the perfect solution for upgrading your vehicle's audio without modifying the interior. Specializing in 'Plug & Play' DSP amplifiers and vehicle-specific speakers, Match allows for a significant boost in power and clarity using the factory wiring. This makes it the premier choice for leased vehicles or modern luxury cars where maintaining the original factory look is essential, all while gaining professional-grade sound processing power.",
    image: "/Images/brands/MATCH.webp",
  },
  {
    id: "dd-audio",
    name: "DD AUDIO",
    tagline: "Engineered for Extreme Sound Pressure",
    description:
      "DD Audio (Digital Designs) is synonymous with extreme bass and rugged durability. Based in the USA, they have spent decades perfecting the art of high-excursion subwoofers and high-output amplifiers. Built to 'True to the Source' standards, DD Audio products aren't just for competition-level SPL (Sound Pressure Level) vehicles; they are designed for anyone who wants deep, tactile bass that you can feel in your chest. Their hand-built subwoofers set the industry standard for performance and longevity.",
    image: "/Images/brands/DDAUDIO.webp",
  },
  {
    id: "db-drive",
    name: "DB DRIVE",
    tagline: "Unleashing the Power of Sound",
    description:
      "DB Drive is dedicated to the 'Loud and Clear' lifestyle. Their extensive range of subwoofers, mid-ranges, and high-compression drivers are designed for high-energy audio systems that demand attention. Whether you are building a 'Pro Audio' style system or a high-performance daily driver, DB Drive provides the heavy-duty components needed to cut through road noise. Their Euphoria line specifically targets the SQ (Sound Quality) market, offering a balanced, refined alternative to their high-output series.",
    image: "/Images/brands/DBDRIVE.webp",
  },
  {
    id: "db-link",
    name: "DB LINK",
    tagline: "Professional Connection & Power Management",
    description:
      "A high-end audio system is only as good as its connections. DB Link provides the critical infrastructure required for peak performance, including oxygen-free copper (OFC) wiring, high-conductivity distribution blocks, and advanced sound dampening materials. By ensuring maximum current flow and minimizing electrical resistance, DB Link accessories allow your amplifiers and speakers to reach their full potential, preventing voltage drops and ensuring a noise-free audio environment.",
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