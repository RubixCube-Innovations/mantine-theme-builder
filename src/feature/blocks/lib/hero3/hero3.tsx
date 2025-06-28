import { Container, Title, Text, Button, Group, Stack, ThemeIcon, Box, SimpleGrid, Paper, Avatar, rem } from "@mantine/core";
import { RocketIcon, LightningBoltIcon, ShuffleIcon, StarIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import classes from "./hero3.module.css";

export const Hero3 = () => {
  const features = [
    {
      icon: <LightningBoltIcon />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance"
    },
    {
      icon: <ShuffleIcon />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security standards"
    },
    {
      icon: <StarIcon />,
      title: "Premium Quality",
      description: "Built with attention to every detail"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_22.png",
      quote: "This platform transformed our workflow completely."
    },
    {
      name: "Alex Chen",
      role: "Developer",
      avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_18.png",
      quote: "The best development experience I've ever had."
    }
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl" py={120}>
        <Stack gap={80} w="100%">
          {/* Hero Section */}
          <Stack gap="xl" align="center" w="100%">
            <Group gap="xs" className={classes.badge}>
              <ThemeIcon size="sm" radius="xl" variant="light">
                <RocketIcon style={{ width: rem(12), height: rem(12) }} />
              </ThemeIcon>
              <Text size="sm" fw={600} tt="uppercase" className={classes.badgeText}>
                Next Generation Platform
              </Text>
            </Group>

            <Title className={classes.title} order={1} ta="center" maw={900}>
              Build Amazing Products with{" "}
              <Text component="span" className={classes.highlight} data-text="CUTTING-EDGE TECHNOLOGY">
                Cutting-Edge Technology
              </Text>
            </Title>

            <Text size="xl" ta="center" lh={1.7} maw={700} className={classes.subtitle}>
              Experience unparalleled performance and reliability. Our platform empowers teams to create
              exceptional digital experiences that users love.
            </Text>

            <Group gap="md" mt="md">
              <Button size="xl" className={classes.primaryButton} rightSection={<ArrowRightIcon />}>
                Start Building
              </Button>
              <Button size="xl" variant="outline" className={classes.secondaryButton}>
                View Documentation
              </Button>
            </Group>
          </Stack>

          {/* Features Grid */}
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" w="100%">
            {features.map((feature, index) => (
              <Paper key={index} className={classes.featureCard} radius="xl" p="xl">
                <Stack gap="md" align="center" ta="center">
                  <ThemeIcon size="xl" radius="xl" className={classes.featureIcon}>
                    {feature.icon}
                  </ThemeIcon>
                  <Title order={3} className={classes.featureTitle}>
                    {feature.title}
                  </Title>
                  <Text size="md" className={classes.featureDescription}>
                    {feature.description}
                  </Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>

          {/* Testimonials */}
          <Stack gap="xl" align="center" w="100%">
            <Title order={2} className={classes.sectionTitle} ta="center">
              Trusted by thousands of developers
            </Title>

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" w="100%" maw={900}>
              {testimonials.map((testimonial, index) => (
                <Paper key={index} className={classes.testimonialCard} radius="lg" p="lg">
                  <Stack gap="md">
                    <Text className={classes.quote} fz="md" style={{ fontStyle: 'italic' }}>
                      "{testimonial.quote}"
                    </Text>
                    <Group gap="sm">
                      <Avatar src={testimonial.avatar} size="md" radius="xl" />
                      <Stack gap={2}>
                        <Text fw={600} size="sm" className={classes.testimonialName}>
                          {testimonial.name}
                        </Text>
                        <Text size="xs" className={classes.testimonialRole}>
                          {testimonial.role}
                        </Text>
                      </Stack>
                    </Group>
                  </Stack>
                </Paper>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}; 