import { Container, Text, Title, Box, Stack, Flex, Group } from "@mantine/core";
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
              Shadcn inspired themes for Mantine components that you can copy and paste
              into your apps.
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
      </Stack>
    </Container>
  );
}
