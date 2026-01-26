import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaHeartbeat, FaBriefcase, FaArrowRight, FaUsers, FaCalendarAlt, FaStar } from 'react-icons/fa';

const Courses = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.2 });
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true });

  const primaryColor = "#344F9F";
  const primaryLight = "#4a6bc5";

  const cards = [
    {
      id: 1,
      image: "/src/assets/img.jpg",
      title: "Student Life",
      description: "Experience vibrant campus activities and student communities",
      icon: <FaUsers className="text-base" />,
      stats: "50+ Student Clubs",
      color: "#344F9F",
      bgColor: "bg-white",
      delay: 0.1
    },
    {
      id: 2,
      image: "/src/assets/img-2.jpg",
      title: "Health & Wellness",
      description: "Comprehensive support for physical and mental well-being",
      icon: <FaHeartbeat className="text-base" />,
      stats: "24/7 Support",
      color: "#4a6bc5",
      bgColor: "bg-white",
      delay: 0.2
    },
    {
      id: 3,
      image: "/src/assets/img-3.jpg",
      title: "Career Development",
      description: "Professional growth opportunities and career guidance",
      icon: <FaBriefcase className="text-base" />,
      stats: "95% Placement Rate",
      color: "#344F9F",
      bgColor: "bg-white",
      delay: 0.3
    }
  ];

  const features = [
    { icon: <FaGraduationCap className="text-xs" />, text: "Academic Excellence" },
    { icon: <FaUsers className="text-xs" />, text: "Community Engagement" },
    { icon: <FaCalendarAlt className="text-xs" />, text: "Year-Round Activities" },
    { icon: <FaStar className="text-xs" />, text: "Leadership Development" }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const iconFloatOnce = {
    hidden: { y: 0 },
    visible: { 
      y: [0, -3, 0],
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const cardHover = {
    rest: { y: 0 },
    hover: { 
      y: -4,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section 
      id="courses" 
      ref={sectionRef}
      className="w-full min-h-screen bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-8 h-8 rounded-full bg-[#344F9F] flex items-center justify-center"
            >
              <FaGraduationCap className="text-white text-sm" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[#344F9F] font-medium text-xs tracking-wider uppercase"
            >
              CAMPUS LIFE
            </motion.span>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          >
            Student <span className="text-[#344F9F]">Experience</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Discover a balanced campus experience that nurtures both academic excellence and personal growth
          </motion.p>

          {/* Features Grid */}
          <div ref={featuresRef} className="mt-6">
            <motion.div 
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200"
                >
                  <motion.div 
                    className="w-6 h-6 rounded bg-[#344F9F]/10 flex items-center justify-center"
                    variants={iconFloatOnce}
                  >
                    <div className="text-[#344F9F]">
                      {feature.icon}
                    </div>
                  </motion.div>
                  <span className="text-xs font-medium text-gray-700">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div ref={cardsRef}>
          <motion.div 
            initial="hidden"
            animate={isCardsInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                variants={fadeIn}
                custom={card.delay}
                className="group"
              >
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className={`relative ${card.bgColor} rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-200 h-full`}
                >
                  {/* Top Border */}
                  <div 
                    className="absolute top-0 left-0 w-full h-1 transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0"
                    style={{ backgroundColor: card.color }}
                  ></div>
                  
                  {/* Image Container */}
                  <div className="relative h-48 md:h-52 overflow-hidden">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                    
                    {/* Image */}
                    <motion.img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Icon Badge */}
                    <motion.div 
                      className="absolute top-3 right-3 z-20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isCardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: card.delay + 0.2 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center shadow-sm">
                        <div style={{ color: card.color }}>
                          {card.icon}
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Stats Badge */}
                    <div className="absolute bottom-3 left-3 z-20">
                      <div 
                        className="px-2 py-1 text-white text-xs font-medium rounded-md shadow-sm"
                        style={{ backgroundColor: card.color }}
                      >
                        {card.stats}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {card.description}
                    </p>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center gap-2 px-4 py-2 text-white font-medium rounded-lg transition-all duration-200 text-sm"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <span>Learn More</span>
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="mt-10 md:mt-14"
          >
            <div className="bg-white rounded-xl p-6 border border-gray-200 max-w-3xl mx-auto">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xl font-bold text-gray-900 mb-4 text-center"
              >
                Experience Campus Life
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-gray-600 text-sm mb-6 text-center max-w-xl mx-auto"
              >
                Join our vibrant community and make memories that last a lifetime
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
                  style={{ backgroundColor: primaryColor }}
                >
                  <span className="flex items-center gap-2 justify-center">
                    Explore All Programs
                    <FaArrowRight className="text-xs" />
                  </span>
                </motion.button>
                
                <button className="px-6 py-2.5 bg-white text-[#344F9F] font-semibold rounded-lg border border-[#344F9F] hover:bg-[#344F9F] hover:text-white transition-all duration-200 text-sm">
                  Schedule Campus Tour
                </button>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delay: 0.4 }
                  }
                }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200"
              >
                {[
                  { value: "50+", label: "Student Clubs" },
                  { value: "100+", label: "Annual Events" },
                  { value: "95%", label: "Satisfaction" },
                  { value: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="text-center"
                  >
                    <div className="text-xl font-bold text-[#344F9F] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Courses;