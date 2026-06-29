import Footer from "@/Components/Home/Footer";
import Navbar from "@/Components/Home/Navbar";

export const metadata = {
  title: "About Us | Resonance Elite",
  description:
    "Learn about Resonance Elite — founded by audiophiles for audiophiles. We deliver reference-grade car audio systems with studio-grade precision in Pakistan.",
  openGraph: {
    title: "About Us | Resonance Elite",
    description:
      "Resonance Elite was built to change the standard of car audio in Pakistan. Learn our story, mission, and vision.",
    url: "https://www.resonanceelite.com/about",
    siteName: "Resonance Elite",
    images: [
      {
        url: "/Images/about/hero.webp",
        width: 1200,
        height: 630,
        alt: "About Resonance Elite",
      },
    ],
    type: "website",
  },
};

const sections = [
  {
    id: "who-we-are",
    title: "WHO WE ARE",
    text: "I started this journey when I was 10. Music became a part of my life, and I got into high-end audio as a hobby. Resonance Elite was founded by audiophiles, for audiophiles. Our passion is to reproduce music exactly how it was recorded—combining global technologies with our expertise. We partner with world-leading car audio brands to bring their reference-grade products to Pakistan. Every system we design, fabricate, and tune is crafted with studio-grade precision, acoustic discipline, and uncompromising attention to detail.",
    img: "/Images/about/WHOWEARE.webp",
    reverse: false,
  },
  {
    id: "what-we-do",
    title: "WHAT WE DO",
    text: "We provide authentic, original car audio equipment sourced from leading global brands. We design and deliver high-end car audio systems with precision, intent, and uncompromising standards. From selecting components to tuning, every step is handled with technical expertise and acoustic accuracy. Our goal is true fidelity—preserving the integrity and detail of sound.",
    img: "/Images/about/WHATWEDO.webp",
    reverse: true,
  },
  {
    id: "why-we-exist",
    title: "WHY WE EXIST",
    text: "Car audio in Pakistan was never delivered the way it was meant to be. It became a market driven by sales, not sound. We refused to accept it. Resonance Elite was built to change the standard and engineer systems with precision and acoustics. We brought reference-grade audio to Pakistan and we continue pushing boundaries.",
    img: "/Images/about/WHYWEEXIST.webp",
    reverse: false,
  },
];

