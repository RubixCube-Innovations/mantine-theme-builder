import { createFileRoute } from "@tanstack/react-router";

import { Anchor } from "@mantine/core";
import MantineCards from "../components/custom/theme-example-cards/mantine-cards";
import PageLayout from "../components/layouts/page-layout";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageLayout
      title="Mantine Modern Themes 🎨"
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

    </PageLayout>
  );
}
