import { ColorPalette, SHADCN_DEFAULT_COLORS } from "./colors";

type ColorEntry = {
  id: string;
  name: string;
  color: string;
  primaryPalette: ColorPalette;
  primaryShade: {
    light: number;
    dark: number;
  };
  secondary?: string;
  secondaryPalette?: ColorPalette;
};

/**
 * Retrieves the text color for a given color identifier based on predefined palettes.
 *
 * @param color - The color identifier to retrieve the text color for.
 *                Accepted values are "zinc", "slate", "stone", "gray", "neutral",
 *                "red", "rose", "orange", "blue", "violet", "green", and "yellow".
 * @returns The corresponding text color from the predefined palettes.
 *          If the color is "yellow", a specific hex color code is returned.
 *          If the color is "green", the primary palette color for "rose" is returned.
 *          Otherwise, the primary or secondary palette color for the given color is returned.
 */
export const getPrimaryContrastColorDay = (color: string) => {
  const colorObj = SHADCN_DEFAULT_COLORS.find((c) => c.id === color);
    if (
      color === "zinc" ||
      color === "slate" ||
      color === "stone" ||
      color === "gray" ||
      color === "neutral" ||
      color === "red" ||
      color === "rose"
    ) {
      return `var(--mantine-color-${colorObj?.id}-0)`;
    } else if (color === "orange" || color === "blue" || color === "violet" ) {
      return `var(--mantine-color-${colorObj?.secondary}-0)`;
    } else if (color === "green") {
      return `var(--mantine-color-rose-0)`;
    } else if (color === "yellow") {
      return "#422006";
    } else {
      return `var(--mantine-color-${colorObj?.id}-0)`;
    }
  };
  
  /**
   * Retrieves the text color for a given color identifier based on predefined palettes.
   *
   * @param color - The color identifier to retrieve the text color for.
   *                Accepted values are "zinc", "slate", "stone", "gray", "neutral",
   *                "red", "rose", "orange", "blue", "violet", "green", and "yellow".
   * @returns The corresponding text color from the predefined palettes.
   *          If the color is "yellow", a specific hex color code is returned.
   *          If the color is "green", the primary palette color for "rose" is returned.
   *          Otherwise, the primary or secondary palette color for the given color is returned.
   */
  export const getPrimaryContrastColorNight = (color: string) => {
    const colorObj = SHADCN_DEFAULT_COLORS.find((c) => c.id === color);
    if (
      color === "zinc" ||
      color === " slate" ||
      color === "stone" ||
      color === "gray" ||
      color === "neutral" ||
      color === "blue"
    ) {
      return `var(--mantine-color-${colorObj?.secondary}-8)`;
    } else if (color === "red" || color === "rose") {
      return `var(--mantine-color-${colorObj?.id}-0)`;
    } else if (color === "orange" || color === "violet" || color === "emerald" || color === "purple" || color === "indigo" || color === "pink" || color === "fuchsia") {
      return `var(--mantine-color-${colorObj?.secondary}-0)`;
    } else if (color === "green") {
      return `var(--mantine-color-${colorObj?.id}-9)`;
    } else if (color === "yellow") {
      return "#422006";
    } else {
      return `var(--mantine-color-${colorObj?.secondary}-8)`;
    }
  };
  
  
  export const getPrimaryLightColorDay = (color: string) => {
    if (color === "rose" || color === "green" ) {
      return "var(--mantine-color-zinc-1)";
    } else {
      return "var(--mantine-color-secondary-1)";
    }
  }
  
  export const getPrimaryLightColorNight = (color: string) => {
    if (color === "rose" || color === "green") {
      return "var(--mantine-color-secondary-7)";
    } else {
      return "var(--mantine-color-secondary-7)";
    }
  }
  
  export const getDefaultBorderColorDay = (color: string) => {
    if (color === "rose" || color === "green") {
      return "var(--mantine-color-zinc-2)";
    } else {
      return "var(--mantine-color-secondary-2)";
    }
  }
  
  export const getDefaultBorderColorNight = (color: string) => {
    if (color === "rose" || color === "green") {
      return "var(--mantine-color-zinc-7)";
    } else {
      return "var(--mantine-color-secondary-7)";
    }
  }

  export const getShadcnCardClassname = (color: string) => {
    if (color === "rose" || color === "green") {
      return "globalMantineCardRoot__roseGreen";
    } else {
      return "globalMantineCardRoot";
    }
  }

  export const getShadcnInputBg = (color: string) => {
    if (color === "rose" || color === "green") {
      return "var(--mantine-color-secondary-filled)";
    } else {
      return "var(--mantine-color-default)";
    }
  }

  export function generateCSSFilledColorVariables(colors: ColorEntry[], mode: string) {
    const lightMode: Record<string, string> = {};
    const darkMode: Record<string, string> = {};
  
    colors.forEach(({ id, primaryShade }) => {
      lightMode[`--mantine-color-${id}-filled`] = `var(--mantine-color-${id}-${primaryShade.light})`;
      darkMode[`--mantine-color-${id}-filled`] = `var(--mantine-color-${id}-${primaryShade.dark})`;
    });
   
    if(mode === "light") {
      return lightMode;
    }
    return darkMode;
  }

  export function generateCSSContrastColorVariables(colors: ColorEntry[], mode: string) {
    const lightMode: Record<string, string> = {};
    const darkMode: Record<string, string> = {};
  
    colors.forEach(({ id }) => {
      lightMode[`--mantine-color-${id}-contrast`] = getPrimaryContrastColorDay(id);
      darkMode[`--mantine-color-${id}-contrast`] = getPrimaryContrastColorNight(id);
    });

    console.log(lightMode);
    console.log(darkMode);
  
    if(mode === "light") {
      console.log(lightMode);
      return lightMode;
    }
    return darkMode;
  }


