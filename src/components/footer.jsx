import React, { useState, useEffect } from "react";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaChevronUp,
  FaArrowRight
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    { Icon: FaLinkedin, label: "LinkedIn", url: "#" }
  ];

  const quickLinks = [
    { text: "About Us", url: "#" },
    { text: "Services", url: "#" },
    { text: "Contact", url: "#" },
    { text: "Privacy Policy", url: "#" }
  ];

  const resources = [
    { text: "Support", url: "#" },
    { text: "Documentation", url: "#" },
    { text: "API", url: "#" },
    { text: "Status", url: "#" }
  ];

  return (
    <footer 
      id="footer" 
      className="relative bg-white text-gray-600 border-t border-gray-200"
    >
      <div className="container mx-auto px-4 py-6">
        {/* Main Content Grid - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">SU</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Agency Portal</h3>
                <p className="text-xs text-gray-500">Professional Agency Management</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-3">
              Streamline your agency operations with our comprehensive management platform.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="w-7 h-7 rounded bg-gray-100 hover:bg-blue-50 text-gray-500 hover:text-blue-600 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.Icon className="text-xs" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.url}
                    className="text-xs text-gray-500 hover:text-blue-600 transition-colors hover:underline"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.url}
                    className="text-xs text-gray-500 hover:text-blue-600 transition-colors hover:underline"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">Contact</h4>
            <div className="space-y-3 mb-4">
              <a href="tel:+254712345678" className="flex items-center text-xs text-gray-500 hover:text-blue-600 transition-colors">
                <FaPhone className="mr-2 text-xs text-blue-500" />
                +254 712 345 678
              </a>
              <a href="mailto:info@agency.com" className="flex items-center text-xs text-gray-500 hover:text-blue-600 transition-colors">
                <FaEnvelope className="mr-2 text-xs text-blue-500" />
                info@agency.com
              </a>
              <div className="flex items-start text-xs text-gray-500">
                <FaMapMarkerAlt className="mr-2 text-xs text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            {/* Compact Newsletter */}
            <div>
              <p className="text-xs font-medium text-gray-700 mb-2">Stay Updated</p>
              <form onSubmit={handleSubmit} className="flex gap-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 px-3 py-1.5 bg-gray-50 border border-gray-300 rounded text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                >
                  <FaArrowRight className="text-xs" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Minimal */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {currentYear} Agency Portal. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Privacy
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Terms
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 w-8 h-8 bg-blue-600 text-white rounded-full shadow flex items-center justify-center transition-all duration-300 z-50 ${
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