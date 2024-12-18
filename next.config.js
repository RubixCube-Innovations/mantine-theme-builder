/** @type {import('next').NextConfig} */
import path from "node:path";

const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH, // Sets the base path to `/some-base-path`.
  sassOptions: {
    implementation: "sass-embedded",
    additionalData: `@use "${path.join(process.cwd(), "_mantine").replace(/\\/g, "/")}" as mantine;`,
  },
};

export default nextConfig;
