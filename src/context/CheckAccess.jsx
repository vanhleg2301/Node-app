/* eslint-disable no-unused-vars */
import React, { useCallback, useContext } from "react";
import Authentication from "./Authentication";
import { AuthContext } from "./AuthProvider";

export function CheckAccess() {
  const {
    user: { uid },
  } = useContext(AuthContext);

  const { isAdmin } = Authentication();
  const check = useCallback(
    function ({ accessRole }) {
      if (isAdmin) return true;
      return accessRole.includes(uid);
    },
    [isAdmin, uid]
  );
  return {
    check,
  };
}
