import React, { useState, useEffect } from "react";
import {
  FiEdit,
  FiUser,
  FiPlus,
  FiBook,
  FiInfo,
  FiLayers,
  FiChevronRight,
} from "react-icons/fi";

const Administrations = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { icon: FiBook, label: "Academic Details", color: "text-blue-500" },
    { icon: FiUser, label: "Personal Information", color: "text-gray-600" },
    { icon: FiInfo, label: "Additional Details", color: "text-gray-600" },
    { icon: FiLayers, label: "Skills & Social Details", color: "text-gray-600" },
  ];

  return (
    <div className="bg-gray-100 p-4 md:p-6 min-h-screen animate-fadeIn">
      {/* Professional heading with animated underline */}
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 relative inline-block group">
          Administration
          {/* Professional underline - always visible with hover effect */}
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          {/* Static underline base */}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-200"></span>
        </h2>
      </div>

      <div className="bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
        {/* Tabs */}
        <div className="flex animate-slideDown">
          <button 
            onClick={() => setActiveTab("view")}
            className={`flex-1 py-3 md:py-4 font-semibold transition-all duration-300 ${activeTab === "view" ? "bg-blue-500 text-white" : "text-gray-500 hover:bg-gray-50"}`}
          >
            View all students
          </button>
          <button 
            onClick={() => setActiveTab("add")}
            className={`flex-1 py-3 md:py-4 font-semibold rounded-tr-lg transition-all duration-300 ${activeTab === "add" ? "bg-blue-500 text-white" : "text-gray-500 hover:bg-gray-50"}`}
          >
            Add students
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <div className="p-4 border-b">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100"
            >
              <span className="flex items-center gap-2 text-blue-500 font-medium">
                <FiBook /> Menu
              </span>
              <FiChevronRight className={`transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`} />
            </button>
          </div>
        )}

        {/* Enrollment Filters */}
        <div className="p-4 border-b animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Default Academic Session",
              "Select Class",
              "Select Sections",
              "Select Subjects",
            ].map((item, i) => (
              <select
                key={i}
                className="border rounded-md px-3 py-2 text-sm text-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-[1.02]"
              >
                <option>{item}</option>
              </select>
            ))}
            <button className="bg-blue-500 text-white rounded-md flex items-center justify-center p-2 transition-all duration-300 hover:bg-blue-600 transform hover:scale-105 active:scale-95">
              <FiPlus className="text-lg" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6 animate-fadeInUp">
          
          {/* Left Sidebar */}
          <div className={`${mobileMenuOpen ? "block" : "hidden"} lg:block w-full lg:w-1/4 border rounded-lg p-4 md:p-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            <div className="flex flex-col items-center animate-fadeIn">
              <div className="relative group">
                <img
                  src="https://i.pravatar.cc/150?img=47"
                  alt="avatar"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-lg object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300" />
              </div>
              <button className="mt-3 md:mt-4 text-blue-500 flex items-center gap-1 text-sm transition-all duration-300 hover:text-blue-600 transform hover:scale-105">
                <FiEdit className="transition-transform duration-300 hover:rotate-12" /> Edit Avatar
              </button>
            </div>

            <div className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-sm text-gray-600 animate-slideUp">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${item.color} hover:bg-blue-50`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="text-lg" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-3/4 space-y-6 animate-fadeInUp">
            
            {/* Academic Details */}
            <div className="border rounded-lg p-4 md:p-6 transition-all duration-300 hover:shadow-md">
              <h3 className="text-sm font-semibold text-blue-500 mb-4 md:mb-6 flex items-center gap-2 animate-slideRight">
                <FiBook className="animate-pulse" /> Academic Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <input 
                  className="input transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-[1.02]" 
                  placeholder="First Name *" 
                />
                <input 
                  className="input transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-[1.02]" 
                  placeholder="Last Name *" 
                />
                <input 
                  className="input transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-[1.02]" 
                  placeholder="Admission No *" 
                />
                <textarea
                  className="input md:col-span-2 lg:col-span-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-[1.02]"
                  placeholder="Textarea"
                  rows="3"
                />
              </div>
            </div>

            {/* Personal Information */}
            <div className="border rounded-lg p-4 md:p-6 transition-all duration-300 hover:shadow-md">
              <h3 className="text-sm font-semibold text-blue-500 mb-4 md:mb-6 flex items-center gap-2 animate-slideRight">
                <FiUser className="animate-bounce" /> Personal Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <input 
                  className="input transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-[1.02]" 
                  placeholder="Student Email *" 
                />
                <input 
                  className="input transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-[1.02]" 
                  placeholder="Date of Birth *" 
                />
                <input 
                  className="input transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-[1.02]" 
                  placeholder="Student Contact *" 
                />
                <select 
                  className="input transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-[1.02]"
                >
                  <option>Select Gender *</option>
                </select>
              </div>
            </div>

            {/* Additional Details */}
            <div className="border rounded-lg p-4 md:p-6 flex justify-end animate-fadeIn">
              <button className="bg-blue-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-md text-sm flex items-center gap-2 transition-all duration-300 hover:bg-blue-600 transform hover:scale-105 active:scale-95">
                <FiPlus className="transition-transform duration-300 group-hover:rotate-90" /> Add
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Add CSS for animations and input styling */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        
        .animate-slideRight {
          animation: slideRight 0.5s ease-out;
        }
        
        .input {
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          color: #4b5563;
          width: 100%;
          transition: all 0.3s ease;
        }
        
        .input:focus {
          outline: none;
          border-color: transparent;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .input {
            font-size: 0.8125rem;
            padding: 0.625rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Administrations;