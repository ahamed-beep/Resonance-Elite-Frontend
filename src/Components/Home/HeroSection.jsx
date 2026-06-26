"use client";
import { useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);

  return (
    // Height ko humne auto ya aspect-ratio par chora hai taaki width full rahe aur video cut na ho
    <section className="relative w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        // w-full se width 100% ho gayi, h-auto se height original ratio ke mutabiq khud adjust hogi
        className="w-full h-auto block"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.png"
      >
        <source src="https://res.cloudinary.com/dwkv8fry2/video/upload/v1782434366/1782307909885740_k88pw8.webm" type="video/webm" />
        <source src="https://res.cloudinary.com/ddhxxqkpc/video/upload/v1781668652/Video_yc69yf.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
    </section>
  );
};

export default HeroSection;