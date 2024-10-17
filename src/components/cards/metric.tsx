import { LineChart } from "@mantine/charts";
import { Box, Card, Text, Title, useMantineTheme } from "@mantine/core";
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
              { name: "average", color: "var(--mantine-primary-color-light)" },
              { name: "today", color: theme?.primaryColor },
            ]}
            tickLine="none"
            gridAxis="none"
            withXAxis={false}
            withYAxis={false}
            tooltipProps={{
              content: ({ label, payload }) => (
                <ChartTooltip label={label} payload={payload} />
              ),
            }}
            lineProps={(series) => ({
              dataKey: series.name,
              isAnimationActive: true,
            })}
          />
        </div>
      </Box>
    </Card>
  );
}
