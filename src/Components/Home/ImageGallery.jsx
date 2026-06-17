"use client";

import { useState } from "react";
import { X } from "lucide-react";

const images = {
  left: [
    { src: "/Images/home/gallery/gallery1.webp", alt: "Gallery Detail 1" },
    { src: "/Images/home/gallery/gallery2.webp", alt: "Gallery Detail 2" },
  ],
  center: { src: "/Images/home/gallery/gallery3.webp", alt: "Gallery Centerpiece" },
  right: [
    { src: "/Images/home/gallery/gallery4.webp", alt: "Gallery Detail 3" },
    { src: "/Images/home/gallery/gallery5.webp", alt: "Gallery Detail 4" },
  ],
};

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden" aria-label="Image gallery">
      <div className=" mx-auto">

        <div className="text-center mb-10 md:mb-12 px-4">
          <h2 className="  text-3xl md:text-4xl font-light text-zinc-900 tracking-tight">
            Image Gallery
          </h2>
          <div className="w-12 h-[1px] bg-zinc-200 mx-auto mt-4" />
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-7 gap-3 px-3 md:px-4">

          {/* LEFT COLUMN */}
          <div className="grid grid-rows-2 gap-3 col-span-1 md:col-span-2">
            {images.left.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden bg-zinc-100 rounded-sm h-[140px] sm:h-[180px] md:h-[220px] cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
                role="button"
                aria-label={`Open ${img.alt}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center hover:opacity-90 transition duration-200"
                />
              </div>
            ))}
          </div>

          {/* CENTER */}
          <div className="col-span-2 md:col-span-3 order-first md:order-none">
            <div
              className="overflow-hidden bg-zinc-100 h-[220px] sm:h-[320px] md:h-[450px] rounded-sm cursor-pointer"
              onClick={() => setSelectedImage(images.center.src)}
              role="button"
              aria-label={`Open ${images.center.alt}`}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedImage(images.center.src)}
            >
              <img
                src={images.center.src}
                alt={images.center.alt}
                loading="eager"
                className="w-full h-full object-cover object-center hover:opacity-90 transition duration-200"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-rows-2 gap-3 col-span-1 md:col-span-2">
            {images.right.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden bg-zinc-100 rounded-sm h-[140px] sm:h-[180px] md:h-[220px] cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
                role="button"
                aria-label={`Open ${img.alt}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center hover:opacity-90 transition duration-200"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition p-3 z-50 bg-black/40 rounded-full focus:outline-none"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={2} />
          </button>

          <div
            className="relative max-w-full max-h-[80vh] md:max-w-5xl md:max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged setup perspective"
              className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
            />
          </div>
        </div>
      )}
    </section>
  );
}