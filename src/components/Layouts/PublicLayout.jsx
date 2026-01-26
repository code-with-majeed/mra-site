import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../footer";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
