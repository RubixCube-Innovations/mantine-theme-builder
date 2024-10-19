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
export const traverseAndReplace = (obj: { [key: string]: unknown }) => {
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
  // return JSON.stringify(traverseAndReplace(obj), null, 2);
  return convertThemeToObj(obj);
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
/**
 * Retrieves the secondary color palette based on the provided style and color.
 *
 * @param style - The style identifier, which can be "shadcn" or "mantine" or undefined.
 * @param color - The color identifier, which can be undefined.
 * @returns An array of color strings representing the secondary palette.
 *          If the style is "shadcn" and a matching color is found, the corresponding secondary palette is returned.
 *          Otherwise, a default grayscale palette is returned.
 */
export const getSecondaryPalette = (style: string | undefined, color: string | undefined) => {
  if (style === "shadcn") {
    return SHADCN_DEFAULT_COLORS.find((item) => item.id === color)?.secondaryPalette;
  }
  return [
    "#C9C9C9", // dark 0
    "#b8b8b8", // dark 1
    "#828282", // dark 2
    "#696969", // dark 3
    "#424242", // dark 4
    "#3b3b3b", // dark 5
    "#2e2e2e", // dark 6
    "#242424", // dark 7
    "#1f1f1f", // dark 8
    "#141414", // dark 9
  ];
};

export const convertThemeToObj = (obj: any) => {
  let ret = "{";

  for (const k in obj) {
    let v = obj[k];

    if (typeof v === "function") {
      v = v.toString();
    } else if (v instanceof Array) {
      v = JSON.stringify(v);
    } else if (typeof v === "object") {
      v = convertThemeToObj(v);
    } else {
      v = `"${v}"`;
    }

    ret += `\n  ${k}: ${v},`;
  }

  ret += "\n}";

  return ret;
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
  console.log(color);
  if (color === "zinc" || color === "slate" || color === "stone" || color === "gray" || color === "neutral" || color === "red" || color === "rose") {
    return `var(--mantine-primary-color-0)`
  } 
  else if (color === "orange" || color === "blue" || color === "violet"){
    return `var(--mantine-color-dark-0)` 
  } 
  else if (color === "green"){
    return `var(--mantine-color-rose-0)` 
  }
  else if (color === "yellow"){
    return "#422006";
  }
  else {
    return `var(--mantine-primary-color-0)`
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
  if (color === "zinc" || color === " slate" || color === "stone" || color === "gray" || color === "neutral" || color === "blue") {
    return `var(--mantine-color-dark-8)`; 
  } 
  else if (color === "red" || color === "rose"){
    return `var(--mantine-primary-color-0)`; 
  }
  else if (color === "orange" || color === "violet"){
    return `var(--mantine-color-dark-0)`; 
  } 

  else if (color === "green"){
    return `var(--mantine-primary-color-9)`; 
  }
  else if (color === "yellow"){
    return "#422006";
  }
  else {
    return `var(--mantine-color-dark-8)`;
  }
};