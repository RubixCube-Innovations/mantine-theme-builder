import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "../components/layouts/page-layout";
import ComponentsDemo from "../components/custom/components-demo/components-demo";

export const Route = createFileRoute("/components")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageLayout
      title="Mantine Components Playground"
      description="Preview all Mantine components with your theme. Explore variants, sizes, and states in real time."
    >
      <ComponentsDemo />
    </PageLayout>
  );
}
