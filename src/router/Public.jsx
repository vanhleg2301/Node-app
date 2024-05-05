/* eslint-disable no-unused-vars */
import React from "react";
import Home from "../pages/Home";

export default function Public() {
  return {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { element: <Home />, path: "/" },
    ],
  };
}
