const fs = require("fs");
const path = require("path");
const { MANTINE_DEFAULT_COLORS, SHADCN_DEFAULT_COLORS } = require("../generated/colors.cjs");
const { getPrimaryColorLight, getPrimaryContrastColorDay, getSecondaryLightColorDay, getDefaultBorderColorNight, getPrimaryContrastColorNight, getSecondaryLightColorNight, getDefaultBorderColorDay, generateShadcnCSSFilledColorVariables, generateShadcnCSSLightColorVariables, generateShadcnCSSOutlineColorVariables, generateShadcnCSSContrastColorVariables, getPrimaryColorLightHover, getPrimaryColorLightColor } = require("../generated/theme-functions.cjs");


function generateCSSVariableResolvers(style, colors, inputFilePath, outputFileName) {
  const fileContent = fs.readFileSync(inputFilePath, "utf-8");

  // Replace `${  ` with {{literal-open}} and `}` with {{literal-close}}
  const escapedContent = fileContent
    .replace(/\`\$\{\s*/g, "{{literal-open}}") // Replace `${  ` with {{literal-open}}
    .replace(/\s*\}\`/g, "{{literal-close}}");

  // Remove the import statement for the theme functions file
  const updatedContent = escapedContent
    .split("\n")
    .filter(
      (line) => !/^import.*\.\.\/\.\.\/utils\/theme-functions/.test(line.trim())
    )
    .join("\n");

  function cssStringify(obj) {
    return JSON.stringify(obj, null, 2).slice(1, -1).replace(/\n/g, '\n  ').trim();
  }

  function replaceCSSPlaceholders(template, color) {

    if (style === "shadcn") {
      return template
        .replace("(theme)", "()")
        .replaceAll("getPrimaryColorLight(theme.primaryColor)", `'${getPrimaryColorLight(color.id)}'`)
        .replaceAll("getPrimaryColorLightHover(theme.primaryColor)", `'${getPrimaryColorLightHover(color.id)}'`)
        .replaceAll("getPrimaryColorLightColor(theme.primaryColor)", `'${getPrimaryColorLightColor(color.id)}'`)
        .replaceAll("getPrimaryContrastColorDay(theme.primaryColor)", `'${getPrimaryContrastColorDay(color.id)}'`)
        .replaceAll("getPrimaryContrastColorNight(theme.primaryColor)", `'${getPrimaryContrastColorNight(color.id)}'`)
        .replaceAll("getSecondaryLightColorDay(theme.primaryColor)", `'${getSecondaryLightColorDay(color.id)}'`)
        .replaceAll("getSecondaryLightColorNight(theme.primaryColor)", `'${getSecondaryLightColorNight(color.id)}'`)
        .replaceAll("getDefaultBorderColorDay(theme.primaryColor)", `'${getDefaultBorderColorDay(color.id)}'`)
        .replaceAll("getDefaultBorderColorNight(theme.primaryColor)", `'${getDefaultBorderColorNight(color.id)}'`)
        .replaceAll(`...generateShadcnCSSFilledColorVariables('light')`, cssStringify(generateShadcnCSSFilledColorVariables('light', true)))
        .replaceAll(`...generateShadcnCSSFilledColorVariables('dark')`, cssStringify(generateShadcnCSSFilledColorVariables('dark', true)))
        .replaceAll(`...generateShadcnCSSLightColorVariables('light')`, cssStringify(generateShadcnCSSLightColorVariables('light', true)))
        .replaceAll(`...generateShadcnCSSLightColorVariables('dark')`, cssStringify(generateShadcnCSSLightColorVariables('dark', true)))
        .replaceAll(`...generateShadcnCSSOutlineColorVariables('light')`, cssStringify(generateShadcnCSSOutlineColorVariables('light', true)))
        .replaceAll(`...generateShadcnCSSOutlineColorVariables('dark')`, cssStringify(generateShadcnCSSOutlineColorVariables('dark', true)))
        .replaceAll(`...generateShadcnCSSContrastColorVariables('light')`, cssStringify(generateShadcnCSSContrastColorVariables('light')))
        .replaceAll(`...generateShadcnCSSContrastColorVariables('dark')`, cssStringify(generateShadcnCSSContrastColorVariables('dark')));
    } else {
      return template;
    }
  }

  let generatedCSSResolvers = {};

  // Iterate through each color object in the array
  colors.forEach((color) => {
    const replacedContent = replaceCSSPlaceholders(updatedContent, color);
    generatedCSSResolvers[color.id] = `\`${replacedContent}\``;
  });

  // Format the object as TypeScript content for export
  const tsContent =
    `export const ${outputFileName} = {\n` +
    Object.keys(generatedCSSResolvers)
      .map((key) => {
        return `  ${key}: ${generatedCSSResolvers[key]}`;
      })
      .join(",\n") +
    `\n};`;

  const outputDir = path.join(__dirname, `../../src/themes/generated/${outputFileName}.ts`);

  // Write the final content to the file
  fs.writeFileSync(outputDir, tsContent, "utf-8");
  console.log(`File created: ${outputDir}`);
}

// Generate CSS variable resolvers for Mantine and Shadcn using the provided color arrays
generateCSSVariableResolvers(
  "mantine",
  MANTINE_DEFAULT_COLORS,
  path.join(__dirname, "../../src/themes/mantine/mantine-css-variable-resolver.ts"),
  "generatedMantineCssVariableResolver"
);
generateCSSVariableResolvers(
  "shadcn",
  SHADCN_DEFAULT_COLORS,
  path.join(__dirname, "../../src/themes/shadcn/shadcn-css-variable-resolver.ts"),
  "generatedShadcnCssVariableResolver"
);
