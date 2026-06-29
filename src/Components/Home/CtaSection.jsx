import React from "react";

const CtaSection = () => {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-20 min-[1920px]:py-24 min-[2560px]:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl min-[1920px]:max-w-[1700px] min-[2560px]:max-w-[2200px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14 min-[1920px]:gap-20">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] min-[1920px]:text-6xl min-[2560px]:text-7xl font-bold font-jakarta text-black leading-tight">
              Join The Community
            </h2>

            <p className="mt-5 text-gray-700 font-jakarta text-sm sm:text-base md:text-[15px] lg:text-base min-[1920px]:text-xl min-[2560px]:text-2xl leading-relaxed font-light max-w-xl min-[1920px]:max-w-2xl mx-auto lg:mx-0">
              Resonance Elite is a league of individuals who refuse to
              compromise on acoustic perfection. By stepping into our world,
              you gain exclusive access to behind-the-scenes engineering,
              early private reveals of bespoke fabrications, and curated
              technical insights straight from our design studio.
            </p>

            <button className="mt-8 w-fit mx-auto lg:mx-0 px-6 md:px-7 min-[1920px]:px-9 min-[2560px]:px-12 py-3 min-[1920px]:py-4 min-[2560px]:py-5 bg-black text-white border border-black text-xs md:text-sm min-[1920px]:text-base min-[2560px]:text-lg font-semibold uppercase tracking-[0.18em] hover:bg-white hover:text-black transition-all duration-300">
              Join Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full aspect-[1852/1080]">
              <img
                src="/Images/cta.webp"
                alt="Join the community"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;