import { AppShell, Container, Group, RemoveScroll } from "@mantine/core";
import { ColorSchemeControl, HeaderControls } from "@mantinex/mantine-header";

import classes from "./shell.module.scss";

interface ShellProps {
  children: React.ReactNode;
}

const Shell = ({ children }: ShellProps) => {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="xl" px="md" className={classes.inner}>
          <HeaderControls visibleFrom="sm" withDirectionToggle={false} withDiscord={false} discordLink="" />

          <Group hiddenFrom="sm">
            {/* <SearchMobileControl onSearch={searchHandlers.open} /> */}
            <ColorSchemeControl />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <div className={classes.main}>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
};

export default Shell;
