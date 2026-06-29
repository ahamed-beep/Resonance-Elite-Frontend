"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

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

const homeAudioImages = {
  Amplifiers: "/Images/home/navbar/HOME-AUDIO-AMPLIFIERS.webp",
  Speakers: "/Images/home/navbar/HOME-AUDIO-SPEAKERS.webp",
  Subwoofers: "/Images/home/navbar/HOME-AUDIO-SUBWOOFERS.webp",
};

const DEFAULT_BRAND_IMAGE = "/Images/home/navbar/brand.webp";
const DEFAULT_PRODUCT_IMAGE = "/Images/home/navbar/product.webp";

const carAudioProducts = [
  "Amplifiers",
  "Subwoofers",
  "Speakers",
  "DSPs",
  "Cables & Wiring",
  "Accessories",
];

const homeAudioProducts = ["Amplifiers", "Speakers", "Subwoofers"];

const navLinkClass =
  "relative cursor-pointer text-[12px] xl:text-[13px] 2xl:text-[14px] min-[1920px]:text-[15px] min-[2560px]:text-[18px] min-[3200px]:text-[22px] font-semibold tracking-widest uppercase nav-font text-gray-600 hover:text-black transition whitespace-nowrap";

const dropItemClass =
  "block text-[12px] xl:text-[13px] 2xl:text-[14px] min-[1920px]:text-[15px] min-[2560px]:text-[18px] min-[3200px]:text-[22px] font-semibold tracking-widest uppercase nav-font py-2.5 min-[1920px]:py-3 min-[2560px]:py-4 min-[3200px]:py-5 cursor-pointer text-gray-800 hover:text-black transition whitespace-nowrap";

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
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const navItemClass = (menu) =>
    `cursor-pointer relative pb-1 transition text-[12px] xl:text-[13px] 2xl:text-[14px] min-[1920px]:text-[15px] min-[2560px]:text-[18px] min-[3200px]:text-[22px] font-semibold tracking-widest uppercase nav-font whitespace-nowrap ${
      openMenu === menu ? "text-black" : "text-gray-600 hover:text-black"
    }`;

  const dropdownClass = (menu) =>
    `fixed left-0 top-16 min-[1920px]:top-20 min-[2560px]:top-24 min-[3200px]:top-32 w-full bg-gray-100 shadow-lg transition-all duration-300 z-40 ${
      openMenu === menu
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2 pointer-events-none"
    }`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&display=swap');
        .nav-font { font-family: 'Barlow', sans-serif; }
      `}</style>

      <header
        role="banner"
        className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100"
      >
        <nav
          aria-label="Main navigation"
          className="nav-font w-full transition-all duration-300"
        >
          <div className="w-full max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] min-[3200px]:max-w-[2700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 min-[1920px]:px-14 min-[2560px]:px-20 min-[3200px]:px-28 h-16 min-[1920px]:h-20 min-[2560px]:h-24 min-[3200px]:h-32 flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Go to homepage"
              >
                <Image
                  src="/Logo.svg"
                  alt="Resonance Elite Logo"
                  width={180}
                  height={42}
                  priority
                  className="h-4.5 sm:h-5 lg:h-8 min-[1920px]:h-10 min-[2560px]:h-12 min-[3200px]:h-16 w-auto object-contain"
                />
              </Link>
            </div>

            <ul
              className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-10 2xl:gap-12 min-[1920px]:gap-16 min-[2560px]:gap-24 min-[3200px]:gap-32 mt-2 list-none m-0 p-0"
              role="menubar"
            >
              <li role="none">
                <Link href="/services" className={navLinkClass} role="menuitem">
                  Services
                </Link>
              </li>

              <li
                role="none"
                onMouseEnter={() => handleEnter("brands")}
                onMouseLeave={handleLeave}
              >
                <div className="mt-2 flex items-center gap-1">
                  <Link
                    href="/brands"
                    onClick={() => setOpenMenu(null)}
                    className={navItemClass("brands")}
                    role="menuitem"
                  >
                    Brands
                  </Link>
                </div>
              </li>

              <li
                role="none"
                onMouseEnter={() => handleEnter("products")}
                onMouseLeave={handleLeave}
              >
                <div className="mt-2 flex items-center gap-1">
                  <Link
                    href="/products"
                    onClick={() => setOpenMenu(null)}
                    className={navItemClass("products")}
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={openMenu === "products"}
                  >
                    Products
                  </Link>
                </div>
              </li>

              <li role="none">
                <Link href="/projects" className={navLinkClass} role="menuitem">
                  Projects
                </Link>
              </li>

              <li role="none">
                <Link href="/about" className={navLinkClass} role="menuitem">
                  About
                </Link>
              </li>

              <li role="none">
                <Link href="/contact" className={navLinkClass} role="menuitem">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-3 md:gap-5 min-[1920px]:gap-7 min-[2560px]:gap-9 min-[3200px]:gap-12 mt-2">
              <Link
                href="/admin/login"
                aria-label="Admin Login"
                className="hidden lg:flex items-center text-black hover:opacity-70 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 min-[1920px]:size-7 min-[2560px]:size-9 min-[3200px]:size-12"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <button
                className="flex lg:hidden p-1 text-gray-600 hover:text-black transition focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* BRANDS DROPDOWN */}
        <div
          className={dropdownClass("brands")}
          onMouseEnter={() => handleEnter("brands")}
          onMouseLeave={handleLeave}
          role="region"
          aria-label="Brands menu"
        >
          <div className="mx-auto grid grid-cols-2 h-[420px] xl:h-[480px] min-[1920px]:h-[560px] min-[2560px]:h-[700px] min-[3200px]:h-[900px] max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] min-[3200px]:max-w-[2700px]">
            <div className="flex flex-col px-6 lg:px-12 min-[1920px]:px-16 min-[2560px]:px-24 min-[3200px]:px-32 py-9 min-[1920px]:py-12 min-[2560px]:py-16 min-[3200px]:py-24 overflow-y-auto">
              <Link
                href="/brands"
                className="text-[12px] xl:text-[13px] min-[1920px]:text-[15px] min-[2560px]:text-[18px] min-[3200px]:text-[22px] font-semibold tracking-[0.12em] uppercase text-black mb-8 min-[2560px]:mb-12 min-[3200px]:mb-16 hover:text-gray-500 transition-colors inline-block"
                onClick={() => setOpenMenu(null)}
              >
                VIEW ALL BRANDS ›
              </Link>

              <div className="grid grid-cols-2 gap-x-6 lg:gap-x-10 min-[1920px]:gap-x-16 min-[2560px]:gap-x-24 min-[3200px]:gap-x-32">
                {brands.map((col, colIdx) => (
                  <div key={colIdx} className="flex flex-col">
                    {col.map((brand) => (
                      <Link
                        key={brand}
                        href={`/brands#${brand
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        onClick={() => setOpenMenu(null)}
                        onMouseEnter={() =>
                          setActiveBrandImage(brandImages[brand])
                        }
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

            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={activeBrandImage || DEFAULT_BRAND_IMAGE}
                alt={activeBrandImage ? "Brand preview" : "All brands"}
                fill
                sizes="50vw"
                className="object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* PRODUCTS DROPDOWN */}
        <div
          className={dropdownClass("products")}
          onMouseEnter={() => handleEnter("products")}
          onMouseLeave={handleLeave}
          role="region"
          aria-label="Products menu"
        >
          <div className="mx-auto grid grid-cols-2 h-[420px] xl:h-[480px] min-[1920px]:h-[560px] min-[2560px]:h-[700px] min-[3200px]:h-[900px] max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] min-[3200px]:max-w-[2700px]">
            <div className="flex flex-col px-6 lg:px-12 min-[1920px]:px-16 min-[2560px]:px-24 min-[3200px]:px-32 py-9 min-[1920px]:py-12 min-[2560px]:py-16 min-[3200px]:py-24 overflow-y-auto">
              <div className="grid grid-cols-2 gap-x-10 lg:gap-x-20 min-[1920px]:gap-x-28 min-[2560px]:gap-x-40 min-[3200px]:gap-x-56">
                <div>
                  <h2 className="text-[14px] lg:text-[15px] min-[1920px]:text-[18px] min-[2560px]:text-[22px] min-[3200px]:text-[28px] font-bold uppercase tracking-[0.15em] mb-6 min-[2560px]:mb-10 min-[3200px]:mb-14 text-black">
                    Car Audio
                  </h2>

                  <div className="flex flex-col">
                    {carAudioProducts.map((product) => (
                      <Link
                        key={product}
                        href={`/products?group=${encodeURIComponent(
                          "Car Audio"
                        )}&category=${encodeURIComponent(product)}`}
                        onClick={() => setOpenMenu(null)}
                        onMouseEnter={() =>
                          setActiveProductImage(productImages[product])
                        }
                        onMouseLeave={() => setActiveProductImage(null)}
                        className={dropItemClass}
                      >
                        {product}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-[14px] lg:text-[15px] min-[1920px]:text-[18px] min-[2560px]:text-[22px] min-[3200px]:text-[28px] font-bold uppercase tracking-[0.15em] mb-6 min-[2560px]:mb-10 min-[3200px]:mb-14 text-black">
                    Home Audio
                  </h2>

                  <div className="flex flex-col">
                    {homeAudioProducts.map((product) => (
                      <Link
                        key={product}
                        href={`/products?group=${encodeURIComponent(
                          "Home Audio"
                        )}&category=${encodeURIComponent(product)}`}
                        onClick={() => setOpenMenu(null)}
                        onMouseEnter={() =>
                          setActiveProductImage(homeAudioImages[product])
                        }
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

            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={activeProductImage || DEFAULT_PRODUCT_IMAGE}
                alt={activeProductImage ? "Product preview" : "All products"}
                fill
                sizes="50vw"
                className="object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          id="mobile-menu"
          className={`fixed left-0 right-0 top-16 bg-white z-40 border-b border-gray-200 shadow-xl transition-all duration-300 lg:hidden overflow-y-auto max-h-[calc(100vh-4rem)] ${
            mobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="p-4 sm:p-5 flex flex-col gap-2">
            <Link
              href="/services"
              className="text-sm font-semibold tracking-wider uppercase text-gray-800 hover:text-black transition py-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>

            <div className="border-b border-gray-100 pb-2">
              <div className="flex items-center justify-between py-2.5">
                <Link
                  href="/brands"
                  className="text-sm font-semibold tracking-wider uppercase text-gray-800 hover:text-black transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Brands
                </Link>

                <button
                  className="p-2 text-gray-500 hover:text-black focus:outline-none"
                  onClick={() =>
                    setMobileSubMenu(
                      mobileSubMenu === "brands" ? null : "brands"
                    )
                  }
                  aria-expanded={mobileSubMenu === "brands"}
                  aria-controls="mobile-brands"
                  aria-label="Toggle brands submenu"
                >
                  {mobileSubMenu === "brands" ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>

              {mobileSubMenu === "brands" && (
                <div
                  id="mobile-brands"
                  className="mt-1 grid grid-cols-2 gap-x-4 gap-y-1 bg-gray-50 p-3 rounded-md border border-gray-100/80"
                >
                  {brands.flat().map((brand) => (
                    <Link
                      key={brand}
                      href={`/brands#${brand
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-xs py-2 text-gray-600 font-semibold uppercase tracking-wide hover:text-black"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-100 pb-2">
              <button
                className="w-full flex justify-between items-center text-sm font-semibold tracking-wider uppercase text-gray-800 focus:outline-none py-2.5"
                onClick={() =>
                  setMobileSubMenu(
                    mobileSubMenu === "products" ? null : "products"
                  )
                }
                aria-expanded={mobileSubMenu === "products"}
                aria-controls="mobile-products"
              >
                <span>Products</span>
                {mobileSubMenu === "products" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {mobileSubMenu === "products" && (
                <div
                  id="mobile-products"
                  className="mt-1 flex flex-col gap-4 bg-gray-50 p-3 rounded-md border border-gray-100/80"
                >
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">
                      Car Audio
                    </h3>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {carAudioProducts.map((p) => (
                        <Link
                          key={p}
                          href={`/products?group=Car+Audio&category=${encodeURIComponent(
                            p
                          )}`}
                          className="text-xs py-2 text-gray-600 font-semibold uppercase tracking-wide hover:text-black"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {p}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">
                      Home Audio
                    </h3>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {homeAudioProducts.map((p) => (
                        <Link
                          key={p}
                          href={`/products?group=Home+Audio&category=${encodeURIComponent(
                            p
                          )}`}
                          className="text-xs py-2 text-gray-600 font-semibold uppercase tracking-wide hover:text-black"
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

            <Link
              href="/projects"
              className="text-sm font-semibold tracking-wider uppercase text-gray-800 hover:text-black transition py-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="text-sm font-semibold tracking-wider uppercase text-gray-800 hover:text-black transition py-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-sm font-semibold tracking-wider uppercase text-gray-800 hover:text-black transition py-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="border-t border-gray-100 pt-4 mt-2">
              <Link
                href="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-gray-800 hover:text-black transition py-1"
                aria-label="Admin Login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Admin</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;