import React from "react";
import Link from "next/link";

const ProjectCategories = () => {
  const categories = [
    {
      title: "SQ Projects",
      img: "/Images/home/project/project1.webp",
      slug: "sq",
    },
    {
      title: "SQL Projects",
      img: "/Images/home/project/project2.webp",
      slug: "sql",
    },
    {
      title: "SPL Projects",
      img: "/Images/home/project/project3.webp",
      slug: "spl",
    },
  ];

  return (
    <section className="bg-white text-center pb-10 pt-8 sm:pt-10 md:py-16 lg:py-20 min-[1920px]:py-24 min-[2560px]:py-32 min-[3200px]:py-40 px-4 sm:px-6 md:px-10 min-[1920px]:px-16 min-[2560px]:px-24 min-[3200px]:px-32 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl lg:max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] min-[3200px]:max-w-[2560px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl min-[1920px]:text-5xl min-[2560px]:text-6xl min-[3200px]:text-7xl font-jakarta font-bold text-gray-900 leading-tight">
          Project Categories
        </h2>

        <div className="mt-8 sm:mt-10 md:mt-12 min-[1920px]:mt-16 min-[2560px]:mt-20 min-[3200px]:mt-24 overflow-x-auto md:overflow-visible">
          <div className="flex md:grid md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10 min-[1920px]:gap-14 min-[2560px]:gap-20 min-[3200px]:gap-28 mx-auto min-w-max md:min-w-0 items-start">
            {categories.map((card, i) => (
              <div
                key={i}
                className="group flex flex-col w-[260px] sm:w-[300px] md:w-full shrink-0"
              >
                <div className="w-full aspect-[1800/1200] bg-zinc-100 overflow-hidden flex items-center justify-center">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="flex flex-col items-center pt-4 md:pt-5 lg:pt-6 min-[1920px]:pt-8">
                  <p className="text-base sm:text-lg md:text-lg lg:text-xl min-[1920px]:text-2xl min-[2560px]:text-3xl min-[3200px]:text-4xl font-jakarta font-semibold text-gray-800 leading-snug">
                    {card.title}
                  </p>

                  <Link
                    href={`/projects?category=${card.slug}`}
                    className="mt-4 md:mt-5 lg:mt-5 min-[1920px]:mt-6 min-[2560px]:mt-8 inline-flex justify-center"
                  >
                    <span className="inline-flex items-center justify-center border font-jakarta border-black text-black text-[9px] sm:text-[10px] md:text-[10px] lg:text-xs min-[1920px]:text-base min-[2560px]:text-lg min-[3200px]:text-2xl font-semibold uppercase tracking-widest px-3 sm:px-4 md:px-3 lg:px-5 min-[1920px]:px-7 min-[2560px]:px-10 min-[3200px]:px-14 py-2 min-[1920px]:py-3 min-[2560px]:py-4 min-[3200px]:py-6 hover:bg-black hover:text-white transition duration-300 whitespace-nowrap">
                      Discover Our Projects
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;