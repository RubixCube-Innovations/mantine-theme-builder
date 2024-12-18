"use client"
import PageLayout from "@/components/layouts/page-layout";
import BlockComponents from "@/feature/blocks/components/block-components/block-components";

export default function Page() {
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
