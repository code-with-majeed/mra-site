import React from "react";
import {
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
  FiFileText,
  FiPlus,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";

const CardHeader = ({ title, icon: Icon, color }) => (
  <div
    className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5 text-white rounded-t-md transition-all duration-300"
    style={{ backgroundColor: color }}
  >
    <div className="flex items-center gap-2 text-sm sm:text-base font-semibold">
      <Icon className="text-lg" /> {title}
    </div>
    <div className="flex items-center gap-2">
      <FiSearch className="cursor-pointer hover:scale-110 transition-transform" />
      <FiPlus className="cursor-pointer hover:scale-110 transition-transform" />
      <FiChevronDown className="cursor-pointer hover:scale-110 transition-transform" />
    </div>
  </div>
);

const Accounts = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-3 sm:p-4 md:p-6 flex flex-col gap-4 md:gap-6 overflow-hidden animate-fadeIn">
      {/* Professional heading with animated underline */}
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 relative inline-block group">
          Accounts
          {/* Professional underline - always visible with hover effect */}
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          {/* Static underline base */}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-200"></span>
        </h2>
      </div>

      {/* Top Bar */}
      <div className="bg-white border rounded-md p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 animate-slideDown">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">
          Accounts Management
        </h2>
        <div className="flex flex-wrap gap-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95">
            Add Transaction
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95">
            Export
          </button>
        </div>
      </div>

      {/* ================= CARDS GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 flex-1">
        {/* Income */}
        <div className="bg-white rounded-md shadow flex flex-col animate-slideUp delay-100">
          <CardHeader title="Income" icon={FiTrendingUp} color="#3B82F6" />
          <div className="flex-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-left bg-gray-50">
                  <th className="px-3 py-3 font-medium">Source</th>
                  <th className="px-3 py-3 font-medium">Amount</th>
                  <th className="px-3 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["Student Fee", "$5,000", "12 Aug 2024"],
                  ["Admission Fee", "$1,200", "10 Aug 2024"],
                  ["Library Fee", "$800", "09 Aug 2024"],
                  ["Sports Fee", "$500", "08 Aug 2024"],
                  ["Lab Fee", "$750", "07 Aug 2024"],
                ].map((row, i) => (
                  <tr 
                    key={i} 
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    {row.map((cell, idx) => (
                      <td 
                        key={idx} 
                        className="px-3 py-3 whitespace-nowrap text-gray-700"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Expense */}
        <div className="bg-white rounded-md shadow flex flex-col animate-slideUp delay-200">
          <CardHeader title="Expense" icon={FiTrendingDown} color="#A3B800" />
          <div className="flex-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-left bg-gray-50">
                  <th className="px-3 py-3 font-medium">Category</th>
                  <th className="px-3 py-3 font-medium">Amount</th>
                  <th className="px-3 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["Electricity Bill", "$1,300", "11 Aug 2024"],
                  ["Staff Salary", "$3,000", "08 Aug 2024"],
                  ["Maintenance", "$950", "07 Aug 2024"],
                  ["Stationery", "$450", "06 Aug 2024"],
                  ["Internet Bill", "$120", "05 Aug 2024"],
                ].map((row, i) => (
                  <tr 
                    key={i} 
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    {row.map((cell, idx) => (
                      <td 
                        key={idx} 
                        className="px-3 py-3 whitespace-nowrap text-gray-700"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ledger */}
        <div className="bg-white rounded-md shadow flex flex-col animate-slideUp delay-300">
          <CardHeader title="Ledger" icon={FiFileText} color="#4B6B73" />
          <div className="flex-1">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-left bg-gray-50">
                  <th className="px-3 py-3 font-medium">Account</th>
                  <th className="px-3 py-3 font-medium">Debit</th>
                  <th className="px-3 py-3 font-medium">Credit</th>
                  <th className="px-3 py-3 font-medium">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["Cash", "$2,000", "-", "$12,000"],
                  ["Bank", "-", "$3,500", "$45,000"],
                  ["Expenses", "$1,200", "-", "$5,800"],
                  ["Revenue", "-", "$4,000", "$32,000"],
                  ["Equipment", "$5,500", "-", "$15,500"],
                ].map((row, i) => (
                  <tr 
                    key={i} 
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    {row.map((cell, idx) => (
                      <td 
                        key={idx} 
                        className="px-3 py-3 whitespace-nowrap text-gray-700"
                      >
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
      {/* ================= END CARDS GRID ================= */}

      {/* ================= SUMMARY ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-slideUp delay-400">
        {[
          { 
            label: "Total Income", 
            value: "$7,000", 
            icon: FiTrendingUp, 
            color: "bg-blue-100 text-blue-600",
            trend: "+12%"
          },
          { 
            label: "Total Expense", 
            value: "$5,250", 
            icon: FiTrendingDown, 
            color: "bg-red-100 text-red-600",
            trend: "-8%"
          },
          { 
            label: "Net Balance", 
            value: "$1,750", 
            icon: FiDollarSign, 
            color: "bg-green-100 text-green-600",
            trend: "+4%"
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-md shadow p-4 sm:p-5 flex items-center gap-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`${item.color} p-3 rounded-full flex-shrink-0`}>
              <item.icon className="text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500 mb-1">{item.label}</p>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-gray-800 text-lg sm:text-xl truncate">
                  {item.value}
                </p>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                  {item.trend}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ================= END SUMMARY ================= */}

      {/* Add CSS animations and hide scrollbar */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
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
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        /* Hide scrollbar for tables */
        table {
          border-collapse: collapse;
        }
        table tbody {
          display: block;
          max-height: none;
        }
        table thead, table tbody tr {
          display: table;
          width: 100%;
          table-layout: fixed;
        }
        table thead {
          width: calc(100% - 0px);
        }
      `}</style>
    </div>
  );
};

export default Accounts;