/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PublicRouteAuth() {
  const accessToken = localStorage.getItem("accessToken");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (accessToken) {
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
}
