import { Button, Flex, MantineThemeOverride, Modal, ScrollArea, Title } from "@mantine/core";
import { useTheme } from "../../ThemeContext";
import { useDisclosure } from "@mantine/hooks";
import { CodeHighlightTabs } from "@mantine/code-highlight";
import { TypeScriptIcon, CssIcon } from "@mantinex/dev-icons";
import { generatedMantineTheme } from "../../themes/generated/generatedMantineTheme";
import { generatedShadcnTheme } from "../../themes/generated/generatedShadcnTheme";
import { generatedMantineCssVariableResolver } from "../../themes/generated/generatedMantineCssVariableResolver";
import { generatedShadcnCssVariableResolver } from "../../themes/generated/generatedShadcnCssVariableResolver";
import { generateCSSTemplate } from "../../utils/cssTemplate";

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

  const getGeneratedTheme = (theme: MantineThemeOverride) => {
    if (theme.other?.style === "mantine") {
      const color = theme.primaryColor as keyof typeof generatedMantineTheme;
      return generatedMantineTheme[color];
    }

    if (theme.other?.style === "shadcn") {
      const color = theme.primaryColor as keyof typeof generatedShadcnTheme;
      return generatedShadcnTheme[color];
    }
  };

  const getGeneratedCssVariables = (theme: MantineThemeOverride) => {
    if (theme.other?.style === "mantine") {
      const color = theme.primaryColor as keyof typeof generatedMantineTheme;
      return generatedMantineCssVariableResolver[color];
    }

    if (theme.other?.style === "shadcn") {
      const color = theme.primaryColor as keyof typeof generatedShadcnTheme;
      return generatedShadcnCssVariableResolver[color];
    }
  }
  

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
                code: getGeneratedTheme(theme) ?? "Error occured while generating theme",
                language: "tsx",
                icon: tsIcon,
              },
              {
                fileName: "cssVariableResolver.ts",
                code: getGeneratedCssVariables(theme) ?? "Error occured while generating css variables",
                language: "tsx",
                icon: tsIcon,
              },
              {
                fileName: "style.css",
                code: generateCSSTemplate(),
                language: "tsx",
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
