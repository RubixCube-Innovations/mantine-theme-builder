import { Box, Divider, Group, ScrollArea, Stack, Title } from "@mantine/core";
import { demoComponentsNavbarData } from "../../utils/data";
import { Demo } from "../mantine/demo/Demo/Demo";
import Navbar from "../navbar/navbar";
import classes from "./mantine-demo.module.scss";

const MantineDemo = () => {
  return (
    <Group gap={"2rem"} align="flex-start" pt={"md"}>
      <Box className={classes.navbarWrapper} visibleFrom="md">
        <Navbar menu={demoComponentsNavbarData} />
      </Box>

      <ScrollArea className={classes.content}>
        <Stack gap={"3xl"}>
          {demoComponentsNavbarData?.map((item) => {
            return (
              <Stack gap={"xs"} key={item.label} mb={"3xl"}>
                <Title order={2}>{item.label}</Title>
                <Divider />
                {item.links.map((link) => {
                  return (
                    <Stack gap={"lg"} id={link.value} pt="xl">
                      <Title order={3} key={link.label}>
                        {link.label}
                      </Title>
                      {link.demo && <Demo key={link.label} data={link.demo} />}
                    </Stack>
                  );
                })}
              </Stack>
            );
          })}
        </Stack>
      </ScrollArea>
    </Group>
  );
};

export default MantineDemo;
