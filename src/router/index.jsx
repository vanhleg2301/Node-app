/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";
import Note from "../pages/Note";
import PublicRoute from "./PublicRoute";
import Payment from "../pages/Payment";
import Momo from "../components/PaymentMethods/Momo";
import VnPay from "../components/PaymentMethods/VnPay";
import PayPal from "../components/PaymentMethods/PayPal";
import { LanguageProvider } from "../context/LanguageProvider";

const AuthLayout = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </LanguageProvider>
  );
};

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Login />, path: "/login" },

      {
        element: <ProtectedRoute />,
        children: [
          { element: <Home />, path: "/" },
          { element: <Payment />, path: "/payment" },
          { element: <Momo />, path: "/payment/momo" },
          { element: <VnPay />, path: "/payment/vnpay" },
          { element: <PayPal />, path: "/payment/paypal" },
          { element: <Home />, path: "/profile" },
          { element: <Note />, path: "/note" },
        ],
      },
    ],
  },
  PublicRoute(),
]);
