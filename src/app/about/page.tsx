"use client";

import { AboutPage } from "@/components/custom/about/about";
import PageLayout from "@/components/layouts/page-layout";
import { Box, Button, Group, Space, Stack } from "@mantine/core";

export default function Page() {
  return (
    <PageLayout
      title="About Mantine Hub 😍"
      description="Mantine Hub is a collection of UI themes, blocks, and templates to help you build faster and better with Mantine."
      showActionButtons={false}
    >
      <Stack>
        <Group>
          <Button
            variant="filled"
            size="sm"
            component="a"
            href="https://www.linkedin.com/in/abhishekslal"
            target="_blank"
          >
            Contact us
          </Button>
          <Button
            variant="subtle"
            size="sm"
            component="a"
            href="https://www.buymeacoffee.com/abhishekslal01"
            target="_blank"
          >
            Buy me a coffee
          </Button>
        </Group>
        <Space mb="xs" />
        <Box
          bd={"1px solid var(--mantine-color-default-border)"}
          p={"lg"}
          style={{ borderRadius: "var(--mantine-radius-default)" }}
        >
          <AboutPage />
        </Box>
      </Stack>
    </PageLayout>
  );
}
