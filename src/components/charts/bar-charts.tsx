import { BarChart } from "@mantine/charts";
import { barChartData } from "../../utils/data";
import { Box, Card, rem, Stack, Text } from "@mantine/core";

const BarChartsCard = () => {
  return (
    <Card p={"xl"} w={rem(350)}>
      <Stack gap={"0"}>
        <Text pb={"xs"} fw="700">
          Subscriptions
        </Text>
        <Box mb={"md"}>
          <Text fz={"xl"} fw={600}>
            $ Infinite+
          </Text>
          <Text fz={"xs"} c={"dimmed"}>
            +20.1% from last month
          </Text>
        </Box>
        <BarChart
          h={120}
          data={barChartData}
          dataKey="month"
          series={[
            {
              name: "Smartphones",
              color: "var(--mantine-primary-color-filled)",
            },
          ]}
          tickLine="none"
          gridAxis="none"
          withXAxis={false}
          withYAxis={false}
        />
      </Stack>
    </Card>
  );
};

export default BarChartsCard;
