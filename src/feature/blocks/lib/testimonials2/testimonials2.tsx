import { Box, Container, Title, Text, Card, Avatar, Stack, Group } from "@mantine/core";
import { StarFilledIcon } from "@radix-ui/react-icons";
import classes from "./testimonials2.module.css";

export const Testimonials2 = () => {
  const testimonial = {
    name: "David Park",
    role: "CTO at ScaleUp",
    company: "ScaleUp Technologies",
    avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_16.png",
    content: "We evaluated over 20 different solutions before choosing this platform. The combination of powerful features, excellent performance, and outstanding support made it an easy choice. Our development velocity has increased by 60% since we started using it.",
    rating: 5,
  };

  const stats = [
    { value: "60%", label: "Faster Development" },
    { value: "10K+", label: "Happy Users" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl">
        <Card withBorder radius="xl" padding={0} className={classes.card}>
          <Group wrap="nowrap" align="stretch" className={classes.inner}>
            <Stack className={classes.content} gap="xl" p="xl">
              <Stack gap="xs">
                <Text tt="uppercase" fw={700} size="sm" c="var(--mantine-primary-color-filled)" style={{ letterSpacing: '0.1em' }}>
                  Testimonial
                </Text>
                <Title order={2} fw={700}>
                  Trusted by Industry Leaders
                </Title>
                <Group gap={4}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarFilledIcon
                      key={i}
                      width={20}
                      height={20}
                      color="var(--mantine-primary-color-filled)"
                    />
                  ))}
                </Group>
              </Stack>

              <Text size="xl" className={classes.quote}>
                "{testimonial.content}"
              </Text>

              <Group gap="md">
                <Avatar src={testimonial.avatar} size={56} radius="xl" />
                <Stack gap={2}>
                  <Text fw={700}>{testimonial.name}</Text>
                  <Text c="dimmed" size="sm">{testimonial.role}</Text>
                </Stack>
              </Group>
            </Stack>

            <Stack className={classes.statsSection} gap="xl" justify="center" p="xl">
              {stats.map((stat) => (
                <Stack key={stat.label} gap={4} align="center">
                  <Text className={classes.statValue} fz={36} fw={800}>
                    {stat.value}
                  </Text>
                  <Text c="dimmed" size="sm">{stat.label}</Text>
                </Stack>
              ))}
            </Stack>
          </Group>
        </Card>
      </Container>
    </Box>
  );
};
