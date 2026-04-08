"use client";
import { useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);

  return (
    <section className=" relative w-full h-screen overflow-hidden ">
      <video
        ref={videoRef}
        className=" absolute  w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.png"
      >
        <source src="/Video/project.mp4" type="video/mp4" />
      </video>

       <div className="absolute inset-0 bg-black/50" />

      
    </section>
  );
};

export default HeroSection;