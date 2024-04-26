/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [Login, sethLogin] = useState(false);
  const [userLogin, setUserLogin] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubcribed = auth.onIdTokenChanged((user) => {
      if (user?.uid) {
        console.log("[From AuthProvider]", { user });
        setUser(user);
        if (user.accessToken !== localStorage.getItem("accessToken")) {
          localStorage.setItem("accessToken", user.accessToken);
          window.location.reload();
        }
        setIsLoading(false);
        return;
      } else if (Login) {
        console.log("[From loginWith]", { userLogin });
        localStorage.setItem("user", userLogin);
        setUser(userLogin);
        if (user.accessToken !== localStorage.getItem("accessToken")) {
          localStorage.setItem("accessToken", user.accessToken);
          window.location.reload();
        }
        setIsLoading(false);
        return;
      }

      // reset user info
      console.log("reset");
      setIsLoading(false);
      setUser({});
      localStorage.clear();
      navigate("/login");
    });

    return () => {
      unsubcribed();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, Login]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, Login, sethLogin, userLogin, setUserLogin }}
    >
      {isLoading ? <CircularProgress /> : children}
    </AuthContext.Provider>
  );
}
