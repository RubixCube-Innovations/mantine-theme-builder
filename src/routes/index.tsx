import { createFileRoute } from "@tanstack/react-router";

import { Anchor } from "@mantine/core";
import * as z from "zod";
import PageLayout from "../components/layouts/page-layout";
import MantineCards from "../components/custom/theme-example-cards/mantine-cards";
import { LandingTestimonialGrid } from "../components/testimonial/testimonial-grid";
import { testimonialItems } from "../utils/testimonials";

const indexSearchSchema = z.object({
  tab: z.string().optional(),
});

export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: indexSearchSchema,
});

function RouteComponent() {
  return (
    <PageLayout
      title="Mantine Modern Themes"
      description={
        <>
          Save time on styling with our ready-to-use themes for{" "}
          <Anchor target="_blank" href="https://mantine.dev/">
            Mantine
          </Anchor>{" "}
          components. Just copy, paste, and watch your app come to life.
        </>
      }
    >
      <MantineCards />

      <LandingTestimonialGrid
        title="Community Reviews"
        description="See why our community values what we do. Real testimonials from real people who’ve been part of the journey."
        testimonialItems={testimonialItems}
      />
    </PageLayout>
  );
}
