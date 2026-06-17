"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, User, Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const brands = [
  ["Brax", "Blam", "Morel", "Gladen", "Helix", "Mosconi"],
  ["Match", "DD Audio", "DB Drive", "DB Link"],
];

const brandImages = {
  Brax: "/Images/home/navbar/BRAX.webp",
  Blam: "/Images/home/navbar/BLAM.webp",
  Morel: "/Images/home/navbar/MOREL.webp",
  Gladen: "/Images/home/navbar/GLADEN.webp",
  Helix: "/Images/home/navbar/HELIX.webp",
  Mosconi: "/Images/home/navbar/MOSCONI.webp",
  Match: "/Images/home/navbar/MATCH.webp",
  "DD Audio": "/Images/home/navbar/DDAUDIO.webp",
  "DB Drive": "/Images/home/navbar/DBDRIVE.webp",
  "DB Link": "/Images/home/navbar/DBLINK.webp",
};

const productImages = {
  Amplifiers: "/Images/home/navbar/AMPLIFIERS.webp",
  Subwoofers: "/Images/home/navbar/SUBWOOFERS.webp",
  Speakers: "/Images/home/navbar/SPEAKERS.webp",
  DSPs: "/Images/home/navbar/DSP'S.webp",
  "Cables & Wiring": "/Images/home/navbar/WIRING.webp",
  Accessories: "/Images/home/navbar/ACCESSORIES.webp",
};

const DEFAULT_BRAND_IMAGE = "/Images/home/navbar/brand.webp";
const DEFAULT_PRODUCT_IMAGE = "/Images/home/navbar/product.webp";

