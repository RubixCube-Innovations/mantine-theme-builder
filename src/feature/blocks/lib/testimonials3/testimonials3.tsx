import { Box, Container, Title, Text, Avatar, Stack, Group, Paper } from "@mantine/core";
import { StarFilledIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import classes from "./testimonials3.module.css";

export const Testimonials3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Alexandra Wright",
      role: "Marketing Director",
      company: "GrowthLabs",
      avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_22.png",
      content: "The analytics dashboard alone has saved us hours every week. We can now make data-driven decisions in minutes instead of days. Absolutely game-changing for our marketing team.",
      rating: 5,
    },
    {
      name: "James Mitchell",
      role: "Engineering Lead",
      company: "DevStack",
      avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_17.png",
      content: "Integration was seamless. Within a day, our entire team was up and running. The API documentation is excellent and the developer experience is top-notch.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "Operations Manager",
      company: "FlowOps",
      avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_14.png",
      content: "We've reduced our operational costs by 35% since implementing this solution. The automation features are incredibly powerful yet easy to set up.",
      rating: 5,
    },
    {
      name: "Robert Kim",
      role: "Startup Founder",
      company: "NexGen",
      avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_16.png",
      content: "As a startup, we needed something that could scale with us. This platform has grown with our business perfectly. Couldn't recommend it more highly.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <Box className={classes.wrapper}>
      <Container size="lg">
        <Stack gap="xl" align="center">
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" fw={800}>
              <Text span c="var(--mantine-primary-color-filled)" inherit>Loved</Text> by Teams Worldwide
            </Title>
            <Text c="dimmed" size="lg" ta="center" maw={500}>
              See what our customers have to say
            </Text>
          </Stack>

          <Paper radius="xl" p="xl" className={classes.testimonialCard}>
            <Stack align="center" gap="lg">
              <Avatar src={active.avatar} size={80} radius="xl" className={classes.avatar} />

              <Group gap={4}>
                {Array.from({ length: active.rating }).map((_, i) => (
                  <StarFilledIcon
                    key={i}
                    width={20}
                    height={20}
                    color="var(--mantine-primary-color-filled)"
                  />
                ))}
              </Group>

              <Text ta="center" size="xl" className={classes.quote}>
                "{active.content}"
              </Text>

              <Stack gap={2} align="center">
                <Text fw={700}>{active.name}</Text>
                <Text c="dimmed" size="sm">
                  {active.role} at {active.company}
                </Text>
              </Stack>
            </Stack>
          </Paper>

          <Group gap="md">
            <Box className={classes.navButton} onClick={prevTestimonial}>
              <ChevronLeftIcon width={24} height={24} />
            </Box>

            <Group gap="xs">
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  className={`${classes.dot} ${index === activeIndex ? classes.activeDot : ""}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </Group>

            <Box className={classes.navButton} onClick={nextTestimonial}>
              <ChevronRightIcon width={24} height={24} />
            </Box>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
};
