import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { getProfile, logoutUser } from "@/services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getProfile();
        setUser(data.user);
      } catch {
        logoutUser();
      }
    };
    if (token) fetchUser();
  }, [token]);

  const value = useMemo(
    () => ({ user, setUser, logoutUser, token }),
    [user, token]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
