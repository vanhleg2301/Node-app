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
import ProfilePage from "../pages/ProfilePage ";
import NoteList from "../components/Note/NoteList";
import NoteText from "../components/Note/NoteText";
import AuthorizationRoute from "./AuthorizationRoute";
import Admin from "../Admin/components/Admin";

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
          { element: <Admin />, path: "/admin" },
          { element: <ProfilePage />, path: "/profile" },
          { element: <Payment />, path: "/payment" },
          { element: <Momo />, path: "/payment/momo" },
          { element: <VnPay />, path: "/payment/vnpay" },
          { element: <PayPal />, path: "/payment/paypal" },
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
        ],
      },
    ],
  },
  PublicRoute(),
]);
