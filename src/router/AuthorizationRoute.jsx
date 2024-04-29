/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate } from "react-router-dom";
import CheckAccess from "../context/CheckAccess";

export default function AuthorizationRoute(props) {
  const { roles, children } = props;
  const canAccess = CheckAccess()({ accessRoles: roles });
  console.log(canAccess);
  return canAccess ? children : <Navigate to={"/login"} replace />;
}
