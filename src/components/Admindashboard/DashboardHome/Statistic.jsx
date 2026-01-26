import React from "react";
import { 
  FaChartLine, 
  FaDollarSign, 
  FaFileAlt, 
  FaCircle,
  FaArrowUp,
  FaArrowDown,
  FaCheckCircle,
  FaUserCircle,
  FaTicketAlt
} from "react-icons/fa";

const InstitutionStatistics = () => {
  return (
    <div className="  p-4 md:p-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <FaChartLine className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-base md:text-lg font-semibold text-slate-800">
              Institution Key Statistics
            </h2>
            <p className="text-xs text-slate-500">Real-time performance metrics</p>
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-4 md:gap-6 text-sm mb-6 pb-3 border-b border-slate-200">
          <button className="flex items-center gap-2 text-blue-600 font-medium px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
            <FaDollarSign className="w-4 h-4" />
            Fees
          </button>
          <button className="flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors duration-200">
            <FaFileAlt className="w-4 h-4" />
            Income Report
          </button>
        </div>

        {/* CHART */}
        <div className="w-full h-56 md:h-64 mb-8 relative">
          <div className="absolute inset-0 flex flex-col justify-between">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border-t border-slate-100"></div>
            ))}
          </div>
          
          <svg
            viewBox="0 0 1000 300"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            {/* BLUE LINE (Primary Metric) */}
            <path
              d="M50 160 Q 200 80 350 120 T 650 200 T 950 240"
              fill="none"
              stroke="url(#blueGradient)"
              strokeWidth="3"
              className="drop-shadow-sm"
            />
            
            {/* LIME LINE (Secondary Metric) */}
            <path
              d="M50 80 Q 200 60 350 200 T 650 100 T 950 160"
              fill="none"
              stroke="#4ade80"
              strokeWidth="3"
              strokeDasharray="5,5"
              className="drop-shadow-sm"
            />
            
            {/* PINK LINE (Tertiary Metric) */}
            <path
              d="M50 180 Q 200 220 350 140 T 650 180 T 950 60"
              fill="none"
              stroke="#f472b6"
              strokeWidth="3"
              className="drop-shadow-sm"
            />
            
            {/* DOTS for Blue Line */}
            {[50, 350, 650, 950].map((x, i) => (
              <g key={`blue-${i}`} className="group">
                <circle cx={x} cy={160} r="6" fill="#3b82f6" className="drop-shadow-md" />
                <circle cx={x} cy={160} r="8" fill="#3b82f6" fillOpacity="0.2" className="group-hover:animate-ping" />
              </g>
            ))}
            
            {/* DOTS for Lime Line */}
            {[50, 350, 650, 950].map((x, i) => (
              <g key={`lime-${i}`} className="group">
                <circle cx={x} cy={100} r="6" fill="#4ade80" className="drop-shadow-md" />
                <circle cx={x} cy={100} r="8" fill="#4ade80" fillOpacity="0.2" className="group-hover:animate-ping" />
              </g>
            ))}
            
            {/* DOTS for Pink Line */}
            {[50, 350, 650, 950].map((x, i) => (
              <g key={`pink-${i}`} className="group">
                <circle cx={x} cy={180} r="6" fill="#f472b6" className="drop-shadow-md" />
                <circle cx={x} cy={180} r="8" fill="#f472b6" fillOpacity="0.2" className="group-hover:animate-ping" />
              </g>
            ))}
            
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Chart Legend */}
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-2">
              <FaCircle className="w-3 h-3 text-blue-500" />
              <span className="text-xs font-medium text-slate-700">Total Income</span>
              <FaArrowUp className="w-3 h-3 text-green-500 ml-1" />
            </div>
            <div className="flex items-center gap-2">
              <FaCircle className="w-3 h-3 text-green-400" />
              <span className="text-xs font-medium text-slate-700">Fees Collected</span>
              <FaArrowUp className="w-3 h-3 text-green-500 ml-1" />
            </div>
            <div className="flex items-center gap-2">
              <FaCircle className="w-3 h-3 text-pink-400" />
              <span className="text-xs font-medium text-slate-700">Expenses</span>
              <FaArrowDown className="w-3 h-3 text-red-500 ml-1" />
            </div>
          </div>
        </div>

        {/* PROGRESS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* SALES */}
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-100">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <FaDollarSign className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-right">
                <span className="text-xs font-medium text-slate-500">Target</span>
                <p className="text-lg md:text-xl font-bold text-slate-800">50%</p>
              </div>
            </div>
            <div className="mb-2">
              <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-1/2"></div>
              </div>
              <div className="flex justify-between mt-1">
                {[0, 25, 50, 75, 100].map((point) => (
                  <div
                    key={point}
                    className={`w-1 h-1 rounded-full ${
                      point <= 50 ? "bg-blue-500" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-700">Sales Target</p>
              <FaCheckCircle className="w-4 h-4 text-green-500" />
            </div>
          </div>

          {/* PROFILE */}
          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-100">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <FaUserCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="text-right">
                <span className="text-xs font-medium text-slate-500">Completed</span>
                <p className="text-lg md:text-xl font-bold text-slate-800">35%</p>
              </div>
            </div>
            <div className="mb-2">
              <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full w-[35%]"></div>
              </div>
              <div className="flex justify-between mt-1">
                {[0, 25, 50, 75, 100].map((point) => (
                  <div
                    key={point}
                    className={`w-1 h-1 rounded-full ${
                      point <= 35 ? "bg-green-500" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-700">Profile Completion</p>
              <FaCheckCircle className="w-4 h-4 text-green-500" />
            </div>
          </div>

          {/* TICKETS */}
          <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-100">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <FaTicketAlt className="w-4 h-4 text-pink-600" />
              </div>
              <div className="text-right">
                <span className="text-xs font-medium text-slate-500">Resolved</span>
                <p className="text-lg md:text-xl font-bold text-slate-800">80%</p>
              </div>
            </div>
            <div className="mb-2">
              <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full w-[80%]"></div>
              </div>
              <div className="flex justify-between mt-1">
                {[0, 25, 50, 75, 100].map((point) => (
                  <div
                    key={point}
                    className={`w-1 h-1 rounded-full ${
                      point <= 80 ? "bg-pink-500" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-700">Support Tickets</p>
              <FaCheckCircle className="w-4 h-4 text-green-500" />
            </div>
          </div>

        </div>

        {/* FOOTER NOTE */}
        <div className="mt-6 pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500 text-center">
            Data updated in real-time • Last refresh: Just now
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstitutionStatistics;