import { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/main-logo.png"; // adjust path if needed

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="py-6 relative z-50"
      style={{
        background:
          "linear-gradient(to bottom, rgb(193 226 251 / 77%), rgb(255 255 255 / 0%))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center relative">
        {/* Logo (left) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <img src={logo} alt="aadi logo" className="h-10" />
        </div>

        {/* Desktop Menu (center) */}
        <div
          className="hidden md:flex bg-[#c6e5fb] px-10 py-4 items-center gap-3 text-base text-black shadow-md"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)",
            borderRadius: "12px",
          }}
        >
          <div className="flex items-center font-primary gap-2">
            <FaHome className="text-xl" />
            <a href="#about" className="hover:text-blue-800 font-primary">
              About Us
            </a>
            <div className="h-5 w-px bg-gray-500" />
            <a href="#purpose" className="hover:text-blue-800 font-primary">
              Services
            </a>
          </div>
          <div className="h-5 w-px bg-gray-500" />
          <a href="#purpose" className="hover:text-blue-800 font-primary">
            Purpose
          </a>
          <div className="h-5 w-px bg-gray-500" />
          <a href="#contact" className="hover:text-blue-800 font-primary">
            Contact Us
          </a>
        </div>

        {/* Hamburger Icon (right on mobile) */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-black"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#c6e5fb] shadow-md px-6 py-4 font-primary space-y-4 text-center text-black">
          <a
            href="#about"
            className="block hover:text-blue-800"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#purpose"
            className="block hover:text-blue-800"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#purpose"
            className="block hover:text-blue-800"
            onClick={() => setMenuOpen(false)}
          >
            Purpose
          </a>
          <a
            href="#contact"
            className="block hover:text-blue-800"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
