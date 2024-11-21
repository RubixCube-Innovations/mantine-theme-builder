import BlockComponents from "./block-components";
import ThemeCustomizer from "../../../../components/theme-customizer";
import PageLayout from "../../../../components/layout/page-layout";

const BlockPage = () => {
  return (
    <PageLayout
      title="Mantine UI Blocks"
      description="Accelerate your development with our ever-growing library of beautifully designed UI blocks. Just copy, paste, and customize."
    >
      <ThemeCustomizer isBlockPage={true} />
      <BlockComponents />
    </PageLayout>
  );
};

export default BlockPage;
