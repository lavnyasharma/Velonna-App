import React, { createContext, useState } from 'react';

export const StatusBarColorContext = createContext();

 const StatusBarColorProvider = ({ children }) => {
    const [statusBarColor, setStatusBarColor] = useState("#ccc");

    return (
        <StatusBarColorContext.Provider value={{ statusBarColor, setStatusBarColor }}>
            {children}
        </StatusBarColorContext.Provider>
    );
};
export default StatusBarColorProvider