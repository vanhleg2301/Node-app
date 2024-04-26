/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

export default function Authentication() {
  const {
    user: { uid },
  } = useContext(AuthContext);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken) {
      <Navigate to="/" />;
    }
  }, [accessToken]);

  const isAdmin = accessToken && uid === "UT5inrpIuaPOv94Blum8z9fEjFI2";

  return { isAdmin, uid };
}
