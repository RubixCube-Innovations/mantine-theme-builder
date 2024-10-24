const fs = require("fs");
const path = require("path");

const SHADCN_DEFAULT_COLORS = [
  {
    id: "zinc",
    name: "Zinc",
    color: "#71717A",
    primaryShade: { light: 8, dark: 0 },
    secondary: "zinc",
  },
  {
    id: "slate",
    name: "Slate",
    color: "#64748B",
    primaryShade: { light: 8, dark: 0 },
    secondary: "slate",
  },
  {
    id: "stone",
    name: "Stone",
    color: "#78716C",
    primaryShade: { light: 8, dark: 0 },
    secondary: "stone",
  },
  {
    id: "gray",
    name: "Gray",
    color: "#6B7280",
    primaryShade: { light: 8, dark: 0 },
    secondary: "gray",
  },
  {
    id: "neutral",
    name: "Neutral",
    color: "#737373",
    primaryShade: { light: 8, dark: 0 },
    secondary: "neutral",
  },
  {
    id: "red",
    name: "Red",
    color: "#EF4444",
    primaryShade: { light: 5, dark: 5 },
    secondary: "neutral",
  },
  {
    id: "rose",
    name: "Rose",
    color: "#F43F5E",
    primaryShade: { light: 5, dark: 5 },
    secondary: "stone",
  },
  {
    id: "orange",
    name: "Orange",
    color: "#F97316",
    primaryShade: { light: 5, dark: 6 },
    secondary: "stone",
  },
  {
    id: "green",
    name: "Green",
    color: "#10B981",
    primaryShade: { light: 6, dark: 5 },
    secondary: "stone",
  },
  {
    id: "blue",
    name: "Blue",
    color: "#3B82F6",
    primaryShade: { light: 6, dark: 5 },
    secondary: "slate",
  },
  {
    id: "yellow",
    name: "Yellow",
    color: "#F59E0B",
    primaryShade: { light: 4, dark: 4 },
    secondary: "stone",
  },
  {
    id: "violet",
    name: "Violet",
    color: "#8B5CF6",
    primaryShade: { light: 5, dark: 6 },
    secondary: "gray",
  },
];

// Define paths for the files
const inputFilePath = path.join(__dirname, "src/theme.ts"); // Your input file path
const fileContent = fs.readFileSync(inputFilePath, "utf-8");

const escapedContent = fileContent
  .replace(/\`\$\{\s*/g, "{{literal-open}}") // Replace `${  ` with {{literal-open}}
  .replace(/\s*\}\`/g, "{{literal-close}}");

const outputDir = path.join(__dirname, "src/generatedTheme.ts");

// Ensure the base directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function replacePlaceholders(template, color) {
  return template
    .replace("primary: zincColors", `primary: ${color.id}Colors`)
    .replace("secondary: zincColors", `secondary: ${color.secondary}Colors`)
    .replace("{ light: 9, dark: 0 }", JSON.stringify(color.primaryShade));
}

let generatedColors = {};

// Iterate through each color object in the array
SHADCN_DEFAULT_COLORS.forEach((color) => {
  const replacedContent = replacePlaceholders(escapedContent, color);

  generatedColors[color.id] = `\`${replacedContent}\``;

  // const outputContent = `export const fileContent = \`${replacedContent}\`;`;
  // const outputFileName = `${color.id}.ts`;
  // const filePath = path.join(outputDir, outputFileName);
  // fs.writeFileSync(filePath, outputContent, "utf-8");
  // console.log(`File created: ${filePath}`);
});

// Format the object as TypeScript content for export
const tsContent =
  `export const generatedTheme = {\n` +
  Object.keys(generatedColors)
    .map((key) => {
      return `  "${key}": ${generatedColors[key]}`;
    })
    .join(",\n") +
  `\n}`;

// Write the final content to the file
fs.writeFileSync(outputDir, tsContent, "utf-8");
console.log(`File created: ${outputDir}`);
