import { Container, Title, Text, Button, Group, Stack, Grid, ThemeIcon, Box, Timeline, Badge, Divider, rem } from "@mantine/core";
import { CheckCircledIcon, ClockIcon, ArrowUpIcon, LayersIcon, ArrowRightIcon, DotFilledIcon } from "@radix-ui/react-icons";
import classes from "./hero4.module.css";

export const Hero4 = () => {
  const timelineData = [
    {
      title: "Design & Planning",
      description: "Create wireframes and plan your project architecture",
      icon: <LayersIcon />,
      active: true
    },
    {
      title: "Development",
      description: "Build with modern tools and best practices",
      icon: <ArrowUpIcon />,
      active: true
    },
    {
      title: "Launch & Scale",
      description: "Deploy and grow your application seamlessly",
      icon: <CheckCircledIcon />,
      active: false
    }
  ];

  const metrics = [
    { label: "Projects Delivered", value: "500+", color: "blue" },
    { label: "Happy Clients", value: "150+", color: "green" },
    { label: "Team Members", value: "25+", color: "violet" },
    { label: "Years Experience", value: "8+", color: "orange" }
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl" py={120}>
        <Grid gutter={100} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Badge className={classes.badge} size="lg" variant="dot">
                <DotFilledIcon style={{ width: rem(8), height: rem(8) }} />
                Available Now
              </Badge>

              <Stack gap="xl">
                <Title className={classes.title} order={1}>
                  Simplify Your
                  <br />
                  <Text component="span" className={classes.highlight}>
                    Development Process
                  </Text>
                </Title>

                <Text size="lg" lh={1.7} className={classes.subtitle}>
                  From concept to deployment, we provide the tools and expertise you need to
                  build exceptional digital products that stand out in today's competitive market.
                </Text>
              </Stack>

              <Group gap="md">
                <Button size="lg" className={classes.primaryButton} rightSection={<ArrowRightIcon />}>
                  Get Started Free
                </Button>
                <Button size="lg" variant="subtle" className={classes.secondaryButton}>
                  Schedule Demo
                </Button>
              </Group>

              <Divider className={classes.divider} />

              <Stack gap="xl">
                <Text fw={600} className={classes.metricsTitle}>
                  Trusted by industry leaders
                </Text>
                <Grid gutter="lg">
                  {metrics.map((metric, index) => (
                    <Grid.Col key={index} span={6}>
                      <Stack gap={8} align="center">
                        <Text fw={900} size="xl" className={classes.metricValue}>
                          {metric.value}
                        </Text>
                        <Text size="xs" ta="center" className={classes.metricLabel}>
                          {metric.label}
                        </Text>
                      </Stack>
                    </Grid.Col>
                  ))}
                </Grid>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box className={classes.timelineContainer}>
              <Stack gap="xl">
                <Stack gap="md">
                  <Text fw={600} className={classes.timelineTitle}>
                    How It Works
                  </Text>
                  <Text size="sm" className={classes.timelineSubtitle}>
                    Follow our proven process to bring your ideas to life
                  </Text>
                </Stack>

                <Timeline active={1} bulletSize={40} lineWidth={3} className={classes.timeline}>
                  {timelineData.map((item, index) => (
                    <Timeline.Item
                      key={index}
                      bullet={
                        <ThemeIcon
                          size="lg"
                          radius="xl"
                          className={item.active ? classes.activeTimelineIcon : classes.timelineIcon}
                        >
                          {item.icon}
                        </ThemeIcon>
                      }
                      title={
                        <Text fw={600} className={classes.timelineItemTitle}>
                          {item.title}
                        </Text>
                      }
                    >
                      <Text size="sm" mt={4} className={classes.timelineItemDescription}>
                        {item.description}
                      </Text>
                    </Timeline.Item>
                  ))}
                </Timeline>

                <Box className={classes.calloutBox}>
                  <Group gap="sm" align="center">
                    <ThemeIcon size="md" radius="xl" className={classes.calloutIcon}>
                      <ClockIcon style={{ width: rem(16), height: rem(16) }} />
                    </ThemeIcon>
                    <Stack gap={4}>
                      <Text fw={600} size="sm" className={classes.calloutTitle}>
                        Quick Start Available
                      </Text>
                      <Text size="xs" className={classes.calloutDescription}>
                        Get up and running in under 5 minutes
                      </Text>
                    </Stack>
                  </Group>
                </Box>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}; 