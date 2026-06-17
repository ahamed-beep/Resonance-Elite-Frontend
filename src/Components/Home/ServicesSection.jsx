import Image from "next/image";

const services = [
  {
    title: "Tuning",
    subtitle: "Competition-Grade DSP Calibration",
    description:
      "We deliver studio-grade digital signal processing using advanced binaural microphones calibrated to human hearing. By analysis of real-time cabin reflections through 3D Vectoring Graphs, we masterfully correct phase variations, time alignment, and frequencies to unlock uncompromised acoustic fidelity.",
    img: "/Images/home/services/TUNING1.webp",
    reverse: false,
  },
  {
    title: "A-Pillars",
    subtitle: "Hand-Crafted Acoustic Architecture",
    description:
      "Custom-tailored and laser-aligned using competition-proven axis theory. Each pillar is sculpted to eliminate cabin reflections, ensuring perfect driver orientation while maintaining structural integrity and a bespoke luxury aesthetic.",
    img: "/Images/home/services/A-PILLARS.webp",
    reverse: true,
  },
  {
    title: "Amp Rack",
    subtitle: "CAD-Engineered Integration",
    description:
      "Meticulously CAD-designed for flawless fitment and structural efficiency. Our high-end amplifier racks optimize thermal airflow, isolate hardware vibrations, and manage complex wiring for maximum system longevity, presenting a pristine, showcase-ready finish.",
    img: "/Images/home/services/AMPRACKS.webp",
    reverse: false,
  },
  {
    title: "Custom Enclosures",
    subtitle: "Premium Material Craftsmanship",
    description:
      "Precision-molded using aerospace fiberglass, carbon fiber, and multi-layered HDF to perfectly contour your vehicle's lines. Every enclosure is acoustically calculated for depth, transient speed, and raw control, delivering powerful bass without losing space.",
    img: "/Images/home/services/CUSTOMENCLOSURES.webp",
    reverse: true,
  },
];

export default function ServicesSection() {
  return (
    <section
      aria-label="Our services"
      className="bg-white py-12 md:py-16 space-y-16 md:space-y-24 overflow-x-hidden"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-light text-zinc-900 tracking-tight">
          From Structure to Sound Perfection in Every Detail
        </h2>
        <div className="w-12 h-[1px] bg-zinc-300 mx-auto mt-4 md:mt-6" />
      </div>

      {services.map((service, i) => (
        <div
          key={i}
          className={`flex flex-col ${service.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center max-w-7xl mx-auto px-4 gap-6 md:gap-16`}
        >
          <div className="w-full md:w-1/2 aspect-[4/3] max-h-[260px] sm:max-h-[340px] md:h-[400px] md:max-h-none overflow-hidden bg-zinc-50 rounded-sm">
            <img
              src={service.img}
              alt={service.title}
              loading={i === 0 ? "eager" : "lazy"}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-1 sm:px-2 md:px-0">
            <h3 className="text-xl md:text-3xl font-light text-zinc-950 tracking-tight">
              {service.title}
            </h3>
            <h4 className="mt-1 md:mt-2 text-[10px] md:text-base font-medium tracking-wider uppercase text-zinc-400">
              {service.subtitle}
            </h4>
            <p className="mt-3 md:mt-5 text-zinc-500 leading-relaxed text-xs sm:text-sm md:text-base font-light max-w-xl">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}