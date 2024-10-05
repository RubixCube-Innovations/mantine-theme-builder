import {
  Container,
  Text,
  Title,
  Box,
  Stack,
  Flex,
  Group,
  Divider,
} from "@mantine/core";
import MantineCards from "./components/cards/mantine-cards";
import ColorSchemeSwitch from "./components/color-scheme-switch/color-scheme-switch";
import ColorSwitcher from "./components/color-switcher/color-switcher";
import ThemeCustomizer from "./components/theme-customizer";

export default function ThemesPage() {
  return (
    <Container size="xl" p={"xl"} h={"100%"}>
      <Stack align="flex-start" h={"100%"}>
        <Flex w={"100%"} justify="space-between" align="center">
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
              frameborder="0"
              width="120"
              height="30"
              title="GitHub"
            ></iframe>
            <ColorSchemeSwitch />
          </Group>
        </Flex>
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
