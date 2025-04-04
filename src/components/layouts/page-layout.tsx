import { Anchor, Box, Container, Divider, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { Header } from "../ui/header/header";
import ChangeThemeSection from "../custom/change-theme-section/change-theme-section";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string | React.ReactNode;
  isBlockPage?: boolean;
  showActionButtons?: boolean;
}

const PageLayout = ({ children, title, description, isBlockPage, showActionButtons = true }: LayoutProps) => {
  return (
    <Container size={"xl"} h={"100%"} px={"0px"}>
      <Header />

      <Stack h={"100%"} w={"100%"} p={{ sm: "md", md: "3xl" }} pt={"2rem"}>
        <Stack px={"md"}>
          <Box>
            <Title order={1}>{title}</Title>
            <Text>{description}</Text>
          </Box>
          {showActionButtons && <ChangeThemeSection isBlockPage={isBlockPage} />}
          {children}
        </Stack>

        <Box mt="auto" w="100%" p={"lg"} pb="70px">
          <Divider mb="sm" />
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
