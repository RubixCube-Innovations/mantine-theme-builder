import PageLayout from "@/components/layouts/page-layout";
import BlockComponents from "@/feature/blocks/components/block-components/block-components";

export default function BlockPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout
      title="Mantine UI Blocks 🚀"
      description="Accelerate your development with our ever-growing library of beautifully designed UI blocks. Just copy, paste, and customize."
      isBlockPage
    >
      <BlockComponents />
      {children}
    </PageLayout>
  );
}
