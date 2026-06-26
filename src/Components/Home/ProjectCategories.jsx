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
    <div className="pb-10 md:py-20 px-6 md:px-10 bg-white text-center">
      <h2 className="text-3xl font-jakarta md:text-4xl font-bold text-gray-900">
        Project Categories
      </h2>

      {/* Horizontal scroll container for mobile */}
      <div className="mt-12 overflow-x-auto md:overflow-visible">
        <div className="flex md:grid md:grid-cols-3 gap-10 mx-auto min-w-max md:min-w-0">
          {categories.map((card, i) => (
            <div key={i} className="group w-[280px] md:w-auto">
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <p className="mt-4 text-lg font-jakarta font-semibold text-gray-800">
                {card.title}
              </p>

              <Link href={`/projects?category=${card.slug}`}>
                <button className="mt-4 border font-jakarta border-black text-black text-xs font-semibold uppercase tracking-widest px-5 py-2 hover:bg-black hover:text-white transition duration-300">
                  Discover Our Projects
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCategories;