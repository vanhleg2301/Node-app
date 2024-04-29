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
    if (!Login) {
      const unsubcribed = auth.onIdTokenChanged((user) => {
        if (user?.uid) {
          console.log("[From AuthProvider]", { auth });
          console.log("[From AuthProvider]", { user });
          setUser(user);
          if (user.accessToken !== localStorage.getItem("accessToken")) {
            localStorage.setItem("accessToken", user.accessToken);
            window.location.reload();
          }
          setIsLoading(false);
          return;
        }

        // reset user info

        console.log("reset");
        console.log(auth);
        setIsLoading(false);
        setUser({});
        localStorage.clear();
        navigate("/login");
      });

      return () => {
        unsubcribed();
      };
    } else {
      const unsubcribed2 = () => {
        if (Login) {
          console.log("[From loginWith]", { Login });
          console.log("[From loginWith]", { userLogin });
          localStorage.setItem("user", userLogin);
          setUser(userLogin);
          if (userLogin.accessToken !== localStorage.getItem("accessToken")) {
            localStorage.setItem("accessToken", userLogin.accessToken);
            window.location.reload();
          }
          setIsLoading(false);
          return;
        }

        // reset user info

        console.log("reset");
        console.log("[From loginWith]", { Login });
        setIsLoading(false);
        setUser({});
        localStorage.clear();
        navigate("/login");
      };

      return () => {
        unsubcribed2();
      };
    }
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
