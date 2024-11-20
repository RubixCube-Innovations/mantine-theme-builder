import { ScrollArea } from '@mantine/core';
import { useState } from 'react';
import NavbarLinksGroup from './navbar-links-group';
import classes from "./navbar.module.scss";

export interface NavbarProps {
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; value: string}[];
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


