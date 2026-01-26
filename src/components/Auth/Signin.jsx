import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaEye, 
  FaEyeSlash, 
  FaEnvelope, 
  FaLock, 
  FaArrowLeft,
  FaUser,
  FaUniversity,
  FaSignInAlt,
  FaBook,
  FaChartLine,
  FaUsers,
  FaCalendarAlt
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    navigate("/dashboard")
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-200 bg-[radial-gradient(ellipse_at_center,rgba(52,79,159,0.05)_0%,transparent_70%)]"></div>
      </div>

      {/* Back to home link */}
      <Link 
        to="/"
        className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center text-black transition-colors duration-200 group z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-1.5"
        >
          <FaArrowLeft className="text-xs group-hover:-translate-x-0.5 transition-transform duration-200" />
          <span className="text-xs font-medium">Back</span>
        </motion.div>
      </Link>

      {/* Main container - Extremely compact */}
      <div className="container mx-auto px-3 min-h-screen flex items-center justify-center py-2">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-xl overflow-hidden border border-white/20">
            
            {/* Left Column - Minimal Brand Section */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-br from-[#1a365d] via-[#344F9F] to-blue-800 p-4 lg:p-5 flex flex-col"
            >
              {/* University Branding */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-white/10 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center">
                    <FaUniversity className="text-white text-base" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">University Portal</h2>
                    <p className="text-white/70 text-[10px]">Academic Excellence</p>
                  </div>
                </div>
                
                <h1 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                  Welcome Back
                </h1>
                <p className="text-white/80 text-xs">
                  Sign in to continue
                </p>
              </div>

              {/* Minimal Features List */}
              <div className="space-y-2 mt-2">
                {[
                  { icon: FaBook, text: "Courses" },
                  { icon: FaChartLine, text: "Progress" },
                  { icon: FaUsers, text: "Network" },
                  { icon: FaCalendarAlt, text: "Schedule" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-white/10 w-6 h-6 rounded-md flex items-center justify-center">
                      <feature.icon className="text-blue-200 text-xs" />
                    </div>
                    <span className="text-white/90 text-xs">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Minimal Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="p-4 lg:p-5"
            >
              {/* Form Header */}
              <motion.div
                variants={itemVariants}
                className="text-center mb-4"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaSignInAlt className="text-[#344F9F] text-base" />
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    Sign In
                  </h2>
                </div>
                <p className="text-gray-600 text-xs">
                  Access your dashboard
                </p>
              </motion.div>

              {/* Compact Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Email Field */}
                <motion.div variants={itemVariants} className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    EMAIL
                  </label>
                  <div className="relative">
                    <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaEnvelope className="text-xs" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@university.edu"
                      className={`w-full pl-8 pr-3 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-xs ${
                        errors.email 
                          ? "border-red-300 focus:ring-red-300/30" 
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-[10px] mt-0.5"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Password Field */}
                <motion.div variants={itemVariants} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      PASSWORD
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-[10px] text-[#344F9F] hover:text-blue-600 transition-colors duration-200 hover:underline"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaLock className="text-xs" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      className={`w-full pl-8 pr-8 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-xs ${
                        errors.password 
                          ? "border-red-300 focus:ring-red-300/30" 
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#344F9F] transition-colors duration-200 p-0.5"
                    >
                      {showPassword ? <FaEyeSlash className="text-xs" /> : <FaEye className="text-xs" />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {errors.password && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-[10px] mt-0.5"
                      >
                        {errors.password}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Remember Me */}
                <motion.div variants={itemVariants} className="flex items-center">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-3 h-3 text-[#344F9F] bg-gray-100 border-gray-300 rounded focus:ring-[#344F9F]/20"
                  />
                  <label htmlFor="rememberMe" className="ml-1.5 text-xs text-gray-700">
                    Remember me
                  </label>
                </motion.div>

                {/* Sign In Button */}
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-2 px-4 bg-gradient-to-r from-[#1a365d] to-[#344F9F] text-white font-semibold rounded-md transition-all duration-200 text-xs hover:shadow-sm ${
                    isLoading
                      ? "opacity-90 cursor-not-allowed"
                      : "hover:from-[#344F9F] hover:to-[#1a365d]"
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1.5"></div>
                      Signing in...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-1.5">
                      <FaSignInAlt className="text-[10px]" />
                      SIGN IN
                    </span>
                  )}
                </motion.button>
              </form>

              {/* New User Section - Minimal */}
              <motion.div
                variants={itemVariants}
                className="mt-4 p-3 bg-gradient-to-r from-blue-50/50 to-gray-50 rounded-md border border-gray-200"
              >
                <div className="text-center">
                  <h3 className="text-xs font-semibold text-gray-900 mb-1">
                    New here?
                  </h3>
                  <p className="text-gray-600 text-[10px] mb-2">
                    Sign up for new opportunities
                  </p>
                  <Link
                    to="/signup"
                    className="block w-full py-1.5 text-center bg-white text-[#344F9F] font-semibold rounded-md border border-[#344F9F] hover:bg-[#344F9F] hover:text-white transition-all duration-200 text-xs"
                  >
                    SIGN UP
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Minimal Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-3 pt-3 border-t border-gray-200/30"
          >
            <p className="text-[10px] text-gray-400">
              © {new Date().getFullYear()} University Portal
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-1">
              <Link to="/privacy" className="text-[10px] text-gray-500 hover:text-[#344F9F] hover:underline">
                Privacy
              </Link>
              <Link to="/terms" className="text-[10px] text-gray-500 hover:text-[#344F9F] hover:underline">
                Terms
              </Link>
              <Link to="/help" className="text-[10px] text-gray-500 hover:text-[#344F9F] hover:underline">
                Help
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;