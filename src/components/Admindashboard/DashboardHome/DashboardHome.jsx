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
      title: "Enrolled",
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

  // Consistent color scheme (sidebar color - blue)
  const iconColor = "text-blue-600";
  const iconBgColor = "bg-blue-500";
  const iconBgOpacity = "bg-opacity-10";

  return (
    <div className="p-4 sm:p-6 animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {statsData.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02] animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className={`p-3 rounded-lg ${iconBgColor} ${iconBgOpacity}`}>
                <div className={iconColor}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-bold text-gray-800">{stat.value}</span>
              </div>
            </div>
            
            <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">{stat.title}</h3>
            
            {stat.description && (
              <p className="text-xs sm:text-sm text-gray-500">{stat.description}</p>
            )}
            
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
              <div className="flex items-center text-xs sm:text-sm text-gray-500">
                <span className="flex items-center">
                  <FaArrowUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-green-500" />
                  +2.5% from last month
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Additional sections can be added here */}
      </div>

      {/* Add CSS animations */}
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
      `}</style>
    </div>
  );
};

export default DashboardHome;