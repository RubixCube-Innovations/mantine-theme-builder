import BlockComponents from "./block-components";
import ThemeCustomizer from "../../../../components/theme-customizer";
import PageLayout from "../../../../components/layout/page-layout";

const BlockPage = () => {
  return (
    <PageLayout>
      <ThemeCustomizer isBlockPage={true} />
      <BlockComponents />
    </PageLayout>
  );
};

export default BlockPage;
