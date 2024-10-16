import { MantinePrimaryShade, MantineThemeOverride } from "@mantine/core";
import { mantineCssVariableResolver, mantineTheme, shadcnCssVariableResolver, shadcnTheme } from "../theme";
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

// Helper function to recursively replace all matching values
const replaceCalcWithRem = (value: string) => {
  // Regex to match the pattern calc(<dynamic_value>rem * var(--mantine-scale))
  const regex = /calc\(([\d.]+)rem \* var\(--mantine-scale\)\)/;

  // If the value is a string and matches the regex pattern
  if (typeof value === "string" && regex.test(value)) {
    // Replace with rem(<dynamic_value>)
    return value.replace(regex, (_, dynamicValue) => `rem(${dynamicValue})`);
  }

  // Return the value if no match is found
  return value;
};

// Recursively walk through theme object and replace values matching the pattern
const traverseAndReplace = (obj: { [key: string]: unknown }) => {
  const result: { [key: string]: unknown } = {};
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      // If the value is an object or array, recursively apply the function
      result[key] = traverseAndReplace(obj[key] as { [key: string]: unknown });
    } else {
      // Otherwise, replace the value if it matches the pattern
      result[key] = replaceCalcWithRem(obj[key] as string);
    }
  }
  return result;
};

export const formatThemeObj = (obj: MantineThemeOverride) => {
  // return JSON.stringify(obj, null, 2);
  return JSON.stringify(traverseAndReplace(obj), null, 2);
};

export const formatCssVariable = (obj: any) => {
  return JSON.stringify(obj, null, 2);
};

export const handleCopyCode = async (theme: MantineThemeOverride) => {
  const prettyObject = JSON.stringify(theme, null, 2); // Pretty format with 2 spaces
  await navigator.clipboard.writeText(prettyObject);
};

export const getCurrentCSSResolverVariables = (theme: any) => {
  const cssResolverVars =
    theme.other?.style === "shadcn" ? shadcnCssVariableResolver(theme) : mantineCssVariableResolver(theme);
  return cssResolverVars;
};
