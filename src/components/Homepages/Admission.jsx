import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUniversity, 
  FaGraduationCap, 
  FaGlobeAmericas, 
  FaMapMarkerAlt,
  FaAward,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaChevronRight,
  FaBook,
  FaRocket
} from 'react-icons/fa';

const Admission = () => {
  // Color scheme matching navbar (#344F9F)
  const primaryColor = "#344F9F";
  const primaryLight = "#4a6bc5";
  const primaryDark = "#2a3f80";
  const accentColor = "#4a6bc5";

  const stats = [
    { number: '95%', label: 'Placement Rate', suffix: '+' },
    { number: '50', label: 'Nationalities', suffix: '+' },
    { number: '1:15', label: 'Faculty Ratio' },
    { number: '98%', label: 'Student Satisfaction' },
  ];

  const admissionProcess = [
    { step: '1', title: 'Application', desc: 'Submit online application', icon: <FaFileAlt /> },
    { step: '2', title: 'Documentation', desc: 'Upload required documents', icon: <FaBook /> },
    { step: '3', title: 'Review', desc: 'Admission committee review', icon: <FaUniversity /> },
    { step: '4', title: 'Interview', desc: 'Personal interview', icon: <FaUsers /> },
    { step: '5', title: 'Decision', desc: 'Admission decision', icon: <FaAward /> },
    { step: '6', title: 'Enrollment', desc: 'Complete enrollment', icon: <FaGraduationCap /> },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section 
      id="admissions"
      className="w-full min-h-screen bg-white py-8 md:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="text-center mb-10 md:mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#344F9F] flex items-center justify-center">
              <FaUniversity className="text-white text-sm" />
            </div>
            <span className="text-[#344F9F] font-medium text-xs tracking-wider uppercase">
              ADMISSIONS 2026
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Shape Your Future at{' '}
            <span className="text-[#344F9F]">Strathmore University</span>
          </h1>
          
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Join a legacy of excellence. Our admissions process identifies and nurtures 
            the next generation of leaders and innovators.
          </p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-10 md:mb-14"
        >
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6 text-center">
            Quick Access
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <FaUniversity className="text-base" />,
                title: "Faculties & Schools",
                desc: "12+ specialized departments",
                color: "#344F9F"
              },
              {
                icon: <FaGraduationCap className="text-base" />,
                title: "Research Centers",
                desc: "Research opportunities",
                color: "#4a6bc5"
              },
              {
                icon: <FaGlobeAmericas className="text-base" />,
                title: "International Students",
                desc: "Global community",
                color: "#2a3f80"
              },
              {
                icon: <FaMapMarkerAlt className="text-base" />,
                title: "Visit Campus",
                desc: "Schedule a tour",
                color: "#344F9F"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    >
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                        {item.desc}
                      </p>
                      <div className="flex items-center text-[#344F9F] text-xs font-medium group-hover:text-[#4a6bc5] transition-colors">
                        <span>Explore</span>
                        <FaChevronRight className="ml-1 text-xs group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-10 md:mb-14"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow transition-all duration-200 border border-gray-100"
              >
                <div className="text-xl md:text-2xl font-bold text-[#344F9F]">
                  {stat.number}
                  {stat.suffix && <span className="text-[#4a6bc5]">{stat.suffix}</span>}
                </div>
                <div className="text-gray-700 text-xs md:text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Admission Process */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-10 md:mb-14"
        >
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Admission <span className="text-[#344F9F]">Process</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-lg mx-auto">
              A straightforward 6-step journey to join our community
            </p>
          </div>

          {/* Mobile timeline */}
          <div className="sm:hidden">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {admissionProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative pl-8 pb-5 last:pb-0"
                >
                  <div 
                    className="absolute left-0 top-0 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {step.icon}
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[#344F9F]">{step.step}</span>
                      <h3 className="text-sm font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-xs mb-1">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet timeline */}
          <div className="hidden sm:block">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-y-8">
                {admissionProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`relative ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                  >
                    <div 
                      className={`absolute top-3 w-7 h-7 rounded-full border-2 border-white flex items-center justify-center ${
                        index % 2 === 0 ? 'right-[-14px]' : 'left-[-14px]'
                      }`}
                      style={{ backgroundColor: primaryColor }}
                    >
                      {step.icon}
                    </div>
                    
                    <div className={`bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow transition-shadow duration-200 ${
                      index % 2 === 0 ? 'mr-2' : 'ml-2'
                    }`}>
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                        <span className="text-xs font-bold text-[#344F9F]">{step.step}</span>
                        <h3 className="text-sm font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className={`text-gray-600 text-xs ${index % 2 === 0 ? 'text-right' : ''}`}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Dates Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="mb-10 md:mb-14"
        >
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Key <span className="text-[#344F9F]">Dates</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-lg mx-auto">
              Important deadlines for 2026 intake
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                date: "Jan 15, 2024",
                title: "Early Application",
                desc: "Priority consideration",
              },
              {
                date: "Mar 30, 2024",
                title: "Regular Decision",
                desc: "Final deadline",
              },
              {
                date: "May 15, 2024",
                title: "Late Applications",
                desc: "Space-available basis",
              },
              {
                date: "Aug 25, 2024",
                title: "Orientation",
                desc: "Welcome new students",
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -2 }}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                    <FaCalendarAlt className="text-[#344F9F] text-xs" />
                  </div>
                  <div className="text-xs font-medium text-[#344F9F]">{item.date}</div>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div 
            className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
            style={{ backgroundColor: primaryColor }}
          >
            <div className="relative p-6 md:p-8">
              <div className="max-w-2xl mx-auto text-center">
                <motion.div
                  variants={scaleIn}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto mb-4"
                >
                  <FaRocket className="text-[#344F9F] text-base" />
                </motion.div>
                
                <motion.h2 
                  variants={fadeIn}
                  className="text-xl md:text-2xl font-bold text-white mb-3"
                >
                  Start Your Academic Journey
                </motion.h2>
                
                <motion.p 
                  variants={fadeIn}
                  className="text-blue-100 text-sm mb-6 max-w-lg mx-auto"
                >
                  Join a community of successful alumni. Applications now open for 2024 intake.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group px-5 py-2.5 bg-white text-[#344F9F] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
                  >
                    <span className="flex items-center gap-2 text-sm">
                      Start Application
                      <FaChevronRight className="group-hover:translate-x-1 transition-transform text-xs" />
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-2.5 bg-transparent text-white font-semibold rounded-lg border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-200 text-sm"
                  >
                    Download Brochure
                  </motion.button>
                </motion.div>
                
                <motion.p 
                  variants={fadeIn}
                  className="text-blue-200 mt-6 text-xs flex items-center justify-center gap-1"
                >
                  <FaCalendarAlt className="text-xs" />
                  <span>Early Decision Deadline: Dec 15, 2024</span>
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Admission;