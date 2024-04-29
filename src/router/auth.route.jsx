/* eslint-disable no-unused-vars */
import React from "react";
import Login from "../pages/Login";
import PublicRouteAuth from "./PublicRouteAuth";
import { Navigate, Outlet } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import ErrorPage from "../pages/ErrorPage";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default function authRoute() {
  return {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PublicRouteAuth />,
        children: [
          { index: true, element: <Navigate to="/login" /> }, // Navigate to "/login"
          {
            path: "login", // Corrected zpath to "login"
            element: <Login />,
          },
        ],
      },
    ],
  };
}
