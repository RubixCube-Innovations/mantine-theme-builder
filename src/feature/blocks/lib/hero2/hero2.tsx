import { Container, Title, Text, Button, Group, Stack, Grid, ThemeIcon, Box, Badge, rem } from "@mantine/core";
import { ArrowRightIcon, CheckIcon, PlayIcon } from "@radix-ui/react-icons";
import classes from "./hero2.module.css";

export const Hero2 = () => {
  const stats = [
    { value: "10K+", label: "Happy Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];

  const benefits = ["No setup required", "Cancel anytime", "Free updates"];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl" py={100}>
        <Grid gutter={60} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl" align="center" className={classes.card}>
              <Badge size="lg" variant="light" color="var(--mantine-primary-color-filled)">
                New Release
              </Badge>

              <Title order={2} ta="center" className={classes.cardTitle}>
                Experience the Future
              </Title>

              <Text ta="center" c="dimmed" size="lg">
                Join thousands of satisfied customers who have transformed their workflow
              </Text>

              <Group gap="xl" mt="md">
                {stats.map((stat, index) => (
                  <Stack key={index} gap={4} align="center">
                    <Text fw={700} size="xl" c="var(--mantine-primary-color-filled)">
                      {stat.value}
                    </Text>
                    <Text size="sm" c="dimmed">{stat.label}</Text>
                  </Stack>
                ))}
              </Group>

              <Group mt="md" gap="xs">
                <ThemeIcon size="lg" radius="xl" variant="light" color="var(--mantine-primary-color-filled)">
                  <PlayIcon style={{ width: rem(18), height: rem(18) }} />
                </ThemeIcon>
                <Text size="sm" c="dimmed">Watch Demo</Text>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Title className={classes.title} order={1}>
                Streamline Your Workflow with Smart Automation
              </Title>

              <Text size="lg" c="dimmed" lh={1.7}>
                Boost productivity and reduce manual work with our intelligent automation platform.
                Built for modern teams who demand efficiency.
              </Text>

              <Stack gap="sm">
                {benefits.map((benefit, index) => (
                  <Group key={index} gap="sm">
                    <ThemeIcon size="sm" radius="xl" variant="light" color="var(--mantine-primary-color-filled)">
                      <CheckIcon style={{ width: rem(12), height: rem(12) }} />
                    </ThemeIcon>
                    <Text size="sm">{benefit}</Text>
                  </Group>
                ))}
              </Stack>

              <Group mt="md" gap="md">
                <Button size="lg" rightSection={<ArrowRightIcon />} color="var(--mantine-primary-color-filled)">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="light" color="var(--mantine-primary-color-filled)">
                  Learn More
                </Button>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
