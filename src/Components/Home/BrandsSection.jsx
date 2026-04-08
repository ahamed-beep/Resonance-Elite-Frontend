const BrandsSection = () => {
  const logos = [
    "/Images/steg.webp",
    "/Images/brax.png",
    "/Images/DDAudio.svg",
    "/Images/gladen.png",
    "/Images/match.png",
  ];

  return (
    <section className="bg-white">
      <div className="py-20 px-6 md:px-10 text-center">
        <h2 className="text-2xl md:text-4xl text-[#000000]  font-jakarta font-bold text-gray-900 max-w-3xl mx-auto">
          Home to World's Leading Elite Audio Brands
        </h2>
        <p className="text-gray-600 font-jakarta mt-4 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-light">
          We offer a handpicked selection of globally renowned car audio brands,
          featuring competition-grade systems engineered to achieve true
          studio-quality sound inside your car.
        </p>

        {/* Marquee */}
        <div className="w-full overflow-hidden mt-16">
          <div
            className="flex gap-20 items-center"
            style={{
              width: "max-content",
              animation: "scrollLeft 15s linear infinite",
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Brand ${i + 1}`}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};

export default BrandsSection;