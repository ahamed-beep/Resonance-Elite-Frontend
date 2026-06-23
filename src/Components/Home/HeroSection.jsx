"use client";
import { useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);

  return (
    // bg-black add kiya taaki jahan video na ho wahan black background dikhe
    <section className="relative w-full overflow-hidden bg-black" style={{ height: '100dvh' }}>
      <video
        ref={videoRef}
        // object-cover ko badal kar object-contain kar diya
        className="absolute inset-0 w-full h-full object-contain"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.png"
      >
        <source src="https://res.cloudinary.com/ddhxxqkpc/video/upload/v1781668652/Video_yc69yf.webm" type="video/webm" />
        {/* Note: Aapne dono jagah .webm likha tha, neeche wale ko .mp4 ka source dein */}
        <source src="https://res.cloudinary.com/ddhxxqkpc/video/upload/v1781668652/Video_yc69yf.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
    </section>
  );
};

export default HeroSection;