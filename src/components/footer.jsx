import React, { useState, useEffect } from "react";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube, 
  FaInstagram,
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaChevronUp,
  FaGraduationCap,
  FaBookOpen,
  FaCalendarAlt,
  FaUserGraduate,
  FaArrowRight
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const primaryColor = "#344F9F";
  const primaryLight = "#4a6bc5";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show scroll top button when scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const socialLinks = [
    { Icon: FaFacebook, label: "Facebook", url: "#" },
    { Icon: FaTwitter, label: "Twitter", url: "#" },
    { Icon: FaLinkedin, label: "LinkedIn", url: "#" },
    { Icon: FaYoutube, label: "YouTube", url: "#" },
    { Icon: FaInstagram, label: "Instagram", url: "#" }
  ];

  const quickLinks = [
    { text: "About Institution", icon: <FaGraduationCap className="text-xs" /> },
    { text: "Academic Programs", icon: <FaBookOpen className="text-xs" /> },
    { text: "Faculty Directory", icon: <FaUserGraduate className="text-xs" /> },
    { text: "Student Portal", icon: <FaGraduationCap className="text-xs" /> },
    { text: "Research Centers", icon: <FaBookOpen className="text-xs" /> },
    { text: "Career Services", icon: <FaUserGraduate className="text-xs" /> }
  ];

  const resources = [
    { text: "Library Access", icon: <FaBookOpen className="text-xs" /> },
    { text: "Research Papers", icon: <FaGraduationCap className="text-xs" /> },
    { text: "Academic Calendar", icon: <FaCalendarAlt className="text-xs" /> },
    { text: "Campus Map", icon: <FaMapMarkerAlt className="text-xs" /> },
    { text: "IT Support", icon: <FaGraduationCap className="text-xs" /> },
    { text: "Student Handbook", icon: <FaBookOpen className="text-xs" /> }
  ];

  return (
    <footer 
      id="footer" 
      className="relative bg-white text-gray-600 border-t border-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Logo & Social */}
        <div className="py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-4">
                <img 
                  className="w-12 h-12 object-contain" 
                  src="/src/assets/logo.jpg"
                  alt="Strathmore University Logo" 
                />
              </div>
              <div className="max-w-xs">
                <h3 className="text-base font-bold text-gray-900 mb-2">Strathmore University</h3>
                <p className="text-xs text-gray-500">
                  Empowering future leaders through innovative education.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center lg:items-end gap-4">
              <h4 className="text-gray-900 font-semibold text-sm">Connect With Us</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className="group w-8 h-8 rounded-full bg-gray-100 hover:bg-[#344F9F] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.Icon className="text-xs" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-8 border-t border-gray-200">
          {/* Contact Column */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
              <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                <FaMapMarkerAlt className="text-[#344F9F] text-sm" />
              </div>
              <h3 className="text-gray-900 font-semibold text-sm">Contact Info</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center mr-2 flex-shrink-0">
                  <FaMapMarkerAlt className="text-[#344F9F] text-xs" />
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  123 Education Boulevard<br />
                  Academic City, Nairobi, Kenya
                </p>
              </div>
              <a href="tel:+254712345678" className="flex items-center hover:text-[#344F9F] transition-colors">
                <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center mr-2 flex-shrink-0">
                  <FaPhone className="text-[#344F9F] text-xs" />
                </div>
                <span className="text-gray-500 hover:text-[#344F9F] text-xs">
                  +254 712 345 678
                </span>
              </a>
              <a href="mailto:info@strathmore.edu" className="flex items-center hover:text-[#344F9F] transition-colors">
                <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center mr-2 flex-shrink-0">
                  <FaEnvelope className="text-[#344F9F] text-xs" />
                </div>
                <span className="text-gray-500 hover:text-[#344F9F] text-xs">
                  info@strathmore.edu
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
              <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                <FaGraduationCap className="text-[#344F9F] text-sm" />
              </div>
              <h3 className="text-gray-900 font-semibold text-sm">Quick Links</h3>
            </div>
            <ul className="space-y-2">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="flex items-center text-gray-500 hover:text-[#344F9F] transition-colors py-1 text-xs"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="w-5 h-5 mr-2 flex items-center justify-center text-[#344F9F]">
                      {item.icon}
                    </div>
                    <span className="flex-1">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
              <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                <FaBookOpen className="text-[#344F9F] text-sm" />
              </div>
              <h3 className="text-gray-900 font-semibold text-sm">Resources</h3>
            </div>
            <ul className="space-y-2">
              {resources.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="flex items-center text-gray-500 hover:text-[#344F9F] transition-colors py-1 text-xs"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className="w-5 h-5 mr-2 flex items-center justify-center text-[#344F9F]">
                      {item.icon}
                    </div>
                    <span className="flex-1">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
              <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                <FaEnvelope className="text-[#344F9F] text-sm" />
              </div>
              <h3 className="text-gray-900 font-semibold text-sm">Newsletter</h3>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                Subscribe for the latest updates and announcements.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#344F9F] focus:border-[#344F9F] transition-all text-xs"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#344F9F] hover:bg-[#4a6bc5] text-white font-medium py-2 px-4 rounded transition-all duration-200 text-xs"
                >
                  <span className="flex items-center justify-center gap-1">
                    Subscribe
                    <FaArrowRight className="text-xs" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-xs">
                © {currentYear} <span className="text-[#344F9F] font-medium">Strathmore University</span>. All rights reserved.
              </p>
            </div>
            
            {/* Policy Links */}
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <a href="#" className="text-gray-500 hover:text-[#344F9F] transition-colors duration-200">
                Privacy Policy
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-500 hover:text-[#344F9F] transition-colors duration-200">
                Terms of Service
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-500 hover:text-[#344F9F] transition-colors duration-200">
                Cookie Policy
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-500 hover:text-[#344F9F] transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 w-8 h-8 bg-[#344F9F] text-white rounded-full shadow flex items-center justify-center transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <FaChevronUp className="text-xs" />
      </button>
    </footer>
  );
};

export default Footer;