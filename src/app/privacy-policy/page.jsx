// app/privacy-policy/page.jsx

import Footer from "@/Components/Home/Footer";
import Navbar from "@/Components/Home/Navbar";

export const metadata = {
  title: "Privacy Policy | Resonance Elite Pakistan",
  description:
    "Read Resonance Elite's Privacy Policy to understand how we collect, use, and protect your personal information when you purchase car audio products or use our services in Pakistan.",
  keywords: [
    "Resonance Elite privacy policy",
    "car audio shop privacy Pakistan",
    "Resonance Elite data protection",
    "customer data policy Pakistan",
    "audio equipment shop privacy",
    "Resonance Elite personal information",
  ],
  openGraph: {
    title: "Privacy Policy | Resonance Elite Pakistan",
    description:
      "Understand how Resonance Elite collects, uses, and protects your personal information.",
    url: "https://resonanceelite.com/privacy-policy",
    siteName: "Resonance Elite",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Resonance Elite Pakistan",
    description:
      "Understand how Resonance Elite collects, uses, and protects your personal information.",
  },
  alternates: {
    canonical: "https://resonanceelite.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const privacyJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy | Resonance Elite",
  url: "https://resonanceelite.com/privacy-policy",
  description:
    "Privacy Policy for Resonance Elite car audio products and services in Pakistan.",
  publisher: {
    "@type": "Organization",
    name: "Resonance Elite",
    url: "https://resonanceelite.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-3003139039",
      email: "resonancelite@gmail.com",
      contactType: "Customer Service",
    },
  },
  inLanguage: "en",
};

const sections = [
  {
    num: "1",
    title: "Information We Collect",
    content: (
      <>
        <p className="text-zinc-600 text-sm md:text-base mb-3 font-light">
          We may collect the following personal information:
        </p>
        <ul className="list-disc pl-5 text-zinc-600 text-sm md:text-base space-y-2 font-light">
          {[
            "Name, phone number, and email address",
            "Shipping/billing address (for order delivery)",
            "Vehicle details (for installation or custom services)",
            "Order and transaction details",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "2",
    title: "How We Use Your Information",
    content: (
      <>
        <p className="text-zinc-600 text-sm md:text-base mb-3 font-light">
          Your information is used for:
        </p>
        <ul className="list-disc pl-5 text-zinc-600 text-sm md:text-base space-y-2 font-light">
          {[
            "Processing and delivering orders",
            "Providing installation and related services",
            "Customer communication and support",
            "Improving our services and operations",
            "Marketing communications (only where consent is provided)",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "3",
    title: "Data Sharing",
    content: (
      <>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-light">
          We do not sell or rent your personal information.
        </p>
        <p className="text-zinc-600 text-sm md:text-base mt-4 mb-3 font-light">
          Your information may be shared with:
        </p>
        <ul className="list-disc pl-5 text-zinc-600 text-sm md:text-base space-y-2 font-light">
          {[
            "Courier and logistics providers (for delivery purposes)",
            "Payment processors and financial service providers",
            "Legal or regulatory authorities where required by law",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "4",
    title: "Data Security",
    content: (
      <>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-light">
          We take reasonable measures to protect your personal information from
          unauthorized access, misuse, or disclosure.
        </p>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed mt-3 font-light">
          However, no method of transmission or storage is completely secure,
          and we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    num: "5",
    title: "Payment Information",
    content: (
      <ul className="list-disc pl-5 text-zinc-600 text-sm md:text-base space-y-2 font-light">
        {[
          "Payments are processed through secure third-party payment gateways",
          "We do not store full card or banking details",
        ].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ),
  },
  {
    num: "6",
    title: "Cookies & Tracking",
    content: (
      <>
        <p className="text-zinc-600 text-sm md:text-base mb-3 font-light">
          Our website may use cookies and analytics tools to:
        </p>
        <ul className="list-disc pl-5 text-zinc-600 text-sm md:text-base space-y-2 font-light">
          {[
            "Improve website performance",
            "Understand user behavior",
            "Enhance user experience",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "7",
    title: "User Rights",
    content: (
      <>
        <p className="text-zinc-600 text-sm md:text-base mb-3 font-light">
          You may request:
        </p>
        <ul className="list-disc pl-5 text-zinc-600 text-sm md:text-base space-y-2 font-light">
          {[
            "Access to your personal data",
            "Correction of inaccurate information",
            "Deletion of your data (where applicable)",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-zinc-600 text-sm md:text-base mt-4 font-light">
          Requests can be made using the contact details below.
        </p>
      </>
    ),
  },
  {
    num: "8",
    title: "Data Retention",
    content: (
      <>
        <p className="text-zinc-600 text-sm md:text-base mb-3 font-light">
          We retain personal information only as long as necessary for:
        </p>
        <ul className="list-disc pl-5 text-zinc-600 text-sm md:text-base space-y-2 font-light">
          {[
            "Order processing",
            "Legal, accounting, and operational requirements",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "9",
    title: "Third-Party Links",
    content: (
      <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-light">
        Our website may contain links to third-party websites. We are not
        responsible for their privacy practices or content.
      </p>
    ),
  },
  {
    num: "10",
    title: "Policy Updates",
    content: (
      <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-light">
        We may update this Privacy Policy at any time. The latest version will
        always be available on our website.
      </p>
    ),
  },
  {
    num: "11",
    title: "Contact Information",
    content: (
      <>
        <p className="text-zinc-600 text-sm md:text-base mb-4 font-light">
          For any privacy-related inquiries:
        </p>
        <div className="space-y-2.5 text-zinc-900 text-sm md:text-base font-light">
          <p>
            <span className="font-semibold text-zinc-950">Phone:</span>{" "}
            <a
              href="tel:+923003139039"
              className="hover:underline text-zinc-700"
              aria-label="Call Resonance Elite"
            >
              0300-3139039
            </a>
          </p>
          <p>
            <span className="font-semibold text-zinc-950">Email:</span>{" "}
            <a
              href="mailto:resonancelite@gmail.com"
              className="hover:underline text-blue-600 font-normal"
              aria-label="Email Resonance Elite"
            >
              resonancelite@gmail.com
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
      />
      <Navbar/>

      <div className="bg-white min-h-screen text-zinc-800 selection:bg-zinc-100 overflow-x-hidden">

        {/* Hero */}
        <div className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wider text-white">
            PRIVACY POLICY
          </h1>
          <p className="mt-4 text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light px-2">
            Your privacy is important to us. Please read this Privacy Policy
            carefully to understand how Resonance Elite collects, uses, and
            protects your information.
          </p>
        </div>

        {/* Sections */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 py-12 md:py-20 space-y-10 md:space-y-14">
          {sections.map((section) => (
            <section
              key={section.num}
              aria-labelledby={`section-${section.num}`}
              className="scroll-mt-20"
            >
              <h2
                id={`section-${section.num}`}
                className="text-xl md:text-2xl font-bold text-zinc-950 mb-3.5 tracking-tight"
              >
                {section.num}. {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}