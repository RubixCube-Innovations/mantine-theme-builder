import { MantinePrimaryShade, MantineThemeOverride } from "@mantine/core";
import { mantineCssVariableResolver } from "../themes/mantine/mantine-css-variable-resolver";
import { mantineTheme } from "../themes/mantine/mantine-theme";
import { shadcnCssVariableResolver } from "../themes/shadcn/shadcn-css-variable-resolver";
import { shadcnTheme } from "../themes/shadcn/shadcn-theme";
import { MANTINE_DEFAULT_COLORS, SHADCN_DEFAULT_COLORS } from "./colors";
import { generateThemeTemplate } from "./themeTemplate";
import { readLocalStorageValue } from "@mantine/hooks";
import { IThemeConfig } from "../components/custom/change-theme-section/change-theme-button";

/**
 * Get the base theme based on the style.
 *
 * @param style - The style of the theme, e.g., "shadcn".
 * @returns The base theme for the given style.
 */
export const getBaseTheme = (style: string | undefined) => {
  if (style === "mantine") {
    return mantineTheme;
  }
  return shadcnTheme;
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
    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      // If the value is an object or array, recursively apply the function
      result[key] = traverseAndReplace(obj[key] as { [key: string]: unknown });
    } else {
      // Otherwise, replace the value if it matches the pattern
      result[key] = replaceCalcWithRem(obj[key] as string);
    }
  }
  return result;
};

export const formatThemeObj = (theme: MantineThemeOverride) => {
  const replacedJSON = traverseAndReplace(theme);
  const JSONstring = convertThemeToObj(replacedJSON);
  const currentCssResolver = getCurrentCSSResolverVariables(theme);
  const variableResolver = formatCssVariable(currentCssResolver);

  return generateThemeTemplate(JSONstring, variableResolver);
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

export const getCssResolverVariables = (theme: any) => {
  const cssResolverVars = getCurrentCSSResolverVariables(theme);
  return formatCssVariable(cssResolverVars);
};

export const convertThemeToObj = (obj: any) => {
  let ret = "{";

  for (const k in obj) {
    let v = obj[k];

    if (typeof v === "function") {
      // v = v.toString();
      v = `${v}`;
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

export const getDefaultColors = (style: string | undefined) => {
  if (style === "shadcn") {
    return SHADCN_DEFAULT_COLORS;
  }

  return MANTINE_DEFAULT_COLORS;
};

export const localStorageTheme = readLocalStorageValue<IThemeConfig>({
  key: "mantine-theme",
  defaultValue: {
    style: "shadcn",
    color: SHADCN_DEFAULT_COLORS[0].id,
    radius: "sm",
  },
});

export const removeStringPlaceholders = (css: string) => {
  return css?.replace(/"{/g, "")?.replace(/}"/g, "");
}
