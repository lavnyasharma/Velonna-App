import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAccessToken, refreshAccessToken, storeTokens } from '../apis'; // Import these functions from your API setup

// Create Auth Context
const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);
// AuthProvider to wrap the application with authentication logic
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Null until we check the token

  useEffect(() => {
    const checkAuthStatus = async () => {
      const accessToken = await getAccessToken(); // Make sure this gets the token from AsyncStorage or a similar method
      setIsAuthenticated(!!accessToken); // If token exists, set true; otherwise, false
    };
    
    checkAuthStatus();
  }, []); // Empty dependency array means this runs once on component mount

  // Function to log in the user
  const login = async (accessToken, refreshToken) => {
    await storeTokens(accessToken, refreshToken); // Store tokens securely
    setIsAuthenticated(true); // Set to true after successful login
  };

  // Function to log out the user
  const logout = async () => {
    await AsyncStorage.multiRemove(['accessToken', 'refreshToken']); // Clear tokens
    setIsAuthenticated(false); // Set authenticated state to false
  };

  // Function to refresh the token if necessary
  const refreshAuthToken = async () => {
    try {
      const newAccessToken = await refreshAccessToken(); // Call your refresh function
      setIsAuthenticated(!!newAccessToken); // Update the auth status
      return newAccessToken;
    } catch (error) {
      setIsAuthenticated(false); // If refresh fails, log out the user
      throw error; // Optionally handle this error further (e.g., display message)
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, refreshAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
