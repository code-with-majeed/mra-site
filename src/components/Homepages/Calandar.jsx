import React, { useRef, useState, useEffect } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Calendar = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const primaryColor = "#344F9F";
  const primaryLight = "#4a6bc5";

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current && canScrollLeft) {
      const cardWidth = window.innerWidth >= 768 ? 280 : 240;
      sliderRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
      setActiveIndex(prev => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (sliderRef.current && canScrollRight) {
      const cardWidth = window.innerWidth >= 768 ? 280 : 240;
      sliderRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
      setActiveIndex(prev => Math.min(cardData.length - 1, prev + 1));
    }
  };

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const cardWidth = window.innerWidth >= 768 ? 280 : 240;
      const gap = window.innerWidth >= 768 ? 20 : 16;
      const scrollPosition = index * (cardWidth + gap);
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
      setActiveIndex(index);
    }
  };

  const cardData = [
    {
      id: 1,
      img: "/src/assets/img.jpg",
      desc: "Let us put time, energy and emotion to the makueni community service program.",
      date: "Jan 15, 2025",
      category: "Community Service",
      duration: "2 Days",
      location: "Makueni County"
    },
    {
      id: 2,
      img: "/src/assets/img-2.jpg",
      desc: "In Everything You Do, Seek Perfection - Annual Excellence Awards Ceremony",
      date: "Feb 28, 2025",
      category: "Awards",
      duration: "Evening",
      location: "Main Auditorium"
    },
    {
      id: 3,
      img: "/src/assets/img-3.jpg",
      desc: "A little art, a little poetry, a little dance - The Annual Cultural Festival",
      date: "Mar 22, 2025",
      category: "Cultural",
      duration: "3 Days",
      location: "Cultural Center"
    },
    {
      id: 4,
      img: "/src/assets/img-4.jpg",
      desc: "SEO, Social Media & Digital Marketing Workshop for Students",
      date: "Apr 10, 2025",
      category: "Workshop",
      duration: "4 Hours",
      location: "Business School"
    },
    {
      id: 5,
      img: "/src/assets/img-6.jpg",
      desc: "Future Technology Skills Conference 2025",
      date: "May 05, 2025",
      category: "Conference",
      duration: "2 Days",
      location: "Tech Hub"
    },
    {
      id: 6,
      img: "/src/assets/img-3.jpg",
      desc: "Annual Sports Tournament and Athletic Championships",
      date: "Jun 18, 2025",
      category: "Sports",
      duration: "5 Days",
      location: "Sports Complex"
    },
    {
      id: 7,
      img: "/src/assets/img-3.jpg",
      desc: "Annual Sports Tournament and Athletic Championships",
      date: "Jun 18, 2025",
      category: "Sports",
      duration: "5 Days",
      location: "Sports Complex"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="calendar" 
      className="w-full min-h-screen bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-10 md:mb-14 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#344F9F] flex items-center justify-center">
              <FaCalendarAlt className="text-white text-sm" />
            </div>
            <span className="text-[#344F9F] font-medium text-xs tracking-wider uppercase">
              CAMPUS CALENDAR
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Upcoming <span className="text-[#344F9F]">Events</span>
          </h1>
          
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Discover our vibrant campus life through academic, cultural, and social events
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={scrollLeft}
              className={`w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#344F9F]/30 transition-all duration-200 ${
                !canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Previous slide"
              disabled={!canScrollLeft}
            >
              <FaChevronLeft className={`text-sm ${canScrollLeft ? 'text-gray-600' : 'text-gray-400'}`} />
            </button>
            
            <div className="text-center">
              <span className="text-sm text-gray-600">Scroll to explore events</span>
            </div>
            
            <button
              onClick={scrollRight}
              className={`w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#344F9F]/30 transition-all duration-200 ${
                !canScrollRight ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Next slide"
              disabled={!canScrollRight}
            >
              <FaChevronRight className={`text-sm ${canScrollRight ? 'text-gray-600' : 'text-gray-400'}`} />
            </button>
          </div>

          {/* Slider Track */}
          <div className="relative">
            <div 
              ref={sliderRef}
              onScroll={checkScroll}
              className="flex space-x-4 md:space-x-5 overflow-x-auto scrollbar-hide scroll-smooth pb-6"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {cardData.map((item, index) => (
                <div 
                  key={item.id}
                  className={`flex-shrink-0 w-60 sm:w-64 md:w-72 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="group bg-white rounded-lg border border-gray-200 hover:border-[#344F9F]/30 transition-all duration-200 overflow-hidden cursor-pointer h-full">
                    {/* Image Container */}
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.desc}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2">
                        <span 
                          className="inline-block text-white text-xs font-medium px-2 py-1 rounded"
                          style={{ backgroundColor: primaryColor }}
                        >
                          {item.category}
                        </span>
                      </div>
                      
                      {/* Date Badge */}
                      <div className="absolute bottom-2 left-2">
                        <div className="flex items-center text-white text-xs bg-black/20 backdrop-blur-sm px-2 py-1 rounded">
                          <FaCalendarAlt className="mr-1 text-xs" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
                        {item.desc}
                      </p>
                      
                      {/* Info Row */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600 text-xs">
                          <FaClock className="mr-2 text-xs" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-xs">
                          <FaMapMarkerAlt className="mr-2 text-xs" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      
                      <button className="flex items-center text-[#344F9F] hover:text-[#4a6bc5] font-medium text-sm group/btn">
                        <span>View Details</span>
                        <FaArrowRight className="ml-2 text-xs transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator Dots */}
            <div className="flex justify-center items-center mt-6 gap-1.5">
              {cardData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    index === activeIndex 
                      ? 'bg-[#344F9F] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className={`text-center mt-10 transition-all duration-500 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <button 
            className="group flex items-center justify-center gap-2 px-6 py-2.5 text-white font-medium rounded-lg transition-all duration-200 text-sm mx-auto"
            style={{ backgroundColor: primaryColor }}
          >
            <span>View Full Calendar</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <p className="text-gray-500 text-xs mt-3">
            Over 150+ events scheduled annually
          </p>
        </div>
      </div>

      {/* Inline Styles for scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Calendar;