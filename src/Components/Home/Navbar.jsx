"use client";
import { useState } from "react";
import { Search, X, Menu } from "lucide-react";

const navLinks = [
  {
    label: "Brands",
    href: "#",
    dropdown: {
      shopAll: "SHOP ALL BRANDS",
      columns: [
        [
          { label: "ALPINE", image: "/Images/gallery1.jpg" },
          { label: "JL AUDIO", image: "/Images/gallery2.jpg" },
          { label: "FOCAL", image: "/Images/gallery3.jpg" },
          { label: "HERTZ", image: "/Images/gallery4.jpg" },
        ],
        [
          { label: "KENWOOD", image: "/Images/gallery1.jpg" },
          { label: "PIONEER", image: "/Images/gallery2.jpg" },
          { label: "SONY", image: "/Images/gallery3.jpg" },
        ],
      ],
    },
  },
  {
    label: "Products",
    href: "#",
    dropdown: {
      shopAll: "SHOP ALL PRODUCTS",
      columns: [
        [
          { label: "SOURCE", image: "/Images/gallery1.jpg" },
          { label: "SPEAKERS", image: "/Images/gallery2.jpg" },
          { label: "AMPLIFIERS", image: "/Images/gallery3.jpg" },
          { label: "DSP / PROCESSOR", image: "/Images/gallery4.jpg" },
        ],
        [
          { label: "SUBWOOFERS", image: "/Images/gallery1.jpg" },
          { label: "WIRING", image: "/Images/gallery2.jpg" },
          { label: "ACCESSORIES", image: "/Images/gallery3.jpg" },
        ],
      ],
    },
  },
  {
    label: "Services",
    href: "#",
    dropdown: {
      shopAll: "SHOP ALL SERVICES",
      columns: [
        [
          { label: "INSTALLATION", image: "/Images/gallery1.jpg" },
          { label: "TUNING", image: "/Images/gallery2.jpg" },
          { label: "CONSULTATION", image: "/Images/gallery3.jpg" },
          { label: "REPAIR", image: "/Images/gallery4.jpg" },
        ],
        [
          { label: "CUSTOM BUILD", image: "/Images/gallery1.jpg" },
          { label: "UPGRADE", image: "/Images/gallery2.jpg" },
        ],
      ],
    },
  },
  {
    label: "Projects",
    href: "#",
    dropdown: {
      shopAll: "SHOP ALL PROJECTS",
      columns: [
        [
          { label: "BLUETOOTH", image: "/Images/gallery1.jpg" },
          { label: "ANDROID AUTO", image: "/Images/gallery2.jpg" },
          { label: "APPLE CARPLAY", image: "/Images/gallery3.jpg" },
          { label: "DSP", image: "/Images/gallery4.jpg" },
        ],
        [
          { label: "NOISE CANCELLATION", image: "/Images/gallery1.jpg" },
          { label: "AMPLIFICATION", image: "/Images/gallery2.jpg" },
        ],
      ],
    },
  },
  {
    label: "About",
    href: "#",
    dropdown: {
      shopAll: "LEARN MORE",
      columns: [
        [
          { label: "OUR STORY", image: "/Images/gallery1.jpg" },
          { label: "OUR TEAM", image: "/Images/gallery2.jpg" },
          { label: "OUR MISSION", image: "/Images/gallery3.jpg" },
          { label: "AWARDS", image: "/Images/gallery4.jpg" },
        ],
        [
          { label: "TESTIMONIALS", image: "/Images/gallery1.jpg" },
          { label: "CAREERS", image: "/Images/gallery2.jpg" },
        ],
      ],
    },
  },
  {
    label: "Contact",
    href: "#",
    dropdown: {
      shopAll: "GET IN TOUCH",
      columns: [
        [
          { label: "EMAIL US", image: "/Images/gallery1.jpg" },
          { label: "CALL US", image: "/Images/gallery2.jpg" },
          { label: "LIVE CHAT", image: "/Images/gallery3.jpg" },
          { label: "WHATSAPP", image: "/Images/gallery4.jpg" },
        ],
        [
          { label: "VISIT US", image: "/Images/gallery1.jpg" },
          { label: "SOCIAL MEDIA", image: "/Images/gallery2.jpg" },
        ],
      ],
    },
  },
];

