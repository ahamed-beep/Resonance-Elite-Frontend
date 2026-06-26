import Image from "next/image";

const brandLogos = [
  { src: "/Images/home/brand/morel.svg", alt: "Morel Audio" },
  { src: "/Images/home/brand/BRAX.png", alt: "Brax Audio" },
  { src: "/Images/home/brand/DDAudio.svg", alt: "DD Audio" },
  { src: "/Images/home/brand/gladen.svg", alt: "Gladen Audio" },
  { src: "/Images/home/brand/match.svg", alt: "Match Audio" },
  { src: "/Images/home/brand/BLAM.png", alt: "BLAM Audio" },
  { src: "/Images/home/brand/DBDRIVE.png", alt: "DB Drive Audio" },
  { src: "/Images/home/brand/HELIX.png", alt: "Helix Audio" },
];

const doubledLogos = [...brandLogos, ...brandLogos, ...brandLogos];

export default function BrandsSection() {
  return (
    <section
      aria-label="Featured audio brands"
      className="py-12 md:py-20 px-4 bg-white text-center overflow-hidden"
    >
      <div className="mx-auto">
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-light text-zinc-900 tracking-tight leading-snug">
            Home to World's Leading Elite Audio Brands
          </h2>

          <p className="text-zinc-500 mt-4 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light px-2">
            We offer a handpicked selection of globally renowned car audio
            brands, featuring competition-grade systems engineered to achieve
            true studio-quality sound inside your car.
          </p>
        </div>

        <div className="w-full overflow-hidden mt-8 md:mt-14 py-2 relative">
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Gap equal aur thoda kam kiya gaya hai */}
          <div className="flex gap-6 md:gap-10 w-max animate-marquee items-center">
            {doubledLogos.map((logo, i) => (
              <div
                key={i}
                className="w-28 sm:w-36 md:w-48 flex justify-center items-center shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={192}
                  height={64}
                  className={`h-8 sm:h-12 md:h-16 w-full object-contain ${
                    logo.alt === "Brax Audio"
                      ? "scale-[2.1] md:scale-150"
                      : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}