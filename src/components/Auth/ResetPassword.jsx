import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { 
  FaArrowLeft,
  FaLock,
  FaUniversity,
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaSync,
  FaExclamationTriangle
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./AuthContext"; // Import the AuthContext

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { resetPassword, forgotPassword, loading, error, clearError } = useAuth(); // Get auth context functions
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [localLoading, setLocalLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [storedEmail, setStoredEmail] = useState("");

  useEffect(() => {
    // Get stored email when component mounts
    const email = localStorage.getItem("resetEmail");
    if (email) {
      setStoredEmail(email);
    }
    
    // Clear any existing auth errors
    clearError();
  }, [clearError]);

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

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
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
    clearError();
    setLocalLoading(true);

    try {
      // Use the resetPassword function from AuthContext
      const response = await resetPassword(token, formData.password, formData.confirmPassword);

      if (response) {
        toast.success("Password reset successfully! Redirecting to login...", {
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

        // Clear stored email
        localStorage.removeItem("resetEmail");
        
        // Wait for toast to show, then navigate
        setTimeout(() => {
          navigate("/signin");
        }, 3000);
      }
    } catch (err) {
      console.error("Reset password error:", err);
      
      let errorMessage = error || err.message || "Failed to reset password. Please try again.";
      
      if (err.response) {
        if (err.response.status === 400 || err.response.status === 401) {
          errorMessage = "Invalid or expired reset link. Please request a new one.";
          
          toast.info("Your reset link may have expired. Try resending the email.", {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            style: {
              background: '#3b82f6',
              color: 'white'
            }
          });
        }
      }
      
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

  const handleResendEmail = async () => {
    if (!storedEmail) {
      toast.info("Please request a new password reset from the sign-in page.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          background: '#3b82f6',
          color: 'white'
        }
      });
      return;
    }

    setIsResending(true);
    clearError();
    
    try {
      // Use the forgotPassword function from AuthContext for resending
      const response = await forgotPassword(storedEmail);

      if (response) {
        toast.success("Reset link sent to your email!", {
          position: "top-right",
          autoClose: 5000,
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
      }
    } catch (err) {
      console.error("Resend email error:", err);
      
      let errorMessage = error || err.message || "Failed to resend reset link. Please try again.";
      
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
      setIsResending(false);
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

      {/* Main container */}
      <div className="container mx-auto px-3 min-h-screen flex items-center justify-center py-2">
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
                    <p className="text-white/70 text-[10px]">Secure Reset</p>
                  </div>
                </div>
                
                <h1 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                  Set New Password
                </h1>
                <p className="text-white/80 text-xs">
                  Create a strong, secure password
                </p>
              </div>

              {/* Show error from auth context */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-3 p-2 bg-red-500/20 border border-red-500/30 rounded-md"
                >
                  <div className="flex items-center gap-2">
                    <FaExclamationTriangle className="text-red-300 text-xs" />
                    <p className="text-red-200 text-[10px]">
                      {error}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Security Tips */}
              <div className="space-y-2 mt-2">
                {[
                  { icon: "🔒", text: "Strong password required" },
                  { icon: "✅", text: "Uppercase letter" },
                  { icon: "🔢", text: "Include numbers" },
                  { icon: "🔄", text: "Password confirmation" }
                ].map((tip, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-white/10 w-6 h-6 rounded-md flex items-center justify-center">
                      <span className="text-xs">{tip.icon}</span>
                    </div>
                    <span className="text-white/90 text-xs">{tip.text}</span>
                  </div>
                ))}
              </div>

              {/* Resend Link Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleResendEmail}
                disabled={isResending || !storedEmail}
                className="mt-4 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs py-2 px-3 rounded-md transition-all duration-200 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isResending ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaSync className="text-[10px]" />
                    Resend Reset Link
                  </>
                )}
              </motion.button>

              {/* Warning if no email stored */}
              {!storedEmail && (
                <div className="mt-3 p-2 bg-yellow-500/20 border border-yellow-500/30 rounded-md">
                  <div className="flex items-center gap-2">
                    <FaExclamationTriangle className="text-yellow-300 text-xs" />
                    <p className="text-yellow-200 text-[10px]">
                      Email not found. Please request a new reset.
                    </p>
                  </div>
                </div>
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
                  <FaLock className="text-[#344F9F] text-base" />
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    Reset Password
                  </h2>
                </div>
                <p className="text-gray-600 text-xs">
                  Create a new secure password
                </p>
              </motion.div>

              {/* Compact Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Password Field */}
                <motion.div variants={itemVariants} className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    NEW PASSWORD
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
                      placeholder="Enter new password"
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
                      placeholder="Confirm new password"
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

                {/* Password Requirements */}
                <motion.div
                  variants={itemVariants}
                  className="p-2 bg-blue-50 rounded-md border border-blue-100"
                >
                  <p className="text-xs font-medium text-gray-700 mb-1">
                    Password must contain:
                  </p>
                  <ul className="text-[10px] text-gray-600 space-y-0.5">
                    <li className={`flex items-center ${formData.password.length >= 6 ? 'text-green-500' : ''}`}>
                      <FaCheckCircle className={`mr-1 text-[8px] ${formData.password.length >= 6 ? 'text-green-500' : 'text-gray-400'}`} />
                      At least 6 characters
                    </li>
                    <li className={`flex items-center ${/(?=.*[A-Z])/.test(formData.password) ? 'text-green-500' : ''}`}>
                      <FaCheckCircle className={`mr-1 text-[8px] ${/(?=.*[A-Z])/.test(formData.password) ? 'text-green-500' : 'text-gray-400'}`} />
                      One uppercase letter (A-Z)
                    </li>
                    <li className={`flex items-center ${/(?=.*[0-9])/.test(formData.password) ? 'text-green-500' : ''}`}>
                      <FaCheckCircle className={`mr-1 text-[8px] ${/(?=.*[0-9])/.test(formData.password) ? 'text-green-500' : 'text-gray-400'}`} />
                      One number (0-9)
                    </li>
                  </ul>
                </motion.div>

                {/* Reset Button */}
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={localLoading || loading}
                  className={`w-full py-2 px-4 bg-gradient-to-r from-[#1a365d] to-[#344F9F] text-white font-semibold rounded-md transition-all duration-200 text-xs hover:shadow-sm ${
                    (localLoading || loading)
                      ? "opacity-90 cursor-not-allowed"
                      : "hover:from-[#344F9F] hover:to-[#1a365d]"
                  }`}
                >
                  {(localLoading || loading) ? (
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1.5"></div>
                      Resetting Password...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-1.5">
                      <FaCheckCircle className="text-[10px]" />
                      RESET PASSWORD
                    </span>
                  )}
                </motion.button>

                {/* Remember Password Link */}
                <motion.div
                  variants={itemVariants}
                  className="text-center mt-2"
                >
                  <p className="text-gray-600 text-xs">
                    Remember your password?{" "}
                    <Link
                      to="/signin"
                      className="text-[#344F9F] hover:text-blue-600 font-semibold transition-colors duration-200 hover:underline"
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
                  <FaShieldAlt className="text-green-500 text-xs mt-0.5" />
                  <p className="text-[10px] text-gray-600">
                    Your new password will be securely encrypted. For your security, avoid using common passwords.
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

export default ResetPassword;