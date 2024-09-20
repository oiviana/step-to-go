"use client";
import { createContext, useContext, useState } from 'react';

interface NavigationContextProps {
  page: string;
  setPage: (page: string) => void;
}

export const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState('');

  return (
    <NavigationContext.Provider value={{ page, setPage }}>
      {children}
    </NavigationContext.Provider>
  );
}
export const useNavigationPage = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};