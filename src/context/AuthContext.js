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
        setUser(null);
      }
    } else {
      setUser(null); // Unauthenticated by default until user logs in
    }
    setIsLoading(false);
  }, []);

  const loginWithCredentials = (email, password) => {
    if (!email || !password) {
      return { success: false, error: "Please enter both email and password." };
    }

    // Accept admin@elitechauffeur.co.uk or any valid admin email + password
    if (email.trim().toLowerCase() === "admin@elitechauffeur.co.uk" || password.trim().length >= 4) {
      const adminUser = {
        ...demoAccounts.admin,
        email: email.trim().toLowerCase(),
      };
      setUser(adminUser);
      localStorage.setItem("elite_auth_user", JSON.stringify(adminUser));
      router.push("/admin");
      return { success: true };
    }

    return { success: false, error: "Invalid email or password. Use admin@elitechauffeur.co.uk and admin123" };
  };

  const loginAsRole = (role = "admin") => {
    return loginWithCredentials("admin@elitechauffeur.co.uk", "admin123");
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
