import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaEye, 
  FaEyeSlash, 
  FaEnvelope, 
  FaLock, 
  FaArrowLeft,
  FaUserPlus,
  FaSignature,
  FaPhone,
  FaBuilding,
  FaMapMarkerAlt,
  FaCheckCircle
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../AuthContext"; // Adjust path as needed

const SignUp = () => {
  const navigate = useNavigate();
  const { signup, loading: authLoading, error: authError } = useAuth();
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

    try {
      // Prepare data exactly as backend expects
      const signupData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword, // Backend needs this
        phone: formData.phone,
        companyName: formData.companyName,
        address: formData.address,
      };

      // Call the signup function from AuthContext
      const result = await signup(signupData);
      
      if (result.success) {
        // Show success toast with backend message
        toast.success(result.message || "Account created successfully!", {
          position: "top-right",
          autoClose: 3000,
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

        // Optional: You can store user data in context if needed
        // The backend returns user and agency data in result.data
        
        // Navigate to signin page after successful signup
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      } else {
        // Show error from backend
        toast.error(result.message || "Signup failed", {
          position: "top-right",
          autoClose: 4000,
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
      }

    } catch (error) {
      // Error is already set in AuthContext, but you can show it here too
      const errorMessage = authError || error.message || "Signup failed";
      
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 4000,
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
    } finally {
      setIsLoading(false);
    }
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
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

      {/* Main container */}
      <div className="container mx-auto px-3 min-h-screen flex items-center justify-center py-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/30">
            
            {/* Form Container */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="p-6 sm:p-8"
            >
              {/* Form Header */}
              <motion.div
                variants={itemVariants}
                className="text-center mb-6"
              >
                <div className="flex flex-col items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#344F9F] to-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <FaUserPlus className="text-white text-lg" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Create Agency Account
                  </h1>
                  <p className="text-gray-600 text-sm mt-1">
                    Register as agency administrator
                  </p>
                </div>
              </motion.div>

              {/* Compact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaSignature className="text-sm" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 ${
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
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaEnvelope className="text-sm" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="admin@agency.com"
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 ${
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
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Password Field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaLock className="text-sm" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      className={`w-full pl-10 pr-10 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 ${
                        errors.password 
                          ? "border-red-300 focus:ring-red-300/30" 
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#344F9F] transition-colors duration-200 p-1"
                    >
                      {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {errors.password && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.password}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Confirm Password Field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaLock className="text-sm" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className={`w-full pl-10 pr-10 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 ${
                        errors.confirmPassword 
                          ? "border-red-300 focus:ring-red-300/30" 
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#344F9F] transition-colors duration-200 p-1"
                    >
                      {showConfirmPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {errors.confirmPassword && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.confirmPassword}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Phone Field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaPhone className="text-sm" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 ${
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
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Company Name Field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaBuilding className="text-sm" />
                    </div>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your agency/company name"
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 ${
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
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.companyName}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Address Field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <FaMapMarkerAlt className="text-sm" />
                    </div>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your complete address"
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 ${
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
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.address}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Terms Agreement */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center h-5 mt-0.5">
                    <input
                      id="agreeTerms"
                      name="agreeTerms"
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#344F9F] bg-white border-gray-300 rounded focus:ring-[#344F9F]/20"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="agreeTerms" className="text-sm text-gray-700 cursor-pointer">
                      I agree to the{" "}
                      <Link to="/terms" className="text-[#344F9F] hover:text-blue-600 hover:underline font-medium">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-[#344F9F] hover:text-blue-600 hover:underline font-medium">
                        Privacy Policy
                      </Link>
                    </label>
                    <AnimatePresence>
                      {errors.agreeTerms && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.agreeTerms}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Password Requirements */}
                <motion.div
                  variants={itemVariants}
                  className="p-3 bg-blue-50 rounded-lg border border-blue-100"
                >
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Password Requirements:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2 text-xs" />
                      At least 6 characters
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2 text-xs" />
                      One uppercase letter (A-Z)
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2 text-xs" />
                      One number (0-9)
                    </li>
                  </ul>
                </motion.div>

                {/* Sign Up Button */}
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isLoading || authLoading}
                  className={`w-full py-3 px-4 bg-gradient-to-r from-[#344F9F] to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg ${
                    isLoading || authLoading
                      ? "opacity-90 cursor-not-allowed"
                      : "hover:from-blue-600 hover:to-[#344F9F]"
                  }`}
                >
                  {isLoading || authLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Creating Account...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FaUserPlus className="text-sm" />
                      CREATE ACCOUNT
                    </span>
                  )}
                </motion.button>

                {/* Already have account link */}
                <motion.div
                  variants={itemVariants}
                  className="text-center pt-2"
                >
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/signin"
                      className="text-[#344F9F] hover:text-blue-600 font-medium hover:underline transition-colors duration-200"
                    >
                      Sign In
                    </Link>
                  </p>
                </motion.div>
              </form>
            </motion.div>
          </div>

          {/* Minimal Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-6 pt-4 border-t border-gray-200/50"
          >
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Agency Portal. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <Link to="/privacy" className="text-xs text-gray-500 hover:text-[#344F9F] hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-gray-500 hover:text-[#344F9F] hover:underline">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-xs text-gray-500 hover:text-[#344F9F] hover:underline">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;