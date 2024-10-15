import { Button, Code, CopyButton, Flex, Modal, ScrollArea, SegmentedControl, Title, Tooltip } from "@mantine/core";
import { MagicWandIcon, CopyIcon } from "@radix-ui/react-icons";
import { formatCssVariable, formatThemeObj, getCurrentCSSResolverVariables } from "../../utils/functions";
import { useTheme } from "../../ThemeContext";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { themeModalTabs } from "../../utils/data";

const CopyThemeModal = () => {
  const { theme } = useTheme();
  const [opened, { open, close }] = useDisclosure(false);
  const [tab, setTab] = useState<string>(themeModalTabs?.createTheme);

  const getCssResolverVariables = (theme: any) => {
    const cssResolverVars = getCurrentCSSResolverVariables(theme);
    return formatCssVariable(cssResolverVars);
  };

  const copyCode = (
    <CopyButton value={tab === themeModalTabs?.createTheme ? formatThemeObj(theme) : getCssResolverVariables(theme)}>
      {({ copied, copy }) => (
        <Tooltip
          label={copied ? "Copied" : "Copy"}
          transitionProps={{ transition: "fade-left", duration: 300 }}
          position="left"
          offset={5}
        >
          <Button variant="transparent" size="sm" onClick={copy} px={"4px"}>
            {copied ? <MagicWandIcon /> : <CopyIcon />}
          </Button>
        </Tooltip>
      )}
    </CopyButton>
  );

  const title = (
    <Flex align={"center"}>
      <Title size="h5">Current Theme</Title>
    </Flex>
  );

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
      >
        <Flex justify={"space-between"} align={"center"} gap={"2xs"}>
          <SegmentedControl
            my={"xs"}
            value={tab}
            onChange={setTab}
            data={[
              { label: "createTheme", value: themeModalTabs?.createTheme },
              { label: "CSSVariablesResolver", value: themeModalTabs?.cssResolver },
            ]}
          />
          {copyCode}
        </Flex>

        <ScrollArea h={405} style={{ borderRadius: "var(--mantine-radius-default)" }}>
          <Code block lang="json">
            {tab === themeModalTabs?.createTheme ? formatThemeObj(theme) : getCssResolverVariables(theme)}
          </Code>
        </ScrollArea>
      </Modal>

      <Button variant="subtle" size="sm" onClick={open}>
        Copy Code
      </Button>
    </>
  );
};

export default CopyThemeModal;
