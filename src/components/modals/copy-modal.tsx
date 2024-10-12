import { Button, Code, CopyButton, Flex, Modal, ScrollArea, Title } from "@mantine/core";
import { MagicWandIcon, CopyIcon } from "@radix-ui/react-icons";
import { formatThemeObj } from "../../utils/functions";
import { useTheme } from "../../ThemeContext";
import { useDisclosure } from "@mantine/hooks";

const CopyThemeModal = () => {
  const { theme } = useTheme();
  const [opened, { open, close }] = useDisclosure(false);

  const copyCode = (
    <CopyButton value={formatThemeObj(theme)}>
      {({ copied, copy }) => (
        <Button variant="transparent" size="sm" onClick={copy} px={"0"}>
          {copied ? <MagicWandIcon /> : <CopyIcon />}
        </Button>
      )}
    </CopyButton>
  );

  const title = (
    <Flex align={"center"} gap={"2xs"}>
      <Title size="h5">Current Theme</Title>
      {copyCode}
    </Flex>
  );

  return (
    <>
      <Modal size={"xl"} opened={opened} onClose={close} title={title}>
        <ScrollArea h={500}>
          <Code block lang="json">
            {formatThemeObj(theme)}
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
