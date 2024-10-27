const fs = require("fs");
const path = require("path");
const { MANTINE_DEFAULT_COLORS, SHADCN_DEFAULT_COLORS } = require("../generated/colors.cjs");
const { getPrimaryContrastColorDay, getPrimaryLightColorDay, getDefaultBorderColorNight, getPrimaryContrastColorNight, getPrimaryLightColorNight, getDefaultBorderColorDay } = require("../generated/theme-functions.cjs");


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

  function replaceCSSPlaceholders(template, color) {
    if (style === "shadcn") {
      return template
        .replaceAll("getPrimaryContrastColorDay(theme.primaryColor)", `"${getPrimaryContrastColorDay(color.id)}"`)
        .replaceAll("getPrimaryLightColorDay(theme.primaryColor)", `"${getPrimaryLightColorDay(color.id)}"`)
        .replaceAll("getDefaultBorderColorDay(theme.primaryColor)", `"${getDefaultBorderColorDay(color.id)}"`)
        .replaceAll("getPrimaryContrastColorNight(theme.primaryColor)", `"${getPrimaryContrastColorNight(color.id)}"`)
        .replaceAll("getPrimaryLightColorNight(theme.primaryColor)", `"${getPrimaryLightColorNight(color.id)}"`)
        .replaceAll("getDefaultBorderColorNight(theme.primaryColor)", `"${getDefaultBorderColorNight(color.id)}"`);
    } else {
      return template  
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
