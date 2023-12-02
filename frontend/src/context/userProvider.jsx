/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // check local storage
    const storedData = localStorage.getItem("user");
    setUser(JSON.parse(storedData));
  }, []);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
