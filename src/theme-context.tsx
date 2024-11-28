// ThemeContext.tsx
import { MantineColorShade, MantineColorsTuple, MantineProvider, MantineThemeOverride } from "@mantine/core";
import { ShikiProvider } from "@mantinex/shiki";
import React, { createContext, useContext, useEffect, useState } from "react";
import { mantineCssVariableResolver } from "./themes/mantine/mantine-css-variable-resolver";
import { shadcnCssVariableResolver } from "./themes/shadcn/shadcn-css-variable-resolver";
import { getBasePrimaryShade, getBaseTheme, getSecondaryPalette, localStorageTheme } from "./utils/functions";

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

  const baseTheme = getBaseTheme(localStorageTheme?.style);
  const [theme, setTheme] = useState<MantineThemeOverride>(() => {
    const initPrimeColor = localStorageTheme?.color || baseTheme?.primaryColor;
    const primaryShade = getBasePrimaryShade(localStorageTheme?.style, initPrimeColor);
    return {
      ...baseTheme,
      primaryColor: initPrimeColor,
      primaryShade: primaryShade,
      defaultRadius: localStorageTheme?.radius,
      colors: {
        ...baseTheme?.colors,
        secondary: getSecondaryPalette(localStorageTheme?.style, initPrimeColor) as unknown as MantineColorsTuple,
        dark: getSecondaryPalette(localStorageTheme?.style, initPrimeColor) as unknown as MantineColorsTuple,
      },
    };
  });

  useEffect(() => {
    if (!localStorageTheme?.color) {
      setTheme(() => ({
        ...baseTheme,
        primaryColor: "zinc",
        primaryShade: { light: 8, dark: 0 } as unknown as MantineColorShade,
        colors: {
          ...baseTheme?.colors,
          secondary: getSecondaryPalette("shadcn", "zinc") as unknown as MantineColorsTuple,
          dark: getSecondaryPalette("shadcn", "zinc") as unknown as MantineColorsTuple,
        },
      }));
    }
  }, [localStorageTheme?.color]);

  async function loadShiki() {
    const { getHighlighter } = await import("shikiji");
    const shiki = await getHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
    });

    return shiki;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MantineProvider
        theme={theme}
        cssVariablesResolver={theme.other?.style === "shadcn" ? shadcnCssVariableResolver : mantineCssVariableResolver}
        defaultColorScheme="dark"
      >
        <ShikiProvider loadShiki={loadShiki}>{children}</ShikiProvider>
      </MantineProvider>
    </ThemeContext.Provider>
  );
};
