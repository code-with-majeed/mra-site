import React from "react";
import { 
  FaUserGraduate, 
  FaUsers, 
  FaCalendarAlt, 
  FaFileAlt,
  FaArrowUp 
} from "react-icons/fa";

const DashboardHome = () => {
  const statsData = [
    {
      title: "Enrolled Students",
      value: 84,
      icon: <FaUserGraduate className="w-6 h-6" />,
    },
    {
      title: "Enrolled Classes",
      value: 22,
      icon: <FaUsers className="w-6 h-6" />,
    },
    {
      title: "Schedule Events",
      value: 12,
      icon: <FaCalendarAlt className="w-6 h-6" />,
    },
    {
      title: "New Submissions",
      value: 7,
      icon: <FaFileAlt className="w-6 h-6" />,
    }
  ];

  return (
    <div className="p-3 xs:p-4 sm:p-5 md:p-6 animate-fadeIn">
      {/* Professional heading with animated underline */}
      <div className="mb-4 sm:mb-5 md:mb-6">
        <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-800 relative inline-block group">
          Academic Dashboard
          {/* Professional underline - always visible with hover effect */}
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          {/* Static underline base */}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-200"></span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-7 md:mb-8">
        {statsData.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-3 xs:p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02] animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-2 xs:mb-3 sm:mb-4">
              {/* White icon with solid blue background */}
              <div className="p-2 xs:p-2.5 sm:p-3 rounded-md sm:rounded-lg bg-blue-600">
                <div className="text-white">
                  {React.cloneElement(stat.icon, {
                    className: "w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
                  })}
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800">{stat.value}</span>
              </div>
            </div>
            
            <h3 className="font-semibold text-gray-800 mb-1 text-xs xs:text-sm sm:text-base truncate">{stat.title}</h3>
            
            {stat.description && (
              <p className="text-xs xs:text-sm text-gray-500 line-clamp-2">{stat.description}</p>
            )}
            
            <div className="mt-2 xs:mt-3 sm:mt-4 pt-2 xs:pt-3 sm:pt-4 border-t border-gray-100">
              <div className="flex items-center text-xs xs:text-sm text-gray-500">
                <span className="flex items-center">
                  <FaArrowUp className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 mr-1 text-green-500" />
                  +2.5% from last month
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {/* Additional sections can be added here */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded mr-3">
                  <FaUserGraduate className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">New student enrollment</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <span className="text-xs font-medium text-blue-600">View</span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded mr-3">
                  <FaFileAlt className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Assignment submitted</p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
              </div>
              <span className="text-xs font-medium text-blue-600">Review</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded mr-3">
                  <FaCalendarAlt className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Faculty Meeting</p>
                  <p className="text-xs text-gray-500">Tomorrow, 10:00 AM</p>
                </div>
              </div>
              <span className="text-xs font-medium text-blue-600">Details</span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center">
                <div className="bg-orange-100 p-2 rounded mr-3">
                  <FaUsers className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Parent-Teacher Conference</p>
                  <p className="text-xs text-gray-500">Friday, 2:00 PM</p>
                </div>
              </div>
              <span className="text-xs font-medium text-blue-600">Details</span>
            </div>
          </div>
        </div>
      </div>

      {/* For responsive sidebar behavior, ensure your main layout has proper mobile sidebar handling */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
          opacity: 0;
        }
        
        /* Custom breakpoint for extra small devices */
        @media (min-width: 475px) {
          .xs\\:p-4 {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardHome;