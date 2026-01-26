import React, { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaClock, FaUsers, FaArrowRight } from "react-icons/fa";

const Facality = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const primaryColor = "#344F9F";
  const primaryLight = "#4a6bc5";
  
  const events = [
    {
      id: 1,
      date: "Dec 28, 2025",
      title: "Data Analytics For Sports",
      category: "Workshop",
      time: "3:00 PM - 5:00 PM",
      image: "/src/assets/img-5.jpg"
    },
    {
      id: 2,
      date: "Jan 15, 2026",
      title: "AI in Modern Healthcare",
      category: "Seminar",
      time: "10:00 AM - 12:00 PM",
      image: "/src/assets/img-6.jpg"
    },
    {
      id: 3,
      date: "Feb 3, 2026",
      title: "Sustainable Engineering",
      category: "Conference",
      time: "9:00 AM - 4:00 PM",
      image: "/src/assets/img-7.jpg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="facalilty" 
      ref={containerRef}
      className="w-full min-h-screen bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Left Side - Events Section */}
          <div className="lg:w-1/2">
            {/* Header */}
            <div className={`mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#344F9F] flex items-center justify-center">
                  <FaCalendarAlt className="text-white text-sm" />
                </div>
                <span className="text-[#344F9F] font-medium text-xs tracking-wider uppercase">
                  CAMPUS EVENTS
                </span>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Student <span className="text-[#344F9F]">Events</span>
              </h1>
              
              <p className="text-gray-600 text-sm md:text-base max-w-xl">
                Stay updated with campus happenings, workshops, and social events
              </p>
            </div>

            {/* Events Cards */}
            <div className="space-y-4 mb-8">
              {events.map((event, index) => (
                <div 
                  key={event.id}
                  className={`group bg-white rounded-lg border border-gray-200 hover:border-[#344F9F]/30 transition-all duration-300 overflow-hidden cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    transitionDuration: '500ms'
                  }}
                >
                  <div className="flex flex-col sm:flex-row h-auto sm:h-32">
                    {/* Image */}
                    <div className="w-full sm:w-1/3 h-32 sm:h-auto relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#344F9F]/10"></div>
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2">
                        <span 
                          className="text-white text-xs font-medium px-2 py-1 rounded"
                          style={{ backgroundColor: primaryColor }}
                        >
                          {event.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="w-full sm:w-2/3 p-4">
                      <div className="flex items-center gap-2 text-xs font-medium text-[#344F9F] mb-1">
                        <FaCalendarAlt className="text-xs" />
                        <span>{event.date}</span>
                      </div>
                      
                      <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#344F9F] transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <FaClock className="text-xs mr-1" />
                        <span>{event.time}</span>
                      </div>
                      
                      <button className="flex items-center text-[#344F9F] hover:text-[#4a6bc5] font-medium text-sm group/btn">
                        View Details
                        <FaArrowRight className="ml-2 text-xs transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className={`transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <button 
                className="group flex items-center justify-center gap-2 px-6 py-2.5 text-white font-medium rounded-lg transition-all duration-200 text-sm w-full sm:w-auto"
                style={{ backgroundColor: primaryColor }}
              >
                <span>View All Events</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Side - Campus Life Banner */}
          <div className="lg:w-1/2">
            <div 
              className={`relative rounded-xl overflow-hidden border border-gray-200 group h-full transition-all duration-500 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <div className="h-full relative">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Campus Life"
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white z-20">
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded">
                      Featured Campus Experience
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    Campus <span style={{ color: primaryLight }}>Life</span>
                  </h3>
                  
                  <p className="text-sm md:text-base opacity-90 mb-4 max-w-md leading-relaxed">
                    Experience vibrant student activities and campus events designed to enrich your university journey
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-lg md:text-xl font-bold text-white">50+</div>
                      <div className="text-xs opacity-80 mt-1">Student Clubs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg md:text-xl font-bold text-white">120+</div>
                      <div className="text-xs opacity-80 mt-1">Events/Year</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg md:text-xl font-bold text-white">24/7</div>
                      <div className="text-xs opacity-80 mt-1">Facilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-5 transition-all duration-500 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-[#344F9F]/30 transition-colors duration-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded bg-[#344F9F]/10 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-[#344F9F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Student Support</h4>
                    <p className="text-xs text-gray-600">24/7 academic assistance</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-[#344F9F]/30 transition-colors duration-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded bg-[#344F9F]/10 flex items-center justify-center mr-3">
                    <FaUsers className="w-4 h-4 text-[#344F9F]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Global Network</h4>
                    <p className="text-xs text-gray-600">Connect with alumni worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facality;