import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaEye, 
  FaEyeSlash, 
  FaEnvelope, 
  FaLock, 
  FaArrowLeft,
  FaUniversity,
  FaUserPlus,
  FaSignature,
  FaPhone,
  FaBuilding,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaBook,
  FaChartLine,
  FaUsers,
  FaCalendarAlt,
  FaGraduationCap,
  FaUserTie
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    companyName: "",
    address: "",
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
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
    const phoneRegex = /^[+]?[0-9]{10,15}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/(?=.*[A-Z])(?=.*[0-9])/.test(formData.password)) {
      newErrors.password = "Password must contain at least one uppercase letter and one number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company/Institution name is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
      // Show error toast
      toast.error("Please fix the errors in the form", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          background: '#dc2626',
          color: 'white'
        }
      });
      
      return;
    }

    setErrors({});
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    
    // Show success toast
    toast.success("Account created successfully! Redirecting...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        background: '#059669',
        color: 'white'
      }
    });

    // Wait for toast to show, then navigate
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
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
    <div className="min-h-screen  bg-gray-200 relative overflow-hidden">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      {/* Minimal background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,79,159,0.05)_0%,transparent_70%)]"></div>
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

      {/* Main container - Same compact size as sign-in */}
      <div className="container mx-auto px-3 min-h-screen flex items-center mt-10 justify-center py-2">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-xl overflow-hidden border border-white/20">
            
            {/* Left Column - Brand Section */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-br from-[#1a365d] via-[#344F9F] to-blue-800 p-4 lg:p-5 flex flex-col"
            >
              {/* University Branding */}
              <div className="mb-4 mt-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-white/10 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center">
                    <FaUniversity className="text-white text-base" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">University Portal</h2>
                    <p className="text-white/70 text-[10px]">Join Our Community</p>
                  </div>
                </div>
                
                <h1 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                  Create Account
                </h1>
                <p className="text-white/80 text-xs">
                  Start your academic journey with us
                </p>
              </div>

              {/* Benefits List with React Icons */}
              <div className="space-y-2 mt-3">
                {[
                  { icon: FaGraduationCap, text: "Access all courses" },
                  { icon: FaBook, text: "Digital library" },
                  { icon: FaUserTie, text: "Expert faculty" },
                  { icon: FaChartLine, text: "Career services" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-white/10 w-6 h-6 rounded-md flex items-center justify-center">
                      <benefit.icon className="text-blue-200 text-xs" />
                    </div>
                    <span className="text-white/90 text-xs">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Already have account link */}
              <div className="mt-auto pt-5">
                <Link
                  to="/signin"
                  className="block text-center text-xs text-blue-200 hover:text-white transition-colors duration-200 hover:underline"
                >
                  Already have an account? Sign In
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Form */}
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
                  <FaUserPlus className="text-[#344F9F] text-base" />
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    Sign Up
                  </h2>
                </div>
                <p className="text-gray-600 text-xs">
                  Create your student account
                </p>
              </motion.div>

              {/* Compact Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Field */}
                <motion.div variants={itemVariants} className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    FULL NAME
                  </label>
                  <div className="relative">
                    <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaSignature className="text-xs" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full pl-8 pr-3 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-xs ${
                        errors.name 
                          ? "border-red-300 focus:ring-red-300/30" 
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-[10px] mt-0.5"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

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
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    PASSWORD
                  </label>
                  <div className="relative">
                    <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaLock className="text-xs" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
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

                {/* Confirm Password Field */}
                <motion.div variants={itemVariants} className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    CONFIRM PASSWORD
                  </label>
                  <div className="relative">
                    <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaLock className="text-xs" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className={`w-full pl-8 pr-8 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-xs ${
                        errors.confirmPassword 
                          ? "border-red-300 focus:ring-red-300/30" 
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#344F9F] transition-colors duration-200 p-0.5"
                    >
                      {showConfirmPassword ? <FaEyeSlash className="text-xs" /> : <FaEye className="text-xs" />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {errors.confirmPassword && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-[10px] mt-0.5"
                      >
                        {errors.confirmPassword}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Phone Field */}
                <motion.div variants={itemVariants} className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    PHONE
                  </label>
                  <div className="relative">
                    <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaPhone className="text-xs" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className={`w-full pl-8 pr-3 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-xs ${
                        errors.phone 
                          ? "border-red-300 focus:ring-red-300/30" 
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-[10px] mt-0.5"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Company/Institution Field */}
                <motion.div variants={itemVariants} className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    INSTITUTION
                  </label>
                  <div className="relative">
                    <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaBuilding className="text-xs" />
                    </div>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="University/Company name"
                      className={`w-full pl-8 pr-3 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-xs ${
                        errors.companyName 
                          ? "border-red-300 focus:ring-red-300/30" 
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.companyName && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-[10px] mt-0.5"
                      >
                        {errors.companyName}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Address Field */}
                <motion.div variants={itemVariants} className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    ADDRESS
                  </label>
                  <div className="relative">
                    <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaMapMarkerAlt className="text-xs" />
                    </div>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your complete address"
                      className={`w-full pl-8 pr-3 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-xs ${
                        errors.address 
                          ? "border-red-300 focus:ring-red-300/30" 
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {errors.address && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-[10px] mt-0.5"
                      >
                        {errors.address}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Terms Agreement */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-start space-x-2 p-2 bg-gray-50 rounded-md border border-gray-200"
                >
                  <div className="flex items-center h-5">
                    <input
                      id="agreeTerms"
                      name="agreeTerms"
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="w-3 h-3 text-[#344F9F] bg-gray-100 border-gray-300 rounded focus:ring-[#344F9F]/20"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="agreeTerms" className="text-xs text-gray-700 cursor-pointer">
                      I agree to the{" "}
                      <Link to="/terms" className="text-[#344F9F] hover:text-blue-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-[#344F9F] hover:text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                    <AnimatePresence>
                      {errors.agreeTerms && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-red-500 text-[10px] mt-0.5"
                        >
                          {errors.agreeTerms}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Sign Up Button */}
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
                      Creating Account...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-1.5">
                      <FaUserPlus className="text-[10px]" />
                      CREATE ACCOUNT
                    </span>
                  )}
                </motion.button>

                {/* Password Requirements */}
                <motion.div
                  variants={itemVariants}
                  className="p-2 bg-blue-50 rounded-md border border-blue-100"
                >
                  <p className="text-xs font-medium text-gray-700 mb-1">
                    Password must contain:
                  </p>
                  <ul className="text-[10px] text-gray-600 space-y-0.5">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-1 text-[8px]" />
                      At least 6 characters
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-1 text-[8px]" />
                      One uppercase letter (A-Z)
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-1 text-[8px]" />
                      One number (0-9)
                    </li>
                  </ul>
                </motion.div>
              </form>
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
              <Link to="/contact" className="text-[10px] text-gray-500 hover:text-[#344F9F] hover:underline">
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;