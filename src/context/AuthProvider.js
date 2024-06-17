import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { getIsUser, signin } from "../api/user";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const defaultAuthInfo = {
  profile: null,
  isLoggedIn: false,
  isPending: false,
  error: "",
};

const AuthProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useState({ ...defaultAuthInfo });

  const navigate = useNavigate();

  useEffect(() => {
    isUser();
  }, []);

  const handleLogin = async (username, password) => {
    try {
      setAuthInfo({ ...authInfo, isPending: true });

      const { error, user } = await signin({ username, password });

      if (error) {
        return setAuthInfo({
          ...authInfo,
          isPending: false,
          error: error.message,
        });
      }

      setAuthInfo({
        ...authInfo,
        profile: user,
        isLoggedIn: true,
        isPending: false,
      });

      navigate("/");

      toast.success("You are successfully signed in.");
    } catch (error) {
      console.error("An error occurred while Sign In:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  const isUser = async () => {
    try {
      const token = Cookies.get("user-token");

      if (!token) return;

      setAuthInfo({ ...authInfo, isPending: true });

      const { error, user } = await getIsUser(token);

      if (error) {
        setAuthInfo({ ...authInfo, isPending: false, error: error.message });
        return;
      }

      setAuthInfo({
        ...authInfo,
        profile: user,
        isLoggedIn: true,
        isPending: false,
      });
      navigate("/");
    } catch (error) {
      console.error("An error occurred while checking authentication:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  const handleLogout = () => {
    Cookies.remove("user-token");
    setAuthInfo({ ...defaultAuthInfo });
    toast.success("You are now logged out.");
  };

  return (
    <AuthContext.Provider
      value={{ authInfo, isUser, handleLogout, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
