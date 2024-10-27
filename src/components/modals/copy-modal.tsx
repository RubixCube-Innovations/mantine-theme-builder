import { CodeHighlightTabs } from "@mantine/code-highlight";
import { Button, Flex, MantineThemeOverride, Modal, ScrollArea, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CssIcon, TypeScriptIcon } from "@mantinex/dev-icons";
import { useTheme } from "../../ThemeContext";
import { generatedMantineCssStyles } from "../../themes/generated/generatedMantineCssStyles";
import { generatedMantineCssVariableResolver } from "../../themes/generated/generatedMantineCssVariableResolver";
import { generatedMantineTheme } from "../../themes/generated/generatedMantineTheme";
import { generatedShadcnCssStyles } from "../../themes/generated/generatedShadcnCssStyles";
import { generatedShadcnCssVariableResolver } from "../../themes/generated/generatedShadcnCssVariableResolver";
import { generatedShadcnTheme } from "../../themes/generated/generatedShadcnTheme";

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
  
  const getGeneratedCssStyles = (theme: MantineThemeOverride) => {
    if (theme.other?.style === "mantine") {
      return generatedMantineCssStyles;
    }

    if (theme.other?.style === "shadcn") {
      return generatedShadcnCssStyles;
    }
  }

  return (
    <>
      <Modal
        size={"xl"}
        opened={opened}
        onClose={close}
        title={title}
        transitionProps={{ transition: "fade", duration: 200 }}
        styles={{
          header: {
            paddingRight: "var(--mantine-spacing-lg",
          },
        }}
        centered
      >
        <ScrollArea h={"750"} style={{ borderRadius: "var(--mantine-radius-default)" }}>
          <CodeHighlightTabs
            style={{maxWidth: "44.5rem"}}
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
                code: getGeneratedCssStyles(theme) ?? "Error occured while generating css styles",
                language: "tsx",
                icon: cssIcon,
              },
            ]}
            withCopyButton
            copyLabel="Copy code"
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
