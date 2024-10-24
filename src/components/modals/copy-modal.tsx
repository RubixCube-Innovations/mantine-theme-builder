import { Button, Flex, Modal, ScrollArea, Title } from "@mantine/core";
import { useTheme } from "../../ThemeContext";
import { useDisclosure } from "@mantine/hooks";
import { CodeHighlightTabs } from "@mantine/code-highlight";
import { generateCSSTemplate } from "../../utils/cssTemplate";
import { TypeScriptIcon, CssIcon } from "@mantinex/dev-icons";
import { generatedTheme } from "../../generatedTheme";

const CopyThemeModal = () => {
  const { theme } = useTheme();
  const [opened, { open, close }] = useDisclosure(false);

  const title = (
    <Flex align={"center"}>
      <Title size="h5">Current Theme</Title>
    </Flex>
  );

  const tsIcon = <TypeScriptIcon size={18} />;
  const cssIcon = <CssIcon size={18} />;

  return (
    <>
      <Modal
        size={"90%"}
        opened={opened}
        onClose={close}
        title={title}
        transitionProps={{ transition: "fade", duration: 200 }}
        styles={{
          header: {
            paddingRight: "var(--mantine-spacing-lg",
          },
        }}
      >
        <ScrollArea h={550} style={{ borderRadius: "var(--mantine-radius-default)" }}>
          <CodeHighlightTabs
            code={[
              {
                fileName: "theme.ts",
                code: generatedTheme[theme.primaryColor as string],
                language: "tsx",
                icon: tsIcon,
              },
              {
                fileName: "App.css",
                code: generateCSSTemplate(),
                language: "scss",
                icon: cssIcon,
              },
            ]}
            withCopyButton
            copyLabel="Copy theme code"
            copiedLabel="Copied!"
          />
        </ScrollArea>
      </Modal>

      <Button variant="subtle" size="sm" onClick={open}>
        Copy Code
      </Button>
    </>
  );
};

export default CopyThemeModal;
