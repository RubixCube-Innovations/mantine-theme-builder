import { Card, Text, Title, Container, Stack, Timeline, ThemeIcon, Badge, Group } from "@mantine/core";
import { IconBolt, IconSettings, IconRocket, IconCheck, IconStar } from "@tabler/icons-react";
import classes from "./feature3.module.css";

const processSteps = [
  {
    title: "Discovery & Planning",
    description: "We start by understanding your goals, requirements, and vision to create a comprehensive project roadmap.",
    icon: IconBolt,
    duration: "1-2 weeks",
    deliverables: ["Project Brief", "Technical Specs", "Timeline"],
  },
  {
    title: "Design & Architecture",
    description: "Our team creates intuitive designs and robust architecture that align with your business objectives.",
    icon: IconSettings,
    duration: "2-3 weeks",
    deliverables: ["UI/UX Design", "System Architecture", "Prototypes"],
  },
  {
    title: "Development & Testing",
    description: "We build your solution using cutting-edge technologies with continuous testing and quality assurance.",
    icon: IconRocket,
    duration: "4-8 weeks",
    deliverables: ["MVP Development", "Testing Reports", "Documentation"],
  },
  {
    title: "Launch & Optimization",
    description: "We deploy your solution and provide ongoing support with performance monitoring and optimization.",
    icon: IconCheck,
    duration: "1-2 weeks",
    deliverables: ["Production Deployment", "Performance Monitoring", "Support"],
  },
  {
    title: "Growth & Maintenance",
    description: "Continuous improvement and scaling support to ensure your solution grows with your business.",
    icon: IconStar,
    duration: "Ongoing",
    deliverables: ["Feature Updates", "Performance Optimization", "24/7 Support"],
  },
];

export const Feature3 = () => {
  return (
    <Container size="xl" py="xl">
      <Stack align="center" mb="xl">
        <Badge size="lg" variant="light">Process</Badge>
        <Title order={1} ta="center" className={classes.title}>
          Our Process
        </Title>
        <Text size="lg" c="dimmed" ta="center" maw={600}>
          A proven methodology that delivers exceptional results through structured phases
        </Text>
      </Stack>

      <Timeline bulletSize={40} lineWidth={2}>
        {processSteps.map((step, index) => (
          <Timeline.Item
            key={index}
            bullet={
              <ThemeIcon size={40} radius="xl" variant="light">
                <step.icon size={20} />
              </ThemeIcon>
            }
            title={
              <Group justify="space-between" wrap="nowrap" mb="xs">
                <Title order={4}>{step.title}</Title>
                <Badge size="sm" variant="light">{step.duration}</Badge>
              </Group>
            }
          >
            <Card className={classes.card} padding="lg" radius="md" withBorder>
              <Stack gap="md">
                <Text size="sm" c="dimmed" lh={1.6}>
                  {step.description}
                </Text>

                <Stack gap="xs">
                  <Text size="xs" fw={600} tt="uppercase" c="dimmed">
                    Key Deliverables:
                  </Text>
                  <Group gap="xs">
                    {step.deliverables.map((deliverable, i) => (
                      <Badge key={i} size="sm" variant="outline">
                        {deliverable}
                      </Badge>
                    ))}
                  </Group>
                </Stack>
              </Stack>
            </Card>
          </Timeline.Item>
        ))}
      </Timeline>
    </Container>
  );
};
