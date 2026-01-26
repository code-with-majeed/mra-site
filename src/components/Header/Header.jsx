import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-25 bg-black text-white z-40 animate-fadeIn">
      {/* Single row layout for all content */}
      <div className="w-full px-4 py-2 md:w-[90%] lg:w-[80%] mx-auto">
        <div className="flex items-center justify-center md:justify-between">
          {/* Paragraph content - Hidden on mobile, visible on md and above */}
          <div className="hidden md:block animate-slideInLeft flex-1">
            <p className="text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] capitalize text-white/80 text-start tracking-wide">
              new students apply vacancies about SU chaplancy Library Student
              life blog
            </p>
          </div>

          {/* Social icons and search - Always visible */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-4 animate-slideInRight md:ml-0">
            {/* Social Icons */}
            <div className="flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-1.5 md:p-2 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-1.5 md:p-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-1.5 md:p-2 rounded-full hover:bg-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Twitter"
              >
                <FaTwitter className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-1.5 md:p-2 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="YouTube"
              >
                <TfiYoutube className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              </a>
            </div>

            {/* Search Section */}
            <div className="flex items-center">
              {/* Search Bar - Hidden on mobile, visible on md and above */}
              <div className="relative hidden md:block animate-pulse-slow">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-8 pr-3 py-1 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-32 sm:w-36 md:w-40 lg:w-48 transition-all duration-300 text-xs sm:text-sm"
                  />
                  <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </div>
              </div>

              {/* Mobile Search Icon */}
              <div className="md:hidden">
                <button
                  className="p-1.5 sm:p-2 hover:bg-gray-800 rounded-full transition-all duration-300"
                  aria-label="Search"
                >
                  <FiSearch className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out 0.3s both;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out 0.5s both;
        }

        .animate-pulse-slow {
          animation: pulseSlow 2s infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;