export const metadata = {
  title: "Contact Us | Resonance Elite",
  description:
    "Get in touch with Resonance Elite. Our expert team is ready to help you choose the perfect car audio products tailored to your needs.",
  keywords: [
    "contact Resonance Elite",
    "car audio consultation",
    "car audio support",
    "Resonance Elite contact form",
  ],
  openGraph: {
    title: "Contact Us | Resonance Elite",
    description:
      "Reach out to Resonance Elite for personalized car audio advice and support. We're here to ensure total satisfaction at every step.",
    url: "https://resonanceelite.com/contact",
    siteName: "Resonance Elite",
    images: [
      {
        url: "/image5.webp",
        width: 1200,
        height: 630,
        alt: "Resonance Elite Contact Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Resonance Elite",
    description:
      "Reach out to Resonance Elite for personalized car audio advice and support.",
    images: ["/image5.webp"],
  },
  alternates: {
    canonical: "https://resonanceelite.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us | Resonance Elite",
  description:
    "Contact Resonance Elite for expert car audio product guidance and personalized assistance.",
  url: "https://resonanceelite.com/contact",
  publisher: {
    "@type": "Organization",
    name: "Resonance Elite",
    url: "https://resonanceelite.com",
  },
};

import Footer from "@/Components/Home/Footer";
import Navbar from "@/Components/Home/Navbar";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
<Navbar/>
      <main className="w-full bg-white text-zinc-900 overflow-x-hidden">
        

        {/* HERO SECTION */}
        <section
          aria-label="Contact page hero"
          className="relative w-full h-[450px] sm:h-[50vh] md:h-[60vh] overflow-hidden bg-zinc-950"
        >    <img
          src="/Images/about/hero.webp"
          alt="Resonance Elite about us"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-black/10">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight uppercase">
              Contact Us
            </h1>
            <div className="w-12 h-[1px] bg-white/40 mt-3 mb-4 md:mt-4 md:mb-5" aria-hidden="true"></div>
            <p className="text-zinc-200 max-w-2xl text-[11px] sm:text-xs md:text-sm font-normal leading-relaxed tracking-wide px-1 sm:px-2">
              At Resonance Elite, we take pride in helping our customers choose the right products for their specific needs. Our dedicated team is there to provide personalized advice and attentive assistance, to ensure total satisfaction at every stage of their experience with us.
            </p>
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section
          aria-label="Contact form"
          className="bg-white py-12 md:py-16 px-4 sm:px-6 md:px-10"
        >
          <div className="max-w-4xl mx-auto bg-white py-2 md:py-4">
            <h2 className="text-lg md:text-2xl font-medium text-zinc-950 tracking-tight text-center uppercase mb-2">
              Send Us a Message
            </h2>
            <div className="w-8 h-[1px] bg-zinc-300 mx-auto mb-8 md:mb-12" aria-hidden="true"></div>

          <form
      className="space-y-5 md:space-y-6"
      noValidate
      aria-label="Contact form"
    >
      {/* Row 1 — Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <input
          type="text"
          name="firstName"
          placeholder="First Name *"
          required
          autoComplete="given-name"
          aria-label="First Name"
          className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 font-normal focus:outline-none focus:border-zinc-950 transition-colors"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name *"
          required
          autoComplete="family-name"
          aria-label="Last Name"
          className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 font-normal focus:outline-none focus:border-zinc-950 transition-colors"
        />
      </div>

      {/* Row 2 — Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          autoComplete="email"
          aria-label="Email Address"
          className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 font-normal focus:outline-none focus:border-zinc-950 transition-colors"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          autoComplete="tel"
          aria-label="Phone Number"
          className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 font-normal focus:outline-none focus:border-zinc-950 transition-colors"
        />
      </div>

      {/* Message */}
      <textarea
        rows="5"
        name="message"
        placeholder="Message *"
        required
        aria-label="Your Message"
        className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 font-normal focus:outline-none focus:border-zinc-950 transition-colors resize-none"
      ></textarea>

      {/* Opt-in Checkbox */}
      <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600 font-normal">
        <input
          type="checkbox"
          id="updates-optin"
          name="updatesOptin"
          className="mt-1 h-3.5 w-3.5 accent-zinc-950 cursor-pointer shrink-0"
        />
        <label
          htmlFor="updates-optin"
          className="cursor-pointer leading-relaxed select-none text-zinc-600"
        >
          I would like Resonance to send me offers and updates via e-mail. You can unsubscribe at any time.
        </label>
      </div>

      {/* Legal Text */}
      <p className="text-[11px] sm:text-xs md:text-sm text-zinc-500 font-normal leading-relaxed">
        By clicking SUBMIT, I agree to the{" "}
        <a
          href="/privacy"
          className="text-zinc-900 font-medium underline hover:text-zinc-600 transition-colors"
        >
          Privacy Policy
        </a>
        {" "}and{" "}
        <a
          href="/terms"
          className="text-zinc-900 font-medium underline hover:text-zinc-600 transition-colors"
        >
          Terms of Use
        </a>
        .
      </p>

      {/* Submit Button */}
      <div className="text-left md:text-center pt-2 md:pt-4">
        <button
          type="submit"
          className="w-full sm:w-fit bg-zinc-950 text-white text-xs tracking-widest uppercase font-semibold px-10 py-3.5 border border-zinc-950 hover:bg-white hover:text-zinc-950 transition-all duration-300 cursor-pointer"
        >
          Submit Message
        </button>
      </div>
    </form>
          </div>
        </section>

      </main>
      <Footer/>
    </>
  );
};

export default Contact;