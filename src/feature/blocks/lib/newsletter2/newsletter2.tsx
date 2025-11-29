import { Box, Container, Title, Text, TextInput, Button, Stack, Group, Grid, ThemeIcon } from "@mantine/core";
import { EnvelopeClosedIcon, BellIcon, LightningBoltIcon, StarIcon } from "@radix-ui/react-icons";
import classes from "./newsletter2.module.css";

export const Newsletter2 = () => {
  const features = [
    {
      icon: <BellIcon width={18} height={18} />,
      title: "Weekly Updates",
      description: "Get the latest news and product updates",
    },
    {
      icon: <LightningBoltIcon width={18} height={18} />,
      title: "Pro Tips",
      description: "Expert insights to boost your productivity",
    },
    {
      icon: <StarIcon width={18} height={18} />,
      title: "Exclusive Content",
      description: "Access content available only to subscribers",
    },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl">
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <Group gap="sm">
                <ThemeIcon size="lg" radius="md" variant="light" color="var(--mantine-primary-color-filled)">
                  <EnvelopeClosedIcon width={20} height={20} />
                </ThemeIcon>
                <Text size="sm" fw={600} tt="uppercase" style={{ letterSpacing: 1 }}>
                  Newsletter
                </Text>
              </Group>

              <Title order={1} className={classes.title}>
                Get the Latest Updates Delivered to Your Inbox
              </Title>

              <Text c="dimmed" size="lg">
                Join over 10,000 subscribers who receive our weekly newsletter packed with valuable insights and updates.
              </Text>

              <Stack gap="md" mt="md">
                {features.map((feature) => (
                  <Group key={feature.title} gap="md" wrap="nowrap">
                    <ThemeIcon size="md" radius="md" variant="light" color="var(--mantine-primary-color-filled)">
                      {feature.icon}
                    </ThemeIcon>
                    <Stack gap={2}>
                      <Text fw={600} size="sm">{feature.title}</Text>
                      <Text c="dimmed" size="xs">{feature.description}</Text>
                    </Stack>
                  </Group>
                ))}
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box className={classes.formCard}>
              <Stack gap="lg">
                <Stack gap="xs">
                  <Title order={3}>Subscribe Now</Title>
                  <Text c="dimmed" size="sm">
                    Enter your email to start receiving updates
                  </Text>
                </Stack>

                <Stack gap="md">
                  <TextInput
                    label="Email address"
                    placeholder="you@example.com"
                    size="md"
                    radius="md"
                  />
                  <Button
                    size="md"
                    radius="md"
                    color="var(--mantine-primary-color-filled)"
                    fullWidth
                    c="var(--mantine-primary-color-contrast)"
                  >
                    Subscribe to Newsletter
                  </Button>
                </Stack>

                <Text size="xs" c="dimmed" ta="center">
                  By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                </Text>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
