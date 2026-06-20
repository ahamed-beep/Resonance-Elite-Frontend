// app/terms-and-conditions/page.jsx

import Footer from "@/Components/Home/Footer";
import Navbar from "@/Components/Home/Navbar";

export const metadata = {
  title: "Terms & Conditions | Resonance Elite Pakistan",
  description:
    "Read Resonance Elite's Terms & Conditions covering payment, orders, delivery, installation, warranty, and liability for car audio products and services in Pakistan.",
  keywords: [
    "Resonance Elite terms and conditions",
    "car audio shop Pakistan terms",
    "audio equipment purchase policy Pakistan",
    "Resonance Elite refund policy",
    "car audio warranty Pakistan",
    "Resonance Elite delivery policy",
  ],
  openGraph: {
    title: "Terms & Conditions | Resonance Elite Pakistan",
    description:
      "Read Resonance Elite's Terms & Conditions covering payment, orders, delivery, installation, warranty, and liability.",
    url: "https://resonanceelite.com/terms-and-conditions",
    siteName: "Resonance Elite",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Resonance Elite Pakistan",
    description:
      "Read Resonance Elite's Terms & Conditions covering payment, orders, delivery, installation, warranty, and liability.",
  },
  alternates: {
    canonical: "https://resonanceelite.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const termsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms & Conditions | Resonance Elite",
  url: "https://resonanceelite.com/terms-and-conditions",
  description:
    "Terms and Conditions for Resonance Elite car audio products and services in Pakistan.",
  publisher: {
    "@type": "Organization",
    name: "Resonance Elite",
    url: "https://resonanceelite.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-3139039",
      email: "resonancelite@gmail.com",
      contactType: "Customer Service",
    },
  },
  inLanguage: "en",
};

