import { Burger, Button, Center, Divider, Drawer, Group, Menu, rem, ScrollArea, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import ColorSchemeSwitch from "../color-scheme-switch/color-scheme-switch";
import classes from "./header.module.scss";

const APP_NAME = "MantineHub";
export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const navigate = useNavigate();


  type IMenuItem = { id: string; href?: string; label: string; onClick?: () => void; links?: IMenuItem[] };

  const links: IMenuItem[] = [
    { id: "home", href: "/", label: "Themes" },
    { id: "components", href: "/components", label: "Components" },
    { id: "blocks", href: "/blocks", label: "Blocks" },
    // { id: "starter-kit", href: "/starter-kit", label: "Starter Kit" },
    // { id: "templates", href: "/templates", label: "Templates" },
    { id: "feedback", href: "/feedback", label: "Feedback" },
    { id: "about", href: "/about", label: "About Us" },
    { id: "donate", label: "Donate", onClick: () => window.open("https://www.buymeacoffee.com/abhishekslal01", "_blank") },
  ];
  const handleClick = (clickedItem: IMenuItem) => {
    if (clickedItem.onClick) {
      clickedItem.onClick();
    } else if (clickedItem.href) {
      navigate({ to: clickedItem.href });
    }
  };


  const getItems = (view = "header") => links.map((link) => {
    const menuItems = link.links?.map((item) => <Menu.Item key={item.id}>{item.label}</Menu.Item>);
    const isActive = window.location.pathname === link.href;

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal width={rem("120px")}>
          <Menu.Target>
            <Button size="xs" variant="subtle" className={classes.link} onClick={() => handleClick(link)}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Button>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Button
        variant="subtle"
        size={view === "drawer" ? "md" : "xs"}
        key={link.label}
        className={classes.link}
        bg={(isActive) ? "var(--mantine-color-default-hover)" : undefined}
        onClick={() => handleClick(link)}
        justify={view === "drawer" ? "start" : "center"}
      >
        {link.label}
      </Button>
    );
  });

  return (
    <>
    <header className={classes.header}>
      <div className={classes.inner}>
        <Text size="md" fw={"bolder"}>
          {APP_NAME}
        </Text>
        <Group gap={5} visibleFrom="sm">
          {getItems("header")}
        </Group>
        <Group>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=RubixCube-Innovations&repo=mantine-theme-builder&type=star&count=true&size=large"
            style={{ border: 0, overflow: "hidden", borderRadius: "var(--mantine-radius-default)" }}
            width="130"
            height="30"
            title="GitHub"
          ></iframe>
          <ColorSchemeSwitch />
        </Group>
        <Burger opened={drawerOpened} onClick={toggleDrawer} size="sm" hiddenFrom="sm" />
      </div>
      <Divider />
    </header>
    <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        title={<Text size="md" fw={"bolder"}>{APP_NAME}</Text>}
        hiddenFrom="sm"
        p={0}
      >
        <Divider pb={"md"}/>
        <ScrollArea h="calc(100vh - 80px">
          <Stack gap="sm" >
            {getItems("drawer")}
          </Stack>
        </ScrollArea>
      </Drawer>
    </>
  );
}
