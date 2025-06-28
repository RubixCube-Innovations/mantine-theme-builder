/** @type {import('next').NextConfig} */
import path from "node:path";

const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH, // Sets the base path to `/some-base-path`.
  sassOptions: {
    implementation: "sass-embedded",
    additionalData: `@use "./_mantine" as mantine;`,
  },
};

export default nextConfig;
