import { MantinePrimaryShade, MantineThemeOverride } from "@mantine/core";
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
  let baseColor = color;

  //check for primary color
  if (color === "primary") {
    baseColor = style === "shadcn" ? "zinc" : "blue";
  }

  if (style === "shadcn") {
    return SHADCN_DEFAULT_COLORS.find((item) => item.id === baseColor)?.primaryShade as MantinePrimaryShade;
  }
  return MANTINE_DEFAULT_COLORS.find((item) => item.id === baseColor)?.primaryShade as MantinePrimaryShade;
};

export const formatThemeObj = (obj: MantineThemeOverride) => {
  return JSON.stringify(obj, null, 2);
};

export const handleCopyCode = async (theme: MantineThemeOverride) => {
  const prettyObject = JSON.stringify(theme, null, 2); // Pretty format with 2 spaces
  await navigator.clipboard.writeText(prettyObject);
};
