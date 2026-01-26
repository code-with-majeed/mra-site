import React from "react";
import {
  FiSearch,
  FiPlus,
  FiChevronDown,
  FiLayers,
  FiUsers,
  FiBookOpen,
} from "react-icons/fi";

const CardHeader = ({ title, color, icon: Icon }) => (
  <div
    className={`flex items-center justify-between px-4 py-2 text-white rounded-t-md transition-all duration-300 hover:opacity-90`}
    style={{ backgroundColor: color }}
  >
    <div className="flex items-center gap-2 text-sm font-semibold">
      <Icon className="transition-transform duration-300 hover:scale-110" /> {title}
    </div>
    <div className="flex items-center gap-2">
      <FiSearch className="cursor-pointer transition-all duration-300 hover:text-gray-200 hover:scale-125" />
      <FiPlus className="cursor-pointer transition-all duration-300 hover:text-gray-200 hover:scale-125" />
      <FiChevronDown className="cursor-pointer transition-all duration-300 hover:text-gray-200 hover:scale-125" />
    </div>
  </div>
);

const Table = ({ headers, rows }) => (
  <table className="w-full text-xs sm:text-sm">
    <thead className="text-gray-500">
      <tr>
        {headers.map((h, i) => (
          <th key={i} className="text-left px-3 py-2 sm:px-4 sm:py-2">
            {h}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, i) => (
        <tr 
          key={i} 
          className="border-t hover:bg-gray-50 transition-all duration-300 animate-fadeInRow"
          style={{ animationDelay: `${i * 50}ms` }}
        >
          {row.map((cell, idx) => (
            <td key={idx} className="px-3 py-2 sm:px-4 sm:py-2 transition-all duration-300 hover:text-gray-800">
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const Modules = () => {
  return (
    <div className="bg-gray-100 p-3 sm:p-4 min-h-screen animate-fadeIn">
      {/* Top Search Bar */}
      <div className="bg-white border rounded-md mb-4 p-2 sm:p-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 transition-all duration-300 hover:shadow-md">
        <div className="w-full sm:flex-1 sm:mr-4">
          <input
            className="w-full text-sm outline-none p-2 sm:p-3 border rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Start typing class section subject"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto justify-end">
          <button className="bg-blue-500 text-white px-3 py-1.5 sm:px-4 sm:py-1.5 rounded text-sm transition-all duration-300 hover:bg-blue-600 transform hover:scale-105 active:scale-95 flex-1 sm:flex-none">
            View +
          </button>
          <button className="bg-gray-700 text-white px-3 py-1.5 sm:px-4 sm:py-1.5 rounded text-sm transition-all duration-300 hover:bg-gray-800 transform hover:scale-105 active:scale-95 flex-1 sm:flex-none">
            Disable Dep
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 animate-fadeInUp">
        {/* Class */}
        <div className="bg-white rounded-md shadow transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
          <CardHeader
            title="Class"
            color="#3B82F6"
            icon={FiBookOpen}
          />
          <Table
            headers={["Name", "Code"]}
            rows={[
              ["Class 2023", "C2023"],
              ["Desktop Materials", "00000"],
            ]}
          />
        </div>

        {/* Section */}
        <div className="bg-white rounded-md shadow transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
          <CardHeader
            title="Section"
            color="#A3B800"
            icon={FiLayers}
          />
          <Table
            headers={["Name", "Code"]}
            rows={[
              ["Grad", "C2021"],
              ["Grad1", "00000"],
              ["Grad2", "C2021"],
              ["Grad3", "00000"],
              ["ESL", "C2021"],
              ["Asy", "00000"],
              ["Dram", "C2021"],
            ]}
          />
        </div>

        {/* Supervisor */}
        <div className="bg-white rounded-md shadow transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
          <CardHeader
            title="Supervisor"
            color="#4B6B73"
            icon={FiUsers}
          />
          <div className="overflow-hidden">
            <table className="w-full text-xs sm:text-sm">
              <thead className="text-gray-500">
                <tr>
                  <th className="text-left px-3 py-2 sm:px-4 sm:py-2">Name</th>
                  <th className="text-left px-3 py-2 sm:px-4 sm:py-2">Code</th>
                  <th className="text-left px-3 py-2 sm:px-4 sm:py-2">Credit</th>
                  <th className="text-left px-3 py-2 sm:px-4 sm:py-2">Type</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Class 2021", "CHC2D", "1/50", <div key="1" className="bg-lime-400 w-4 h-4 sm:w-6 sm:h-6 rounded-full mx-auto transition-all duration-300 hover:scale-110"></div>],
                  ["Desktop Materials", "SMC1D", "1/10", <div key="2" className="bg-green-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full mx-auto transition-all duration-300 hover:scale-110"></div>],
                  ["Desktop Materials", "CHC2D", "1/50", <div key="3" className="bg-lime-400 w-4 h-4 sm:w-6 sm:h-6 rounded-full mx-auto transition-all duration-300 hover:scale-110"></div>],
                  ["Class 2021", "SMC1D", "4/10", <div key="4" className="bg-green-500 w-4 h-4 sm:w-6 sm:h-6 rounded-full mx-auto transition-all duration-300 hover:scale-110"></div>],
                ].map((row, i) => (
                  <tr 
                    key={i} 
                    className="border-t hover:bg-gray-50 transition-all duration-300 animate-fadeInRow"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {row.map((cell, idx) => (
                      <td key={idx} className="px-3 py-2 sm:px-4 sm:py-2 transition-all duration-300 hover:text-gray-800">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Animation styles */}
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
        
        .animate-fadeInRow {
          animation: fadeInRow 0.5s ease-out forwards;
          opacity: 0;
        }
        
        @media (max-width: 640px) {
          .flex-1 {
            flex: 1 1 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default Modules;