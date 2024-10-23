import {
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Modal,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import MantineCards from "./components/cards/mantine-cards";
import ColorSchemeSwitch from "./components/color-scheme-switch/color-scheme-switch";
import ThemeCustomizer from "./components/theme-customizer";
import { useDisclosure } from "@mantine/hooks";
import { AboutPage } from "./components/about/about";

export default function ThemesPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container size={"xl"} p={{ sm: "md", md: "xl" }} h={"100%"} mt={"sm"}>
      <Stack h={"100%"} w={"100%"}>
        <Group w={"100%"} justify="space-between" align="center" wrap="wrap">
          <Box>
            <Title order={1}>Mantine Theme Builder</Title>
            <Text>
              Shadcn inspired themes for{" "}
              <Anchor target="_blank" href="https://mantine.dev/">
                Mantine
              </Anchor>{" "}
              components that you can copy and paste into your apps.
            </Text>
          </Box>
          <Group>
            <Group gap={"0"}>
              <Button variant="subtle" size="xs" style={{ cursor: "pointer" }} onClick={open}>
                About
              </Button>
              <Button variant="subtle" size="xs">
                Blogs
              </Button>
            </Group>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=RubixCube-Innovations&repo=mantine-theme-builder&type=star&count=true&size=large"
              style={{ border: 0, overflow: "hidden", borderRadius: "var(--mantine-radius-default)" }}
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

        <Modal
          opened={opened}
          onClose={close}
          // title={<Title order={2}>About Mantine Theme Builder</Title>}
          title={"About the project"}
          size={"xl"}
          centered
          // scrollAreaComponent={ScrollArea.Autosize}
        >
          {/* <ScrollArea h={"600px"} pe={"xs"}> */}
            <AboutPage />
          {/* </ScrollArea> */}
        </Modal>

        {/* <ColorSwitcher /> */}

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
            <Text size="sm" c="dimmed">
              Made with <span style={{ fontSize: "10px" }}>❤️</span> by{" "}
              <Anchor href="https://rubixcube.tech" target="_blank" rel="noopener noreferrer">
                RubixCube Innovations
              </Anchor>
            </Text>
          </Group>
        </Box>
      </Stack>
    </Container>
  );
}
