import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Create axios instance with default config
  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Add request interceptor to attach token
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add response interceptor for error handling
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        // Server responded with error
        console.error("API Error:", error.response.data);
        
        // If token is invalid, clear local storage
        if (error.response.status === 401) {
          localStorage.removeItem("token");
          setUser(null);
        }
      } else if (error.request) {
        // Request made but no response
        console.error("Network Error:", error.request);
        setError("Network error. Please check your connection.");
      } else {
        // Something else happened
        console.error("Error:", error.message);
      }
      return Promise.reject(error);
    }
  );

  // Check authentication status on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkAuth();
    }
  }, []);

  // Signup function
  const signup = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/api/auth/signup", data);
      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
      }
      return res.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          err.response?.data?.error || 
                          err.message || 
                          "Signup failed";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/api/auth/login", data);
      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
      }
      return res.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          err.response?.data?.error || 
                          err.message || 
                          "Invalid credentials";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Forgot Password function
  const forgotPassword = async (email) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/api/auth/forgot-password", { email });
      // Store email in localStorage for resend functionality
      if (email) {
        localStorage.setItem("resetEmail", email);
      }
      return res.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          err.response?.data?.error || 
                          err.message || 
                          "Failed to send reset email";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Reset Password function
  const resetPassword = async (token, password, confirmPassword) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post(`/api/auth/reset-password/${token}`, {
        password,
        confirmPassword
      });
      // Clear stored email after successful reset
      localStorage.removeItem("resetEmail");
      return res.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          err.response?.data?.error || 
                          err.message || 
                          "Failed to reset password";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Resend verification email
  const resendVerificationEmail = async (email) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/api/auth/resend-verification", { email });
      return res.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          err.response?.data?.error || 
                          err.message || 
                          "Failed to resend verification email";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("resetEmail");
    setUser(null);
  };

  // Check authentication status
  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return null;
    }

    try {
      const res = await api.get("/api/auth/me");
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      localStorage.removeItem("token");
      localStorage.removeItem("resetEmail");
      setUser(null);
      return null;
    }
  };

  // Clear error
  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        signup,
        login,
        logout,
        forgotPassword,
        resetPassword,
        resendVerificationEmail,
        checkAuth,
        clearError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);