/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Paper, Stack, Text } from "@mantine/core";

interface ChartTooltipProps {
  label: string;
  payload: Record<any, any>[] | undefined;
}

export function ChartTooltip({ payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      <Flex gap={"sm"}>
        {payload.map((item: any) => (
          <Stack gap={"1px"}>
            <Text
              key={item.name}
              c={"var(--mantine-color-text)"}
              fz="sm"
              fw={500}
              style={{
                textTransform: "uppercase",
              }}
            >
              {item.name}
            </Text>
            <Text
              key={item.name}
              c={"var(--mantine-color-text)"}
              fz="sm"
              fw={500}
            >
              {item?.value}
            </Text>
          </Stack>
        ))}
      </Flex>
    </Paper>
  );
}
