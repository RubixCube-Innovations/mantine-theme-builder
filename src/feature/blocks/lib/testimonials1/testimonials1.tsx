import { Box, Container, Title, Text, Card, Avatar, Stack, Group, SimpleGrid } from "@mantine/core";
import { StarFilledIcon, QuoteIcon } from "@radix-ui/react-icons";
import classes from "./testimonials1.module.css";

export const Testimonials1 = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_22.png",
      content: "This platform has completely transformed how we manage our projects. The intuitive interface and powerful features have boosted our team's productivity by 40%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager at InnovateCo",
      avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_17.png",
      content: "I've tried dozens of similar tools, but nothing comes close. The customer support is exceptional and the regular updates show they truly care about their users.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder at DesignLab",
      avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_14.png",
      content: "Switching to this platform was the best decision we made this year. It's saved us countless hours and helped us deliver projects faster than ever.",
      rating: 5,
    },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl">
        <Stack gap="xl">
          <Stack align="center" gap="xs">
            <Title order={1} className={classes.title}>
              What Our Customers Say
            </Title>
            <Text c="dimmed" size="lg" ta="center" maw={500}>
              Join thousands of satisfied customers who trust us
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} withBorder radius="lg" padding="xl" className={classes.card}>
                <Stack gap="md">
                  <QuoteIcon
                    width={32}
                    height={32}
                    color="var(--mantine-primary-color-filled)"
                    className={classes.quoteIcon}
                  />

                  <Group gap={4}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarFilledIcon
                        key={i}
                        width={16}
                        height={16}
                        color="var(--mantine-primary-color-filled)"
                      />
                    ))}
                  </Group>

                  <Text className={classes.content}>{testimonial.content}</Text>

                  <Group gap="md" mt="auto">
                    <Avatar src={testimonial.avatar} size={48} radius="xl" />
                    <Stack gap={2}>
                      <Text fw={600} size="sm">{testimonial.name}</Text>
                      <Text c="dimmed" size="xs">{testimonial.role}</Text>
                    </Stack>
                  </Group>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
