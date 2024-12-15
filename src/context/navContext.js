import React, { createContext, useState, useContext } from 'react';

// Create a Context for the navbar state
const NavbarContext = createContext();

// Create a provider component
 const NavbarProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <NavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider
// Create a custom hook to use the context
export const useNavbar = () => useContext(NavbarContext);