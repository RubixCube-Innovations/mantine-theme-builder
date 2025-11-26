import { Container, Title, Text, Button, Group, Stack, ThemeIcon, Box, SimpleGrid, Paper, Avatar, rem } from "@mantine/core";
import { RocketIcon, LightningBoltIcon, ShuffleIcon, StarIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import classes from "./hero5.module.css";

export const Hero5 = () => {
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
              <ThemeIcon size="sm" radius="xl" variant="light" color="var(--mantine-primary-color-filled)">
                <RocketIcon style={{ width: rem(12), height: rem(12) }} />
              </ThemeIcon>
              <Text size="sm" fw={600} tt="uppercase" className={classes.badgeText}>
                Next Generation Platform
              </Text>
            </Group>

            <Title className={classes.title} order={1} ta="center" maw={900}>
              Build Amazing Products with{" "}
              <Text component="span" className={classes.highlight}>
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
        </Stack>
      </Container>
    </Box>
  );
}; 