import React, { createContext, useContext, useState } from "react";


type NavContextType = {
  navHeight: number;
  setNavHeight: (h: number) => void;
  route: string;
  setRoute: (r: string) => void;
};

const NavContext = createContext<NavContextType | null>(null);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navHeight, setNavHeight] = useState(0);
  const [route, setRoute] = useState("home");

  return (
    <NavContext.Provider value={{ navHeight, setNavHeight, route, setRoute }}>
      {children}
    </NavContext.Provider>
  );
};


export const useNav = () => {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavigationProvider");
  return ctx;
};