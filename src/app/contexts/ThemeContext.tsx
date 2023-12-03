import { Dispatch, SetStateAction, createContext } from "react";
import { light } from "../styles/theme";

type ThemeContextType = {
  theme: string;
  colors: typeof light;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext({
  theme: "light",
  colors: light,
  setTheme: () => {},
} as ThemeContextType);
