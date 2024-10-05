import { Flex, Stack } from "@mantine/core";
import BarChartsCard from "../charts/bar-charts";
import LineChartCard from "../charts/line-chart";
import ContactUs from "../contact-us/contact-us";
import { CardsActivityGoal } from "./activity-goal";
import { CardsCalendar } from "./calendar";
import { CardsChat } from "./chat";
import { CardsMetric } from "./metric";

const MantineCards = () => {
  return (
    <Stack gap="md" py={"xl"}>
      <Flex gap="md" align={"flex-start"}>
        <LineChartCard />
        <BarChartsCard />
        <CardsCalendar />
        <CardsActivityGoal />
        </Flex>
      <Flex gap="md" align={"flex-start"}>
        <ContactUs />
        <CardsChat />
        <CardsMetric />
      </Flex> 
    </Stack>
  );
};

export default MantineCards;
