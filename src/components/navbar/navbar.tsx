import { Box, Collapse, Group, ScrollArea, Text, UnstyledButton, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';
import classes from "./navbar.module.scss"



interface NavbarProps {
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; value: string}[];
}

interface NavbarLinksGroupProps extends NavbarProps {
  selected: string;
  setSelected: (value: string) => void;
}

export default function Navbar({menu}: {menu: NavbarProps[]}) {
  const [selected, setSelected] = useState(menu?.[0]?.links?.[0].value ?? '');

  const menuItems = menu.map((item) => <NavbarLinksGroup {...item} key={item.label} selected={selected} setSelected={setSelected} />);

  return (
    <nav className={classes.navbar}>
        <ScrollArea className={classes.links} h={"calc(100vh - 60px)"} scrollbarSize={"xs"}>
          {menuItems}
          </ScrollArea>
    </nav>
  );
}

export function NavbarLinksGroup({ label, initiallyOpened, links, selected, setSelected }: NavbarLinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const scrollToSection = (id: string) => {
    setSelected(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
  }

  const items = (hasLinks ? links : []).map((link) => (
    <Text
      className={classes.link}
      key={link.label}
      onClick={()=>scrollToSection(link.value)}
      style={{ backgroundColor: selected === link.value ? 'var(--mantine-color-default-hover)' : undefined }}
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
      {hasLinks ? <Collapse in={opened}>
      <Box className={classes.linkGroup} pt={"4xs"}>
      {items}
      </Box>
      </Collapse> : null}
    </>
  );
}
