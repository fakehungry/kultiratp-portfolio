"use client";
import { useContext, createContext, useState } from "react";
import { ThemeProvider } from "@emotion/react";
/* Import unify token colors */
import { light, dark } from "./theme";
import { ThemeContext } from "../contexts/ThemeContext";

/* DarkProvider wrap the app to provide theme context. Change the theme based on ThemeContext. */
export const AppThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");
  const colors = theme === "light" ? light : dark;

  return (
    <ThemeContext.Provider value={{ theme, colors, setTheme }}>
      <ThemeProvider theme={colors}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

/* Some abstraction for useContext of ThemeContext, reduce number of import and provide additional safety */
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw Error("useTheme only applicable on function component");
  }

  return context;
};
