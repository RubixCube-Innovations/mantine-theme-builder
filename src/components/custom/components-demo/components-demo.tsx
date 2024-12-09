import { Box, Divider, Group, Stack, Title } from "@mantine/core";
import { demoComponentsNavbarData } from "../../../utils/data";
import { Demo } from "../../mantine/demo";
import Navbar from "../../ui/navbar/navbar";
import classes from "./components-demo.module.css";

const ComponentsDemo = () => {
  return (
    <Group gap={"2rem"} pt={"xl"} align="flex-start" justify="center" wrap="nowrap">
      <Box className={classes.navbarWrapper} visibleFrom="md">
        <Navbar menu={demoComponentsNavbarData} />
      </Box>

      <Stack gap={"3xl"} px={0} className={classes.content}>
        {demoComponentsNavbarData?.map((item) => {
          return (
            <Stack gap={"xs"} key={item.label} mb={"3xl"}>
              <Title order={2}>{item.label}</Title>
              <Divider />
              {item.links.map((link) => {
                return (
                  <Stack gap={"lg"} id={link.value} pt="xl" key={link.value} px={0}>
                    <Title order={3} key={link.label}>
                      {link.label}
                    </Title>
                    {link.demo && <Demo key={link.value} data={link.demo} />}
                  </Stack>
                );
              })}
            </Stack>
          );
        })}
      </Stack>
    </Group>
  );
};

export default ComponentsDemo;
