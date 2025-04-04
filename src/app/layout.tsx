import type { Metadata } from "next";

import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantinex/shiki/styles.css";
import "@mantine/code-highlight/styles.css";

import "../styles/shadcn-styles.css";
import "../styles/fonts.css";
import "../styles/index.scss";

import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { ThemeProvider } from "@/theme-context";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";

export const metadata: Metadata = {
  metadataBase: new URL('https://mantinehub.com'),
  title: {
    default: "MantineHub - Modern preconfigured themes, blocks, templates and more.",
    template: "%s | MantineHub"
  },
  description: `MantineHub is an open-source tool to create modern,
      customizable shadcn inspired themes for Mantine UI components.
      Easily adjust styles, colors, radius, and light/dark modes,
      and export the theme object for quick integration into any Mantine project.`,
  keywords: [
    "Mantine",
    "UI Components",
    "Theme Builder",
    "React",
    "Next.js",
    "Web Development",
    "Frontend",
    "Design System",
    "Custom Themes",
    "shadcn",
    "UI/UX",
    "Component Library"
  ],
  authors: [{ name: "MantineHub Team" }],
  creator: "MantineHub",
  publisher: "MantineHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "MantineHub",
    description: "MantineHub is an open-source tool to create modern, customizable shadcn inspired themes for Mantine UI components. Easily adjust styles, colors, radius, and light/dark modes, and export the theme object for quick integration into any Mantine project.",
    url: "https://mantinehub.com",
    siteName: "MantineHub",
    images: [
      {
        url: "https://private-user-images.githubusercontent.com/53397244/375193930-0b673eec-ed49-4928-a021-5bee7d0ec8e3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI1MDExOTEsIm5iZiI6MTczMjUwMDg5MSwicGF0aCI6Ii81MzM5NzI0NC8zNzUxOTM5MzAtMGI2NzNlZWMtZWQ0OS00OTI4LWEwMjEtNWJlZTdkMGVjOGUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTI1VDAyMTQ1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk5MDdmMjg5M2YyOTljYmE0MzljOGU4ZTFiNWE5OTdhMDU2OTg2MWQ1MWYzMGFkYjFjMmNmOGRhZjMxYjA4NWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.E0xeyrPWy02alRycR2WZpQ2nbxgjNSshSE5n6Q28lck",
        width: 1200,
        height: 630,
        alt: "MantineHub Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MantineHub",
    description: "MantineHub is an open-source tool to create modern, customizable shadcn inspired themes for Mantine UI components. Easily adjust styles, colors, radius, and light/dark modes, and export the theme object for quick integration into any Mantine project.",
    images: ["https://private-user-images.githubusercontent.com/53397244/375193930-0b673eec-ed49-4928-a021-5bee7d0ec8e3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI1MDExOTEsIm5iZiI6MTczMjUwMDg5MSwicGF0aCI6Ii81MzM5NzI0NC8zNzUxOTM5MzAtMGI2NzNlZWMtZWQ0OS00OTI4LWEwMjEtNWJlZTdkMGVjOGUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTI1VDAyMTQ1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk5MDdmMjg5M2YyOTljYmE0MzljOGU4ZTFiNWE5OTdhMDU2OTg2MWQ1MWYzMGFkYjFjMmNmOGRhZjMxYjA4NWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.E0xeyrPWy02alRycR2WZpQ2nbxgjNSshSE5n6Q28lck"],
    creator: "@mantinehub",
    site: "@mantinehub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '-9BanVY_agkYef8a_hUF9btoOrREhuEDXwgnLGIjC98', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://mantinehub.com',
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <GoogleAnalytics />
        <MicrosoftClarity />
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
