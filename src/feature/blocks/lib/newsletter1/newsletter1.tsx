import { Box, Container, Title, Text, TextInput, Button, Stack, Group, Paper } from "@mantine/core";
import { PaperPlaneIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import classes from "./newsletter1.module.css";

export const Newsletter1 = () => {
  const benefits = [
    "Weekly tips and insights",
    "Exclusive content and offers",
    "Early access to new features",
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="lg">
        <Paper radius="xl" p="xl" className={classes.card}>
          <Stack gap="xl" align="center">
            <Stack align="center" gap="xs">
              <Title order={2} className={classes.title}>
                Stay in the Loop
              </Title>
              <Text c="dimmed" ta="center" maw={400}>
                Subscribe to our newsletter and never miss an update
              </Text>
            </Stack>

            <Group gap="xs" wrap="wrap" justify="center">
              {benefits.map((benefit) => (
                <Group key={benefit} gap="xs" wrap="nowrap">
                  <CheckCircledIcon
                    width={16}
                    height={16}
                    color="var(--mantine-primary-color-filled)"
                  />
                  <Text size="sm" c="dimmed">{benefit}</Text>
                </Group>
              ))}
            </Group>

            <Group className={classes.inputGroup} gap="sm">
              <TextInput
                placeholder="Enter your email"
                size="lg"
                radius="xl"
                className={classes.input}
              />
              <Button
                size="lg"
                radius="xl"
                color="var(--mantine-primary-color-filled)"
                rightSection={<PaperPlaneIcon />}
                c="var(--mantine-primary-color-contrast)"
              >
                Subscribe
              </Button>
            </Group>

            <Text size="xs" c="dimmed">
              No spam, unsubscribe at any time.
            </Text>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};