const sections = [
  {
    num: "01",
    title: "Business Information",
    content: (
      <>
        <p className="leading-relaxed text-zinc-500 text-xs sm:text-sm md:text-base font-light">
          Resonance Elite ("Company", "we", "us") provides audio/visual
          electronics, custom fabrication, installation, and related services.
        </p>
        <div className="mt-4 space-y-1.5 text-xs sm:text-sm text-zinc-600 font-light bg-zinc-50 p-4 rounded-sm border border-zinc-100 max-w-sm">
          <p className="flex justify-between sm:justify-start sm:gap-4">
            <span className="font-normal text-zinc-400 w-16">Phone:</span>
            <span className="text-zinc-800">+92-3139039</span>
          </p>
          <p className="flex justify-between sm:justify-start sm:gap-4">
            <span className="font-normal text-zinc-400 w-16">Email:</span>
            <span className="text-zinc-800 break-all">resonancelite@gmail.com</span>
          </p>
        </div>
      </>
    ),
  },
  {
    num: "02",
    title: "Acceptance of Terms",
    content: (
      <div className="space-y-3 text-xs sm:text-sm md:text-base text-zinc-500 font-light leading-relaxed">
        <p>
          By accessing our website, placing an order, or making a payment, the
          customer ("Client") confirms that they have read, understood, and
          agreed to these Terms & Conditions.
        </p>
        <p>
          Orders confirmed via website, invoice, or electronic communication
          (including WhatsApp) shall be considered legally binding agreements.
        </p>
      </div>
    ),
  },
  {
    num: "03",
    title: "Services Offered",
    content: (
      <>
        <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm md:text-base font-light">
          {[
            "Audio/visual product sales",
            "Custom fabrication (amp racks, enclosures, A-pillars)",
            "Installation and tuning services",
            "System design and consultation",
          ].map((item) => (
            <li key={item} className="flex gap-2.5 items-start">
              <span className="text-zinc-400 select-none" aria-hidden="true">•</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-zinc-400 italic text-[11px] sm:text-xs">
          * All services are delivered based on Client approval and technical feasibility.
        </p>
      </>
    ),
  },
  {
    num: "04",
    title: "Payment Terms",
    content: (
      <ul className="list-none pl-0 text-zinc-500 space-y-2.5 text-xs sm:text-sm md:text-base font-light">
        {[
          <><strong className="text-zinc-900 font-normal">100% advance payment</strong> is required for all orders and services.</>,
          "No work, sourcing, or booking will begin without full payment.",
          "Payment constitutes confirmation and approval of product/service details.",
        ].map((item, i) => (
          <li key={i} className="flex gap-2.5 items-start">
            <span className="text-zinc-900 font-medium select-none text-xs mt-0.5" aria-hidden="true">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "05",
    title: "Orders, Custom Work & Cancellations",
    content: (
      <ul className="list-none pl-0 text-zinc-500 space-y-2.5 text-xs sm:text-sm md:text-base font-light">
        <li className="flex gap-2.5 items-start">
          <span className="text-red-500 select-none text-xs mt-0.5" aria-hidden="true">✕</span>
          <span>
            All custom-built, fabricated, or specially sourced/imported items are{" "}
            <strong className="text-zinc-900 font-normal">non-cancellable and non-refundable</strong>{" "}
            once processing begins.
          </span>
        </li>
        <li className="flex gap-2.5 items-start">
          <span className="text-zinc-400 select-none text-xs mt-0.5" aria-hidden="true">•</span>
          <span>Standard items may only be cancelled prior to dispatch, subject to approval.</span>
        </li>
      </ul>
    ),
  },
  {
    num: "06",
    title: "Delivery & Shipping",
    content: (
      <div className="space-y-5">
        <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm md:text-base font-light">
          {[
            "Delivery timelines are estimates only and not guaranteed.",
            "Delays may occur due to logistics, suppliers, customs, or events beyond our control.",
          ].map((item) => (
            <li key={item} className="flex gap-2.5 items-start">
              <span className="text-zinc-400 select-none" aria-hidden="true">•</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="bg-zinc-50 p-4 rounded-sm border border-zinc-100">
          <h3 className="text-sm font-medium text-zinc-900 mb-2">Risk Transfer</h3>
          <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm font-light">
            {[
              "All orders are shipped via third-party courier services.",
              "Responsibility transfers to the Client once the shipment is handed over to the courier.",
            ].map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <span className="text-zinc-400 select-none" aria-hidden="true">-</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-zinc-50 p-4 rounded-sm border border-zinc-100">
          <h3 className="text-sm font-medium text-zinc-900 mb-2">Shipping Damage</h3>
          <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm font-light">
            {[
              "The Company is not responsible for loss, damage, or theft during transit.",
              "Clients may request shipping insurance at their own cost prior to dispatch.",
            ].map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <span className="text-zinc-400 select-none" aria-hidden="true">-</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    num: "07",
    title: "Installation & Modification Consent",
    content: (
      <>
        <p className="text-zinc-500 mb-3 text-xs sm:text-sm md:text-base font-light">
          By approving installation or custom work, the Client acknowledges:
        </p>
        <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm md:text-base font-light">
          {[
            "They have reviewed and approved the design, components, and plan.",
            "Modifications may affect manufacturer warranty, resale value, or factory systems.",
          ].map((item) => (
            <li key={item} className="flex gap-2.5 items-start">
              <span className="text-zinc-400 select-none" aria-hidden="true">•</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "08",
    title: "Limitation of Liability",
    content: (
      <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm md:text-base font-light">
        {[
          "The Company shall not be liable for indirect or consequential damages.",
          "Total liability shall be limited to the amount paid for the specific product or service.",
        ].map((item) => (
          <li key={item} className="flex gap-2.5 items-start">
            <span className="text-zinc-400 select-none" aria-hidden="true">•</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "09",
    title: "Post-Installation Responsibility",
    content: (
      <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm md:text-base font-light">
        {[
          "The Client assumes full responsibility after installation or delivery.",
          "The Company is not responsible for accidents, manufacturer warranty issues, or resale concerns.",
        ].map((item) => (
          <li key={item} className="flex gap-2.5 items-start">
            <span className="text-zinc-400 select-none" aria-hidden="true">•</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "10",
    title: "Third-Party Interference",
    content: (
      <p className="text-zinc-500 leading-relaxed text-xs sm:text-sm md:text-base font-light">
        Any modification, repair, or tampering by third parties voids all
        service-related assurances, and the Company shall not be responsible
        for resulting issues.
      </p>
    ),
  },
  {
    num: "11",
    title: "Product Warranty",
    content: (
      <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm md:text-base font-light">
        {[
          "Products are subject to manufacturer warranties only.",
          "No additional warranties are provided unless stated in writing.",
        ].map((item) => (
          <li key={item} className="flex gap-2.5 items-start">
            <span className="text-zinc-400 select-none" aria-hidden="true">•</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "12",
    title: "Customer Responsibility",
    content: (
      <ul className="list-none pl-0 text-zinc-500 space-y-2.5 text-xs sm:text-sm md:text-base font-light">
        {[
          { icon: "•", iconClass: "text-zinc-400", text: "Provide accurate and complete information." },
          { icon: "•", iconClass: "text-zinc-400", text: "Use products responsibly and in compliance with applicable laws." },
          { icon: "✓", iconClass: "text-zinc-900 font-medium", text: <><strong className="text-zinc-900 font-normal">Record a complete unboxing video</strong> for any claims.</> },
        ].map((item, i) => (
          <li key={i} className="flex gap-2.5 items-start">
            <span className={`${item.iconClass} select-none text-xs mt-0.5`} aria-hidden="true">{item.icon}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "13",
    title: "Force Majeure",
    content: (
      <p className="text-zinc-500 leading-relaxed text-xs sm:text-sm md:text-base font-light">
        The Company shall not be liable for delays or failure caused by events
        beyond reasonable control including natural disasters, government
        actions, or supply chain disruptions.
      </p>
    ),
  },
  {
    num: "14",
    title: "Governing Law",
    content: (
      <p className="text-zinc-500 leading-relaxed text-xs sm:text-sm md:text-base font-light">
        These Terms shall be governed by the laws of Pakistan. Any disputes
        shall fall under the jurisdiction of courts in{" "}
        <strong className="text-zinc-900 font-normal">Arifwala, Pakistan</strong>.
      </p>
    ),
  },
  {
    num: "15",
    title: "Changes to Terms",
    content: (
      <p className="text-zinc-500 leading-relaxed text-xs sm:text-sm md:text-base font-light">
        We reserve the right to update or modify these Terms at any time.
        Updated versions will be posted on our website.
      </p>
    ),
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }}
      />
<Navbar/>
      <div className="bg-white min-h-screen text-zinc-800 antialiased overflow-x-hidden">

        {/* Hero */}
        <div className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-wider text-zinc-100">
            TERMS & CONDITIONS
          </h1>
          <div className="w-10 h-[1px] bg-zinc-700 mx-auto mt-4 mb-4" aria-hidden="true" />
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            Please read these Terms & Conditions carefully before placing an
            order or using Resonance Elite services.
          </p>
        </div>

        {/* Sections */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20 space-y-10 md:space-y-14">
          {sections.map((section) => (
            <section
              key={section.num}
              aria-labelledby={`section-${section.num}`}
              className="border-b border-zinc-100 pb-6 md:pb-8"
            >
              <h2
                id={`section-${section.num}`}
                className="text-lg md:text-xl font-medium text-zinc-900 mb-3 flex items-baseline gap-2"
              >
                <span className="text-zinc-400 text-sm font-mono" aria-hidden="true">
                  {section.num}.
                </span>
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}

          {/* Section 16 — Agreement Confirmation */}
          <section
            aria-labelledby="section-16"
            className="bg-zinc-900 text-zinc-100 p-6 md:p-8 rounded-sm"
          >
            <h2
              id="section-16"
              className="text-lg md:text-xl font-light tracking-wide text-white mb-4 flex items-baseline gap-2"
            >
              <span className="text-zinc-500 text-sm font-mono" aria-hidden="true">16.</span>
              Agreement Confirmation
            </h2>
            <ul className="list-none pl-0 text-zinc-400 space-y-2.5 text-xs sm:text-sm md:text-base font-light">
              {[
                "Full understanding and acceptance of these Terms.",
                "Acknowledgment of all risks, responsibilities, and limitations stated above.",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <span className="text-white text-xs mt-0.5" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
}