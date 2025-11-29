import { Card, Text, Title, Container, Stack, SimpleGrid, ThemeIcon, Badge, Group, RingProgress, Center } from "@mantine/core";
import { IconCheck, IconHeart, IconClock, IconUsers, IconWorld, IconStar, IconBolt, IconShield, IconRocket, IconTrendingUp } from "@tabler/icons-react";
import classes from "./feature5.module.css";

const metrics = [
  { title: "Projects Completed", value: "250+", icon: IconCheck, description: "Successfully delivered projects" },
  { title: "Happy Clients", value: "180+", icon: IconHeart, description: "Satisfied clients who trust us" },
  { title: "Years Experience", value: "8+", icon: IconClock, description: "Years of combined experience" },
  { title: "Team Members", value: "25+", icon: IconUsers, description: "Skilled professionals" },
  { title: "Countries Served", value: "35+", icon: IconWorld, description: "Global reach" },
  { title: "Success Rate", value: "98%", icon: IconStar, description: "Project completion rate" },
];

const benefits = [
  { title: "Lightning Fast", description: "Optimized performance with sub-second load times.", icon: IconBolt, percentage: 95 },
  { title: "Secure & Reliable", description: "Bank-level security with 99.9% uptime guarantee.", icon: IconShield, percentage: 99 },
  { title: "Scalable Architecture", description: "Built to grow with your business.", icon: IconRocket, percentage: 90 },
  { title: "Performance First", description: "Continuous monitoring and optimization.", icon: IconTrendingUp, percentage: 88 },
];

export const Feature5 = () => {
  return (
    <Container size="xl" py="xl">
      <Stack align="center" mb="xl">
        <Badge size="lg" variant="light" color="var(--mantine-primary-color-filled)">Why Us</Badge>
        <Title order={1} ta="center" className={classes.title} mb="xs">
          Why Choose Us
        </Title>
        <Text size="lg" c="dimmed" ta="center" maw={600}>
          Numbers that speak for themselves - our track record of excellence
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 2, sm: 3, lg: 6 }} spacing="lg" mb="xl">
        {metrics.map((metric, index) => (
          <Card key={index} className={classes.card} padding="lg" radius="md" withBorder>
            <Stack align="center" gap="sm" ta="center">
              <ThemeIcon size={40} radius="xl" variant="light" color="var(--mantine-primary-color-filled)">
                <metric.icon size={20} />
              </ThemeIcon>
              <Text fw={700} size="xl">{metric.value}</Text>
              <Text size="sm" fw={600}>{metric.title}</Text>
              <Text size="xs" c="dimmed">{metric.description}</Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>

      <Title order={2} ta="center" mb="lg" fw={700}>
        Our Competitive Advantages
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {benefits.map((benefit, index) => (
          <Card key={index} className={classes.card} padding="lg" radius="md" withBorder>
            <Group gap="lg" align="flex-start">
              <RingProgress
                size={80}
                thickness={6}
                sections={[{ value: benefit.percentage, color: "var(--mantine-primary-color-filled)" }]}
                label={
                  <Center>
                    <ThemeIcon size={32} radius="xl" variant="light" color="var(--mantine-primary-color-filled)">
                      <benefit.icon size={16} />
                    </ThemeIcon>
                  </Center>
                }
              />
              <Stack gap="xs" style={{ flex: 1 }}>
                <Group justify="space-between">
                  <Title order={4}>{benefit.title}</Title>
                  <Badge size="sm" variant="light" color="var(--mantine-primary-color-filled)">{benefit.percentage}%</Badge>
                </Group>
                <Text size="sm" c="dimmed" lh={1.6}>
                  {benefit.description}
                </Text>
              </Stack>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};
