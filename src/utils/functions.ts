import { MantinePrimaryShade } from "@mantine/core";
import { mantineTheme, shadcnTheme } from "../theme";
import { MANTINE_DEFAULT_COLORS, SHADCN_DEFAULT_COLORS } from "./colors";

  /**
   * Get the base theme based on the style.
   * 
   * @param style - The style of the theme, e.g., "shadcn".
   * @returns The base theme for the given style.
   */
  export const getBaseTheme = (style: string | undefined) => {
    if (style === "shadcn") {
      return shadcnTheme;
    }
    return mantineTheme;
  };

  /**
   * Get the base primary shade based on the theme style and color.
   * 
   * @param style - The style of the theme, e.g., "shadcn".
   * @param color - The primary color of the theme.
   * @returns The primary shade for the given style and color.
   */
  export const getBasePrimaryShade = (style: string | undefined, color: string | undefined): MantinePrimaryShade => {
    if (style === "shadcn") {
      return SHADCN_DEFAULT_COLORS.find((item) => item.id === color)?.primaryShade as MantinePrimaryShade;
    }
    return MANTINE_DEFAULT_COLORS.find((item) => item.id === color)?.primaryShade as MantinePrimaryShade;
  }
