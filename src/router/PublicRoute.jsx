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
import AuthProvider from "../context/AuthProvider";
import ErrorPage from "../pages/ErrorPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import Layout from "../context/Layout";
import Feedback from "../components/feedback/Feedback";
import Cooking from "../components/Cooking/Cooking";
import HomeEdit from "../components/Chat/HomeEdit";
import Add from "../components/Chat/Add";
import Edit from "../components/Chat/Edit";
import NoteDetail from "../components/Note/NoteDetail";
import Meeting from "../pages/Meeting";
import Content from "../components/meeting/Content";
import Cv from "../components/meeting/Cv";

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
          // { element: <ProfilePage />, path: "/profile" },

          // more
          { element: <NetWatch />, path: "/netwatch" },
          { path: "/cooking", element: <Cooking /> },
          // form
          { path: "/edit", element: <HomeEdit /> },
          { path: "/edit/add", element: <Add /> },
          { path: "/edit/:id", element: <Edit /> },
          // meeting
          {
            path: "/meeting",
            element: <Meeting />,
            children: [
              { path: "profile", element: <ProfilePage /> },
              { path: "cv", element: <Cv /> },
              { path: "company", element: <Content /> },
            ],
          },

          // blog
          { path: "/blog", element: <BlogPage /> },
          { path: "/blog/detail", element: <BlogDetailPage /> },
          { path: "/blog/detail/feedback", element: <Feedback /> },

          // note
          {
            path: "/note",
            element: <Note />,
            children: [
              {
                path: "folders/:folderId",
                element: <NoteList />,
                children: [{ path: "note/:noteId", element: <NoteDetail /> }],
              },
            ],
          },

          // payment
          {
            path: "/payment",
            element: <Payment />,
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
