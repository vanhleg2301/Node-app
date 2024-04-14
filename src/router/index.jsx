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

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
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
          { element: <Home />, path: "/profile" },
          { element: <Note />, path: "/note" },
        ],
      },
    ],
  },
  PublicRoute(),
]);
