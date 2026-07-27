import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AppContextType {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  isOrderModalOpen: boolean;
  setOrderModalOpen: (val: boolean) => void;
  prefilledMedicineName: string;
  setPrefilledMedicineName: (val: string) => void;
  openOrderWithMedicine: (medName: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const [prefilledMedicineName, setPrefilledMedicineName] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const openOrderWithMedicine = (medName: string) => {
    setPrefilledMedicineName(medName);
    setOrderModalOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        isOrderModalOpen,
        setOrderModalOpen,
        prefilledMedicineName,
        setPrefilledMedicineName,
        openOrderWithMedicine,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
