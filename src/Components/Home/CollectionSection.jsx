import Image from "next/image";
import Link from "next/link";

const collections = [
  { title: "Amplifiers", img: "/Images/home/collections/AMPLIFIERS.webp" },
  { title: "Subwoofers", img: "/Images/home/collections/SUBWOOFERS.webp" },
  { title: "Speakers", img: "/Images/home/collections/SPEAKERS.webp" },
  { title: "DSPs", img: "/Images/home/collections/DSP'S.webp" },
  { title: "Accessories", img: "/Images/home/collections/ACCESSORIES.webp" },
];

export default function CollectionsSection() {
  return (
    <section
      className="bg-white text-center py-12 md:py-16 lg:py-20 min-[1920px]:py-24 min-[2560px]:py-32 min-[3200px]:py-36 px-4 sm:px-8 md:px-10 min-[1920px]:px-16 min-[2560px]:px-24 min-[3200px]:px-32 overflow-hidden"
      aria-label="Product collections"
    >
      <div className="mx-auto max-w-6xl lg:max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] min-[3200px]:max-w-[2560px] w-full">
        <div className="mb-10 md:mb-12 min-[1920px]:mb-16 min-[2560px]:mb-20 min-[3200px]:mb-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl min-[1920px]:text-5xl min-[2560px]:text-6xl min-[3200px]:text-7xl font-light text-zinc-900 tracking-tight">
            Discover Our Collections
          </h2>

          <p className="text-zinc-500 mt-3 min-[1920px]:mt-5 min-[2560px]:mt-6 text-xs sm:text-sm md:text-base min-[1920px]:text-lg min-[2560px]:text-xl min-[3200px]:text-2xl max-w-2xl min-[1920px]:max-w-4xl min-[3200px]:max-w-6xl mx-auto leading-relaxed font-light px-2">
            High-end audio equipment built with the highest quality, designed
            with the goal to provide uncompromising sound to every drive.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 min-[1920px]:gap-10 min-[2560px]:gap-12 min-[3200px]:gap-16">
          {collections.map((item, i) => (
            <Link
              key={i}
              href={`/products?group=Car+Audio&category=${encodeURIComponent(
                item.title
              )}`}
              className={`flex flex-col cursor-pointer w-full ${
                i <= 2 ? "md:col-span-2 lg:col-span-1" : ""
              } ${
                i === 3
                  ? "md:col-start-2 md:col-span-2 lg:col-start-auto lg:col-span-1"
                  : ""
              } ${
                i === 4
                  ? "col-span-2 max-w-[50%] mx-auto md:max-w-none md:mx-0 md:col-start-4 md:col-span-2 lg:col-start-auto lg:col-span-1"
                  : ""
              }`}
            >
              <div className="w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] xl:h-[320px] min-[1920px]:h-[420px] min-[2560px]:h-[500px] min-[3200px]:h-[560px] bg-white overflow-hidden flex items-center justify-center p-2 min-[1920px]:p-3 min-[2560px]:p-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={700}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-3 min-[1920px]:mt-5 min-[3200px]:mt-8 text-center w-full">
                <span className="block w-full px-3 py-2 lg:py-2.5 min-[1920px]:py-4 min-[3200px]:py-6 bg-white text-black text-[10px] sm:text-xs lg:text-sm min-[1920px]:text-base min-[2560px]:text-lg min-[3200px]:text-xl font-medium uppercase tracking-widest border border-black hover:bg-black hover:text-white transition-colors duration-300">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}