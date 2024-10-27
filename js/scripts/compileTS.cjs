const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

// Function to convert .ts file to .js and save it in the current script directory
function convertTsToJs(tsFilePath) {
  const outputDir = path.resolve(__dirname, "../generated"); // Set output directory as the current directory of this script
  const command = `tsc ${tsFilePath} --outDir ${outputDir} --allowJs --esModuleInterop`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error converting file: ${tsFilePath}`);
      console.error(stderr);
    } else {
      const fileName = path.basename(tsFilePath, ".ts");
      const jsFilePath = path.join(outputDir, `${fileName}.js`);
      const cjsFilePath = path.join(outputDir, `${fileName}.cjs`);

      // Rename .js to .cjs
      if (fs.existsSync(jsFilePath)) {
        fs.renameSync(jsFilePath, cjsFilePath);
        console.log(`Successfully converted and saved as: ${cjsFilePath}`);
      }
    }
  });
}

// Convert specific TypeScript files
convertTsToJs(path.join(__dirname, "../../src/utils/colors.ts"));
convertTsToJs(path.join(__dirname, "../../src/utils/theme-functions.ts"));


