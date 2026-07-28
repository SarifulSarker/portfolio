import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Problem Solving", href: "#cp" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-350 ${
      scrolled 
        ? "bg-[#030014]/75 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
            Shariful.dev
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 py-1.5 px-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl focus:outline-none transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <RiCloseLine size={24} aria-hidden="true" />
          ) : (
            <RiMenu2Line size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#030014]/95 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100 py-4 shadow-xl" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="px-6 space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 px-4 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-all duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
