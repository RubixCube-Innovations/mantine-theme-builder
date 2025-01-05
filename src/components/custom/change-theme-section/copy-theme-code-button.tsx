import { CodeHighlightTabs } from "@mantine/code-highlight";
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  CloseIcon,
  Divider,
  Flex,
  Group,
  HoverCard,
  List,
  MantineThemeOverride,
  Modal,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CssIcon, TypeScriptIcon } from "@mantinex/dev-icons";
import { ExternalLinkIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { useTheme } from "../../../theme-context";
import { generatedMantineTheme } from "../../../themes/generated/generatedMantineTheme";
import { generatedShadcnTheme } from "../../../themes/generated/generatedShadcnTheme";
import { generatedMantineCssVariableResolver } from "../../../themes/generated/generatedMantineCssVariableResolver";
import { generatedShadcnCssVariableResolver } from "../../../themes/generated/generatedShadcnCssVariableResolver";
import { generatedMantineCssStyles } from "../../../themes/generated/generatedMantineCssStyles";
import { generatedShadcnCssStyles } from "../../../themes/generated/generatedShadcnCssStyles";
import { removeStringPlaceholders } from "../../../utils/functions";
import Link from "next/link";

const CopyThemeCodeButton = () => {
  const { theme } = useTheme();
  const [opened, { open, close }] = useDisclosure(false);

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
      return removeStringPlaceholders(generatedShadcnCssVariableResolver[color]);
    }
  };

  const getGeneratedCssStyles = (theme: MantineThemeOverride) => {
    if (theme.other?.style === "mantine") {
      return generatedMantineCssStyles;
    }

    if (theme.other?.style === "shadcn") {
      return generatedShadcnCssStyles;
    }
  };

  return (
    <>
      <Modal
        size={"xl"}
        opened={opened}
        onClose={close}
        transitionProps={{ transition: "fade", duration: 200 }}
        styles={{
          header: {
            paddingRight: "var(--mantine-spacing-lg",
          },
        }}
        centered
        withCloseButton={false}
      >
        <Box mb={"md"}>
          <Flex justify={"space-between"}>
            <Title order={4}>Current Theme</Title>
            <Group>
              <Anchor href="https://vercel.com/font#get">
              <Group gap={"3xs"}>
                <ExternalLinkIcon color="var(--mantine-color-dimmed)" />
                <Text c="dimmed" size="sm">
                  Font
                </Text>
              </Group>
              </Anchor>
              <HoverCard shadow="md" width={430}>
                <HoverCard.Target>
                  <Group gap={"3xs"}>
                    <InfoCircledIcon color="var(--mantine-color-dimmed)" />
                    <Text c="dimmed" size="sm">
                      How to use?
                    </Text>
                  </Group>
                </HoverCard.Target>
                <HoverCard.Dropdown p="md">
                  <Box>
                    <Title order={5}>🤔 How to Use?</Title>
                    <Divider my="xs" />
                    <List type="ordered" size="sm" spacing="sm" my={"lg"} me={"8px"} lh={"lg"}>
                      <List.Item>
                        Copy the `theme.ts` and `cssVariableResolver.ts` and paste it into your project.
                      </List.Item>
                      <List.Item>
                        Import the theme object and cssVariableResolver and pass it to `MantineProvider` component.
                      </List.Item>
                      <List.Item>Copy the styles.css and import it in your project's main file.</List.Item>
                      <List.Item>Woohoo! You are all set!</List.Item>
                    </List>
                  </Box>
                </HoverCard.Dropdown>
              </HoverCard>
              <ActionIcon size="md" variant="subtle" onClick={close}>
                <CloseIcon />
              </ActionIcon>
            </Group>
          </Flex>
        </Box>
        <ScrollArea h={"750"} style={{ borderRadius: "var(--mantine-radius-default)" }}>
          <CodeHighlightTabs
            style={{ maxWidth: "45.625rem" }}
            styles={{
              header: {
                position: "sticky",
                zIndex: 150,
                top: 0,
                background: "var(--mantine-color-secondary-filled)",
              },
            }}
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

export default CopyThemeCodeButton;
