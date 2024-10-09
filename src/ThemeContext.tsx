// ThemeContext.tsx
import React, { createContext, useState, useContext } from "react";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import {
  mantineCssVariableResolver,
  mantineTheme,
  shadcnCssVariableResolver,
  shadcnTheme,
} from "./theme";
import { readLocalStorageValue } from "@mantine/hooks";

// Define the shape of the context
interface ThemeContextType {
  theme: MantineThemeOverride;
  setTheme: React.Dispatch<React.SetStateAction<MantineThemeOverride>>;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface MantineLocalStorageTheme {
  style: string;
}

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const localStorageTheme = readLocalStorageValue<MantineLocalStorageTheme>({
    key: "mantine-theme",
  });

  const [theme, setTheme] = useState<MantineThemeOverride>(
    !localStorageTheme || localStorageTheme?.style === "mantine"
      ? mantineTheme
      : shadcnTheme
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MantineProvider
        theme={theme}
        cssVariablesResolver={
          theme.other?.style === "shadcn"
            ? shadcnCssVariableResolver
            : mantineCssVariableResolver
        }
      >
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
};
