import Image from "next/image";

const Collections = () => {
  return (
    <div className="bg-white text-center pb-10 md:py-16 px-3">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
        Discover Our Collections
      </h2>
      <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
        High-end audio equipment built with the highest quality, designed with the goal to provide uncompromising sound to every drive.
      </p>

      {/* Mobile horizontal scroll container */}
      <div className="relative mt-12">
        {/* Mobile view - horizontal scroll */}
        <div className="md:hidden overflow-x-auto overflow-y-hidden scroll-smooth pb-4 -mx-3 px-3">
          <div className="flex gap-4 min-w-max">
            {[
              { title: "Amplifiers", img: "/Images/Image1.jpg" },
              { title: "Subwoofers", img: "/Images/Image2.jpg" },
              { title: "Speakers", img: "/Images/Image3.jpg" },
              { title: "DSPs", img: "/Images/Image4.jpg" },
              { title: "Accessories", img: "/Images/Image5.jpg" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col w-[280px]">
                <Image
                fill 
                priority
                sizes=""
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[250px] object-cover"
                />
                <div className="mt-4 text-center">
                  <button className="px-4 py-2 bg-white text-black text-xs font-semibold uppercase tracking-widest border border-black hover:bg-black hover:text-white transition duration-300">
                    {item.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view - grid layout */}
        <div className="hidden md:grid md:grid-cols-5 gap-4">
          {[
            { title: "Amplifiers", img: "/Images/Image1.jpg" },
            { title: "Subwoofers", img: "/Images/Image2.jpg" },
            { title: "Speakers", img: "/Images/Image3.jpg" },
            { title: "DSPs", img: "/Images/Image4.jpg" },
            { title: "Accessories", img: "/Images/Image5.jpg" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[250px] md:h-[320px] object-cover"
              />
              <div className="mt-4 text-center">
                <button className="px-4 py-2 bg-white text-black text-xs font-semibold uppercase tracking-widest border border-black hover:bg-black hover:text-white transition duration-300">
                  {item.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Scroll indicator for mobile */}
    
    </div>
  );
};

export default Collections;