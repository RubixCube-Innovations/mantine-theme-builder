const fs = require("fs");
const path = require("path");
const { MANTINE_DEFAULT_COLORS, SHADCN_DEFAULT_COLORS } = require("../generated/colors.cjs");
const { getShadcnInputBg, getShadcnCardClassname } = require("../generated/theme-functions.cjs");

function generateThemes(style, colors, inputFilePath, outputFileName) {
  const fileContent = fs.readFileSync(inputFilePath, "utf-8");

  function updateContent(content) {
    let updatedContent = content;

    // Replace template literals with custom markers
    updatedContent = updatedContent.replace(/\`\$\{\s*/g, "{{literal-open}}").replace(/\s*\}\`/g, "{{literal-close}}");

    // Remove import lines for theme-functions and colors
    updatedContent = updatedContent
      .split("\n")
      .filter(
        (line) =>
          !/^import.*\.\.\/\.\.\/utils\/theme-functions/.test(line.trim()) &&
          !/^import.*\.\.\/\.\.\/utils\/colors/.test(line.trim())
      )
      .join("\n");

    // Remove the prettier-ignore comments
    updatedContent = updatedContent.replaceAll("// prettier-ignore", "");

    return updatedContent;
  }

  function replacePlaceholders(template, color) {
    if (style === "shadcn") {
      return template
        .replace("primary: zincColors", `primary: ${color.id}Colors`)
        .replace("secondary: zincColors", `secondary: ${color.secondary || color.id}Colors`)
        .replace("dark: zincColors", `dark: ${color.secondary || color.id}Colors`)
        .replace("{ light: 9, dark: 0 }", JSON.stringify(color.primaryShade))
        .replaceAll("getShadcnCardClassname(theme.primaryColor)", `"${getShadcnCardClassname(color.id)}"`)
        .replaceAll("getShadcnInputBg(theme.primaryColor)", `"${getShadcnInputBg(color.id)}"`);
    } else return template.replace(`primaryColor: "blue"`, `primaryColor: "${color.id}"`);
  }

  let generatedColors = {};

  // Iterate through each color object in the array
  colors.forEach((color) => {
    const updatedContent = updateContent(fileContent);
    const replacedContent = replacePlaceholders(updatedContent, color);
    generatedColors[color.id] = `\`${replacedContent}\``;
  });

  // Format the object as TypeScript content for export
  const tsContent =
    `export const ${outputFileName} = {\n` +
    Object.keys(generatedColors)
      .map((key) => {
        return `  ${key}: ${generatedColors[key]}`;
      })
      .join(",\n") +
    `\n};`;

  const outputDir = path.join(__dirname, `../../src/themes/generated/${outputFileName}.ts`);

  // Write the final content to the file
  fs.writeFileSync(outputDir, tsContent, "utf-8");
  console.log(`File created: ${outputDir}`);
}

// Generate themes for Mantine and Shadcn using the provided color arrays
generateThemes(
  "mantine",
  MANTINE_DEFAULT_COLORS,
  path.join(__dirname, "../../src/themes/mantine/mantine-theme.ts"),
  "generatedMantineTheme"
);
generateThemes(
  "shadcn",
  SHADCN_DEFAULT_COLORS,
  path.join(__dirname, "../../src/themes/shadcn/shadcn-theme.ts"),
  "generatedShadcnTheme"
);
