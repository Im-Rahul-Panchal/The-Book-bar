import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

// Create Context
const AuthContext = createContext();

// AuthProvider
const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("Users");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  // ✅ Persist authUser changes to localStorage
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("Users", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  // ✅ Logout function
  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem("Users");
    toast.success("Logged out successfully 🎉");
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for easy access
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
