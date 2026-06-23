"use client";

import { useState } from "react";
import Image from "next/image";


const projectSections = [
  {
    title: "SQ Projects",
    subtitle: "Sound Quality Excellence",
    desc: "Focused on Sound Quality (SQ), these projects prioritize the most accurate sound reproduction possible. We engineer High-End systems using the world’s best Equipment and components, ensuring every note is delivered with absolute clarity and emotional depth for the Audiophiles.",
    specs: [
      "STUDIO GRADE SOUND REPRODUCTION",
      "HEAR EVERY NOTE AS INTENDED",
    ],
    images: [
      "/Images/projects/SQPROJECTS/image1.webp",
      "/Images/projects/SQPROJECTS/image2.webp",
      "/Images/projects/SQPROJECTS/image3.webp",
      "/Images/projects/SQPROJECTS/image4.webp",
      "/Images/projects/SQPROJECTS/image5.webp",
      "/Images/projects/SQPROJECTS/image6.webp",
    ],
  },
  {
    title: "SQL Projects",
    subtitle: "Sound Quality Loud",
    desc: "Sound Quality Loud (SQL) projects bridge the gap between audiophile precision and high-volume output. These builds are designed for those who want the best of both worlds, crystal clear audio that maintains its integrity even at high volume levels.",
    specs: [
      "EXCEPTIONAL CLARITY, EVEN AT HIGHER VOLUMES",
      "THE PERFECT BALANCE OF LOUDNESS AND HIGH FIDELITY",
    ],
    images: [
      "/Images/projects/SQLPROJECTS/image1.webp",
      "/Images/projects/SQLPROJECTS/image2.webp",
      "/Images/projects/SQLPROJECTS/image3.webp",
      "/Images/projects/SQLPROJECTS/image4.webp",
      "/Images/projects/SQLPROJECTS/image5.webp",
      "/Images/projects/SQLPROJECTS/image6.webp",
    ],
  },
  {
    title: "SPL Projects",
    subtitle: "Sound Pressure Level",
    desc: "Sound Pressure Level (SPL) projects are dedicated to raw power and extreme bass. These builds are engineered for maximum acoustic pressure and bass response pushing the limits of volume to the max, these systems turn heads, do the crazy viral hairtricks and are absolute showstoppers.",
    specs: [
      "BUILT FOR HAIR TRICKS AND GROUND SHAKING BASS",
      "ENGINEERED TO MOVE AIR, FLEX PANELS, AND TURN HEADS",
    ],
    images: [
      "/Images/projects/SPLPROJECTS/image1.webp",
      "/Images/projects/SPLPROJECTS/image2.webp",
      "/Images/projects/SPLPROJECTS/image3.webp",
      "/Images/projects/SPLPROJECTS/image4.webp",
      "/Images/projects/SPLPROJECTS/image5.webp",
      "/Images/projects/SPLPROJECTS/image6.webp",
    ],
  },
];

export default function ProjectsClient() {
  const [activeIndices, setActiveIndices] = useState({ 0: 0, 1: 0, 2: 0 });

  const handleStateChange = (sectionIndex, imageIndex) => {
    setActiveIndices((prev) => ({ ...prev, [sectionIndex]: imageIndex }));
  };

  return (
    <section
      aria-label="Project galleries"
      className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20 md:space-y-32"
    >
      {projectSections.map((project, sectionIdx) => {
        const isEven = sectionIdx % 2 === 0;
        const currentActiveIdx = activeIndices[sectionIdx];

        return (
          <article
            key={sectionIdx}
            aria-label={project.title}
            className={`flex flex-col ${
              isEven ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8 md:gap-12 lg:gap-16`}
          >
            {/* Gallery Block */}
            <div className="w-full lg:w-1/2 space-y-3">
              <div className="w-full aspect-[4/3] max-h-[280px] sm:max-h-[360px] lg:max-h-none overflow-hidden bg-zinc-50 border border-zinc-200/60 rounded-sm relative group">
                <Image
                  src={project.images[currentActiveIdx]}
                  alt={`${project.title} — featured installation image ${currentActiveIdx + 1}`}
                  fill
                  loading={sectionIdx === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out lg:group-hover:scale-105"
                />
              </div>

              {/* Thumbnails */}
              <div
                role="tablist"
                aria-label={`${project.title} image gallery`}
                className="flex gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none [-webkit-overflow-scrolling:touch]"
              >
                {project.images.map((img, imgIdx) => {
                  const isSelected = currentActiveIdx === imgIdx;
                  return (
                    <button
                      key={imgIdx}
                      role="tab"
                      aria-selected={isSelected}
                      aria-label={`View ${project.title} image ${imgIdx + 1}`}
                      onClick={() => handleStateChange(sectionIdx, imgIdx)}
                      className={`relative w-14 h-10 sm:w-16 sm:h-12 flex-shrink-0 overflow-hidden border transition-all duration-300 rounded-sm active:scale-95 ${
                        isSelected
                          ? "border-zinc-950 ring-1 ring-zinc-950 scale-[0.97]"
                          : "border-zinc-200 hover:border-zinc-400"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} thumbnail ${imgIdx + 1}`}
                        fill
                        sizes="64px"
                        className={`object-cover transition-opacity duration-300 ${
                          isSelected ? "opacity-100" : "opacity-70 hover:opacity-100"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Block */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 block">
                  {project.subtitle}
                </span>
                <h2 className="text-xl md:text-2xl font-light text-zinc-950 tracking-tight uppercase">
                  {project.title}
                </h2>
              </div>

              <p className="mt-4 text-zinc-600 leading-7 text-xs sm:text-sm font-light tracking-wide max-w-xl">
                {project.desc}
              </p>

              {/* Tech Specs */}
              <div className="mt-6 pt-6 border-t border-zinc-100 flex flex-wrap gap-2">
                {project.specs.map((spec, specIdx) => (
                  <div
                    key={specIdx}
                    className="bg-zinc-50 border border-zinc-200/60 px-3 py-1.5 rounded-sm flex items-center gap-2"
                  >
                    <div
                      className="w-1 h-1 bg-zinc-950 rounded-full shrink-0 animate-pulse"
                      aria-hidden="true"
                    ></div>
                    <span className="text-[10px] font-mono tracking-wider uppercase font-medium text-zinc-800">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}