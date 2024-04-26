/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import BlogPage from "../pages/BlogPage";
import NetWatch from "../pages/NetWatch";

export default function PublicRoute() {
  return {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <Home /> },
      { element: <Home />, path: "/register" },
      { element: <BlogPage />, path: "/blog" },
      { element: <NetWatch />, path: "/netwatch" },
    ],
  };
}
