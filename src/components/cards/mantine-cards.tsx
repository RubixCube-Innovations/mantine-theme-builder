import { Grid, Group, SimpleGrid, Stack } from "@mantine/core";
import { CardsActivityGoal } from "./activity-goal";
import { CardsCalendar } from "./calendar";
import { CardsChat } from "./chat";
import { CardsMetric } from "./metric";
import { CardsStats } from "./stats";
import { CardsTeamMembers } from "./team-members";
import { CardsCookieSettings } from "./cookie-settings";
import { CardsPaymentMethod } from "./payment-method";
import { CardsCreateAccount } from "./create-account";
import { CardsReportIssue } from "./report-issue";
import { CardsDataTable } from "./data-table";
import { CardsShare } from "./share";

const MantineCards = () => {
  return (
    <Grid py={"xl"}>
      <Grid.Col span={{sm: 6, md:6.5}}>
        <Stack gap="md">
          <CardsStats />
          <SimpleGrid cols={{lg:2}} spacing="md">
            <Stack gap="md">
              <CardsTeamMembers />
              <CardsCookieSettings />
              <CardsPaymentMethod />
            </Stack>

            <Stack gap="md">
              <CardsChat />
              <CardsCreateAccount />
              <CardsReportIssue />
            </Stack>
          </SimpleGrid>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{sm: 6, md: 5.5}}>
        <Stack gap="md">
          <Group gap={"md"} align="flex-start">
            <CardsCalendar />
            <CardsActivityGoal />
          </Group>
          <CardsMetric />
          <CardsDataTable />
          <CardsShare />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default MantineCards;
