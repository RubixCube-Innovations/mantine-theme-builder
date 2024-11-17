import { Anchor, Box, Button, Container, Divider, Group, Modal, ScrollArea, Stack, Text, Title } from "@mantine/core";
import ColorSchemeSwitch from "../color-scheme-switch/color-scheme-switch";
import { useDisclosure } from "@mantine/hooks";
import { AboutPage } from "../about/about";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string | React.ReactNode;
}

const PageLayout = ({ children, title, description }: LayoutProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container size={"xl"} p={{ sm: "md", md: "xl" }} h={"100%"} mt={"sm"}>
      <Stack h={"100%"} w={"100%"}>
        <Group w={"100%"} justify="space-between" align="center" wrap="wrap">
          <Box>
            <Title order={1}>{title || "Mantine Theme Builder"}</Title>
            {description ? (
              description
            ) : (
              <Text>
                Shadcn inspired themes for{" "}
                <Anchor target="_blank" href="https://mantine.dev/">
                  Mantine
                </Anchor>{" "}
                components that you can copy and paste into your apps.
              </Text>
            )}
          </Box>
          <Group>
            <Group gap={"0"}>
              <Button variant="subtle" size="xs" style={{ cursor: "pointer" }} onClick={open}>
                About
              </Button>
              {/* <Button variant="subtle" size="xs">
            Blogs
          </Button> */}
              <Button
                variant="subtle"
                size="xs"
                data-tally-open="mex2Dx"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                Feedback
              </Button>
              <Anchor href="https://www.buymeacoffee.com/abhishekslal01" target="_blank">
                <Button variant="subtle" size="xs">
                  Support
                </Button>
              </Anchor>
            </Group>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=RubixCube-Innovations&repo=mantine-theme-builder&type=star&count=true&size=large"
              style={{ border: 0, overflow: "hidden", borderRadius: "var(--mantine-radius-default)" }}
              width="130"
              height="30"
              title="GitHub"
            ></iframe>
            <ColorSchemeSwitch />
          </Group>
        </Group>

        <Modal
          opened={opened}
          onClose={close}
          // title={<Title order={2}>About Mantine Theme Builder</Title>}
          // title={"About the project"}
          size={"xl"}
          centered
          // scrollAreaComponent={ScrollArea.Autosize}
          styles={{ content: { paddingTop: "0rem" } }}
        >
          <ScrollArea h={"600px"} pe={"sm"} pl="md" pr="xl">
            <AboutPage />
          </ScrollArea>
        </Modal>

        {children}

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
};

export default PageLayout;
