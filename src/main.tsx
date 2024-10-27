import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/spotlight/styles.css";
import "./styles/index.css"
import '@mantine/code-highlight/styles.css';
// import "./styles/App.css";
import "./styles/fonts.css";
import "./styles/shadcn-styles.css";

import { ThemeProvider } from "./ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
