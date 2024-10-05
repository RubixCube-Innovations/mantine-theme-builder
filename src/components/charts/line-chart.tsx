import { LineChart } from "@mantine/charts";
import { Box, Paper, Stack, Text } from "@mantine/core";
import { lineChartData } from "../../utils/data";

const LineChartCard = () => {
  return (
    <Paper p={"xl"}>
      <Stack gap={"0"}>
        <Text pb={"xs"} fw="700">
          Likability
        </Text>
        <Box>
          <Text fz={"xl"} fw={600}>
            $ Infinite+
          </Text>
          <Text fz={"xs"} c={"dimmed"}>
            +20.1% from last month
          </Text>
        </Box>

        <LineChart
          h={120}
          data={lineChartData}
          dataKey="date"
          series={[
            {
              name: "Likability",
              color: "var(--mantine-primary-color-filled)",
            },
          ]}
          curveType="natural"
          tickLine="none"
          gridAxis="none"
          withXAxis={false}
          withYAxis={false}
        />
      </Stack>
    </Paper>
  );
};

export default LineChartCard;
