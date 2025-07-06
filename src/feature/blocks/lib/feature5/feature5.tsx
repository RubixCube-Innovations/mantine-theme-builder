import {
  Grid,
  Card,
  Text,
  Title,
  Box,
  Stack,
  useMantineTheme,
  Container,
  Group,
  RingProgress,
  SimpleGrid,
  Center,
  ThemeIcon
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import {
  ArrowUpIcon,
  ClockIcon,
  CheckCircledIcon,
  PersonIcon,
  RocketIcon,
  LightningBoltIcon,
  StarIcon,
  HeartIcon,
  GlobeIcon,
  StarFilledIcon
} from "@radix-ui/react-icons";
import classes from "./feature5.module.css";

const metrics = [
  {
    title: "Projects Completed",
    value: 250,
    suffix: "+",
    icon: <CheckCircledIcon />,
    color: "green",
    description: "Successfully delivered projects across various industries"
  },
  {
    title: "Happy Clients",
    value: 180,
    suffix: "+",
    icon: <HeartIcon />,
    color: "pink",
    description: "Satisfied clients who trust our expertise"
  },
  {
    title: "Years Experience",
    value: 8,
    suffix: "+",
    icon: <ClockIcon />,
    color: "blue",
    description: "Years of combined team experience"
  },
  {
    title: "Team Members",
    value: 25,
    suffix: "+",
    icon: <PersonIcon />,
    color: "violet",
    description: "Skilled professionals working together"
  },
  {
    title: "Countries Served",
    value: 35,
    suffix: "+",
    icon: <GlobeIcon />,
    color: "orange",
    description: "Global reach across multiple continents"
  },
  {
    title: "Success Rate",
    value: 98,
    suffix: "%",
    icon: <StarIcon />,
    color: "yellow",
    description: "Project completion success rate"
  }
];

const benefits = [
  {
    title: "Lightning Fast",
    description: "Optimized performance with sub-second load times and efficient caching strategies.",
    icon: <LightningBoltIcon />,
    color: "yellow",
    percentage: 95
  },
  {
    title: "Secure & Reliable",
    description: "Bank-level security with 99.9% uptime guarantee and automated backups.",
    icon: <StarFilledIcon />,
    color: "green",
    percentage: 99
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling millions of users effortlessly.",
    icon: <RocketIcon />,
    color: "blue",
    percentage: 90
  },
  {
    title: "Performance First",
    description: "Continuous monitoring and optimization to ensure peak performance.",
    icon: <ArrowUpIcon />,
    color: "violet",
    percentage: 88
  }
];

// Custom hook for animated counter
const useAnimatedCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const MetricCard = ({ metric, delay = 0 }: { metric: any; delay?: number }) => {
  const animatedValue = useAnimatedCounter(metric.value, 2000 + delay);

  return (
    <Card className={classes.metricCard} p={32} radius="xl">
      <Stack gap="lg" align="center" ta="center">
        <ThemeIcon
          size={60}
          radius="xl"
          variant="gradient"
          gradient={{ from: metric.color, to: `${metric.color}.7`, deg: 45 }}
          className={classes.metricIcon}
        >
          {metric.icon}
        </ThemeIcon>

        <Stack gap="xs">
          <Text className={classes.metricValue} size="xl" fw={900}>
            {animatedValue}{metric.suffix}
          </Text>
          <Text className={classes.metricTitle} fw={700} size="lg">
            {metric.title}
          </Text>
        </Stack>

        <Text size="sm" c="dimmed" ta="center" lh={1.5}>
          {metric.description}
        </Text>
      </Stack>
    </Card>
  );
};

export const Feature5 = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box className={classes.wrapper}>
      <Container size="xl" px="md">
        <Stack gap={80}>
          <Box ta="center">
            <Title className={classes.title} order={2} size={isMobile ? 32 : 48} fw={900}>
              Why Choose Us
            </Title>
            <Text c="dimmed" size="xl" maw={700} mx="auto" mt="xl" lh={1.6}>
              Numbers that speak for themselves - our track record of excellence and innovation
            </Text>
          </Box>

          {/* Metrics Grid */}
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={30}>
            {metrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} delay={index * 200} />
            ))}
          </SimpleGrid>

          {/* Benefits Section */}
          <Box mt={60}>
            <Title className={classes.benefitsTitle} order={3} ta="center" size="h2" fw={800} mb={50}>
              Our Competitive Advantages
            </Title>

            <Grid gutter={30}>
              {benefits.map((benefit, index) => (
                <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                  <Card className={classes.benefitCard} p={32} radius="xl">
                    <Group gap="xl" align="flex-start">
                      <Center>
                        <RingProgress
                          size={80}
                          thickness={6}
                          sections={[
                            { value: benefit.percentage, color: benefit.color }
                          ]}
                          label={
                            <Center>
                              <ThemeIcon
                                size={32}
                                radius="xl"
                                variant="light"
                                color={benefit.color}
                              >
                                {benefit.icon}
                              </ThemeIcon>
                            </Center>
                          }
                          className={classes.ringProgress}
                        />
                      </Center>

                      <Stack gap="md" flex={1}>
                        <Group justify="space-between" align="center">
                          <Title className={classes.benefitTitle} order={4} fw={700}>
                            {benefit.title}
                          </Title>
                          <Text className={classes.percentage} size="sm" fw={600}>
                            {benefit.percentage}%
                          </Text>
                        </Group>

                        <Text size="md" c="dimmed" lh={1.6}>
                          {benefit.description}
                        </Text>
                      </Stack>
                    </Group>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}; 