const DROPDOWN_LINKS = ["Brands", "Products", ];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <header className="w-full bg-[#FFFFFF] sticky top-0 z-50">
      <nav
        className="relative w-full"
        onMouseLeave={() => {
          setOpenDropdown(null);
          setHoveredItem(null);
        }}
      >
        <div className="px-4 md:px-15 flex items-center justify-between py-5">
          {/* Logo */}
          <div className="flex">
            <button
              className="md:hidden mr-3 text-black hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <img
              src="Images/logo.webp"
              className="w-40 md:mt-0 mt-1.5 md:w-50"
              alt=""
            />
          </div>

          {/* Desktop Center links */}
          <ul className="hidden font-jakarta md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
              onMouseEnter={() => {
  if (DROPDOWN_LINKS.includes(link.label)) {
    setOpenDropdown(link.label);
    setHoveredItem(null);
  } else {
    setOpenDropdown(null); // ✅ Baaki sab pe dropdown band
    setHoveredItem(null);
  }
}}
              >
                <a
                  href={link.href}
                  className="text-[#000000B2] font-bold text-sm tracking-wide transition-colors hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button className="text-black hover:opacity-70 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 md:size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="text-black hover:opacity-70 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 md:size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="text-black hover:opacity-70 transition-opacity">
              <Search size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Desktop Dropdown */}
        {openDropdown &&
          (() => {
            const currentNav = navLinks.find((l) => l.label === openDropdown);
            const allItems = currentNav?.dropdown?.columns.flat() || [];
            const defaultImage = allItems[0]?.image;
            const displayImage = hoveredItem?.image || defaultImage;

            return (
              <div
                className="hidden md:block absolute left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50"
                onMouseEnter={() => setOpenDropdown(openDropdown)}
                onMouseLeave={() => {
                  setOpenDropdown(null);
                  setHoveredItem(null);
                }}
              >
                <div className="mx-auto flex">
                  <div className="flex-1 px-16 py-8">
                    <a
                      href="#"
                      className="text-xs font-jakarta text-[#000000] font-semibold tracking-widest mb-6 inline-flex items-center gap-0.5"
                    >
                      SHOP ALL {openDropdown.toUpperCase()}{" "}
                      <span className="font-light mb-2 text-3xl">»</span>
                    </a>
                    <h3 className="text-lg font-jakarta tracking-wider mb-4">
                      {openDropdown.toUpperCase()}
                    </h3>
                    <div className="flex font-jakarta gap-38">
                      {currentNav?.dropdown?.columns.map((col, ci) => (
                        <div key={ci} className="flex flex-col gap-3">
                          {col.map((item) => (
                            <a
                              key={item.label}
                              href="#"
                              className="text-sm tracking-wide text-gray-600 hover:text-black transition-colors"
                              onMouseEnter={() => setHoveredItem(item)}
                              onMouseLeave={() => setHoveredItem(null)}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Image */}
                  <div className="w-[45%] flex-shrink-0">
                    <img
                      src={displayImage}
                      alt={hoveredItem?.label || openDropdown}
                      className="w-full h-90 object-cover transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            );
          })()}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="border-b border-gray-100 last:border-0"
              >
                <button
                  className="w-full flex font-bold items-center justify-between py-3 text-sm font-jakarta text-[#000000B2] hover:text-black transition-colors"
                  onClick={() =>
                    DROPDOWN_LINKS.includes(link.label)
                      ? setMobileDropdown(
                          mobileDropdown === link.label ? null : link.label
                        )
                      : null
                  }
                >
                  {link.label}
                  {DROPDOWN_LINKS.includes(link.label) && (
                    <span className="text-lg">
                      {mobileDropdown === link.label ? "−" : "+"}
                    </span>
                  )}
                </button>

                {mobileDropdown === link.label && (
                  <div className="pb-3 pl-3 flex flex-col gap-2">
                    {navLinks
                      .find((l) => l.label === link.label)
                      ?.dropdown?.columns.flat()
                      .map((item) => (
                        <a
                          key={item.label}
                          href="#"
                          className="text-xs tracking-wide text-gray-500 hover:text-black transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;