const carAudioProducts = ["Amplifiers", "Subwoofers", "Speakers", "DSPs", "Cables & Wiring", "Accessories"];
const homeAudioProducts = ["Amplifiers", "Speakers", "Subwoofers"];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [activeBrandImage, setActiveBrandImage] = useState(null);
  const [activeProductImage, setActiveProductImage] = useState(null);

  const timeoutRef = useRef(null);

  const handleEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  const dropdownClass = (menu) =>
    `fixed left-0 top-16 w-full bg-gray-100 shadow-lg transition-all duration-300 z-40 ${
      openMenu === menu
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2 pointer-events-none"
    }`;

  const navItemClass = (menu) =>
    `cursor-pointer relative pb-1 transition text-[13px] font-semibold tracking-widest uppercase nav-font ${
      openMenu === menu ? "text-black" : "text-gray-600 hover:text-black"
    }`;

  const navLinkClass =
    "relative cursor-pointer text-[13px] font-semibold tracking-widest uppercase nav-font text-gray-600 hover:text-black transition";

  const dropItemClass =
    "block text-[13px] font-semibold tracking-widest uppercase nav-font py-2.5 cursor-pointer text-gray-800 hover:text-black transition";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&display=swap');
        .nav-font { font-family: 'Barlow', sans-serif; }
      `}</style>

      <header role="banner">
        <nav
          aria-label="Main navigation"
          className="nav-font w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 transition-all duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">

            <div className="flex-shrink-0">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} aria-label="Go to homepage">
                <Image
                  src="/Logo.svg"
                  alt="Company Logo"
                  width={120}
                  height={28}
                  priority
                  className="h-7 w-auto object-contain"
                />
              </Link>
            </div>

            <ul className="hidden md:flex flex-1 justify-center items-center gap-10 mt-2 list-none m-0 p-0" role="menubar">
              <li role="none">
                <Link href="/services" className={navLinkClass} role="menuitem">Services</Link>
              </li>
              <li role="none" onMouseEnter={() => handleEnter("brands")} onMouseLeave={handleLeave}>
                <Link href="/products" className={navItemClass("brands")} role="menuitem" aria-haspopup="true" aria-expanded={openMenu === "brands"}>
                  Brands
                </Link>
              </li>
              <li role="none" onMouseEnter={() => handleEnter("products")} onMouseLeave={handleLeave}>
                <Link href="/products" className={navItemClass("products")} role="menuitem" aria-haspopup="true" aria-expanded={openMenu === "products"}>
                  Products
                </Link>
              </li>
              <li role="none">
                <Link href="/projects" className={navLinkClass} role="menuitem">Projects</Link>
              </li>
              <li role="none">
                <Link href="/about" className={navLinkClass} role="menuitem">About</Link>
              </li>
              <li role="none">
                <Link href="/contact" className={navLinkClass} role="menuitem">Contact</Link>
              </li>
            </ul>

            <div className="flex items-center gap-3 md:gap-5 mt-2">
              <Link href="/account" aria-label="Account" className="text-black hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 md:size-6">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
              </Link>

           

              <button
                className="md:hidden p-1 text-gray-600 hover:text-black transition focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Desktop Brands Dropdown */}
        <div
          className={dropdownClass("brands")}
          onMouseEnter={() => handleEnter("brands")}
          onMouseLeave={handleLeave}
          role="region"
          aria-label="Brands menu"
        >
          <div className="mx-auto grid grid-cols-2 h-[480px]">
            <div className="flex flex-col px-12 py-9">
              <Link
                href="/products"
                className="text-[13px] font-semibold tracking-[0.12em] uppercase text-black mb-8 hover:text-gray-500 transition"
                onClick={() => setOpenMenu(null)}
              >
                SHOP ALL BRANDS ›
              </Link>
              <div className="grid grid-cols-2 gap-x-10">
                {brands.map((col, colIdx) => (
                  <div key={colIdx}>
                    {col.map((brand) => (
                      <Link
                        key={brand}
                        href={`/products?brand=${encodeURIComponent(brand)}`}
                        onClick={() => setOpenMenu(null)}
                        onMouseEnter={() => setActiveBrandImage(brandImages[brand])}
                        onMouseLeave={() => setActiveBrandImage(null)}
                        className={dropItemClass}
                      >
                        {brand}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[480px] w-full overflow-hidden">
              <img
                src={activeBrandImage || DEFAULT_BRAND_IMAGE}
                alt={activeBrandImage ? "Brand preview" : "All brands"}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Desktop Products Dropdown */}
        <div
          className={dropdownClass("products")}
          onMouseEnter={() => handleEnter("products")}
          onMouseLeave={handleLeave}
          role="region"
          aria-label="Products menu"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-2 h-[480px]">
            <div className="flex flex-col px-12 py-9">
              <div className="grid grid-cols-2 gap-x-20">
                <div>
                  <h2 className="text-[15px] font-bold uppercase tracking-[0.15em] mb-6 text-black">Car Audio</h2>
                  <div className="flex flex-col">
                    {carAudioProducts.map((product) => (
                      <Link
                        key={product}
                        href={`/products?group=${encodeURIComponent("Car Audio")}&category=${encodeURIComponent(product)}`}
                        onClick={() => setOpenMenu(null)}
                        onMouseEnter={() => setActiveProductImage(productImages[product])}
                        onMouseLeave={() => setActiveProductImage(null)}
                        className={dropItemClass}
                      >
                        {product}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-[15px] font-bold uppercase tracking-[0.15em] mb-6 text-black">Home Audio</h2>
                  <div className="flex flex-col">
                    {homeAudioProducts.map((product) => (
                      <Link
                        key={product}
                        href={`/products?group=${encodeURIComponent("Home Audio")}&category=${encodeURIComponent(product)}`}
                        onClick={() => setOpenMenu(null)}
                        onMouseEnter={() => setActiveProductImage(productImages[product])}
                        onMouseLeave={() => setActiveProductImage(null)}
                        className={dropItemClass}
                      >
                        {product}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[480px] w-full overflow-hidden">
              <img
                src={activeProductImage || DEFAULT_PRODUCT_IMAGE}
                alt={activeProductImage ? "Product preview" : "All products"}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 top-16 bg-white z-40 transition-transform duration-300 md:hidden overflow-y-auto h-[calc(100vh-64px)] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="p-6 flex flex-col gap-6">
            <Link href="/services" className="text-base font-medium tracking-wider uppercase text-gray-800" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>

            <div className="border-b border-gray-50 pb-2">
              <button
                className="w-full flex justify-between items-center text-base font-medium tracking-wider uppercase text-gray-800 focus:outline-none"
                onClick={() => setMobileSubMenu(mobileSubMenu === "brands" ? null : "brands")}
                aria-expanded={mobileSubMenu === "brands"}
                aria-controls="mobile-brands"
              >
                <span>Brands</span>
                {mobileSubMenu === "brands" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {mobileSubMenu === "brands" && (
                <div id="mobile-brands" className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 bg-gray-50 p-4 rounded-sm">
                  {brands.flat().map((brand) => (
                    <Link
                      key={brand}
                      href={`/products?brand=${encodeURIComponent(brand)}`}
                      className="text-sm py-1.5 text-gray-600 font-medium uppercase tracking-wide hover:text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-50 pb-2">
              <button
                className="w-full flex justify-between items-center text-base font-medium tracking-wider uppercase text-gray-800 focus:outline-none"
                onClick={() => setMobileSubMenu(mobileSubMenu === "products" ? null : "products")}
                aria-expanded={mobileSubMenu === "products"}
                aria-controls="mobile-products"
              >
                <span>Products</span>
                {mobileSubMenu === "products" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {mobileSubMenu === "products" && (
                <div id="mobile-products" className="mt-3 flex flex-col gap-5 bg-gray-50 p-4 rounded-sm">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Car Audio</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {carAudioProducts.map((p) => (
                        <Link
                          key={p}
                          href={`/products?group=Car+Audio&category=${encodeURIComponent(p)}`}
                          className="text-sm py-1 text-gray-600 font-medium hover:text-black"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {p}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Home Audio</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {homeAudioProducts.map((p) => (
                        <Link
                          key={p}
                          href={`/products?group=Home+Audio&category=${encodeURIComponent(p)}`}
                          className="text-sm py-1 text-gray-600 font-medium hover:text-black"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {p}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/projects" className="text-base font-medium tracking-wider uppercase text-gray-800" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/about" className="text-base font-medium tracking-wider uppercase text-gray-800" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-base font-medium tracking-wider uppercase text-gray-800" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;