"use client";
import { createContext, useContext, useState } from 'react';
import { ProgressProvider } from '@bprogress/next/app';

interface NavigationContextProps {
  page: string;
  setPage: (page: string) => void;
}

export const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState('hero');

  return (
    <ProgressProvider
      height="4px"
      color="#9ee655"
      options={{ showSpinner: false, minimum: 0.35 }}
      shallowRouting
    >
      <NavigationContext.Provider value={{ page, setPage }}>
        {children}
      </NavigationContext.Provider>
    </ProgressProvider>
  );
}
export const useNavigationPage = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
