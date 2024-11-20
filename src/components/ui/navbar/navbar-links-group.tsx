import { Box, Collapse, Group, rem, Text, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { NavbarProps } from "./navbar";
import classes from "./navbar.module.scss"


interface NavbarLinksGroupProps extends NavbarProps {
    selected: string;
    setSelected: (value: string) => void;
  }

export default function NavbarLinksGroup({ label, initiallyOpened, links, selected, setSelected }: NavbarLinksGroupProps) {
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