import { Anchor, Box, Code, Divider, List, Stack, Text, Title } from "@mantine/core";
import { CssIcon, TypeScriptIcon } from "@mantinex/dev-icons";
import { CodeHighlightTabs } from "@mantine/code-highlight";

const shadcnThemeExampleCode = `
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { shadcnCssVariableResolver } from "./cssVariableResolver.ts";
import { shadcnTheme } from "./theme.ts";
import "./style.css";

export default function App() {
  return <MantineProvider
   theme={shadcnTheme}
   cssVariablesResolver={shadcnCssVariableResolver}
   >
      {/* Your app here */}
  </MantineProvider>;
};`;

const mantineThemeExampleCode = `
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { mantineTheme } from "./theme.ts";

export default function App() {
  return <MantineProvider
   theme={mantineTheme}
   >
      {/* Your app here */}
  </MantineProvider>;
};`;

const pasteThemeObjects =`


//Paste the code generated theme objects from the Mantine Theme Builder website
// Your code here 

`
const pasteCssVariableResolver =`


//Paste the code generated cssVariableResolver objects from the Mantine Theme Builder website
// Your code here 

`
const pasteStyles =`


//Paste the code generated styles from the Mantine Theme Builder website
// Your code here 

`

export const HowToUsePage = () => {
  //   const [value, setValue] = useState<string>("shadcn");
  const tsIcon = <TypeScriptIcon size={18} />;
  const cssIcon = <CssIcon size={18} />;
  return (
    <Stack>
      <Box>
        <Title order={3}>Getting Started</Title>
        <Divider my="sm" />
        <List>
          <List.Item>
            Open the{" "}
            <Anchor href="/" underline={"always"}>
              Mantine Theme Builder
            </Anchor>{" "}
            and select from the available style presets or color themes to start building your Mantine theme.
          </List.Item>
          <List.Item>
            Set up a new project with Mantine by following the{" "}
            <Anchor href="https://mantine.dev/getting-started/" underline={"always"}>
              official Mantine documentation
            </Anchor>{" "}
            .
          </List.Item>
          <List.Item>
            Locate the MantineProvider component normally in <Code>src/App.tsx</Code>
          </List.Item>
        </List>
        <Divider my="sm" />
        <Title order={3}>Set up the theme files</Title>
        <List>
          <List.Item>Copy the generated theme objects from the Mantine Theme Builder website</List.Item>
          <List.Item>
            Create a <Code>theme.ts</Code> file and paste the code
          </List.Item>
          <List.Item>
            Create a <Code>cssVariableResolver.ts</Code> file and paste code
          </List.Item>
          <List.Item>
            Create a <Code>styles.css</Code> file and paste styles
          </List.Item>
        </List>
        <Divider my="sm" />
        <Title order={3}>Set up MantineProvider</Title>
        <Text>Replace or extend the theme object in your MantineProvider as follows</Text>
        <Stack mt={"md"} gap={5}>
          <Title order={4}> For Shadcn Themes</Title>
          <CodeHighlightTabs
        
            code={[
              {
                fileName: "src/App.tsx",
                code: shadcnThemeExampleCode,
                language: "tsx",
                icon: tsIcon,
              },
              {
                fileName: "src/theme.ts",
                code: pasteThemeObjects,
                language: "tsx",
                icon: tsIcon,
              },
              {
                fileName: "src/cssVariableResolver.ts",
                code: pasteCssVariableResolver,
                language: "tsx",
                icon: tsIcon,
              },
              {
                fileName: "src/styles.css",
                code: pasteStyles,
                language: "tsx",
                icon: cssIcon,
              },
            ]}
            copyLabel="Copy code"
            copiedLabel="Copied!"
          />
         
        </Stack>
        <Stack mt={"md"} gap={5}>
          <Title order={4}>For Mantine Themes</Title>
          <CodeHighlightTabs
        
            code={[
              {
                fileName: "src/App.tsx",
                code: mantineThemeExampleCode,
                language: "tsx",
                icon: tsIcon,
              },
              {
                fileName: "src/theme.ts",
                code: pasteThemeObjects,
                language: "tsx",
                icon: tsIcon,
              },
            ]}
            copyLabel="Copy code"
            copiedLabel="Copied!"
          />
          <Text>
            No need to add <Code>cssVariableResolver.ts</Code> and <Code>styles.css</Code> files when using a Mantine
            Theme.
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};
