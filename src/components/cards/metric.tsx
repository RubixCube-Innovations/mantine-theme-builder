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
        <Title order={3}>Exercise Minutes</Title>
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
          />

          {/* <ResponsiveContainer width="100%" height="100%"> 
           <LineChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 10,
                                left: 10,
                                bottom: 0,
                            }}
                        >
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div style={{ borderRadius: '8px', border: '1px solid', background: theme.colors.gray[0], padding: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <span style={{ fontSize: '0.70rem', textTransform: 'uppercase', color: theme.colors.gray[6] }}>
                                                            Average
                                                        </span>
                                                        <span style={{ fontWeight: 'bold', color: theme.colors.gray[6] }}>
                                                            {payload[0].value}
                                                        </span>
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <span style={{ fontSize: '0.70rem', textTransform: 'uppercase', color: theme.colors.gray[6] }}>
                                                            Today
                                                        </span>
                                                        <span style={{ fontWeight: 'bold' }}>
                                                            {payload[1].value}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                    return null
                                }}
                            />
                            <Line
                                type="monotone"
                                strokeWidth={2}
                                dataKey="average"
                                activeDot={{
                                    r: 6,
                                    style: { fill: theme.primaryColor, opacity: 0.25 },
                                }}
                                style={
                                    {
                                        stroke: theme.primaryColor,
                                        opacity: 0.25,
                                    } as React.CSSProperties
                                }
                            />
                            <Line
                                type="monotone"
                                dataKey="today"
                                strokeWidth={2}
                                activeDot={{
                                    r: 8,
                                    style: { fill: theme.primaryColor },
                                }}
                                style={
                                    {
                                        stroke: theme.primaryColor,
                                    } as React.CSSProperties
                                }
                            />
            
          </ResponsiveContainer>
                        </LineChart> */}
        </div>
      </Box>
    </Card>
  );
}
