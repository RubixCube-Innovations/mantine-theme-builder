import BlockComponents from "./block-components";
import ThemeCustomizer from "../../../../components/theme-customizer";
import PageLayout from "../../../../components/layout/page-layout";
import { Box } from "@mantine/core";

const BlockPage = () => {
  return (
    <PageLayout title="Mantine UI Blocks" description="Accelerate your development with our ever-growing library of beautifully designed UI blocks. Just copy, paste, and customize.">
      <Box mx={"md"}>

      <ThemeCustomizer isBlockPage={true} />
      </Box>
      <BlockComponents />
    </PageLayout>
  );
};

export default BlockPage;
