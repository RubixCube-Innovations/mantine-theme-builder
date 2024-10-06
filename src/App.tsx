import {
  Box,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import MantineCards from "./components/cards/mantine-cards";
import ColorSchemeSwitch from "./components/color-scheme-switch/color-scheme-switch";
import ThemeCustomizer from "./components/theme-customizer";
import { useMediaQuery } from "@mantine/hooks";
import { mobileWidth } from "./utils/variables";

export default function ThemesPage() {
  const isMobile = useMediaQuery(mobileWidth);
 
  return (
    <Container fluid={isMobile ? true : false} size={"xl"} p={{sm: "md", md: "xl"}} h={"100%"} w={"100vw"}>
      <Stack align="flex-start" h={"100%"} >
        <Group w={"100%"} justify="space-between" align="center" wrap="wrap">
          <Box>
            <Title order={1}>Mantine Theme Builder</Title>
            <Text>
              Shadcn inspired themes for Mantine components that you can copy
              and paste into your apps.
            </Text>
          </Box>
          <Group>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=RubixCube-Innovations&repo=mantine-theme-builder&type=star&count=true&size=large"
              style={{ border: 0, overflow: "hidden" }}
              width="120"
              height="30"
              title="GitHub"
            ></iframe>
            <ColorSchemeSwitch />
          </Group>
        </Group>
        <Box>
          <ThemeCustomizer />
        </Box>

        {/* <ColorSwitcher /> */}

        <MantineCards />

        <Box mt="auto" w="100%">
          <Divider my="sm" />
         
            <Text size="sm">
              This project is inspired by <Text
                component="a"
                href="https://ui.shadcn.com/themes"
                target="_blank"
                rel="noopener noreferrer"
              >Shadcn Themes.</Text>
              The source code is available on{" "}
              <Text
                component="a"
                href="https://github.com/RubixCube-Innovations/mantine-theme-builder"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Text>
              .
            </Text>
         
        </Box>
      </Stack>
    </Container>
  );
}
