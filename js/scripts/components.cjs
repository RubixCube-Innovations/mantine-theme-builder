const path = require("path");
const fs = require("fs");

function convertCase(string) {
  const splitted = string
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(" ");
  return splitted.join("-");
}

function removeReact(input) {
  const lines = input.split("\n");

  if (lines[0].includes("import React from 'react';")) {
    lines.shift();
  } else if (lines[0].includes("import React")) {
    const remainingImports = lines[0].replace(/import React[^;]+;/, "");
    lines[0] = remainingImports;
  }

  return lines.join("\n");
}

function getComponentCode(componentFolder, componentName) {
  const componentContents = fs
    .readdirSync(componentFolder)
    .filter(
      (item) => (item.endsWith(".tsx") && !item.endsWith(".story.tsx")) || item.endsWith(".ts") || item.endsWith(".css")
    );

  const mainFileContent = removeReact(fs.readFileSync(path.join(componentFolder, `${componentName}.tsx`), "utf-8"));
  const otherFilesContent = componentContents
    .filter((file) => file !== `${componentName}.tsx`)
    .map((file) => ({
      name: file,
      content: removeReact(fs.readFileSync(path.join(componentFolder, file), "utf-8")),
    }));

  return [
    { fileName: `${componentName}.tsx`, language: "tsx", code: mainFileContent },
    ...otherFilesContent.map(({ name, content }) => ({
      fileName: name,
      language: name.endsWith(".css") ? "scss" : "tsx",
      code: content,
    })),
  ];
}

function convertComponentName(input) {
  return input
    .split("-") // Split the string by hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(""); // Join the words back together
}

function getAllComponents() {
  const rootFolder = path.resolve(__dirname, "../../src/feature/blocks/lib/"); // Set output directory as the current directory of this script
  const paths = fs.readdirSync(rootFolder);

  const components = paths
    .map((componentName) => {
      const convertedComponentName = convertComponentName(componentName);

      const componentDirectory = path.join(rootFolder, componentName);
      const componentAttributes = path.join(componentDirectory, "attributes.json");

      if (fs.lstatSync(componentDirectory).isDirectory()) {
        const code = getComponentCode(componentDirectory, componentName);
        const attributes = JSON.parse(fs.readFileSync(componentAttributes, "utf8"));
        return {
          component: convertedComponentName,
          slug: convertCase(convertedComponentName),
          code,
          attributes,
        };
      }

      return null;
    })
    .filter((c) => c);

  const sortedComponents = [...components].sort((a, b) => a.attributes.order - b.attributes.order);

  if (sortedComponents) {
    const outputDir = path.join(__dirname, `../../src/feature/blocks/data/components.ts`);
    const content = `export const components = ${JSON.stringify(sortedComponents, null, 2)};`;
    fs.writeFileSync(outputDir, content, "utf-8");
    console.log("Components generate successfully");
  }
}

getAllComponents();
