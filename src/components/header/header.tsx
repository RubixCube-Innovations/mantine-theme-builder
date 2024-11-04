import { Anchor, Burger, Button, Center, Divider, Group, Menu, Modal, ScrollArea, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ColorSchemeSwitch from "../color-scheme-switch/color-scheme-switch";
import classes from "./header.module.css";
import { AboutPage } from "../about/about";
import { IconChevronDown } from "@tabler/icons-react";

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [modalOpened, { open, close }] = useDisclosure(false);

  const links = [
    { link: '/', label: 'Themes' },
    { link: '/components', label: 'Components' },
    { link: '/blocks', label: 'Blocks' },
    {
      link: '#1',
      label: 'About Us',
      links: [
        { link: '/about', label: 'About' },
        { link: '/blog', label: 'Blog' },
        { link: '/resources', label: 'Resources' },
        { link: '/community', label: 'Community' },
      ],
    },
    {
      link: '#2',
      label: 'Support',
      links: [
        { link: '/faq', label: 'FAQ' },
        { link: '/demo', label: 'Book a demo' },
        { link: '/forums', label: 'Forums' },
      ],
    },
  ];

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Text size="md" fw={"bolder"}>MantineHub</Text>
         
            <Group gap={"0px"}>
              <Button variant="transparent" size="xs" style={{ cursor: "pointer" }} onClick={open}>
                Themes
              </Button>
              <Button c="dimmed" variant="transparent" size="xs">
                Components
              </Button>
              <Button c="dimmed" variant="transparent" size="xs">
                Blocks
              </Button>
            
          </Group>
        

        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
          <Group>
            <Group gap={"0"}>
              <Button variant="subtle" size="xs" style={{ cursor: "pointer" }} onClick={open}>
                About
              </Button>
              {/* <Button variant="subtle" size="xs">
                Blogs
              </Button> */}
              <Button
                variant="subtle"
                size="xs"
                data-tally-open="mex2Dx"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                Feedback
              </Button>
              <Anchor href="https://www.buymeacoffee.com/abhishekslal01" target="_blank">
                <Button variant="subtle" size="xs">
                  Support
                </Button>
              </Anchor>
            </Group>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=RubixCube-Innovations&repo=mantine-theme-builder&type=star&count=true&size=large"
              style={{ border: 0, overflow: "hidden", borderRadius: "var(--mantine-radius-default)" }}
              width="130"
              height="30"
              title="GitHub"
            ></iframe>
            <ColorSchemeSwitch />
          </Group>
          </Group>
        </Group>
      </div>
      <Divider />

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
    </header>
  );
}
