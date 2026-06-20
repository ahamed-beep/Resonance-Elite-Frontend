import Footer from "@/Components/Home/Footer";
import Navbar from "@/Components/Home/Navbar";
import ProjectsClient from "@/Components/projects/ProjectsClient";
import Image from "next/image";

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
        url: "/services.webp",
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
    images: ["/services.webp"],
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

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
<Navbar/>
      <main className="w-full bg-white text-zinc-900 overflow-x-hidden selection:bg-zinc-950 selection:text-white antialiased">

        {/* HERO SECTION */}
        <section
          aria-label="Projects showcase hero"
          className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] overflow-hidden bg-zinc-950"
        >
            <img
          src="/Images/about/hero.webp"
          alt="Resonance Elite about us"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-widest uppercase">
              Our Projects
            </h1>
            <div className="w-8 h-[1px] bg-white/30 mt-4 md:mt-5" aria-hidden="true"></div>
          </div>
        </section>

        {/* PROJECTS — Client Component handles interactivity */}
        <ProjectsClient />

      </main>
      <Footer/>
    </>
  );
}