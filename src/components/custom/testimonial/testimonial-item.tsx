import { Box, Text, Group, Stack, Avatar, UnstyledButton } from "@mantine/core";

export interface ITestimonialItem {
  className?: string;
  url?: string;
  text: string;
  imageSrc: string;
  name: string;
  handle: string;
}

export const TestimonialItem = ({ url, text, imageSrc, name, handle }: ITestimonialItem) => {
  const missingUrl = !url || url === "#";
  return (
    <UnstyledButton
      component={!missingUrl ? "a" : "div"}
      href={!missingUrl ? url : undefined}
      target={!missingUrl ? "_blank" : undefined}
      p="md"
      style={{
        borderRadius: "var(--mantine-radius-default)",
        border: `1px solid var(--mantine-color-default-border)`,
        cursor: missingUrl ? "default" : "pointer",
      }}
    >
      <Stack justify="space-between" component="figure" m={0} h={"100%"}>
        <Box component="blockquote" m={0} p={0} bd={"1px solid var(--mantine-default-border)"}>
          <Text fs={"italic"} fz={"md"}>
            "{text}"
          </Text>
        </Box>

        <Box component="figcaption" mt={"md"}>
          <Group gap="md" align="center">
            <Avatar src={imageSrc} size="md" radius="xl" />
            <Stack gap={2}>
              <Text fw={600}>{name}</Text>
              <Text c="dimmed" size="sm">
                {handle}
              </Text>
            </Stack>
          </Group>
        </Box>
      </Stack>
    </UnstyledButton>
  );
};