export default function About() {
  return (
    <div> 
    <Navbar />
    <main className="w-full bg-white text-zinc-900 overflow-x-hidden antialiased">

      {/* HERO */}
      <section
        className="relative w-full h-[42vh] min-h-[280px] sm:h-[50vh] sm:min-h-[340px] md:h-[58vh] md:min-h-[460px] lg:h-[65vh] lg:min-h-[560px] min-[1920px]:h-[70vh] min-[1920px]:min-h-[760px] min-[2560px]:min-h-[940px] min-[3200px]:min-h-[1180px] overflow-hidden bg-zinc-950"
        aria-label="About us hero"
      >
         <img
            src="/Images/about/hero.webp"
            alt="Resonance Elite contact us"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
          />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 min-[1920px]:px-16 bg-black/20">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl min-[1920px]:text-7xl min-[2560px]:text-8xl min-[3200px]:text-9xl font-semibold tracking-[0.12em] uppercase leading-tight">
            About Us
          </h1>

          <div className="w-12 sm:w-14 md:w-16 min-[1920px]:w-20 min-[2560px]:w-28 h-[1px] bg-white/40 mt-3 md:mt-5 min-[1920px]:mt-8" />
        </div>
      </section>

      {/* NARRATIVE BLOCKS */}
      <div className="max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] min-[3200px]:max-w-[2600px] mx-auto px-4 sm:px-6 md:px-10 min-[1920px]:px-16 min-[2560px]:px-20 py-10 md:py-14 lg:py-20 min-[1920px]:py-28 min-[2560px]:py-36 space-y-14 md:space-y-20 lg:space-y-28 min-[1920px]:space-y-36 min-[2560px]:space-y-48">
        {sections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            aria-label={sec.title}
            className={`w-full flex flex-col ${
              sec.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 min-[1920px]:gap-24 min-[2560px]:gap-32`}
          >
            <div className="w-full lg:w-1/2 bg-zinc-50 border border-zinc-100 rounded-sm shadow-sm lg:shadow-none overflow-hidden">
              <div className="w-full aspect-[4/3]">
                <img
                  src={sec.img}
                  alt={sec.title}
                  loading="lazy"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center text-left px-1 sm:px-2 lg:px-0">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl min-[1920px]:text-4xl min-[2560px]:text-5xl font-medium text-zinc-950 tracking-tight uppercase leading-tight">
                {sec.title}
              </h2>

              <div className="w-8 md:w-10 min-[1920px]:w-14 h-[1px] bg-zinc-300 mt-2 md:mt-3 mb-3 md:mb-5 min-[1920px]:mb-7" />

              <p className="text-zinc-700 leading-relaxed text-xs sm:text-sm md:text-base min-[1920px]:text-lg min-[2560px]:text-2xl font-normal max-w-xl min-[1920px]:max-w-2xl min-[2560px]:max-w-4xl text-left">
                {sec.text}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* MISSION */}
      <section
        className="relative w-full h-[42vh] min-h-[280px] sm:h-[50vh] sm:min-h-[340px] md:h-[58vh] md:min-h-[460px] lg:h-[65vh] lg:min-h-[560px] min-[1920px]:min-h-[760px] min-[2560px]:min-h-[940px] overflow-hidden bg-zinc-950"
        aria-label="Our mission"
      >
        <img
          src="/Images/about/OURMISSION.webp"
          className="w-full h-full object-cover object-center opacity-40"
          alt="Our Mission"
          loading="lazy"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 min-[1920px]:px-16">
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl min-[1920px]:text-6xl min-[2560px]:text-7xl font-semibold mb-3 md:mb-4 min-[1920px]:mb-6 uppercase tracking-tight leading-tight">
            OUR MISSION
          </h2>

          <div className="w-10 md:w-12 min-[1920px]:w-20 h-[1px] bg-white/30 mb-3 md:mb-4 min-[1920px]:mb-6" />

          <p className="text-zinc-200 text-xs sm:text-sm md:text-base lg:text-lg min-[1920px]:text-xl min-[2560px]:text-2xl max-w-2xl min-[1920px]:max-w-4xl min-[2560px]:max-w-5xl font-normal leading-relaxed tracking-wide">
            To engineer and deliver reference-grade car audio systems with
            uncompromising precision, setting a new standard for sound quality
            in Pakistan.
          </p>
        </div>
      </section>

      <div className="w-full h-[2vh] md:h-[4vh] min-[1920px]:h-[5vh] bg-white" />

      {/* VISION */}
      <section
        className="relative w-full h-[42vh] min-h-[280px] sm:h-[50vh] sm:min-h-[340px] md:h-[58vh] md:min-h-[460px] lg:h-[65vh] lg:min-h-[560px] min-[1920px]:min-h-[760px] min-[2560px]:min-h-[940px] overflow-hidden bg-zinc-950"
        aria-label="Our vision"
      >
        <img
          src="/Images/about/OURVISION.webp"
          className="w-full h-full object-cover object-center opacity-40"
          alt="Our Vision"
          loading="lazy"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 min-[1920px]:px-16">
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl min-[1920px]:text-6xl min-[2560px]:text-7xl font-semibold mb-3 md:mb-4 min-[1920px]:mb-6 uppercase tracking-tight leading-tight">
            OUR VISION
          </h2>

          <div className="w-10 md:w-12 min-[1920px]:w-20 h-[1px] bg-white/30 mb-3 md:mb-4 min-[1920px]:mb-6" />

          <p className="text-zinc-200 text-xs sm:text-sm md:text-base lg:text-lg min-[1920px]:text-xl min-[2560px]:text-2xl max-w-2xl min-[1920px]:max-w-4xl min-[2560px]:max-w-5xl font-normal leading-relaxed tracking-wide">
            To redefine car audio culture in Pakistan and establish Resonance
            Elite as the benchmark for world-class sound, competing at an
            international level.
          </p>
        </div>
      </section>

      <div className="w-full h-[2vh] md:h-[4vh] min-[1920px]:h-[5vh] bg-white" />

      {/* BRAND VIDEO */}
      <section
        className="relative w-full bg-zinc-950 overflow-hidden"
        aria-label="Brand video"
      >
        <video
          className="w-full aspect-video h-auto object-cover opacity-90"
          src="https://res.cloudinary.com/ddhxxqkpc/video/upload/v1781940065/video_gb8wap.webm"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Resonance Elite brand showcase video"
        />
      </section>

      <Footer />
    </main>
    </div>
  );
}