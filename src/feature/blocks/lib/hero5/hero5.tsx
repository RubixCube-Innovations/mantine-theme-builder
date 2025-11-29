import { Container, Title, Text, Button, Group, Stack, ThemeIcon, Box, Divider, rem } from "@mantine/core";
import { RocketIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import classes from "./hero5.module.css";

export const Hero5 = () => {
  return (
    <Box className={classes.wrapper}>
      <Container size="xl" py={100}>
        <Stack gap="xl" align="center" maw={800} mx="auto">
          <Group gap="xs" className={classes.badge}>
            <ThemeIcon size="sm" radius="xl" variant="light" color="var(--mantine-primary-color-filled)">
              <RocketIcon style={{ width: rem(12), height: rem(12) }} />
            </ThemeIcon>
            <Text size="sm" fw={600} tt="uppercase" c="var(--mantine-primary-color-filled)">
              Next Generation Platform
            </Text>
          </Group>

          <Title className={classes.title} order={1} ta="center">
            Build Amazing Products
          </Title>

          <Divider w="50%" color="var(--mantine-primary-color-filled)" />

          <Text size="xl" ta="center" c="dimmed" lh={1.7}>
            Experience unparalleled performance and reliability. Our platform empowers teams to create
            exceptional digital experiences that users love.
          </Text>

          <Group gap="md" mt="md">
            <Button size="xl" rightSection={<ArrowRightIcon />} color="var(--mantine-primary-color-filled)">
              Start Building
            </Button>
            <Button size="xl" variant="default">
              View Documentation
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
};
