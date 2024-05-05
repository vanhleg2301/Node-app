/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
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
import BlogDetailPage from "../pages/BlogDetailPage";
import Layout from "../context/Layout";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
};

export default function PublicRoute() {
  return {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Outlet />,
        children: [
          { element: <NetWatch />, path: "/netwatch" },
          { element: <ProfilePage />, path: "/profile" },
          { path: "/blog", element: <BlogPage /> },
          { path: "/blog/detail", element: <BlogDetailPage /> },

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
          { path: "/payment", element: <Payment /> },
          { path: "/payment/momo", element: <Momo /> },
          { path: "/payment/vnpay", element: <VnPay /> },
          { path: "/payment/paypal", element: <PayPal /> },
        ],
      },
    ],
  };
}
