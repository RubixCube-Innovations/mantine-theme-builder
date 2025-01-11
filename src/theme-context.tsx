"use client";

import { MantineColorShade, MantineColorsTuple, MantineProvider, MantineThemeOverride } from "@mantine/core";
import { ShikiProvider } from "@mantinex/shiki";
import React, { createContext, useContext, useEffect, useState } from "react";
import { mantineCssVariableResolver } from "./themes/mantine/mantine-css-variable-resolver";
import { shadcnCssVariableResolver } from "./themes/shadcn/shadcn-css-variable-resolver";
import { getBasePrimaryShade, getBaseTheme, getSecondaryPalette, localStorageTheme } from "./utils/functions";
import { HighlighterGeneric } from "shiki";

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
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    document.body.classList.add("rendered");
  }, []);

  const baseTheme = getBaseTheme(localStorageTheme?.style);

  const [theme, setTheme] = useState<MantineThemeOverride>(() => {
    // Use default values for server-side render
    return {
      ...baseTheme,
      primaryColor: baseTheme?.primaryColor,
      primaryShade: getBasePrimaryShade(baseTheme?.other?.style as string, baseTheme?.primaryColor),
      defaultRadius: baseTheme?.defaultRadius,
      colors: {
        ...baseTheme?.colors,
        secondary: getSecondaryPalette(baseTheme?.other?.style as string, "zinc") as unknown as MantineColorsTuple,
        dark: getSecondaryPalette(baseTheme?.other?.style as string, "zinc") as unknown as MantineColorsTuple,
      },
    };
  });

  useEffect(() => {
    if (isHydrated && localStorageTheme) {
      const baseTheme = getBaseTheme(localStorageTheme.style);
      const initPrimeColor = localStorageTheme.color || baseTheme.primaryColor;
      const primaryShade = getBasePrimaryShade(localStorageTheme.style, initPrimeColor);

      setTheme({
        ...baseTheme,
        primaryColor: initPrimeColor,
        primaryShade: primaryShade,
        defaultRadius: localStorageTheme.radius || baseTheme.defaultRadius,
        colors: {
          ...baseTheme.colors,
          secondary: getSecondaryPalette(localStorageTheme.style, initPrimeColor) as unknown as MantineColorsTuple,
          dark: getSecondaryPalette(localStorageTheme.style, initPrimeColor) as unknown as MantineColorsTuple,
        },
      });
    }

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
  }, [isHydrated, localStorageTheme]);

  async function loadShiki(): Promise<HighlighterGeneric<any, any>> {
    const { getHighlighter } = await import("shikiji");
    const shiki = await getHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
    });

    return shiki as unknown as HighlighterGeneric<any, any>;
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
