import React, { useState } from "react";
import { createContext } from "react";

export const StateContext = createContext();

// const initialState = {
//   chat: false,
//   payment: false,
//   userProfile: false,
//   notification: false,
// };

const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export default ContextProvider;
