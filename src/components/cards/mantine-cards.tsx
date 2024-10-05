import { Group, SimpleGrid, Stack } from "@mantine/core";
import ContactUs from "../contact-us/contact-us";
import { CardsActivityGoal } from "./activity-goal";
import { CardsCalendar } from "./calendar";
import { CardsChat } from "./chat";
import { CardsMetric } from "./metric";
import { CardsStats } from "./stats";

const MantineCards = () => {
  return (
    <SimpleGrid cols={2} py={"xl"}>
      <Stack gap="sm">
        <CardsStats />
        <SimpleGrid cols={2}>
          <Stack gap="sm">
            <ContactUs />
          </Stack>

          <Stack gap="sm">
            <CardsChat />
          </Stack>
        </SimpleGrid>
      </Stack>

      <Stack gap="sm">
        <Group gap={"md"}>
          <CardsCalendar />
          <CardsActivityGoal />
        </Group>
        <CardsMetric />
      </Stack>
    </SimpleGrid>
  );
};

export default MantineCards;
