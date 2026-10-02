"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const demoAccounts = {
  admin: {
    name: "Dispatch Operations",
    email: "admin@elitechauffeur.co.uk",
    role: "admin",
    avatar: "/images/lifestyle.jpg",
  },
  driver: {
    id: "drv-1",
    name: "James Sterling",
    email: "driver@elitechauffeur.co.uk",
    role: "driver",
    avatar: "/images/lifestyle.jpg",
    vehicle: "Mercedes-Maybach S680",
  },
  customer: {
    id: "cust-1",
    name: "Lord Alexander Wright",
    email: "customer@example.com",
    role: "customer",
    avatar: "/images/lifestyle.jpg",
    company: "Wright Capital Holdings",
  },
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Load persisted auth from localStorage if present
    const savedUser = localStorage.getItem("elite_auth_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        setUser(demoAccounts.admin);
      }
    } else {
      // Default initial role for demo preview
      setUser(demoAccounts.admin);
    }
    setIsLoading(false);
  }, []);

  const loginAsRole = (role) => {
    const targetUser = demoAccounts[role] || demoAccounts.admin;
    setUser(targetUser);
    localStorage.setItem("elite_auth_user", JSON.stringify(targetUser));
    
    if (role === "admin") router.push("/admin");
    else if (role === "driver") router.push("/driver");
    else if (role === "customer") router.push("/customer");
  };

  const loginWithCredentials = (email, password) => {
    let role = "customer";
    if (email.toLowerCase().includes("admin")) role = "admin";
    else if (email.toLowerCase().includes("driver")) role = "driver";
    loginAsRole(role);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("elite_auth_user");
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role: user?.role || null,
        isAuthenticated: !!user,
        loginAsRole,
        loginWithCredentials,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
