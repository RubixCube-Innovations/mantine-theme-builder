import { Box, Collapse, Group, ScrollArea, Text, UnstyledButton, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';
import classes from "./navbar.module.scss"

interface NavbarLinksGroupProps {
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; value: string, isActive: boolean }[];
}

export default function Navbar({menu}: {menu: NavbarLinksGroupProps[]}) {
  const menuItems = menu.map((item) => <NavbarLinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <ScrollArea>
        <div className={classes.links}>{menuItems}</div>
      </ScrollArea>
    </nav>
  );
}

export function NavbarLinksGroup({ label, initiallyOpened, links }: NavbarLinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      className={classes.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group justify="space-between" gap={0} h={rem(36)}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Box>{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
