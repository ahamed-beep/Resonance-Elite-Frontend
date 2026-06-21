"use client";

import { useState } from "react";
import api from "@/lib/axios";
import Footer from "@/Components/Home/Footer";
import Navbar from "@/Components/Home/Navbar";

export default function ContactPage() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    updates_optin: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.first_name || !form.last_name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await api.post("/contact", form);
      setSuccess(true);
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
        updates_optin: false,
      });
    } catch (err) {
      const errors = err.response?.data?.errors;
      if (errors) {
        setError(Object.values(errors).flat().join(", "));
      } else {
        setError(err.response?.data?.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="w-full bg-white text-zinc-900 overflow-x-hidden">
        {/* HERO */}
        <section
          aria-label="Contact page hero"
          className="relative w-full h-[450px] sm:h-[50vh] md:h-[60vh] overflow-hidden bg-zinc-950"
        >
          <img
            src="/Images/about/hero.webp"
            alt="Resonance Elite contact us"
            className="w-full h-full object-cover opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-black/10">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight uppercase">
              Contact Us
            </h1>
            <div className="w-12 h-[1px] bg-white/40 mt-3 mb-4 md:mt-4 md:mb-5" />
            <p className="text-zinc-200 max-w-2xl text-[11px] sm:text-xs md:text-sm font-normal leading-relaxed tracking-wide px-1 sm:px-2">
              At Resonance Elite, we take pride in helping our customers choose
              the right products for their specific needs. Our dedicated team is
              there to provide personalized advice and attentive assistance, to
              ensure total satisfaction at every stage of their experience with
              us.
            </p>
          </div>
        </section>

        {/* FORM */}
        <section
          aria-label="Contact form"
          className="bg-white py-12 md:py-16 px-4 sm:px-6 md:px-10"
        >
          <div className="max-w-4xl mx-auto bg-white py-2 md:py-4">
            <h2 className="text-lg md:text-2xl font-medium text-zinc-950 tracking-tight text-center uppercase mb-2">
              Send Us a Message
            </h2>
            <div className="w-8 h-[1px] bg-zinc-300 mx-auto mb-8 md:mb-12" />

            {success && (
              <div className="mb-6 px-5 py-4 bg-green-50 border border-green-200 text-green-700 text-sm text-center">
                ✓ Your message has been sent successfully. We'll get back to you soon!
              </div>
            )}

            {error && (
              <div className="mb-6 px-5 py-4 bg-red-50 border border-red-200 text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <input
                  type="text"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                  autoComplete="given-name"
                  className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                />
                <input
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  required
                  autoComplete="family-name"
                  className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  required
                  autoComplete="email"
                  className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  autoComplete="tel"
                  className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                />
              </div>

              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message *"
                required
                className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors resize-none"
              />

              <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600">
                <input
                  type="checkbox"
                  id="updates-optin"
                  name="updates_optin"
                  checked={form.updates_optin}
                  onChange={handleChange}
                  className="mt-1 h-3.5 w-3.5 accent-zinc-950 cursor-pointer shrink-0"
                />
                <label
                  htmlFor="updates-optin"
                  className="cursor-pointer leading-relaxed select-none"
                >
                  I would like Resonance to send me offers and updates via e-mail. You can unsubscribe at any time.
                </label>
              </div>

              <p className="text-[11px] sm:text-xs md:text-sm text-zinc-500 leading-relaxed">
                By clicking SUBMIT, I agree to the{" "}
                <a
                  href="/privacy"
                  className="text-zinc-900 font-medium underline hover:text-zinc-600 transition-colors"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/terms"
                  className="text-zinc-900 font-medium underline hover:text-zinc-600 transition-colors"
                >
                  Terms of Use
                </a>
                .
              </p>

              <div className="text-left md:text-center pt-2 md:pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-fit bg-zinc-950 text-white text-xs tracking-widest uppercase font-semibold px-10 py-3.5 border border-zinc-950 hover:bg-white hover:text-zinc-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Submit Message"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}