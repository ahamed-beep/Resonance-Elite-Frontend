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
    <section className="bg-white text-center py-12 md:py-16 px-10  overflow-hidden" aria-label="Product collections">
      <div className=" mx-auto">

        <div className="mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-light text-zinc-900 tracking-tight">
            Discover Our Collections
          </h2>
          <p className="text-zinc-500 mt-3 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light px-2">
            High-end audio equipment built with the highest quality, designed with the goal to provide uncompromising sound to every drive.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {collections.map((item, i) => (
            <Link
              key={i}
              href={`/products?group=Car+Audio&category=${encodeURIComponent(item.title)}`}
              className={`flex flex-col cursor-pointer ${i === 4 ? "col-span-2 md:col-span-1 max-w-[50%] mx-auto w-full md:max-w-none" : ""}`}
            >
              <div className="w-full h-[180px] sm:h-[240px] md:h-[320px] bg-white overflow-hidden flex items-center justify-center p-2">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={320}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-3 text-center w-full">
                <span className="block w-full px-3 py-2 md:py-2.5 bg-white text-black text-[10px] sm:text-xs font-medium uppercase tracking-widest border border-black hover:bg-black hover:text-white transition-colors duration-300">
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