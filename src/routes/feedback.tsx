import { Button, Group, Space, Stack } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { TestimonialGrid } from "../components/custom/testimonial/testimonial-grid";
import PageLayout from "../components/layouts/page-layout";
import { testimonialItems } from "../utils/testimonials";

export const Route = createFileRoute("/feedback")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageLayout
      title="Feedbacks Received 🤗"
      description="See why our community values what we do. Real testimonials from real people who’ve been part of the journey"
      showActionButtons={false}
    >
      <Stack>
        <Group>
          <Button variant="filled" size="sm" component="a" href="https://github.com/orgs/mantinedev/discussions/7056" target="_blank">
            Give Feedback
          </Button>
          <Button variant="subtle" size="sm" component="a" href="https://github.com/RubixCube-Innovations/mantine-theme-builder" target="_blank">
            Star us on Github 
          </Button>
        </Group>
        <Space mb="sm" />
        <TestimonialGrid
          testimonialItems={testimonialItems}
        />
      </Stack>
    </PageLayout>
  );
}
