import { Button, Group } from "@mantine/core";
import ChangeThemeButton from "./change-theme-button";
import CopyThemeCodeButton from "./copy-theme-code-button";

const ChangeThemeSection = ({ isBlockPage = false }: { isBlockPage?: boolean }) => {
  return (
    <Group>
      <ChangeThemeButton />
      {isBlockPage ? (
        <Button variant="subtle" size="sm" component="a" href="https://github.com/RubixCube-Innovations/mantine-theme-builder/issues/new?title=Block+Request:" target="_blank">
          Request a block
        </Button>
      ) : (
        <CopyThemeCodeButton />
      )}
    </Group>
  );
};

export default ChangeThemeSection;
