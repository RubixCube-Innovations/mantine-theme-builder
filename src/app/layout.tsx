import type { Metadata } from "next";

import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantinex/shiki/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript } from "@mantine/core";
import { ThemeProvider } from "@/theme-context";

export const metadata: Metadata = {
  title: "MantineHub - Modern preconfigured themes, blocks, templates and more.",
  description: `MantineHub is an open-source tool to create modern,
      customizable shadcn inspired themes for Mantine UI components.
      Easily adjust styles, colors, radius, and light/dark modes,
      and export the theme object for quick integration into any Mantine project.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />

        {/* TODO: Move metadata into exported metadata object */}
        <meta property="og:title" content="MantineHub" />
        <meta
          property="og:description"
          content="MantineHub is an open-source tool to create modern,
      customizable shadcn inspired themes for Mantine UI components.
      Easily adjust styles, colors, radius, and light/dark modes,
      and export the theme object for quick integration into any Mantine project."
        />
        <meta
          property="og:image"
          content="https://private-user-images.githubusercontent.com/53397244/375193930-0b673eec-ed49-4928-a021-5bee7d0ec8e3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI1MDExOTEsIm5iZiI6MTczMjUwMDg5MSwicGF0aCI6Ii81MzM5NzI0NC8zNzUxOTM5MzAtMGI2NzNlZWMtZWQ0OS00OTI4LWEwMjEtNWJlZTdkMGVjOGUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTI1VDAyMTQ1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk5MDdmMjg5M2YyOTljYmE0MzljOGU4ZTFiNWE5OTdhMDU2OTg2MWQ1MWYzMGFkYjFjMmNmOGRhZjMxYjA4NWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.E0xeyrPWy02alRycR2WZpQ2nbxgjNSshSE5n6Q28lck"
        />

        <meta property="og:url" content="https://github.com/RubixCube-Innovations/mantine-theme-builder" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MantineHub" />
        <meta
          name="twitter:description"
          content="MantineHub is an open-source tool to create modern,
      customizable shadcn inspired themes for Mantine UI components.
      Easily adjust styles, colors, radius, and light/dark modes,
      and export the theme object for quick integration into any Mantine project."
        />
        <meta
          name="twitter:image"
          content="https://private-user-images.githubusercontent.com/53397244/375193930-0b673eec-ed49-4928-a021-5bee7d0ec8e3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI1MDExOTEsIm5iZiI6MTczMjUwMDg5MSwicGF0aCI6Ii81MzM5NzI0NC8zNzUxOTM5MzAtMGI2NzNlZWMtZWQ0OS00OTI4LWEwMjEtNWJlZTdkMGVjOGUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTI1VDAyMTQ1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk5MDdmMjg5M2YyOTljYmE0MzljOGU4ZTFiNWE5OTdhMDU2OTg2MWQ1MWYzMGFkYjFjMmNmOGRhZjMxYjA4NWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.E0xeyrPWy02alRycR2WZpQ2nbxgjNSshSE5n6Q28lck"
        />
      </head>

      <body>
        <div id="root">
          <ThemeProvider>{children}</ThemeProvider>
          {/* <MantineProvider>{children}</MantineProvider> */}
        </div>
      </body>
    </html>
  );
}
