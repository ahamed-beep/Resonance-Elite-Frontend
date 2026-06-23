"use client";
import { useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100dvh' }}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.png"
      >
        <source src="https://res.cloudinary.com/ddhxxqkpc/video/upload/v1781668652/Video_yc69yf.webm" type="video/webm" />
        <source src="https://res.cloudinary.com/ddhxxqkpc/video/upload/v1781668652/Video_yc69yf.webm" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />
    </section>
  );
};

export default HeroSection;