// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAccessToken, refreshAccessToken, storeTokens } from '../apis'; // Make sure to import these functions from your axios setup

// Create Auth Context
const AuthContext = createContext();

// AuthProvider to wrap the application with authentication logic
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const accessToken = await getAccessToken();
      if (accessToken) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };
    
    checkAuthStatus();
  }, []);

  // Function to log in the user
  const login = async (accessToken, refreshToken) => {
    await storeTokens(accessToken, refreshToken);
    setIsAuthenticated(true);
  };

  // Function to log out the user
  const logout = async () => {
    await AsyncStorage.multiRemove(['accessToken', 'refreshToken']);
    setIsAuthenticated(false);
  };

  // Function to refresh the token if necessary
  const refreshAuthToken = async () => {
    try {
      const newAccessToken = await refreshAccessToken();
      setIsAuthenticated(!!newAccessToken);
      return newAccessToken;
    } catch (error) {
      setIsAuthenticated(false);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, refreshAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
