import { LineChart } from "@mantine/charts";
import { alpha, Box, Card, Text, Title, useMantineTheme } from "@mantine/core";
import { ChartTooltip } from "../chart-tooltip";
import { metricData } from "../../utils/data";
// import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

export function CardsMetric() {
  const theme = useMantineTheme();

  return (
    <Card>
      <Box pb="md">
        <Title order={5}>Exercise Minutes</Title>
        <Text size="sm" c="dimmed">
          Your exercise minutes are ahead of where you normally are.
        </Text>
      </Box>
      <Box>
        <div style={{ height: 200 }}>
          <LineChart
            h={200}
            data={metricData}
            dataKey="date"
            series={[
              { name: "average", color: alpha(`var(--mantine-primary-color-filled)`, 0.25) },
              { name: "today", color: theme?.primaryColor },
            ]}
            tickLine="none"
            gridAxis="none"
            withXAxis={false}
            withYAxis={false}
            tooltipProps={{
              content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
            }}
            dotProps={{ strokeWidth: 2, fill: "#fff" }}
            lineProps={(series) => ({
              dataKey: series.name,
              isAnimationActive: true,
              opacity: series.name === "average" ? 0.25 : 1,
            })}
          />
        </div>
      </Box>
    </Card>
  );
}
