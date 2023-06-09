import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
          const response = await fetch('https://craite.onrender.com/user-data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: window.localStorage.getItem('token') }),
          });
          const data = await response.json();
          if (data.status === 'ok') {
            setIsLoggedIn(true);
            setUserData(data.data);
          }
        };
    
        fetchUser();
      }, []);
    return <UserContext.Provider value={{userData, isLoggedIn, setIsLoggedIn}}>{children}</UserContext.Provider>;
};

export default UserProvider;