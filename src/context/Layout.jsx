/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/header/Header";
import BackToTop from "../components/BackToTop/BackToTop";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <BackToTop />
      <Outlet />
      <Footer />
    </>
  );
}
