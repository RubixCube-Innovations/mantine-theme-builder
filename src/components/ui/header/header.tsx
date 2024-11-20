import { Burger, Button, Center, Divider, Group, Menu, Modal, rem, ScrollArea, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { AboutPage } from "../../about/about";
import ColorSchemeSwitch from "../color-scheme-switch/color-scheme-switch";
import classes from "./header.module.scss";
import { useNavigate } from "@tanstack/react-router";

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [modalOpened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();


  type IMenuItem = { id: string; href?: string; label: string; onClick?: () => void; links?: IMenuItem[] };

  const handleFeedbackClick = () => {
    const feedbackLink = document.createElement('a');
    feedbackLink.href = "#tally-open=mex2Dx&tally-emoji-text=👋&tally-emoji-animation=wave";
    document.body.appendChild(feedbackLink);
    feedbackLink.click();
    document.body.removeChild(feedbackLink);
  };

  const links: IMenuItem[] = [
    { id: "home", href: "/", label: "Themes" },
    { id: "components", href: "/components", label: "Components" },
    { id: "blocks", href: "/blocks", label: "Blocks" },
    // { id: "starter-kit", href: "/starter-kit", label: "Starter Kit" },
    // { id: "templates", href: "/templates", label: "Templates" },
    { id: "feedback", href: "/feedback", label: "Feedback", onClick: handleFeedbackClick },
    { id: "about", href: "/about", label: "About Us", onClick: open },
    { id: "donate", label: "Donate", onClick: () => window.open("https://www.buymeacoffee.com/abhishekslal01", "_blank") },
  ];

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => <Menu.Item key={item.id}>{item.label}</Menu.Item>);

    const handleClick = (clickedItem: IMenuItem) => {
      if (clickedItem.onClick) {
        clickedItem.onClick();
      } else if (clickedItem.href) {
        navigate({ to: link.href });
      }
    };

    // const isHomeActive = (window.location.pathname === "/" || window.location.pathname === "/components") && link.id === "home";
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
        size="xs"
        key={link.label}
        className={classes.link}
        bg={(isActive) ? "var(--mantine-color-default-hover)" : undefined}
        onClick={() => handleClick(link)}
      >
        {link.label}
      </Button>
    );
  });

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Text size="md" fw={"bolder"}>
          MantineHub
        </Text>
        <Group gap={5} visibleFrom="sm">
          {items}
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
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
      </div>
      <Modal
        opened={modalOpened}
        onClose={close}
        // title={<Title order={2}>About Mantine Theme Builder</Title>}
        // title={"About the project"}
        size={"xl"}
        centered
        // scrollAreaComponent={ScrollArea.Autosize}
        styles={{ content: { paddingTop: "0rem" } }}
      >
        <ScrollArea h={"600px"} pe={"sm"} pl="md" pr="xl">
          <AboutPage />
        </ScrollArea>
      </Modal>
      <Divider />
    </header>
  );
}
