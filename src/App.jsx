import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Scroll to top on route change
import ScrollToTop from "./components/ScrollToTop";

// Layouts
import PublicLayout from "./components/Layouts/PublicLayout";
import DashboardLayout from "./components/Admindashboard/DashboardLayout";

// Public Pages
import Home from "./components/Homepages/Index";
import SignIn from "./components/Auth/Signin";
import SignUp from "./components/Auth/Singup";
import ForgetPassword from "./components/Auth/ForgetPassword";

// Dashboard Pages
import DashboardHome from "./components/Admindashboard/DashboardHome/index";
import Communication from "./components/Admindashboard/Coummunication/Communication";
import Settings from "./components/Admindashboard/Administrations/Administrations";
import Modules from "./components/Admindashboard/Modules/Modules";
import Accounts from "./components/Admindashboard/Accounts/index";

const App = () => {
  return (
    <>
      {/* Scroll to top on every route change */}
      <ScrollToTop />

      <Routes>
        {/* ===== PUBLIC ROUTES ===== */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
        </Route>

        {/* ===== DASHBOARD ROUTES ===== */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Communication />} />
          <Route path="admin" element={<Settings />} />
          <Route path="modules" element={<Modules />} />
          <Route path="accounts" element={<Accounts />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
