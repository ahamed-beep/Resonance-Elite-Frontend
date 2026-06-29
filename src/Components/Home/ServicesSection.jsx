import Image from "next/image";

const services = [
  {
    title: "Tuning",
    subtitle: "Competition-Grade DSP Calibration",
    description:
      "We deliver studio-grade digital signal processing using advanced binaural microphones calibrated to human hearing. By analysis of real-time cabin reflections through 3D Vectoring Graphs, we masterfully correct phase variations, time alignment, and frequencies to unlock uncompromised acoustic fidelity.",
    img: "/Images/home/services/TUNING1.webp",
    reverse: false,
    ratio: "aspect-[4/3]",
  },
  {
    title: "A-Pillars",
    subtitle: "Hand-Crafted Acoustic Architecture",
    description:
      "Custom-tailored and laser-aligned using competition-proven axis theory. Each pillar is sculpted to eliminate cabin reflections, ensuring perfect driver orientation while maintaining structural integrity and a bespoke luxury aesthetic.",
    img: "/Images/home/services/A-PILLARS.webp",
    reverse: true,
    ratio: "aspect-[4/3]",
  },
  {
    title: "Amp Rack",
    subtitle: "CAD-Engineered Integration",
    description:
      "Meticulously CAD-designed for flawless fitment and structural efficiency. Our high-end amplifier racks optimize thermal airflow, isolate hardware vibrations, and manage complex wiring for maximum system longevity, presenting a pristine, showcase-ready finish.",
    img: "/Images/home/services/AMPRACKS.webp",
    reverse: false,
    ratio: "aspect-[3/2]",
  },
  {
    title: "Custom Enclosures",
    subtitle: "Premium Material Craftsmanship",
    description:
      "Precision-molded using aerospace fiberglass, carbon fiber, and multi-layered HDF to perfectly contour your vehicle's lines. Every enclosure is acoustically calculated for depth, transient speed, and raw control, delivering powerful bass without losing space.",
    img: "/Images/home/services/CUSTOMENCLOSURES.webp",
    reverse: true,
    ratio: "aspect-[3/2]",
  },
];

export default function ServicesSection() {
  return (
    <section
      aria-label="Our services"
      className="bg-white py-12 md:py-16 lg:py-20 min-[1920px]:py-24 min-[2560px]:py-32 min-[3200px]:py-40 space-y-14 sm:space-y-16 md:space-y-20 lg:space-y-24 min-[1920px]:space-y-32 min-[2560px]:space-y-40 min-[3200px]:space-y-52 overflow-x-hidden"
    >
      {/* Heading */}
      <div className="mx-auto text-center px-4 sm:px-6 md:px-10 min-[1920px]:px-16 min-[2560px]:px-24 min-[3200px]:px-32">
        <h2 className="text-xl sm:text-2xl md:text-4xl min-[1920px]:text-5xl min-[2560px]:text-6xl min-[3200px]:text-7xl font-light text-zinc-900 tracking-tight leading-snug">
          From Structure to Sound Perfection in Every Detail
        </h2>

        <div className="w-12 min-[1920px]:w-16 min-[2560px]:w-20 min-[3200px]:w-28 h-[1px] bg-zinc-300 mx-auto mt-4 md:mt-6 min-[2560px]:mt-8" />
      </div>

      {services.map((service, i) => (
        <div
          key={i}
          className={`flex flex-col ${
            service.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] min-[3200px]:max-w-[2600px] mx-auto px-4 sm:px-6 md:px-10 min-[1920px]:px-16 min-[2560px]:px-20 min-[3200px]:px-28 gap-8 md:gap-12 lg:gap-16 min-[1920px]:gap-20`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div
              className={`w-full ${service.ratio} bg-zinc-50 rounded-sm overflow-hidden flex items-center justify-center`}
            >
              <Image
                src={service.img}
                alt={service.title}
                width={1400}
                height={1000}
                priority={i === 0}
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left py-2 md:py-4">

            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl min-[1920px]:text-4xl min-[2560px]:text-5xl min-[3200px]:text-6xl font-light text-zinc-950 tracking-tight leading-tight whitespace-nowrap">
              {service.title}
            </h3>

            {/* Subtitle */}
            <h4 className="mt-2 md:mt-3 text-[10px] sm:text-[11px] md:text-[10px] lg:text-xs xl:text-sm min-[1920px]:text-base min-[2560px]:text-lg min-[3200px]:text-xl font-medium uppercase tracking-[0.18em] text-zinc-400 whitespace-nowrap">
              {service.subtitle}
            </h4>

            {/* Description */}
            <p
              className="
                mt-3
                sm:mt-4
                md:mt-4
                lg:mt-5
                text-zinc-500
                text-[13px]
                sm:text-[14px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                min-[1920px]:text-lg
                min-[2560px]:text-xl
                min-[3200px]:text-2xl
                leading-6
                md:leading-6
                lg:leading-7
                min-[1920px]:leading-8
                font-light
                max-w-full
                sm:max-w-[95%]
                md:max-w-[430px]
                lg:max-w-[500px]
                xl:max-w-[560px]
                min-[1920px]:max-w-[700px]
                min-[2560px]:max-w-[850px]
              "
            >
              {service.description}
            </p>

          </div>
        </div>
      ))}
    </section>
  );
}