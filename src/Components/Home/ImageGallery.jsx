"use client";
import React, { useState } from "react";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="bg-white py-10 md:py-16 px-6 md:px-10 text-center">
        <h3 className="text-3xl font-jakarta md:text-4xl font-bold text-gray-900">
          Image Gallery
        </h3>
      </div>
      
      {/* Mobile: horizontal scroll | Desktop: original grid */}
      <div className="w-full overflow-x-auto md:overflow-visible px-2 md:px-4">
        {/* Mobile par flex-row (horizontal), Desktop par original grid */}
        <div className="flex flex-row md:grid md:grid-cols-7 gap-3 md:gap-3 min-w-max md:min-w-0">
          
          {/* LEFT 2 - Mobile par bhi horizontal mein, Desktop par vertical */}
          <div className="flex flex-row md:flex-col md:col-span-2 gap-3 md:gap-0 md:space-y-3">
            <img
              src="/Images/gallery1.jpg"
              onClick={() => setSelectedImage("/Images/gallery1.jpg")}
              className="w-[280px] md:w-full h-[180px] md:h-[220px] object-cover object-center cursor-pointer"
              alt="Gallery 1"
            />
            <img
              src="/Images/gallery2.jpg"
              onClick={() => setSelectedImage("/Images/gallery2.jpg")}
              className="w-[280px] md:w-full h-[180px] md:h-[220px] object-cover object-center cursor-pointer"
              alt="Gallery 2"
            />
          </div>

          {/* CENTER */}
          <div className="w-[280px] md:w-auto md:col-span-3">
            <img
              src="/Images/gallery3.jpg"
              onClick={() => setSelectedImage("/Images/gallery3.jpg")}
              className="w-full h-[250px] md:h-[450px] object-cover object-center cursor-pointer"
              alt="Gallery 3"
            />
          </div>

          {/* RIGHT 2 - Mobile par bhi horizontal mein, Desktop par vertical */}
          <div className="flex flex-row md:flex-col md:col-span-2 gap-3 md:gap-0 md:space-y-3">
            <img
              src="/Images/gallery4.jpg"
              onClick={() => setSelectedImage("/Images/gallery4.jpg")}
              className="w-[280px] md:w-full h-[180px] md:h-[220px] object-cover object-center cursor-pointer"
              alt="Gallery 4"
            />
            <img
              src="/Images/gallery5.jpg"
              onClick={() => setSelectedImage("/Images/gallery5.jpg")}
              className="w-[280px] md:w-full h-[180px] md:h-[220px] object-cover object-center cursor-pointer"
              alt="Gallery 5"
            />
          </div>
          
        </div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Selected" 
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;