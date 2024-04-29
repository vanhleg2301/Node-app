/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import BlogPage from "../pages/BlogPage";
import NetWatch from "../pages/NetWatch";
import ProfilePage from "../pages/ProfilePage ";
import Payment from "../pages/Payment";
import Momo from "../components/PaymentMethods/Momo";
import VnPay from "../components/PaymentMethods/VnPay";
import PayPal from "../components/PaymentMethods/PayPal";
import Note from "../pages/Note";
import NoteList from "../components/Note/NoteList";
import NoteText from "../components/Note/NoteText";
import AuthProvider from "../context/AuthProvider";
import ErrorPage from "../pages/ErrorPage";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default function PublicRoute() {
  return {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Outlet />,
        children: [
          { index: true, element: <Home /> },
          { element: <Home />, path: "/" },
          { element: <BlogPage />, path: "/blog" },
          { element: <NetWatch />, path: "/netwatch" },
          { element: <ProfilePage />, path: "/profile" },
          {
            path: "/note",
            element: <Note />,
            children: [
              {
                path: "folders/:folderId",
                element: <NoteList />,
                children: [{ path: "note/:noteId", element: <NoteText /> }],
              },
            ],
          },
          {
            element: <Payment />,
            path: "/payment",
            children: [
              { path: "momo", element: <Momo /> },
              { path: "vnpay", element: <VnPay /> },
              { path: "paypal", element: <PayPal /> },
            ],
          },
        ],
      },
    ],
  };
}
