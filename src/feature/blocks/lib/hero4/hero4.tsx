import { Container, Title, Text, Button, Group, Stack, Grid, Box, ThemeIcon, Card } from "@mantine/core";
import { ArrowRightIcon, LightningBoltIcon, LockClosedIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import classes from "./hero4.module.css";

export const Hero4 = () => {
  const highlights = [
    { icon: <LightningBoltIcon />, title: "Fast", description: "Blazing fast performance" },
    { icon: <LockClosedIcon />, title: "Secure", description: "Enterprise-grade security" },
    { icon: <MixerHorizontalIcon />, title: "Flexible", description: "Fully customizable" },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl" py={100}>
        <Grid gutter={60} align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="xl">
              <Title className={classes.title} order={1}>
                Everything You Need to Build Modern Applications
              </Title>

              <Text size="lg" c="dimmed" lh={1.7}>
                A complete toolkit for building production-ready applications.
                From development to deployment, we've got you covered.
              </Text>

              <Group gap="md">
                <Button size="lg" rightSection={<ArrowRightIcon />} color="var(--mantine-primary-color-filled)">
                  Get Started
                </Button>
                <Button size="lg" variant="default">
                  Learn More
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="md">
              {highlights.map((item, index) => (
                <Card key={index} padding="lg" radius="md" withBorder>
                  <Group gap="md">
                    <ThemeIcon size="lg" radius="md" variant="light" color="var(--mantine-primary-color-filled)">
                      {item.icon}
                    </ThemeIcon>
                    <Stack gap={4}>
                      <Text fw={600}>{item.title}</Text>
                      <Text size="sm" c="dimmed">{item.description}</Text>
                    </Stack>
                  </Group>
                </Card>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
