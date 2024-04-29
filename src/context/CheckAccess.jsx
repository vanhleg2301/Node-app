/* eslint-disable no-unused-vars */
import React, { useCallback, useContext } from "react";
import Authentication from "./Authentication";

export default function CheckAccess() {
  const { isAdmin, uid } = Authentication();
  // console.log(isAdmin, uid);  true, UT5inrpIuaPOv94Blum8z9fEjFI2
  return useCallback(
    function ({ accessRoles }) {
      if (!localStorage.getItem("accessToken")) return false;
      if (isAdmin) return true;
      return accessRoles.includes(uid);
    },
    [isAdmin, uid]
  );
}
