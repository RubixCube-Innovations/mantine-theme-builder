"use client";

import { HowToUsePage } from "@/components/custom/how-to-use/how-to-use";
import PageLayout from "@/components/layouts/page-layout";
import { Box, Space, Stack } from "@mantine/core";

export default function Page() {
  return (
    <PageLayout
      title="How to Use 🌟"
      description="This is a guide  how to use Mantine Theme Builder in your Mantine project"
      showActionButtons={false}
    >
      <Stack>
        <Space mb="xs" />
        <Box
          bd={"1px solid var(--mantine-color-default-border)"}
          p={"lg"}
          style={{ borderRadius: "var(--mantine-radius-default)" }}
        >
          <HowToUsePage />
        </Box>
      </Stack>
    </PageLayout>
  );
}
