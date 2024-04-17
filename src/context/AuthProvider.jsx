/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [Login, sethLogin] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubcribed = auth.onIdTokenChanged((user) => {
      console.log("[From AuthProvider]", { user });
      if (user?.uid || user?._id) {
        setUser(user);
        localStorage.setItem("accessToken", user.accessToken);
        if (Login) {
          setUser(user);
          console.log("[From AuthProvider 1]", { user });
          localStorage.setItem("accessToken", user.accessToken);
        }
        return;
      }

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
    <AuthContext.Provider value={{ user, setUser, Login, sethLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
