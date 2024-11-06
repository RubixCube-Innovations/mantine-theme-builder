import { Anchor, Box, Container, Divider, Group, SegmentedControl, Stack, Text, Title } from "@mantine/core";
import MantineCards from "./components/cards/mantine-cards";
import { Header } from "./components/header/header";
import ThemeCustomizer from "./components/theme-customizer";
import { useState } from "react";

export default function ThemesPage() {

  const [value, setValue] = useState("example")
  return (
    <Container size={"xl"} h={"100%"} px={"0px"}>
      <Header />

      <Stack h={"100%"} w={"100%"} p={{ sm: "md", md: "3xl" }} pt={"2rem"}>
        <Box>
          <Title order={1}>Modern Mantine Themes</Title>
          <Text>
          Save time on styling with our ready-to-use themes for{" "}
          <Anchor target="_blank" href="https://mantine.dev/">
              Mantine
            </Anchor>{" "}
            components. Just copy, paste, and watch your app come to life.
          </Text>
        </Box>

        <Box>
          <ThemeCustomizer />
        </Box>
        <Group justify="center">

        <SegmentedControl
        w={"200px"}
        size="xs"
      value={value}
      onChange={setValue}
      data={[
        { label: 'Examples', value: 'example' },
        { label: 'Components', value: 'components' },
      ]}
    />
        </Group>
        
        <MantineCards />

        <Box mt="auto" w="100%">
          <Divider my="sm" />
          <Group justify="space-between" align="center">
            <Text size="sm">
              This project is inspired by{" "}
              <Anchor href="https://ui.shadcn.com/themes" target="_blank" rel="noopener noreferrer">
                Shadcn Themes.
              </Anchor>{" "}
              The source code is available on{" "}
              <Anchor
                href="https://github.com/RubixCube-Innovations/mantine-theme-builder"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Anchor>
              .
            </Text>
            {/* <Text size="sm" c="dimmed">
              Made with <span style={{ fontSize: "10px" }}>❤️</span> by{" "}
              <Anchor href="https://rubixcube.tech" target="_blank" rel="noopener noreferrer">
                RubixCube Innovations
              </Anchor>
            </Text> */}

            <a href="https://www.buymeacoffee.com/abhishekslal01" target="_blank">
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                style={{ height: "35px", width: "125px" }}
              />
            </a>
          </Group>
        </Box>
      </Stack>
    </Container>
  );
}
