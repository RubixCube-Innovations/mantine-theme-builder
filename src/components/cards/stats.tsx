import { BarChart, LineChart } from "@mantine/charts";
import { Box, Card, rem, SimpleGrid, Text } from "@mantine/core";

const data = [
  {
    revenue: 10400,
    subscription: 240,
  },
  {
    revenue: 14405,
    subscription: 300,
  },
  {
    revenue: 9400,
    subscription: 200,
  },
  {
    revenue: 8200,
    subscription: 278,
  },
  {
    revenue: 7000,
    subscription: 189,
  },
  {
    revenue: 9600,
    subscription: 239,
  },
  {
    revenue: 11244,
    subscription: 278,
  },
  {
    revenue: 26475,
    subscription: 189,
  },
];

export function CardsStats() {
  return (
    <SimpleGrid cols={{ lg: 2 }}>
      <Card>
        <Box>
          <Text size="sm">Total Revenue</Text>
        </Box>
        <Box>
          <Text size="xl" fw={"bold"}>
            $15,231.89
          </Text>
          <Text size="xs" c="dimmed">
            +20.1% from last month
          </Text>
          <Box mt={"xl"}>
            <LineChart
              h={rem(80)}
              data={data}
              dataKey="subscription"
              series={[{ name: "revenue" }]}
              curveType="monotone"
              tickLine="none"
              gridAxis="none"
              withXAxis={false}
              withYAxis={false}
              lineProps={{ isAnimationActive: true, dataKey: "revenue" }}
              withTooltip={false}
              dotProps={{ strokeWidth: 2, fill: "#fff" }}
            />
          </Box>
        </Box>
      </Card>
      <Card>
        <Box>
          <Text size="sm">Subscriptions</Text>
        </Box>
        <Box>
          <Text size="xl" fw={"bold"}>
            +2350
          </Text>
          <Text size="xs" color="dimmed">
            +180.1% from last month
          </Text>
          <Box mt={"xl"}>
            <BarChart
              h={rem(80)}
              data={data}
              dataKey="revenue"
              series={[{ name: "subscription" }]}
              tickLine="none"
              gridAxis="none"
              withXAxis={false}
              withYAxis={false}
              barProps={{ isAnimationActive: true, dataKey: "subscription" }}
              withTooltip={false}
            />
          </Box>
        </Box>
      </Card>
    </SimpleGrid>
  );
}
