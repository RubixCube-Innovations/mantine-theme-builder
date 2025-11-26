import { Card, Text, Title, Container, Stack, SimpleGrid, Progress, Badge, Group, ThemeIcon } from "@mantine/core";
import { IconCode, IconServer, IconDeviceMobile, IconCloud, IconPalette, IconBrandGithub } from "@tabler/icons-react";
import classes from "./feature4.module.css";

const techCategories = [
  {
    title: "Frontend",
    icon: IconCode,
    technologies: [
      { name: "React", proficiency: 95 },
      { name: "Next.js", proficiency: 90 },
      { name: "TypeScript", proficiency: 92 },
    ],
  },
  {
    title: "Backend",
    icon: IconServer,
    technologies: [
      { name: "Node.js", proficiency: 90 },
      { name: "Python", proficiency: 85 },
      { name: "PostgreSQL", proficiency: 82 },
    ],
  },
  {
    title: "Mobile",
    icon: IconDeviceMobile,
    technologies: [
      { name: "React Native", proficiency: 85 },
      { name: "Flutter", proficiency: 80 },
      { name: "iOS/Android", proficiency: 75 },
    ],
  },
  {
    title: "DevOps",
    icon: IconCloud,
    technologies: [
      { name: "AWS", proficiency: 88 },
      { name: "Docker", proficiency: 85 },
      { name: "Kubernetes", proficiency: 75 },
    ],
  },
  {
    title: "Design",
    icon: IconPalette,
    technologies: [
      { name: "Figma", proficiency: 90 },
      { name: "Adobe XD", proficiency: 80 },
      { name: "Framer", proficiency: 75 },
    ],
  },
  {
    title: "Version Control",
    icon: IconBrandGithub,
    technologies: [
      { name: "Git", proficiency: 95 },
      { name: "GitHub", proficiency: 92 },
      { name: "GitLab", proficiency: 85 },
    ],
  },
];

export const Feature4 = () => {
  return (
    <Container size="xl" py="xl">
      <Stack align="center" mb="xl">
        <Badge size="lg" variant="light" color="var(--mantine-primary-color-filled)">Technology</Badge>
        <Title order={1} ta="center" className={classes.title}>
          Our Tech Stack
        </Title>
        <Text size="lg" c="dimmed" ta="center" maw={600}>
          Cutting-edge technologies and tools we use to build exceptional digital experiences
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {techCategories.map((category, index) => (
          <Card key={index} className={classes.card} padding="lg" radius="md" withBorder>
            <Stack gap="md">
              <Group justify="space-between">
                <ThemeIcon size={40} radius="md" variant="light" color="var(--mantine-primary-color-filled)">
                  <category.icon size={20} />
                </ThemeIcon>
                <Badge size="sm" variant="light" color="var(--mantine-primary-color-filled)">
                  {category.technologies.length} tools
                </Badge>
              </Group>

              <Title order={3}>{category.title}</Title>

              <Stack gap="sm">
                {category.technologies.map((tech, i) => (
                  <Stack key={i} gap={4}>
                    <Group justify="space-between">
                      <Text size="sm">{tech.name}</Text>
                      <Text size="xs" c="dimmed">{tech.proficiency}%</Text>
                    </Group>
                    <Progress value={tech.proficiency} size="sm" radius="xl" color="var(--mantine-primary-color-filled)" />
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};
