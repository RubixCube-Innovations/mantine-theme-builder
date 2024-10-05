import { Box, Flex, Grid, SimpleGrid } from "@mantine/core";
import { CardsActivityGoal } from "./activity-goal";
import { CardsCalendar } from "./calendar";
import { CardsChat } from "./chat";
import LineChartCard from "../charts/line-chart";
import BarChartsCard from "../charts/bar-charts";
import ContactUs from "../contact-us/contact-us";

const MantineCards = () => {
  return (
    <Box>
      <Flex gap="lg" py={"xl"} align={"flex-start"}>
        <CardsActivityGoal />
        <CardsCalendar />
        <CardsChat />
      </Flex>

      <Grid w={"100%"} mb={"2rem"}>
        <Grid.Col span={8}>
          <SimpleGrid cols={2} spacing="md">
            <LineChartCard />
            <BarChartsCard />
          </SimpleGrid>
        </Grid.Col>

        <Grid.Col span={4}>
          <ContactUs />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default MantineCards;
