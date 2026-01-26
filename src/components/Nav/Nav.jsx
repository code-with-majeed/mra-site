import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set active link based on current URL
    const currentPath = location.pathname + location.hash;
    setActiveLink(currentPath);
  }, [location]);

  const navLinks = [
    { to: "/#home", label: "Home" },
    { to: "/#admissions", label: "Admissions" },
    { to: "/#courses", label: "Courses" },
    { to: "/#facalilty", label: "Facalilty" },
    { to: "/#calendar", label: "Calendar" },
    { to: "/#research", label: "Research" },
    { to: "/signin", label: "Contact" },
  ];

  const handleLinkClick = (to) => {
    setActiveLink(to);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ===== Desktop ===== */}
      <nav
        className={`hidden md:block mt-6 fixed left-1/2 -translate-x-1/2 w-[80%] z-50 rounded-xl transition-all duration-300 ${
          isScrolled ? "bg-[#344F9F] shadow-xl" : "bg-[#344F9F]/95"
        } top-6`}
      >
        <div className="flex items-center justify-between px-6 py-3 text-white">
          
          {/* ✅ Logo → Home */}
          <Link to="/">
            <img src="/src/assets/logo.jpg" className="w-10" alt="Logo" />
          </Link>

          <ul className="flex gap-4 text-xs font-semibold uppercase">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                <a
                  href={link.to}
                  onClick={() => handleLinkClick(link.to)}
                  className={`inline-block hover:text-gray-200 transition-colors duration-200 relative 
                    ${activeLink === link.to ? 'text-white' : ''}
                    group`}
                >
                  {link.label}
                  {/* Hover underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  {/* Active underline */}
                  {activeLink === link.to && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* ✅ Get Started Button with Animation */}
          <Link
            to="/signin"
            onClick={() => handleLinkClick("/signin")}
            className="relative bg-white text-[#344F9F] px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 
            overflow-hidden group transition-all duration-300 hover:bg-gray-200 hover:shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started <FaExternalLinkAlt className="text-[10px]" />
            </span>
            
            {/* Button animation effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 
            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </Link>
        </div>
      </nav>

      {/* ===== Mobile ===== */}
      <nav className="md:hidden fixed top-8 left-0 w-full z-50 bg-[#344F9F] text-white px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src="/src/assets/logo.jpg" className="w-12" alt="Logo" />
          </Link>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                onClick={() => handleLinkClick(link.to)}
                className={`block px-3 py-2 rounded transition-colors duration-200 relative
                  ${activeLink === link.to ? 'bg-white/20' : 'bg-white/10'}
                  group`}
              >
                {link.label}
                {/* Hover underline for mobile */}
                <span className={`absolute left-3 right-3 -bottom-0.5 h-[1px] bg-white 
                  transition-all duration-300 ${activeLink === link.to ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}

            {/* Mobile Get Started Button with Animation */}
            <Link
              to="/signin"
              onClick={() => handleLinkClick("/signin")}
              className="relative block text-center bg-white text-[#344F9F] py-2 rounded font-bold 
              overflow-hidden group transition-all duration-300 hover:bg-gray-100"
            >
              <span className="relative z-10">Get Started</span>
              
              {/* Button animation effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 
              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            </Link>
          </div>
        )}
      </nav>

      <div className="h-24"></div>
    </>
  );
};

export default Nav;