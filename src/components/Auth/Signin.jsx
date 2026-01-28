import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaArrowLeft,
  FaUniversity,
  FaBook,
  FaChartLine,
  FaUsers,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaServer
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../components/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { login, error, clearError, loading, testConnection } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Clear auth error when component mounts
  useEffect(() => {
    clearError();
    setAuthError("");
  }, [clearError]);

  // Update local auth error when context error changes
  useEffect(() => {
    if (error) {
      setAuthError(error);
    }
  }, [error]);

  // Test connection on mount
  useEffect(() => {
    const testServerConnection = async () => {
      setIsConnecting(true);
      try {
        const result = await testConnection();
        if (!result.success) {
          console.warn("Server connection test failed:", result);
        }
      } catch (err) {
        console.error("Connection test error:", err);
      } finally {
        setIsConnecting(false);
      }
    };
    
    testServerConnection();
  }, []);

  const validateForm = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      errs.password = "Password is required";
    } else if (formData.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      toast.error("Please fix the form errors", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setErrors({});
    setAuthError("");
    clearError();

    try {
      console.log("Attempting login with:", formData.email);
      
      const result = await login(formData);
      
      console.log("Login result:", result);
      
      if (result.success) {
        toast.success(result.message || "Login successful! Redirecting...", {
          position: "top-right",
          autoClose: 2000,
          style: {
            background: '#059669',
            color: 'white'
          }
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        throw new Error(result.message || "Login failed");
      }
      
    } catch (err) {
      console.error("Login catch error:", err);
      
      let errorMessage = err.message || "Invalid email or password";
      
      // Specific error handling
      if (errorMessage.includes("Network Error") || errorMessage.includes("timeout")) {
        errorMessage = "Cannot connect to server. Please check if backend is running on http://localhost:5000";
      } else if (errorMessage.includes("404")) {
        errorMessage = "API endpoint not found. Check backend routes.";
      } else if (errorMessage.includes("500")) {
        errorMessage = "Server error. Please try again later.";
      }
      
      setAuthError(errorMessage);
      
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        style: {
          background: '#dc2626',
          color: 'white'
        }
      });
      
      // Debug info
      console.log("Login attempt failed:", {
        email: formData.email,
        error: errorMessage,
        timestamp: new Date().toISOString()
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear field-specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
    
    // Clear auth error when user starts typing
    if (authError) {
      setAuthError("");
      clearError();
    }
  };

  const handleTestConnection = async () => {
    setIsConnecting(true);
    try {
      const result = await testConnection();
      if (result.success) {
        toast.success(`Connected to server: ${result.url}`, {
          position: "top-right",
          autoClose: 3000,
        });
        console.log("Connection test successful:", result);
      } else {
        toast.error(`Connection failed: ${result.error}`, {
          position: "top-right",
          autoClose: 5000,
        });
        console.error("Connection test failed:", result);
      }
    } catch (err) {
      toast.error("Connection test error", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsConnecting(false);
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

      {/* Connection Status */}
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={handleTestConnection}
          disabled={isConnecting}
          className="flex items-center gap-1.5 px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white hover:bg-white/30 transition-colors"
        >
          <FaServer className={`text-xs ${isConnecting ? 'animate-pulse' : ''}`} />
          {isConnecting ? "Testing..." : "Test Connection"}
        </button>
      </div>

      {/* Main container */}
      <div className="container mx-auto px-3 min-h-screen flex items-center justify-center py-2">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-xl overflow-hidden border border-white/20">
            
            {/* Header with Gradient */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-[#1a365d] to-[#344F9F] p-5 text-white"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/10 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center">
                  <FaUniversity className="text-white text-lg" />
                </div>
                <div>
                  <h2 className="text-sm font-bold">University Portal</h2>
                  <p className="text-white/70 text-[10px]">Academic Management System</p>
                </div>
              </div>
              
              <h1 className="text-xl sm:text-2xl font-bold mb-1 leading-tight">
                Welcome Back
              </h1>
              <p className="text-white/80 text-xs">
                Sign in to access your dashboard
              </p>
            </motion.div>

            {/* Auth Error Message */}
            <AnimatePresence>
              {authError && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-5 pt-4"
                >
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <FaExclamationTriangle className="text-red-500 text-sm flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-red-600 text-xs font-medium">
                        {authError}
                      </p>
                      {(authError.includes("Network Error") || authError.includes("Cannot connect")) && (
                        <div className="mt-1 space-y-0.5">
                          <p className="text-red-500 text-[10px]">
                            Make sure your backend server is running:
                          </p>
                          <code className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded">
                            npm run dev
                          </code>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              {/* Email Field */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="student@university.edu"
                    disabled={loading}
                    className={`w-full pl-9 pr-3 py-2.5 bg-gray-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-sm ${
                      errors.email 
                        ? "border-red-300 focus:ring-red-300/30" 
                        : "border-gray-300 hover:border-gray-400"
                    } ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
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
              </div>

              {/* Password Field */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    PASSWORD
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-[10px] text-[#344F9F] hover:text-blue-600 font-medium transition-colors duration-200 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FaLock className="text-xs" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    disabled={loading}
                    className={`w-full pl-9 pr-9 py-2.5 bg-gray-50 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#344F9F]/30 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 text-sm ${
                      errors.password 
                        ? "border-red-300 focus:ring-red-300/30" 
                        : "border-gray-300 hover:border-gray-400"
                    } ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  />
                  <button
                    type="button"
                    disabled={loading}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#344F9F] transition-colors duration-200"
                    onClick={() => setShowPassword(!showPassword)}
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
              </div>

              {/* Sign In Button */}
              <motion.button
                whileHover={{ scale: loading ? 1 : 1.01 }}
                whileTap={{ scale: loading ? 1 : 0.99 }}
                type="submit"
                disabled={loading}
                className={`w-full py-2.5 px-4 bg-gradient-to-r from-[#1a365d] to-[#344F9F] text-white font-semibold rounded-md transition-all duration-200 text-sm hover:shadow-sm ${
                  loading
                    ? "opacity-90 cursor-not-allowed"
                    : "hover:from-[#344F9F] hover:to-[#1a365d]"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-1.5">
                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Signing In...
                  </div>
                ) : (
                  "SIGN IN"
                )}
              </motion.button>

              {/* Sign Up Link */}
              <div className="text-center pt-2">
                <p className="text-gray-600 text-xs">
                  New here?{" "}
                  <Link
                    to="/signup"
                    className="text-[#344F9F] hover:text-blue-600 font-semibold transition-colors duration-200 hover:underline"
                  >
                    Create an account
                  </Link>
                </p>
              </div>

              {/* Debug Info (Remove in production) */}
              <div className="pt-2 border-t border-gray-200">
                <details className="text-[10px]">
                  <summary className="text-gray-500 cursor-pointer">Debug Info</summary>
                  <div className="mt-1 p-2 bg-gray-50 rounded text-gray-600">
                    <p>Server: {import.meta.env.VITE_API_URL || "http://localhost:5000"}</p>
                    <p>Token: {localStorage.getItem("token") ? "Exists" : "None"}</p>
                    <button
                      type="button"
                      onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                      }}
                      className="mt-1 px-2 py-0.5 bg-red-100 text-red-700 rounded text-[10px]"
                    >
                      Clear Storage & Reload
                    </button>
                  </div>
                </details>
              </div>

              {/* Features/Info */}
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs font-medium text-gray-700 mb-2">
                  Access all features:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: <FaBook className="text-[#344F9F] text-xs" />, text: "Course Management" },
                    { icon: <FaChartLine className="text-[#344F9F] text-xs" />, text: "Grades & Analytics" },
                    { icon: <FaUsers className="text-[#344F9F] text-xs" />, text: "Student Network" },
                    { icon: <FaCalendarAlt className="text-[#344F9F] text-xs" />, text: "Schedule Planner" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      {feature.icon}
                      <span className="text-[10px] text-gray-600">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </form>

            {/* Footer */}
            <div className="px-5 pb-4 pt-3 border-t border-gray-200">
              <p className="text-[10px] text-gray-400 text-center">
                © {new Date().getFullYear()} University Portal. All rights reserved.
              </p>
              <div className="flex justify-center gap-3 mt-1">
                <Link to="/privacy" className="text-[10px] text-gray-500 hover:text-[#344F9F] hover:underline">
                  Privacy
                </Link>
                <Link to="/terms" className="text-[10px] text-gray-500 hover:text-[#344F9F] hover:underline">
                  Terms
                </Link>
                <Link to="/support" className="text-[10px] text-gray-500 hover:text-[#344F9F] hover:underline">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;