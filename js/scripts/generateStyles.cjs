const fs = require("fs");
const path = require("path");

function generateCssStyles(location, outputFileName) {
  // Read the content of the CSS file
  const fileContent = fs.readFileSync(location, "utf-8");
  
  // Format the content as a TypeScript export statement
  const tsContent = `export const ${outputFileName} = \`${fileContent}\`;`;

  // Define the output directory
  const outputDir = path.join(__dirname, `../../src/themes/generated/${outputFileName}.ts`);

  // Write the final content to the file
  fs.writeFileSync(outputDir, tsContent, "utf-8");
  console.log(`CSS styles file created: ${outputDir}`);
}

generateCssStyles(
  path.join(__dirname, "../../src/styles/shadcn-styles.css"), 
  "generatedShadcnCssStyles" 
);
generateCssStyles(
  path.join(__dirname, "../../src/styles/mantine-styles.css"), 
  "generatedMantineCssStyles" 
);
