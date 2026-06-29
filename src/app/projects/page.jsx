import Footer from "@/Components/Home/Footer";
import Navbar from "@/Components/Home/Navbar";
import ProjectsClient from "@/Components/projects/ProjectsClient";

export const metadata = {
  title: "Our Projects | Resonance Elite",
  description:
    "Explore Resonance Elite's SQ, SQL, and SPL car audio projects — from audiophile-grade sound quality builds to extreme sound pressure level installations.",
  keywords: [
    "car audio projects",
    "SQ car audio",
    "SQL car audio",
    "SPL car audio",
    "sound quality builds",
    "car audio installations",
    "Resonance Elite projects",
  ],
  openGraph: {
    title: "Our Projects | Resonance Elite",
    description:
      "Discover our SQ, SQL, and SPL car audio builds — engineered for precision, power, and performance.",
    url: "https://resonanceelite.com/projects",
    siteName: "Resonance Elite",
    images: [
      {
        url: "https://resonanceelite.com/services.webp",
        width: 1200,
        height: 630,
        alt: "Resonance Elite Projects Showcase",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Resonance Elite",
    description:
      "Discover our SQ, SQL, and SPL car audio builds — engineered for precision, power, and performance.",
    images: ["https://resonanceelite.com/services.webp"],
  },
  alternates: {
    canonical: "https://resonanceelite.com/projects",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Projects | Resonance Elite",
  description:
    "Portfolio of Resonance Elite car audio projects across SQ, SQL, and SPL categories.",
  url: "https://resonanceelite.com/projects",
  publisher: {
    "@type": "Organization",
    name: "Resonance Elite",
    url: "https://resonanceelite.com",
  },
  hasPart: [
    {
      "@type": "CreativeWork",
      name: "SQ Projects",
      description:
        "Sound Quality builds focused on accurate sound reproduction using premium components.",
    },
    {
      "@type": "CreativeWork",
      name: "SQL Projects",
      description:
        "Sound Quality Loud builds bridging audiophile precision with high-volume output.",
    },
    {
      "@type": "CreativeWork",
      name: "SPL Projects",
      description:
        "Sound Pressure Level builds engineered for maximum acoustic pressure and raw power.",
    },
  ],
};

export default function ProjectsPage({ searchParams }) {
  const category = searchParams?.category || "";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsJsonLd),
        }}
      />

      <Navbar />

      <main className="w-full bg-white text-zinc-900 overflow-x-hidden selection:bg-zinc-950 selection:text-white antialiased">
        {/* HERO SECTION */}
        <section
          aria-label="Projects showcase hero"
          className="relative w-full h-[38vh] min-h-[260px] sm:h-[45vh] sm:min-h-[320px] md:h-[55vh] md:min-h-[420px] lg:h-[62vh] lg:min-h-[520px] min-[1920px]:h-[68vh] min-[1920px]:min-h-[720px] min-[2560px]:min-h-[900px] min-[3200px]:min-h-[1150px] overflow-hidden bg-zinc-950"
        >
          <img
            src="/Images/about/hero.webp"
            alt="Resonance Elite Projects"
            className="w-full h-full object-cover object-center opacity-60"
            loading="eager"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-zinc-950/10 to-transparent"
            aria-hidden="true"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 min-[1920px]:px-16">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-[1920px]:text-7xl min-[2560px]:text-8xl min-[3200px]:text-9xl font-light tracking-[0.18em] uppercase leading-tight">
              Our Projects
            </h1>

            <div
              className="w-8 sm:w-10 md:w-12 min-[1920px]:w-20 min-[2560px]:w-28 h-[1px] bg-white/30 mt-4 md:mt-5 min-[1920px]:mt-8"
              aria-hidden="true"
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-12 min-[1920px]:px-16 min-[2560px]:px-24 min-[3200px]:px-32 py-10 md:py-14 lg:py-16 min-[1920px]:py-24 min-[2560px]:py-32">
          <div className="mx-auto w-full max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] min-[3200px]:max-w-[2600px]">
            <ProjectsClient initialCategory={category} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}