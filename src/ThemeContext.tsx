// ThemeContext.tsx
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { readLocalStorageValue } from "@mantine/hooks";
import React, { createContext, useContext, useState } from "react";
import { IThemeConfig } from "./components/theme-customizer";
import { mantineCssVariableResolver, shadcnCssVariableResolver } from "./theme";
import { getBasePrimaryShade, getBaseTheme } from "./utils/functions";

// Define the shape of the context
interface ThemeContextType {
  theme: MantineThemeOverride;
  setTheme: React.Dispatch<React.SetStateAction<MantineThemeOverride>>;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const localStorageTheme = readLocalStorageValue<IThemeConfig>({
    key: "mantine-theme",
  });

  const [theme, setTheme] = useState<MantineThemeOverride>(() => {
    const baseTheme = getBaseTheme(localStorageTheme?.style);
    const initPrimeColor = localStorageTheme?.color || baseTheme?.primaryColor;
    const primaryShade = getBasePrimaryShade(localStorageTheme?.style, initPrimeColor);
    return {
      ...baseTheme,
      primaryColor: initPrimeColor,
      primaryShade: primaryShade,
      defaultRadius: localStorageTheme?.radius,
    };
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MantineProvider
        theme={theme}
        cssVariablesResolver={theme.other?.style === "shadcn" ? shadcnCssVariableResolver : mantineCssVariableResolver}
      >
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
};
