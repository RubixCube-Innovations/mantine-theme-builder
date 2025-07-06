import { Grid, Card, Text, Title, Box, Stack, useMantineTheme, Container, Button, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  CodeIcon,
  MobileIcon,
  DesktopIcon,
  GlobeIcon,
  ComponentInstanceIcon,
  LightningBoltIcon
} from "@radix-ui/react-icons";
import classes from "./feature2.module.css";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices for optimal performance.",
    icon: <CodeIcon />,
    features: ["React & Next.js", "TypeScript", "Responsive Design"],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
    icon: <MobileIcon />,
    features: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    title: "Desktop Apps",
    description: "Powerful desktop applications with intuitive interfaces and robust functionality.",
    icon: <DesktopIcon />,
    features: ["Electron", "Tauri", "Native Apps"],
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services designed for modern business needs.",
    icon: <GlobeIcon />,
    features: ["AWS", "Azure", "Google Cloud"],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user engagement and satisfaction.",
    icon: <ComponentInstanceIcon />,
    features: ["Figma", "Prototyping", "User Research"],
  },
  {
    title: "Performance",
    description: "Optimization services to ensure your applications run fast and efficiently.",
    icon: <LightningBoltIcon />,
    features: ["Speed Optimization", "SEO", "Analytics"],
  },
];

export const Feature2 = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box className={classes.wrapper}>
      <Container size="xl" px="md">
        <Stack gap={80}>
          <Box ta="center">
            <Title className={classes.title} order={2} size={isMobile ? 32 : 48} fw={900}>
              Our Services
            </Title>
            <Text c="dimmed" size="xl" maw={700} mx="auto" mt="xl" lh={1.6}>
              Comprehensive solutions designed to accelerate your digital transformation journey
            </Text>
          </Box>

          <Grid gutter={30}>
            {services.map((service, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                <Card className={classes.card} p={32} radius="xl" h="100%">
                  <Stack gap="xl" h="100%">
                    <Box className={classes.iconContainer}>
                      <Box className={classes.iconWrapper}>
                        {service.icon}
                      </Box>
                    </Box>

                    <Stack gap="md" flex={1}>
                      <Title className={classes.cardTitle} order={3} size="h3" fw={700}>
                        {service.title}
                      </Title>

                      <Text size="md" c="dimmed" lh={1.6}>
                        {service.description}
                      </Text>

                      <Stack gap="xs" mt="auto">
                        {service.features.map((feature, i) => (
                          <Text key={i} size="sm" className={classes.feature}>
                            • {feature}
                          </Text>
                        ))}
                      </Stack>
                    </Stack>

                    <Group justify="flex-end" mt="auto">
                      <Button
                        variant="subtle"
                        size="sm"
                        className={classes.learnMoreBtn}
                        rightSection={<LightningBoltIcon size={14} />}
                      >
                        Learn More
                      </Button>
                    </Group>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}; 