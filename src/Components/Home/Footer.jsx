"use client";
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white pt-16 pb-8 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        
        {/* First Column: Logo, Phone, Address, Socials */}
        <div>
          <img
            src="/Images/Logo2.png"
            alt="Logo"
            className="h-12 mb-4 object-contain"
          />

          <div className="space-y-3 text-sm text-gray-300">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+92 300 3139039</span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>#83, E Block, Arifwala, Pakistan</span>
            </div>
          </div>

          <h3 className="text-sm font-semibold mt-6 mb-3 uppercase tracking-wider">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1877F2] p-2 rounded-full hover:opacity-80 transition"
            >
              <FaFacebookF className="w-4 h-4 text-white" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#E1306C] p-2 rounded-full hover:opacity-80 transition"
            >
              <FaInstagram className="w-4 h-4 text-white" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1DA1F2] p-2 rounded-full hover:opacity-80 transition"
            >
              <FaTwitter className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Second Column: Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition block">Home</a></li>
            <li><a href="#" className="hover:text-white transition block">Services</a></li>
            <li><a href="#" className="hover:text-white transition block">Brands</a></li>
            <li><a href="#" className="hover:text-white transition block">Products</a></li>
          </ul>
        </div>

        {/* Third Column: Categories */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">
            Categories
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition block">Amplifiers</a></li>
            <li><a href="#" className="hover:text-white transition block">Subwoofers</a></li>
            <li><a href="#" className="hover:text-white transition block">Speakers</a></li>
            <li><a href="#" className="hover:text-white transition block">Accessories</a></li>
          </ul>
        </div>

        {/* Fourth Column: Information */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">
            Information
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition block">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition block">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition block">Downloads</a></li>
            <li><a href="#" className="hover:text-white transition block">FAQ</a></li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>

          <p className="text-gray-400 text-center md:text-right">
            Developed by{" "}
            <a
              href="https://www.xelite.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline transition"
            >
              XElite
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;