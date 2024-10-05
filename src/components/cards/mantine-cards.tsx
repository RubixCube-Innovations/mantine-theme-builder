import { Grid, Group, SimpleGrid, Stack } from "@mantine/core";
import { CardsActivityGoal } from "./activity-goal";
import { CardsCalendar } from "./calendar";
import { CardsChat } from "./chat";
import { CardsMetric } from "./metric";
import { CardsStats } from "./stats";
import { CardsTeamMembers } from "./team-members";
import { CardsCookieSettings } from "./cookie-settings";

const MantineCards = () => {
  return (
    <Grid py={"xl"}>
      <Grid.Col span={6.5}>
        <Stack gap="md">
          <CardsStats />
          <SimpleGrid cols={2} spacing="md">
            <Stack gap="md">
              <CardsTeamMembers />
              <CardsCookieSettings />
            </Stack>

            <Stack gap="md">
              <CardsChat />
            </Stack>
          </SimpleGrid>
        </Stack>
      </Grid.Col>

      <Grid.Col span={5.5}>
        <Stack gap="md">
          <Group gap={"md"} align="flex-start">
            <CardsCalendar />
            <CardsActivityGoal />
          </Group>
          <CardsMetric />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default MantineCards;
