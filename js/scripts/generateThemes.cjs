const fs = require("fs");
const path = require("path");
const { MANTINE_DEFAULT_COLORS, SHADCN_DEFAULT_COLORS } = require("../generated/colors.cjs");

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

    // Add the colors declaration before the export line
    if (style === "shadcn") {
      const colorDeclarations = SHADCN_DEFAULT_COLORS.map((color) => {
        return `const ${color.id}Colors: MantineColorsTuple = ${JSON.stringify(color.primaryPalette)};`;
      }).join("\n");

      const exportLine = "export const shadcnTheme: MantineThemeOverride = createTheme({";
      updatedContent = updatedContent.replace(exportLine, `${colorDeclarations}\n\n${exportLine}`);
    }

    return updatedContent;
  }

  function replacePlaceholders(template, color) {
    let updatedTemplate = template;
  
    if (style === "shadcn") {
      updatedTemplate = updatedTemplate
        .replace("primary: zincColors", `primary: ${color.id}Colors`)
        .replace("secondary: zincColors", `secondary: ${color.secondary || color.id}Colors`)
        .replace("dark: zincColors", `dark: ${color.secondary || color.id}Colors`)
        .replace("{ light: 9, dark: 0 }", JSON.stringify(color.primaryShade));
    } else {
      updatedTemplate = updatedTemplate.replace(`primaryColor: "blue"`, `primaryColor: "${color.id}"`);
    }
  
    // Escape backticks and `${}`
    updatedTemplate = updatedTemplate
      .replace(/`/g, "\\`") // Escape backticks
      .replace(/\$\{/g, "\\${") // Escape `${`
  
    return updatedTemplate;
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
