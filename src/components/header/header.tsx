import { Burger, Button, Center, Divider, Group, Menu, Modal, rem, ScrollArea, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { AboutPage } from "../about/about";
import ColorSchemeSwitch from "../color-scheme-switch/color-scheme-switch";
import classes from "./header.module.scss";

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [modalOpened, { open, close }] = useDisclosure(false);

  type IMenuItem = {id: string, href?:string, label:string, onClick?:()=>void, links?:IMenuItem[]}

  const links: IMenuItem[] = [
    { id: "home", href: "/", label: "Themes" },
    { id: "blogs", href: "/blogs", label: "Blogs" },
    { id: "feedback", href: "/feedback", label: "Feedback" },
    { id: "about", href: "/about", label: "About Us", onClick: open },
    { id: "donate", href: "/donate", label: "Support Us" },
    // {
    //   id: "#1",
    //   label: "More",
    //   links: [
    //     { id: "feedback", href: "/feedback", label: "Feedback" },
    //     { id: "about", href: "/about", label: "About Us", onClick: open },
    //     { id: "donate", href: "/donate", label: "Support Us" },
    //   ],
    // },
  ];
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => <Menu.Item key={item.id}>{item.label}</Menu.Item>);

    const handleClick = (clickedItem: IMenuItem) => {
      if(clickedItem.href === undefined && clickedItem.onClick === undefined){
        //do nothing
      }else if(clickedItem.href){
        //handle navigation
      }else if(clickedItem.onClick){
        clickedItem.onClick();
      }
    }

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal width={rem("120px")}>
          <Menu.Target>
            <Button size="xs" variant="subtle" className={classes.link} onClick={()=>handleClick(link)}>
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
      <Button variant="subtle" size="xs" key={link.label} className={classes.link} onClick={(event) => event.preventDefault()}>
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

  // return (
  //   <header className={classes.header}>
  //     <div className={classes.inner}>
  //       <Group>
  //         <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
  //         <Text size="md" fw={"bolder"}>MantineHub</Text>

  //           <Group gap={"0px"}>
  //             <Button size="xs" style={{ cursor: "pointer" }} onClick={open}>
  //               Themes
  //             </Button>
  //             <Button c="dimmed" size="xs">
  //               Components
  //             </Button>
  //             <Button c="dimmed" size="xs">
  //               Blocks
  //             </Button>

  //         </Group>

  //       </Group>

  //       <Group>
  //         <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
  //         <Group>
  //           <Group gap={"0"}>
  //             <Button variant="subtle" size="xs" style={{ cursor: "pointer" }} onClick={open}>
  //               About
  //             </Button>
  //             {/* <Button variant="subtle" size="xs">
  //               Blogs
  //             </Button> */}
  //             <Button
  //               variant="subtle"
  //               size="xs"
  //               data-tally-open="mex2Dx"
  //               data-tally-emoji-text="👋"
  //               data-tally-emoji-animation="wave"
  //             >
  //               Feedback
  //             </Button>
  //             <Anchor href="https://www.buymeacoffee.com/abhishekslal01" target="_blank">
  //               <Button variant="subtle" size="xs">
  //                 Support
  //               </Button>
  //             </Anchor>
  //           </Group>
  // <iframe
  //   src="https://ghbtns.com/github-btn.html?user=RubixCube-Innovations&repo=mantine-theme-builder&type=star&count=true&size=large"
  //   style={{ border: 0, overflow: "hidden", borderRadius: "var(--mantine-radius-default)" }}
  //   width="130"
  //   height="30"
  //   title="GitHub"
  // ></iframe>
  // <ColorSchemeSwitch />
  //         </Group>
  //         </Group>
  //       </Group>
  //     </div>
  //     <Divider />

     
  //   </header>
  // );
}
