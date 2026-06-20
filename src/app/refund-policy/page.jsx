// app/refund-policy/page.jsx

import Footer from "@/Components/Home/Footer";
import Navbar from "@/Components/Home/Navbar";

export const metadata = {
  title: "Refund & Cancellation Policy | Resonance Elite Pakistan",
  description:
    "Read Resonance Elite's Refund & Cancellation Policy covering custom orders, standard products, shipping risk, refund eligibility, and payment disputes for car audio products in Pakistan.",
  keywords: [
    "Resonance Elite refund policy",
    "car audio refund Pakistan",
    "Resonance Elite cancellation policy",
    "audio equipment return policy Pakistan",
    "Resonance Elite order policy",
    "car audio shop refund Pakistan",
  ],
  openGraph: {
    title: "Refund & Cancellation Policy | Resonance Elite Pakistan",
    description:
      "Understand Resonance Elite's refund and cancellation terms for car audio products and custom services.",
    url: "https://resonanceelite.com/refund-policy",
    siteName: "Resonance Elite",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Refund & Cancellation Policy | Resonance Elite Pakistan",
    description:
      "Understand Resonance Elite's refund and cancellation terms for car audio products and custom services.",
  },
  alternates: {
    canonical: "https://resonanceelite.com/refund-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const refundJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Refund & Cancellation Policy | Resonance Elite",
  url: "https://resonanceelite.com/refund-policy",
  description:
    "Refund and Cancellation Policy for Resonance Elite car audio products and services in Pakistan.",
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
    num: "01",
    title: "General Policy",
    content: (
      <div className="space-y-3 text-xs sm:text-sm md:text-base text-zinc-500 font-light leading-relaxed">
        <p>
          All orders are processed on a 100% advance payment basis and are
          subject to Client confirmation and approval.
        </p>
        <p>
          By placing an order, the Client agrees to this Refund & Cancellation Policy.
        </p>
      </div>
    ),
  },
  {
    num: "02",
    title: "Non-Refundable & Non-Cancellable Items",
    content: (
      <>
        <p className="text-zinc-500 mb-3 text-xs sm:text-sm md:text-base font-light">
          The following are strictly non-refundable and non-cancellable once
          order confirmation/payment is made:
        </p>
        <ul className="list-none pl-0 text-zinc-500 space-y-2.5 text-xs sm:text-sm md:text-base font-light">
          {[
            "Custom fabrication (amp racks, enclosures, panels)",
            "Imported or special-order products",
            "Installation, tuning, or consultation services once scheduled or started",
            "Any order that has entered processing, sourcing, or production",
          ].map((item) => (
            <li key={item} className="flex gap-2.5 items-start">
              <span className="text-red-500 select-none text-xs mt-0.5" aria-hidden="true">✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "03",
    title: "Standard (Non-Custom) Products",
    content: (
      <ul className="list-none pl-0 text-zinc-500 space-y-2.5 text-xs sm:text-sm md:text-base font-light">
        <li className="flex gap-2.5 items-start">
          <span className="text-zinc-400 select-none text-xs mt-0.5" aria-hidden="true">•</span>
          <span>Cancellation requests may be considered only before dispatch, subject to approval.</span>
        </li>
        <li className="flex gap-2.5 items-start">
          <span className="text-zinc-900 font-medium select-none text-xs mt-0.5" aria-hidden="true">✓</span>
          <span>Once the order has been dispatched, no cancellation or refund will be applicable.</span>
        </li>
      </ul>
    ),
  },
  {
    num: "04",
    title: "Delivery Timelines & Delays",
    content: (
      <div className="space-y-4">
        <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm md:text-base font-light">
          {[
            "All delivery timelines are estimates only and not guaranteed.",
            "Delays may occur due to logistics, suppliers, customs, or other external factors.",
          ].map((item) => (
            <li key={item} className="flex gap-2.5 items-start">
              <span className="text-zinc-400 select-none" aria-hidden="true">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="p-4 border border-zinc-900 rounded-sm bg-zinc-50">
          <p className="text-zinc-900 text-xs sm:text-sm font-medium flex gap-2 items-center">
            <span aria-hidden="true">👉</span>
            <span>No refunds, cancellations, or compensation will be provided for such delays.</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "05",
    title: "Shipping Risk & Responsibility",
    content: (
      <div className="space-y-5">
        <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm md:text-base font-light">
          {[
            "All orders are shipped via third-party courier services.",
            "Risk transfers to the Client once the shipment is handed over to the courier.",
          ].map((item) => (
            <li key={item} className="flex gap-2.5 items-start">
              <span className="text-zinc-400 select-none" aria-hidden="true">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="bg-zinc-50 p-4 rounded-sm border border-zinc-100">
          <h3 className="text-sm font-medium text-zinc-900 mb-2">
            The Company is not responsible for:
          </h3>
          <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm font-light">
            {["Damage during transit", "Loss or theft", "Courier handling issues"].map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <span className="text-red-500 text-xs mt-0.5" aria-hidden="true">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-zinc-50 p-4 rounded-sm border border-zinc-100">
          <h3 className="text-sm font-medium text-zinc-900 mb-2">Shipping Insurance</h3>
          <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm font-light">
            {[
              "Optional insurance may be requested at the Client's cost before dispatch.",
              "If declined, the Client accepts full responsibility for transit risks.",
            ].map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <span className="text-zinc-400 select-none" aria-hidden="true">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    num: "06",
    title: "Limited Refund Eligibility",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-zinc-500 mb-3 text-xs sm:text-sm md:text-base font-light">
            Refunds may only be considered in the following cases:
          </p>
          <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm md:text-base font-light">
            {[
              "The Company fails to deliver the product entirely.",
              "The Client receives an incorrect product due to Company error.",
            ].map((item) => (
              <li key={item} className="flex gap-2.5 items-start">
                <span className="text-zinc-900 font-medium text-xs mt-0.5" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-zinc-50 p-4 rounded-sm border border-zinc-100">
          <h3 className="text-sm font-medium text-zinc-900 mb-2">Conditions:</h3>
          <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm font-light">
            {[
              "Claims must be reported within 48 hours of delivery.",
              "A complete unboxing video and supporting proof is required.",
            ].map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <span className="text-zinc-400 select-none" aria-hidden="true">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    num: "07",
    title: "Refund Processing",
    content: (
      <ul className="list-none pl-0 text-zinc-500 space-y-2.5 text-xs sm:text-sm md:text-base font-light">
        {[
          "Approved refunds will be processed within 7–14 working days.",
          "Refunds will be issued via the original payment method where possible.",
          "Any applicable transaction fees, bank charges, or administrative costs may be deducted.",
        ].map((item) => (
          <li key={item} className="flex gap-2.5 items-start">
            <span className="text-zinc-400 select-none" aria-hidden="true">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "08",
    title: "Chargebacks & Payment Disputes",
    content: (
      <div className="space-y-4">
        <p className="text-zinc-500 leading-relaxed text-xs sm:text-sm md:text-base font-light">
          By making payment, the Client confirms acceptance of this policy.
          The Client agrees not to initiate unjustified chargebacks or disputes.
        </p>
        <div className="bg-zinc-50 p-4 rounded-sm border border-zinc-100">
          <h3 className="text-xs sm:text-sm font-medium text-zinc-900 mb-2.5">
            In case of a dispute, Resonance Elite reserves the right to:
          </h3>
          <ul className="list-none pl-0 text-zinc-500 space-y-2 text-xs sm:text-sm font-light">
            {[
              "Provide proof of order confirmation, communication, and delivery.",
              "Contest the dispute with financial institutions.",
              "Recover any losses arising from fraudulent or unjustified claims.",
            ].map((item) => (
              <li key={item} className="flex gap-2 items-start">
                <span className="text-zinc-400 select-none" aria-hidden="true">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
];

export default function RefundPolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(refundJsonLd) }}
      />
<Navbar/>
      <div className="bg-white min-h-screen text-zinc-800 antialiased overflow-x-hidden">

        {/* Hero */}
        <div className="bg-black text-white py-16 md:py-24 px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-wider text-zinc-100">
            REFUND & CANCELLATION POLICY
          </h1>
          <div className="w-10 h-[1px] bg-zinc-700 mx-auto mt-4 mb-4" aria-hidden="true" />
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            Please review our refund and cancellation policy carefully before
            placing any order with Resonance Elite.
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

          {/* Section 09 — Policy Acceptance (dark bg, no border-b) */}
          <section
            aria-labelledby="section-09"
            className="bg-zinc-900 text-zinc-100 p-6 md:p-8 rounded-sm"
          >
            <h2
              id="section-09"
              className="text-lg md:text-xl font-light tracking-wide text-white mb-4 flex items-baseline gap-2"
            >
              <span className="text-zinc-500 text-sm font-mono" aria-hidden="true">09.</span>
              Policy Acceptance
            </h2>
            <p className="text-zinc-400 mb-3 text-xs sm:text-sm font-light">
              By placing an order or making payment, the Client confirms:
            </p>
            <ul className="list-none pl-0 text-zinc-400 space-y-2.5 text-xs sm:text-sm md:text-base font-light">
              {[
                "They have read and understood this policy.",
                "They agree to all terms and conditions stated above.",
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