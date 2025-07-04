import { Container, Title, Text, Button, Group, Stack, Grid, ThemeIcon, Box, Card, Badge, rem } from "@mantine/core";
import { ArrowRightIcon, CheckIcon, PlayIcon, HeartIcon, BookmarkIcon } from "@radix-ui/react-icons";
import classes from "./hero2.module.css";

export const Hero2 = () => {
  const stats = [
    { value: "10K+", label: "Happy Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];

  const benefits = [
    "No setup required",
    "Cancel anytime",
    "Free updates",
    "24/7 support"
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl" py={100}>
        <Grid gutter={60} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card className={classes.card} radius="xl" p="xl">
              <Stack gap="md" align="center">
                <Badge size="lg" variant="light" className={classes.badge}>
                  ✨ New Release
                </Badge>

                <Title className={classes.cardTitle} ta="center" order={2}>
                  Experience the Future
                </Title>

                <Text ta="center" className={classes.cardSubtitle} size="lg">
                  Join thousands of satisfied customers who have transformed their workflow
                </Text>

                <Group gap="xl" mt="lg">
                  {stats.map((stat, index) => (
                    <Stack key={index} gap={4} align="center">
                      <Text fw={700} size="xl" className={classes.statValue}>
                        {stat.value}
                      </Text>
                      <Text size="sm" className={classes.statLabel}>
                        {stat.label}
                      </Text>
                    </Stack>
                  ))}
                </Group>

                <Group mt="xl" gap="sm">
                  <ThemeIcon size="lg" radius="xl" className={classes.playButton}>
                    <PlayIcon style={{ width: rem(20), height: rem(20) }} />
                  </ThemeIcon>
                  <Text size="sm" className={classes.demoText}>
                    Watch Demo
                  </Text>
                </Group>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Group gap="xs">
                <ThemeIcon size="sm" radius="xl" variant="light">
                  <HeartIcon style={{ width: rem(14), height: rem(14) }} />
                </ThemeIcon>
                <Text size="sm" fw={600} tt="uppercase" className={classes.headerBadge} style={{ letterSpacing: 0.5 }}>
                  Trusted by Industry Leaders
                </Text>
              </Group>

              <Title className={classes.title} order={1}>
                Streamline Your Workflow with Smart Automation
              </Title>

              <Text size="lg" className={classes.mainDescription} lh={1.6}>
                Boost productivity and reduce manual work with our intelligent automation platform.
                Built for modern teams who demand efficiency.
              </Text>

              <Stack gap="sm" mt="md">
                {benefits.map((benefit, index) => (
                  <Group key={index} gap="sm">
                    <ThemeIcon size="sm" radius="xl" className={classes.checkIcon}>
                      <CheckIcon style={{ width: rem(12), height: rem(12) }} />
                    </ThemeIcon>
                    <Text size="sm" className={classes.benefitText} fw={500}>{benefit}</Text>
                  </Group>
                ))}
              </Stack>

              <Group mt="xl" gap="md">
                <Button size="lg" rightSection={<ArrowRightIcon />} className={classes.primaryButton}>
                  Start Free Trial
                </Button>
                <Button size="lg" variant="subtle" leftSection={<BookmarkIcon />}>
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