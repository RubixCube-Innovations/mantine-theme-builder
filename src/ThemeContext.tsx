// ThemeContext.tsx
import React, { createContext, useState, useContext } from "react";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";

// Define the shape of the context
interface ThemeContextType {
  theme: MantineThemeOverride;
  switchPrimaryColor: (color: string) => void;
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
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initial theme configuration
  const [theme, setTheme] = useState<MantineThemeOverride>({
    primaryColor: "blue",
    // Add any other default theme properties here
  });

  // Function to change the primary color dynamically
  const switchPrimaryColor = (color: string) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      primaryColor: color,
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, switchPrimaryColor }}>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
};
