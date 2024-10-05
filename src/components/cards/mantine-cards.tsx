import { Group, SimpleGrid, Stack } from "@mantine/core";
import { CardsActivityGoal } from "./activity-goal";
import { CardsCalendar } from "./calendar";
import { CardsChat } from "./chat";
import { CardsMetric } from "./metric";
import { CardsStats } from "./stats";
import { CardsTeamMembers } from "./team-members";

const MantineCards = () => {
  return (
    <SimpleGrid cols={2} py={"xl"} spacing="md">
      <Stack gap="md">
        <CardsStats />
        <SimpleGrid cols={2} spacing="md">
          <Stack gap="md">
            <CardsTeamMembers />
          </Stack>

          <Stack gap="md">
            <CardsChat />
          </Stack>
        </SimpleGrid>
      </Stack>

      <Stack gap="md">
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
