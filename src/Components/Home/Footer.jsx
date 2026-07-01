"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white pt-12 pb-8 md:mt-20">
      {/* Mobile par 2 columns aur laptop/desktop par 4 columns ka clean setup */}
      <div className="mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

        {/* Column 1 - Logo & Socials (Full width on very small screens if needed, otherwise matches grid) */}
        <div className="col-span-2 sm:col-span-1">
          <img
            src="/Images/Logo2.png"
            alt="Logo"
            className="h-12 mb-4 object-contain -mt-2" // Logo ko thoda uper push karne ke liye -mt-2 lagaya hai
          />

          <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed mb-4">
            Resonance Elite delivers premium automotive audio systems and custom fabrication services.
          </p>

          <div className="space-y-3 text-sm text-gray-300">
            <a href="tel:+923003139039" className="flex items-center gap-3 hover:text-white transition text-xs sm:text-sm">
              <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +92 300 3139039
            </a>

            <a href="mailto:resonancelite@gmail.com" className="flex items-center gap-3 hover:text-white transition text-xs sm:text-sm break-all">
              <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              resonanceelite@gmail.com
            </a>
          </div>

          <h3 className="text-xs font-semibold mt-6 mb-3 uppercase tracking-wider">
            Follow Us
          </h3>

          <div className="flex gap-3">
            <a href="https://www.facebook.com/resonanceelite" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-[#1877F2] p-2 rounded-full hover:opacity-80 transition">
              <FaFacebookF className="w-3.5 h-3.5 text-white" />
            </a>
            <a href="https://www.instagram.com/resonance_elite" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-[#E1306C] p-2 rounded-full hover:opacity-80 transition">
              <FaInstagram className="w-3.5 h-3.5 text-white" />
            </a>
            <a href="https://x.com/resonanceelite" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="bg-[#000000] border border-gray-800 p-2 rounded-full hover:opacity-80 transition">
              <FaXTwitter className="w-3.5 h-3.5 text-white" />
            </a>
            <a href="https://www.youtube.com/@ResonanceElite" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-[#FF0000] p-2 rounded-full hover:opacity-80 transition">
              <FaYoutube className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links - Mobile par ab ye side by side dekhega */}
        <div>
          <h3 className="text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition block">Home</Link></li>
            <li><Link href="/services" className="hover:text-white transition block">Services</Link></li>
            <li><Link href="/products" className="hover:text-white transition block">Brands</Link></li>
            <li><Link href="/products" className="hover:text-white transition block">Products</Link></li>
          </ul>
        </div>

        {/* Categories - Mobile par line set karne ke liye optimized */}
        <div>
          <h3 className="text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider">Categories</h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
            <li><Link href="/products?group=Car+Audio&category=Amplifiers" className="hover:text-white transition block">Amplifiers</Link></li>
            <li><Link href="/products?group=Car+Audio&category=Subwoofers" className="hover:text-white transition block">Subwoofers</Link></li>
            <li><Link href="/products?group=Car+Audio&category=Speakers" className="hover:text-white transition block">Speakers</Link></li>
            <li><Link href="/products?group=Car+Audio&category=Accessories" className="hover:text-white transition block">Accessories</Link></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider">Information</h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
            <li><Link href="/privacy-policy" className="hover:text-white transition block">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-white transition block">Terms & Conditions</Link></li>
            <li><Link href="/refund-policy" className="hover:text-white transition block">Refund Policy</Link></li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 mt-12 pt-6">
        <div className="mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs sm:text-sm">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Resonance Elite. All rights reserved.
          </p>
          <p className="text-gray-400 text-center md:text-right">
            Developed by{" "}
            <a href="https://xelite.uk" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline transition">
              XELite
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
