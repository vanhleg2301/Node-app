/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Authentication from "../context/Authentication";
import { Navigate } from "react-router-dom";
import { CheckAccess } from "../context/CheckAccess";

export default function AuthorizationRoute(props) {
  const { roles, children } = props;
  const { checkAccess } = CheckAccess();
  console.log(checkAccess);
  const canAccess = checkAccess({ accessRoles: roles });

  return canAccess ? children : <Navigate to={"/login"} />;
}
