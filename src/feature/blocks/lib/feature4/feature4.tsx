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
  Progress,
  Badge,
  Anchor
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  GitHubLogoIcon,
  VercelLogoIcon,
  FigmaLogoIcon,
  NotionLogoIcon,
  SlashIcon,
  ExternalLinkIcon,
  CodeIcon,
  ComponentInstanceIcon,
  RocketIcon,
  LightningBoltIcon,
  MobileIcon,
  GlobeIcon
} from "@radix-ui/react-icons";
import classes from "./feature4.module.css";

const techCategories = [
  {
    title: "Frontend",
    icon: <ComponentInstanceIcon />,
    color: "blue",
    technologies: [
      { name: "React", proficiency: 95, icon: <CodeIcon />, description: "Modern UI library" },
      { name: "Next.js", proficiency: 90, icon: <RocketIcon />, description: "Full-stack framework" },
      { name: "TypeScript", proficiency: 92, icon: <CodeIcon />, description: "Type-safe JavaScript" },
      { name: "Mantine", proficiency: 88, icon: <ComponentInstanceIcon />, description: "Component library" },
    ]
  },
  {
    title: "Backend",
    icon: <GlobeIcon />,
    color: "green",
    technologies: [
      { name: "Node.js", proficiency: 90, icon: <CodeIcon />, description: "JavaScript runtime" },
      { name: "Python", proficiency: 85, icon: <CodeIcon />, description: "Versatile language" },
      { name: "PostgreSQL", proficiency: 82, icon: <CodeIcon />, description: "Relational database" },
      { name: "Redis", proficiency: 78, icon: <LightningBoltIcon />, description: "In-memory cache" },
    ]
  },
  {
    title: "Mobile",
    icon: <MobileIcon />,
    color: "violet",
    technologies: [
      { name: "React Native", proficiency: 85, icon: <MobileIcon />, description: "Cross-platform apps" },
      { name: "Flutter", proficiency: 80, icon: <MobileIcon />, description: "Google's UI toolkit" },
      { name: "iOS", proficiency: 75, icon: <MobileIcon />, description: "Native iOS development" },
      { name: "Android", proficiency: 78, icon: <MobileIcon />, description: "Native Android development" },
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <RocketIcon />,
    color: "orange",
    technologies: [
      { name: "AWS", proficiency: 88, icon: <GlobeIcon />, description: "Cloud services" },
      { name: "Docker", proficiency: 85, icon: <RocketIcon />, description: "Containerization" },
      { name: "Kubernetes", proficiency: 75, icon: <RocketIcon />, description: "Container orchestration" },
      { name: "CI/CD", proficiency: 82, icon: <LightningBoltIcon />, description: "Deployment automation" },
    ]
  },
  {
    title: "Design & Tools",
    icon: <FigmaLogoIcon />,
    color: "pink",
    technologies: [
      { name: "Figma", proficiency: 90, icon: <FigmaLogoIcon />, description: "Design collaboration" },
      { name: "Adobe XD", proficiency: 80, icon: <ComponentInstanceIcon />, description: "UI/UX design" },
      { name: "Framer", proficiency: 75, icon: <ComponentInstanceIcon />, description: "Interactive prototyping" },
      { name: "Notion", proficiency: 95, icon: <NotionLogoIcon />, description: "Documentation" },
    ]
  },
  {
    title: "Version Control",
    icon: <GitHubLogoIcon />,
    color: "gray",
    technologies: [
      { name: "Git", proficiency: 95, icon: <GitHubLogoIcon />, description: "Version control" },
      { name: "GitHub", proficiency: 92, icon: <GitHubLogoIcon />, description: "Code hosting" },
      { name: "GitLab", proficiency: 85, icon: <GitHubLogoIcon />, description: "DevOps platform" },
      { name: "Bitbucket", proficiency: 80, icon: <GitHubLogoIcon />, description: "Atlassian's git solution" },
    ]
  },
];

export const Feature4 = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box className={classes.wrapper}>
      <Container size="xl" px="md">
        <Stack gap={80}>
          <Box ta="center">
            <Title className={classes.title} order={2} size={isMobile ? 32 : 48} fw={900}>
              Our Tech Stack
            </Title>
            <Text c="dimmed" size="xl" maw={700} mx="auto" mt="xl" lh={1.6}>
              Cutting-edge technologies and tools we use to build exceptional digital experiences
            </Text>
          </Box>

          <Grid gutter={30}>
            {techCategories.map((category, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                <Card className={classes.categoryCard} p={32} radius="xl" h="100%">
                  <Stack gap="xl" h="100%">
                    <Group justify="space-between" align="center">
                      <Box className={classes.categoryIcon}>
                        {category.icon}
                      </Box>
                      <Badge
                        variant="light"
                        color={category.color}
                        size="lg"
                        className={classes.categoryBadge}
                      >
                        {category.technologies.length} tools
                      </Badge>
                    </Group>

                    <Title className={classes.categoryTitle} order={3} size="h3" fw={700}>
                      {category.title}
                    </Title>

                    <Stack gap="md" flex={1}>
                      {category.technologies.map((tech, i) => (
                        <Box key={i} className={classes.techItem}>
                          <Group justify="space-between" align="center" mb="xs">
                            <Group gap="sm">
                              <Box className={classes.techIcon}>
                                {tech.icon}
                              </Box>
                              <Text size="sm" fw={600} className={classes.techName}>
                                {tech.name}
                              </Text>
                            </Group>
                            <Text size="xs" className={classes.proficiency}>
                              {tech.proficiency}%
                            </Text>
                          </Group>

                          <Progress
                            value={tech.proficiency}
                            size="sm"
                            radius="xl"
                            color={category.color}
                            className={classes.progressBar}
                          />

                          <Text size="xs" c="dimmed" mt="xs">
                            {tech.description}
                          </Text>
                        </Box>
                      ))}
                    </Stack>

                    <Group justify="center" mt="auto">
                      <Anchor
                        size="sm"
                        className={classes.viewMore}
                        href="#"
                        underline="never"
                      >
                        View Projects
                        <ExternalLinkIcon size={12} />
                      </Anchor>
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