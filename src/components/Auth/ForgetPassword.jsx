import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaArrowLeft,
  FaEnvelope,
  FaKey,
  FaUniversity,
  FaPaperPlane,
  FaShieldAlt,
  FaLock,
  FaClock,
  FaCheckCircle,
  FaLink
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../AuthContext"; // Import the AuthContext

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { forgotPassword, loading, error, clearError } = useAuth(); // Get auth context functions
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [localLoading, setLocalLoading] = useState(false); // Local loading state

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

  // Clear auth error when component mounts or when form changes
  useEffect(() => {
    clearError();
  }, [clearError]);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
      toast.error("Please enter a valid email address", {
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
    clearError();
    setLocalLoading(true);

    try {
      // Use the forgotPassword function from AuthContext
      const response = await forgotPassword(formData.email);

      if (response) {
        toast.success("Reset link sent to your email! Check your inbox.", {
          position: "top-right",
          autoClose: 4000,
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

        // Reset form
        setFormData({ email: "" });
        
        // Navigate to confirmation page or back to login after delay
        setTimeout(() => {
          navigate("/signin");
        }, 4000);
      }
    } catch (err) {
      // Error is already handled in the AuthContext, but we can show a toast here too
      const errorMessage = error || err.message || "Failed to send reset email";
      
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
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
      setLocalLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
    
    // Clear auth error when user starts typing
    if (error) {
      clearError();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-[#1a365d] relative overflow-hidden">
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

      {/* Main container - Same compact size as sign-in */}
      <div className="container mx-auto mt-5 px-3 min-h-screen flex items-center justify-center py-2">
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
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-white/10 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center">
                    <FaUniversity className="text-white text-base" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">University Portal</h2>
                    <p className="text-white/70 text-[10px]">Security & Recovery</p>
                  </div>
                </div>
                
                <h1 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                  Reset Password
                </h1>
                <p className="text-white/80 text-xs">
                  We'll send you a reset link
                </p>
              </div>

              {/* Security Tips - Mixed Icons and Emoji */}
              <div className="space-y-2 mt-2">
                {[
                  { icon: <FaLock className="text-blue-200 text-xs" />, text: "Secure reset process" },
                  { icon: <FaEnvelope className="text-blue-200 text-xs" />, text: "Email verification" },
                  { icon: <FaClock className="text-blue-200 text-xs" />, text: "Link expires in 1 hour" },
                  { icon: <FaCheckCircle className="text-blue-200 text-xs" />, text: "One-time use only" }
                ].map((tip, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-white/10 w-6 h-6 rounded-md flex items-center justify-center">
                      {tip.icon}
                    </div>
                    <span className="text-white/90 text-xs">{tip.text}</span>
                  </div>
                ))}
              </div>

              {/* Show error from auth context */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-2 bg-red-500/20 border border-red-500/30 rounded-md"
                >
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-red-300 text-xs" />
                    <p className="text-red-200 text-[10px]">
                      {error}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Back to sign in link */}
              <div className="mt-auto pt-4">
                <Link
                  to="/signin"
                  className="block text-center text-xs text-black transition-colors duration-200 hover:underline"
                >
                  Back to Sign In
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
                  <FaKey className="text-[#344F9F] text-base" />
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    Forgot Password?
                  </h2>
                </div>
                <p className="text-gray-600 text-xs">
                  Enter your email to get a reset link
                </p>
              </motion.div>

              {/* Compact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <motion.div variants={itemVariants} className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    EMAIL ADDRESS
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

                {/* Instructions */}
                <motion.div
                  variants={itemVariants}
                  className="p-2 bg-blue-50 rounded-md border border-blue-100"
                >
                  <p className="text-xs font-medium text-gray-700 mb-1">
                    Instructions:
                  </p>
                  <ul className="text-[10px] text-gray-600 space-y-0.5">
                    <li className="flex items-center">
                      <FaEnvelope className="text-gray-500 mr-1 text-[8px]" />
                      Check your email after submitting
                    </li>
                    <li className="flex items-center">
                      <FaLink className="text-gray-500 mr-1 text-[8px]" />
                      Click the reset link in the email
                    </li>
                    <li className="flex items-center">
                      <FaClock className="text-gray-500 mr-1 text-[8px]" />
                      Link expires in 1 hour
                    </li>
                  </ul>
                </motion.div>

                {/* Submit Button - Fixed text layout */}
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={localLoading || loading}
                  className={`w-full py-2 px-3 bg-gradient-to-r from-[#1a365d] to-[#344F9F] text-white font-semibold rounded-md transition-all duration-200 text-xs hover:shadow-sm whitespace-nowrap ${
                    (localLoading || loading)
                      ? "opacity-90 cursor-not-allowed"
                      : "hover:from-[#344F9F] hover:to-[#1a365d]"
                  }`}
                >
                  {(localLoading || loading) ? (
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending Link...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-1.5">
                      <FaPaperPlane className="text-[10px]" />
                      <span>SEND RESET LINK</span>
                    </div>
                  )}
                </motion.button>

                {/* Remember Password Link - Fixed one-line layout */}
                <motion.div
                  variants={itemVariants}
                  className="text-center"
                >
                  <p className="text-gray-600 text-xs whitespace-nowrap">
                    Remember your password?{" "}
                    <Link
                      to="/signin"
                      className="text-[#344F9F] hover:text-blue-600 font-semibold transition-colors duration-200 hover:underline inline-block"
                    >
                      Sign In
                    </Link>
                  </p>
                </motion.div>
              </form>

              {/* Security Note */}
              <motion.div
                variants={itemVariants}
                className="mt-4 p-2 bg-gray-50 rounded-md border border-gray-200"
              >
                <div className="flex items-start gap-2">
                  <FaShieldAlt className="text-green-500 text-xs mt-0.5 flex-shrink-0" />
                  <p className="text-[10px] text-gray-600">
                    Your security is our priority. We'll never share your email or personal information.
                  </p>
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
              <Link to="/security" className="text-[10px] text-gray-500 hover:text-[#344F9F] hover:underline">
                Security
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgetPassword;