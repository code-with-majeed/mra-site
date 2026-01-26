import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  FaBook,
  FaComments,
  FaCog,
  FaPuzzlePiece,
  FaWallet,
  FaSignOutAlt,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaBell,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const logout = () => {
    navigate("/signin");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleProfileDropdown = (e) => {
    e.stopPropagation();
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.profile-dropdown')) {
        setProfileDropdownOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar - Fixed height on both mobile and desktop */}
      <aside
        className={`
          fixed md:fixed md:top-0 md:left-0 md:bottom-0
          left-0 z-30
          w-64 bg-[#1a365d] text-white flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          h-screen
        `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header with Logo */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 object-contain"
                src="/src/assets/logo.jpg"
                alt="Logo"
              />
              <h2 className="text-xl font-semibold">Dashboard</h2>
            </div>
            <button
              onClick={closeSidebar}
              className="md:hidden p-2 rounded-lg hover:bg-white/10"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links - Fixed height with no scrolling needed */}
          <nav className="flex-1 p-4 space-y-2">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) => 
                `flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition-colors ${isActive ? 'bg-white/10' : ''}`
              }
              onClick={closeSidebar}
            >
              <FaBook className="w-5 h-5" /> Academic & Learning
            </NavLink>

            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) => 
                `flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition-colors ${isActive ? 'bg-white/10' : ''}`
              }
              onClick={closeSidebar}
            >
              <FaComments className="w-5 h-5" /> Communication
            </NavLink>

            <NavLink
              to="/dashboard/admin"
              className={({ isActive }) => 
                `flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition-colors ${isActive ? 'bg-white/10' : ''}`
              }
              onClick={closeSidebar}
            >
              <FaCog className="w-5 h-5" /> Administrations
            </NavLink>

            <NavLink
              to="/dashboard/modules"
              className={({ isActive }) => 
                `flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition-colors ${isActive ? 'bg-white/10' : ''}`
              }
              onClick={closeSidebar}
            >
              <FaPuzzlePiece className="w-5 h-5" /> Add On Modules
            </NavLink>

            <NavLink
              to="/dashboard/accounts"
              className={({ isActive }) => 
                `flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition-colors ${isActive ? 'bg-white/10' : ''}`
              }
              onClick={closeSidebar}
            >
              <FaWallet className="w-5 h-5" /> Accounts
            </NavLink>
          </nav>

          {/* Logout Button - Fixed at Bottom - Always visible */}
          <div className="p-4 border-t border-white/10 shrink-0">
            <button
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 bg-red-500 p-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-64">
        {/* Navbar */}
        <header className="sticky top-0 z-10 h-16 bg-white shadow flex items-center justify-between px-3 sm:px-4 md:px-6">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Mobile Hamburger Menu */}
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <FaBars className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            
            {/* Search Bar - Responsive width */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-40 lg:w-64"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Notification and Message Icons - Responsive sizes */}
            <button className="relative p-1.5 sm:p-2 rounded-lg hover:bg-gray-100">
              <FaBell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-red-500 text-white text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                3
              </span>
            </button>
            
            <button className="relative p-1.5 sm:p-2 rounded-lg hover:bg-gray-100">
              <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-blue-500 text-white text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                5
              </span>
            </button>
            
            <div className="relative profile-dropdown">
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center gap-1.5 sm:gap-2 font-medium p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  U
                </div>
                <span className="hidden sm:inline md:inline">Welcome, User</span>
                <FaChevronDown className={`hidden sm:inline transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown - Responsive */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white shadow-lg rounded-lg border border-gray-100 overflow-hidden z-20">
                  <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-500">admin@example.com</p>
                  </div>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-red-600 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content - Responsive padding */}
        <main className="flex-1 p-3 sm:p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>

        {/* Footer - Matching navbar style */}
        <footer className="sticky bottom-0 z-10 h-14 bg-white border-t border-gray-200 flex items-center justify-between px-3 sm:px-4 md:px-6">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="text-gray-600 text-xs sm:text-sm">
              © 2026 Dashboard. All rights reserved.
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="text-gray-500 text-xs sm:text-sm">
              Version 1.0.0
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <a href="#" className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors">
                Help Center
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;