import { Card, Text, Title, Container, Stack, SimpleGrid, ThemeIcon, Badge, Button } from "@mantine/core";
import { IconCode, IconDeviceMobile, IconDeviceDesktop, IconCloud, IconPalette, IconBolt } from "@tabler/icons-react";
import classes from "./feature2.module.css";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    icon: IconCode,
    features: ["React & Next.js", "TypeScript", "Responsive Design"],
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions that deliver exceptional experiences.",
    icon: IconDeviceMobile,
    features: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    title: "Desktop Apps",
    description: "Powerful desktop applications with intuitive interfaces and robust functionality.",
    icon: IconDeviceDesktop,
    features: ["Electron", "Tauri", "Native Apps"],
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services designed for modern business needs.",
    icon: IconCloud,
    features: ["AWS", "Azure", "Google Cloud"],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user engagement and satisfaction.",
    icon: IconPalette,
    features: ["Figma", "Prototyping", "User Research"],
  },
  {
    title: "Performance",
    description: "Optimization services to ensure your applications run fast and efficiently.",
    icon: IconBolt,
    features: ["Speed Optimization", "SEO", "Analytics"],
  },
];

export const Feature2 = () => {
  return (
    <Container size="xl" py="xl">
      <Stack align="center" mb="xl">
        <Badge size="lg" variant="light" color="var(--mantine-primary-color-filled)">Services</Badge>
        <Title order={1} ta="center" className={classes.title}>
          Our Services
        </Title>
        <Text size="lg" c="dimmed" ta="center" maw={600}>
          Comprehensive solutions designed to accelerate your digital transformation journey
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {services.map((service, index) => (
          <Card key={index} className={classes.card} padding="lg" radius="md" withBorder>
            <Stack gap="md">
              <ThemeIcon size={50} radius="md" variant="light" color="var(--mantine-primary-color-filled)">
                <service.icon size={24} />
              </ThemeIcon>

              <Title order={3}>{service.title}</Title>

              <Text size="sm" c="dimmed" lh={1.6}>
                {service.description}
              </Text>

              <Stack gap="xs">
                {service.features.map((feature, i) => (
                  <Text key={i} size="sm" c="dimmed">
                    • {feature}
                  </Text>
                ))}
              </Stack>

              <Button variant="light" size="sm" mt="auto" color="var(--mantine-primary-color-filled)">
                Learn More
              </Button>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};
