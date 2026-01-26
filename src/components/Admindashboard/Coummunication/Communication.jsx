import React, { useState, useEffect } from "react";
import {
  FiFilter,
  FiEdit,
  FiEye,
  FiTrash2,
  FiDownload,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

const students = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  firstName: "Aimee",
  lastName: "Liu",
  admission: "21001",
  email: "uiuxpro@gmail.com",
  contact: "6479949992",
  username: "Aimee000",
  lastLogin: "2021-05-29",
}));

const Communication = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation on mount
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-100 p-4 md:p-6 min-h-screen animate-fadeIn">
      {/* Header Tabs */}
      <div className="bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl">
        <div className="flex flex-col sm:flex-row">
          <button className="flex-1 bg-blue-600 text-white py-3 px-4 sm:rounded-tl-lg font-semibold transition-all duration-300 hover:bg-blue-700 transform hover:-translate-y-0.5">
            View all students
          </button>
          <button className="flex-1 py-3 px-4 text-gray-500 font-semibold transition-all duration-300 hover:bg-gray-50 hover:text-gray-700">
            Add students
          </button>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden p-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-600 py-2 rounded-md transition-all duration-300 hover:bg-gray-200"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            {isMobileMenuOpen ? "Close Filters" : "Show Filters"}
          </button>
        </div>

        {/* Filters */}
        <div 
          className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block p-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Default Academic Session",
              "Select Class",
              "Select Sections",
              "Select Subjects",
            ].map((item, idx) => (
              <select
                key={idx}
                className="border rounded-md px-3 py-2 text-sm text-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-[1.02]"
              >
                <option>{item}</option>
              </select>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between px-4 pb-4 gap-3 animate-slideUp">
          <button className="flex items-center gap-2 text-sm text-gray-600 transition-all duration-300 hover:text-blue-600 transform hover:translate-x-1">
            <FiFilter className="animate-pulse" /> Filter
          </button>

          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md text-sm transition-all duration-300 hover:bg-blue-600 transform hover:scale-105 active:scale-95">
              <FiDownload className="animate-bounce" /> Export
            </button>
            <button className="border px-4 py-2 rounded-md text-sm transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 transform hover:scale-105 active:scale-95">
              Show / Hide
            </button>
            <button className="border px-4 py-2 rounded-md text-sm transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 transform hover:scale-105 active:scale-95">
              Enrollment Status
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto animate-fadeInUp">
          <table className="w-full text-xs sm:text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-2 sm:p-3 text-left">
                  <input type="checkbox" className="transform scale-110" />
                </th>
                <th className="p-2 sm:p-3">Profile</th>
                <th className="p-2 sm:p-3 hidden xs:table-cell">First Name</th>
                <th className="p-2 sm:p-3 hidden sm:table-cell">Last Name</th>
                <th className="p-2 sm:p-3">Admission No</th>
                <th className="p-2 sm:p-3 hidden lg:table-cell">Student Email</th>
                <th className="p-2 sm:p-3 hidden xl:table-cell">Student Contact</th>
                <th className="p-2 sm:p-3 hidden md:table-cell">Username</th>
                <th className="p-2 sm:p-3 hidden lg:table-cell">Last logged-in</th>
                <th className="p-2 sm:p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((s, index) => (
                <tr
                  key={s.id}
                  className="border-t hover:bg-gray-50 transition-all duration-300 animate-fadeInRow"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="p-2 sm:p-3">
                    <input type="checkbox" className="transition-all duration-300 hover:scale-125" />
                  </td>
                  <td className="p-2 sm:p-3">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-gray-200 transition-all duration-300 hover:bg-blue-100 hover:scale-110">
                      <FiUser className="text-gray-600" />
                    </div>
                  </td>
                  <td className="p-2 sm:p-3 font-medium">{s.firstName}</td>
                  <td className="p-2 sm:p-3 hidden sm:table-cell">{s.lastName}</td>
                  <td className="p-2 sm:p-3 font-semibold text-blue-600">{s.admission}</td>
                  <td className="p-2 sm:p-3 hidden lg:table-cell truncate max-w-[150px]" title={s.email}>
                    {s.email}
                  </td>
                  <td className="p-2 sm:p-3 hidden xl:table-cell">{s.contact}</td>
                  <td className="p-2 sm:p-3 hidden md:table-cell font-medium">{s.username}</td>
                  <td className="p-2 sm:p-3 hidden lg:table-cell text-gray-500">{s.lastLogin}</td>
                  <td className="p-2 sm:p-3">
                    <div className="flex gap-1 sm:gap-2 text-gray-500">
                      <FiEye className="cursor-pointer hover:text-blue-500 transition-all duration-300 transform hover:scale-125" />
                      <FiEdit className="cursor-pointer hover:text-green-500 transition-all duration-300 transform hover:scale-125" />
                      <FiTrash2 className="cursor-pointer hover:text-red-500 transition-all duration-300 transform hover:scale-125" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 text-xs sm:text-sm text-gray-500 animate-fadeIn">
          <span className="mb-2 sm:mb-0">Showing 1 to 10 of 10 entries</span>
          <span>© 2021 LMS Dashboard</span>
        </div>
      </div>

      {/* Add these styles for animations */}
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
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRow {
          from {
            opacity: 0;
            transform: translateX(-10px);
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
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        
        .animate-fadeInRow {
          animation: fadeInRow 0.5s ease-out forwards;
          opacity: 0;
        }
        
        /* Responsive breakpoints */
        @media (max-width: 640px) {
          .table-responsive {
            font-size: 0.75rem;
          }
        }
        
        @media (min-width: 640px) {
          .xs\\:table-cell {
            display: table-cell;
          }
        }
        
        @media (min-width: 768px) {
          .md\\:table-cell {
            display: table-cell;
          }
        }
        
        @media (min-width: 1024px) {
          .lg\\:table-cell {
            display: table-cell;
          }
        }
        
        @media (min-width: 1280px) {
          .xl\\:table-cell {
            display: table-cell;
          }
        }
      `}</style>
    </div>
  );
};

export default Communication;