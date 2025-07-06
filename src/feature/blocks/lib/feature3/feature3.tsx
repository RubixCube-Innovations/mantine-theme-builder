import {
  Grid,
  Card,
  Text,
  Title,
  Box,
  Stack,
  useMantineTheme,
  Container,
  Timeline,
  ThemeIcon,
  Group,
  Badge
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  RocketIcon,
  LightningBoltIcon,
  GearIcon,
  CheckCircledIcon,
  StarIcon,
  ArrowRightIcon
} from "@radix-ui/react-icons";
import classes from "./feature3.module.css";

const processSteps = [
  {
    title: "Discovery & Planning",
    description: "We start by understanding your goals, requirements, and vision to create a comprehensive project roadmap.",
    icon: <LightningBoltIcon />,
    duration: "1-2 weeks",
    deliverables: ["Project Brief", "Technical Specs", "Timeline"],
    color: "blue",
  },
  {
    title: "Design & Architecture",
    description: "Our team creates intuitive designs and robust architecture that align with your business objectives.",
    icon: <GearIcon />,
    duration: "2-3 weeks",
    deliverables: ["UI/UX Design", "System Architecture", "Prototypes"],
    color: "violet",
  },
  {
    title: "Development & Testing",
    description: "We build your solution using cutting-edge technologies with continuous testing and quality assurance.",
    icon: <RocketIcon />,
    duration: "4-8 weeks",
    deliverables: ["MVP Development", "Testing Reports", "Documentation"],
    color: "green",
  },
  {
    title: "Launch & Optimization",
    description: "We deploy your solution and provide ongoing support with performance monitoring and optimization.",
    icon: <CheckCircledIcon />,
    duration: "1-2 weeks",
    deliverables: ["Production Deployment", "Performance Monitoring", "Support"],
    color: "orange",
  },
  {
    title: "Growth & Maintenance",
    description: "Continuous improvement and scaling support to ensure your solution grows with your business.",
    icon: <StarIcon />,
    duration: "Ongoing",
    deliverables: ["Feature Updates", "Performance Optimization", "24/7 Support"],
    color: "pink",
  },
];

export const Feature3 = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box className={classes.wrapper}>
      <Container size="xl" px="md">
        <Stack gap={80}>
          <Box ta="center">
            <Title className={classes.title} order={2} size={isMobile ? 32 : 48} fw={900}>
              Our Process
            </Title>
            <Text c="dimmed" size="xl" maw={700} mx="auto" mt="xl" lh={1.6}>
              A proven methodology that delivers exceptional results through structured phases
            </Text>
          </Box>

          <Box className={classes.timelineContainer}>
            <Timeline
              bulletSize={60}
              lineWidth={3}
              classNames={{
                root: classes.timeline,
                item: classes.timelineItem,
                itemBullet: classes.timelineBullet,
                itemContent: classes.timelineContent,
              }}
            >
              {processSteps.map((step, index) => (
                <Timeline.Item
                  key={index}
                  bullet={
                    <ThemeIcon
                      size={40}
                      radius="xl"
                      variant="gradient"
                      gradient={{ from: step.color, to: `${step.color}.7`, deg: 45 }}
                      className={classes.bulletIcon}
                    >
                      {step.icon}
                    </ThemeIcon>
                  }
                  title={
                    <Box className={classes.stepHeader}>
                      <Group justify="space-between" align="center" mb="md">
                        <Title order={3} className={classes.stepTitle} fw={700}>
                          {step.title}
                        </Title>
                        <Badge
                          variant="light"
                          color={step.color}
                          size="lg"
                          className={classes.durationBadge}
                        >
                          {step.duration}
                        </Badge>
                      </Group>
                    </Box>
                  }
                >
                  <Card className={classes.stepCard} p={32} radius="xl">
                    <Stack gap="xl">
                      <Text size="lg" lh={1.6} className={classes.stepDescription}>
                        {step.description}
                      </Text>

                      <Box>
                        <Text size="sm" fw={600} className={classes.deliverablesTitle} mb="md">
                          Key Deliverables:
                        </Text>
                        <Grid gutter="sm">
                          {step.deliverables.map((deliverable, i) => (
                            <Grid.Col key={i} span="auto">
                              <Group gap="xs" className={classes.deliverable}>
                                <ArrowRightIcon size={16} />
                                <Text size="sm" fw={500}>
                                  {deliverable}
                                </Text>
                              </Group>
                            </Grid.Col>
                          ))}
                        </Grid>
                      </Box>
                    </Stack>
                  </Card>
                </Timeline.Item>
              ))}
            </Timeline>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}; 