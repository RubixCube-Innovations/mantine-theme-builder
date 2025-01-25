import { Box, Button, Divider, Drawer, Group, rem, ScrollArea, Stack, Tabs, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconCube,
  IconGoGame,
  IconHeartDollar,
  IconHeartFilled,
  IconInfoCircleFilled,
  IconMenu2,
  IconPalette,
} from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ChangeThemeButton from "../../custom/change-theme-section/change-theme-button";
import ColorSchemeSwitch from "../color-scheme-switch/color-scheme-switch";
import classes from "./header.module.scss";

const APP_NAME = "MantineHub";
export type IMenuItem = {
  id: string;
  href?: string;
  label: string;
  onClick?: () => void;
  links?: IMenuItem[];
  icon?: any;
};
export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const router = useRouter();
  const pathname = usePathname();

  const isMobile = useMediaQuery("(max-width: 430px)");
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setScrollHeight(isMobile ? 220 : 150);
  }, [isMobile]);

  const links: IMenuItem[] = [
    { id: "home", href: "/", label: "Themes", icon: IconPalette },
    { id: "components", href: "/playground", label: "Playground", icon: IconGoGame },
    { id: "blocks", href: "/blocks", label: "Blocks", icon: IconCube },
    // { id: "starter-kit", href: "/starter-kit", label: "Starter Kit" },
    // { id: "templates", href: "/templates", label: "Templates" },
    { id: "feedback", href: "/feedback", label: "Feedback", icon: IconHeartFilled },
    { id: "about", href: "/about", label: "About Us", icon: IconInfoCircleFilled },
    {
      id: "donate",
      label: "Donate",
      onClick: () => window.open("https://www.buymeacoffee.com/abhishekslal01", "_blank"),
      icon: IconHeartDollar,
    },
  ];
  const handleClick = (clickedItem: IMenuItem) => {
    if (clickedItem.onClick) {
      clickedItem.onClick();
    } else if (clickedItem.href) {
      router.push(clickedItem.href);
    }
  };

  const getItems = (view = "header", items = links) =>
    items?.map((link) => {
      const isActive = link.href
        ? link.id === "home"
          ? pathname === link.href
          : pathname.startsWith(link.href)
        : false;

      if (view === "footer")
        return (
          <Tabs.Tab key={link.id} value={link.id} w={"25%"} onClick={() => handleClick(link)} h={"63px"}>
            <Stack gap={"4px"} align="center">
              <link.icon
                stroke={1.5}
                color={isActive ? "var(--mantine-primary-color-filled)" : "var(--mantine-color-dimmed)"}
              />
              <Text
                fz={rem("12px")}
                truncate
                c={isActive ? "var(--mantine-primary-color-filled)" : "var(--mantine-color-dimmed)"}
              >
                {link.label}
              </Text>
            </Stack>
          </Tabs.Tab>
        );

      return (
        <Button
          variant="transparent"
          size={view === "drawer" ? "md" : "sm"}
          key={link.label}
          className={classes.link}
          c={isActive ? "var(--mantine-primary-color-filled)" : undefined}
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
          <Box miw={rem(140)}>
            {scrollPosition > scrollHeight ? (
              <ChangeThemeButton />
            ) : (
              <Text size="md" fw={"bolder"}>
                {APP_NAME}
              </Text>
            )}
          </Box>
          <Group gap={5} visibleFrom="md">
            {getItems("header")}
          </Group>

          <Group>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=RubixCube-Innovations&repo=mantine-theme-builder&type=star&count=true&size=large"
              style={{ border: 0, overflow: "hidden", borderRadius: "var(--mantine-radius-default)" }}
              width="140"
              height="30"
              title="GitHub"
            ></iframe>
            <ColorSchemeSwitch />
          </Group>
        </div>
        <Divider />
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        title={
          <Text size="md" fw={"bolder"}>
            {APP_NAME}
          </Text>
        }
        p={0}
      >
        <Divider pb={"md"} />
        <ScrollArea h="calc(100vh - 80px)">
          <Stack gap="sm">{getItems("drawer")}</Stack>
        </ScrollArea>
      </Drawer>
      <Box>
        <Tabs
          variant="unstyled"
          defaultValue="home"
          className={classes.tab}
          w={"100%"}
          hiddenFrom="md"
          style={{ position: "fixed", bottom: 0, zIndex: 100 }}
        >
          <Tabs.List grow>
            {getItems("footer", links?.slice(0, 3))}
            <Tabs.Tab key={"Menu"} value={"menu"} w={"25%"} onClick={toggleDrawer} h={"63px"}>
              <Stack gap={"4px"} align="center">
                <IconMenu2 color="var(--mantine-color-dimmed)" />
                <Text fz={rem("12px")} truncate c="var(--mantine-color-dimmed)">
                  Menu
                </Text>
              </Stack>
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Box>
    </>
  );
}
