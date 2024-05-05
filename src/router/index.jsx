/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";
import AuthorizationRoute from "./AuthorizationRoute";
import Admin from "../Admin/components/Admin";
import authRoute from "./auth.route";
import PublicRoute from "./PublicRoute";
import Public from "./Public";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <AuthorizationRoute roles={["UT5inrpIuaPOv94Blum8z9fEjFI2"]}>
        <Outlet />
      </AuthorizationRoute>
    </AuthProvider>
  );
};

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [{ element: <Admin />, path: "/admin" }],
      },
    ],
  },
  Public(),
  PublicRoute(),
  authRoute(),
]);
