import { Container, Title, Text, Button, Group, Stack, Box, ThemeIcon, rem, SimpleGrid } from "@mantine/core";
import { ArrowRightIcon, Pencil1Icon, PersonIcon, ChatBubbleIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import classes from "./hero3.module.css";

export const Hero3 = () => {
  const features = [
    {
      icon: <PersonIcon />,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time tools"
    },
    {
      icon: <ChatBubbleIcon />,
      title: "Smart Communication",
      description: "Integrated messaging and feedback systems"
    },
    {
      icon: <LightningBoltIcon />,
      title: "Rapid Iteration",
      description: "Quickly prototype and iterate on designs"
    }
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl" py={80}>
        <Stack gap={60}>
          <Stack gap="xl" maw={900}>
            <Group gap="xs">
              <ThemeIcon size="sm" radius="md" variant="light" color="var(--mantine-primary-color-filled)">
                <Pencil1Icon style={{ width: rem(14), height: rem(14) }} />
              </ThemeIcon>
              <Text fw={500} size="sm" tt="uppercase" c="dimmed">
                Design & Collaboration
              </Text>
            </Group>

            <Title className={classes.title} order={1}>
              Design Better Products with{" "}
              <Text span c="var(--mantine-primary-color-filled)" inherit>
                Creative Tools
              </Text>
            </Title>

            <Text size="lg" c="dimmed" lh={1.7}>
              Empower your team with intuitive design tools and collaboration features.
              From concept to launch, create exceptional user experiences.
            </Text>

            <Group gap="md">
              <Button
                size="lg"
                rightSection={<ArrowRightIcon style={{ width: rem(18), height: rem(18) }} />}
                color="var(--mantine-primary-color-filled)"
              >
                Start Designing
              </Button>
              <Button size="lg" variant="default">
                View Gallery
              </Button>
            </Group>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            {features.map((feature, index) => (
              <Stack key={index} gap="sm">
                <ThemeIcon size="lg" radius="md" variant="light" color="var(--mantine-primary-color-filled)">
                  {feature.icon}
                </ThemeIcon>
                <Text fw={600}>{feature.title}</Text>
                <Text size="sm" c="dimmed">{feature.description}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
