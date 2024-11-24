import { createFileRoute } from "@tanstack/react-router";
import BlockComponents from "../feature/blocks/components/block-components/block-components";
import PageLayout from "../components/layouts/page-layout";

export const Route = createFileRoute("/blocks")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageLayout
      title="Mantine UI Blocks 🚀"
      description="Accelerate your development with our ever-growing library of beautifully designed UI blocks. Just copy, paste, and customize."
      isBlockPage
    >
      <BlockComponents />
    </PageLayout>
  );
}
