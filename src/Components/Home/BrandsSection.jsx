import Image from "next/image";

const brandLogos = [
  { src: "/Images/home/brand/morel.svg", alt: "Morel Audio" },
  { src: "/Images/home/brand/BRAX.png", alt: "Brax Audio" },
  { src: "/Images/home/brand/DDAudio.svg", alt: "DD Audio" },
  { src: "/Images/home/brand/gladen.svg", alt: "Gladen Audio" },
  { src: "/Images/home/brand/match.svg", alt: "Match Audio" },
  { src: "/Images/home/brand/BLAM.png", alt: "BLAM Audio" },
  { src: "/Images/home/brand/DBDRIVE.png", alt: "DB Drive Audio" },
  { src: "/Images/home/brand/Helix.png", alt: "Helix Audio" },
];

const doubledLogos = [...brandLogos, ...brandLogos, ...brandLogos];

export default function BrandsSection() {
  return (
    <section
      aria-label="Featured audio brands"
      className="w-full py-10 sm:py-12 md:py-16 lg:py-20 min-[1920px]:py-24 min-[2560px]:py-32 min-[3200px]:py-36 px-4 sm:px-6 md:px-8 min-[1920px]:px-16 min-[2560px]:px-24 min-[3200px]:px-32 bg-white text-center overflow-hidden"
    >
      <div className="w-full mx-auto">
        <div className="mb-8 md:mb-12 min-[1920px]:mb-16 min-[2560px]:mb-20 min-[3200px]:mb-24 max-w-4xl min-[1920px]:max-w-5xl min-[2560px]:max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-4xl min-[1920px]:text-5xl min-[2560px]:text-6xl min-[3200px]:text-7xl font-light text-zinc-900 tracking-tight leading-snug">
            Home to World's Leading Elite Audio Brands
          </h2>

          <p className="text-zinc-500 mt-4 min-[1920px]:mt-5 min-[2560px]:mt-6 text-xs sm:text-sm md:text-base min-[1920px]:text-lg min-[2560px]:text-xl min-[3200px]:text-2xl max-w-2xl min-[1920px]:max-w-4xl min-[3200px]:max-w-6xl mx-auto leading-relaxed font-light px-2">
            We offer a handpicked selection of globally renowned car audio
            brands, featuring competition-grade systems engineered to achieve
            true studio-quality sound inside your car.
          </p>
        </div>

        <div className="w-full overflow-hidden mt-8 md:mt-14 min-[1920px]:mt-16 min-[2560px]:mt-20 min-[3200px]:mt-24 py-2 min-[1920px]:py-4 min-[2560px]:py-6 relative">
          <div className="absolute inset-y-0 left-0 w-8 sm:w-12 md:w-16 min-[1920px]:w-24 min-[2560px]:w-32 min-[3200px]:w-44 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 sm:w-12 md:w-16 min-[1920px]:w-24 min-[2560px]:w-32 min-[3200px]:w-44 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-5 sm:gap-6 md:gap-10 min-[1920px]:gap-14 min-[2560px]:gap-20 min-[3200px]:gap-28 w-max animate-marquee items-center">
            {doubledLogos.map((logo, i) => (
              <div
                key={i}
                className="w-24 sm:w-32 md:w-44 lg:w-48 min-[1920px]:w-56 min-[2560px]:w-72 min-[3200px]:w-96 flex justify-center items-center shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={384}
                  height={128}
                  className={`h-7 sm:h-10 md:h-14 lg:h-16 min-[1920px]:h-20 min-[2560px]:h-24 min-[3200px]:h-32 w-full object-contain ${
                    logo.alt === "Brax Audio"
                      ? "scale-[1.75] sm:scale-[1.85] md:scale-[1.6] min-[1920px]:scale-[1.5] min-[2560px]:scale-[1.45] min-[3200px]:scale-[1.4]"
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