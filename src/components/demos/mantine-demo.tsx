import { Box, Group, ScrollArea } from '@mantine/core';
import { demoComponentsNavbarData } from '../../utils/data';
import { Demo } from '../mantine/demo/Demo/Demo';
import Navbar from '../navbar/navbar';
import { buttonDemoConfigurator } from './core/button/button-demo';
import classes from "./mantine-demo.module.scss"

const MantineDemo = () => {
  return (
    <Group gap={"2rem"} align="flex-start" pt={"md"}>
      <Box className={classes.navbarWrapper} visibleFrom='md'>
        <Navbar menu={demoComponentsNavbarData} />
      </Box>

      <ScrollArea className={classes.content}>
        <Demo data={buttonDemoConfigurator} />
      </ScrollArea>
    </Group>
  );
};

export default MantineDemo