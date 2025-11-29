import { Container, Title, Text, Button, Group, Stack, Box, Avatar, Rating } from "@mantine/core";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import classes from "./hero6.module.css";

export const Hero6 = () => {
  const avatars = [
    "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_22.png",
    "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_17.png",
    "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_14.png",
    "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_18.png",
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="lg" py={100}>
        <Stack gap="xl" align="center">
          <Group>
            <Avatar.Group>
              {avatars.map((avatar, index) => (
                <Avatar key={index} src={avatar} size="md" radius="xl" />
              ))}
            </Avatar.Group>
            <Stack gap={4}>
              <Rating value={5} readOnly size="sm" color="var(--mantine-primary-color-filled)" />
              <Text size="sm" c="dimmed">Loved by 2,000+ customers</Text>
            </Stack>
          </Group>

          <Title className={classes.title} order={1} ta="center">
            Transform Your Ideas Into Reality
          </Title>

          <Text size="xl" c="dimmed" ta="center" maw={700} lh={1.7}>
            A powerful platform designed for creators, developers, and entrepreneurs
            who want to bring their vision to life without the complexity.
          </Text>

          <Group gap="md" mt="md">
            <Button size="xl" rightSection={<ArrowRightIcon />} color="var(--mantine-primary-color-filled)">
              Start Free Trial
            </Button>
            <Button size="xl" variant="light" color="var(--mantine-primary-color-filled)">
              Watch Demo
            </Button>
          </Group>

          <Text size="sm" c="dimmed">
            No credit card required. Start building in minutes.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
