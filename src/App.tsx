import { Container, Text, Title, Box, Stack, Flex } from "@mantine/core";
import MantineCards from "./components/cards/mantine-cards";
import ColorSchemeSwitch from "./components/color-scheme-switch/color-scheme-switch";

export default function ThemesPage() {
  return (
    <Container size="xl" px="md" py={"xl"} h={"100%"}>
      <Stack align="flex-start" h={"100%"}>
        <Flex w={"100%"} justify="space-between" align="center">
          <div>
            <Title order={1}>Mantine Theme Builder</Title>
            <Text>
              Hand-picked shadcn inspired themes that you can copy and paste
              into your apps build with Mantine.
            </Text>
          </div>
          <div>
            <ColorSchemeSwitch />
          </div>
        </Flex>
        <Box>{/* ThemeCustomizer can be ignored */}</Box>

        <MantineCards />
      </Stack>
    </Container>
  );
}
