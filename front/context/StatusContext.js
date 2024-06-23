// StatusContext.js
import React, { createContext, useContext, useState } from 'react';

const StatusContext = createContext();

export function useStatus() {
  return useContext(StatusContext);
}

export const StatusProvider = ({ children }) => {
  const [refetch, setRefetch] = useState(() => () => {});

  const value = {
    setRefetch,
    refetch,
  };

  return <StatusContext.Provider value={value}>{children}</StatusContext.Provider>;
};