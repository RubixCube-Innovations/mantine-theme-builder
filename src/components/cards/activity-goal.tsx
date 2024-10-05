import * as React from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { ActionIcon, Box, Button, Card, Group, rem, Stack, Text } from "@mantine/core"
import { BarChart } from "@mantine/charts"

const data = [
    {
        goal: 400,
        day: 1,
    },
    {
        goal: 300,
        day: 2,
    },
    {
        goal: 200,
        day: 3,
    },
    {
        goal: 300,
        day: 4,
    },
    {
        goal: 200,
        day: 5,
    },
    {
        goal: 278,
        day: 6,
    },
    {
        goal: 189,
        day: 7,
    },
    {
        goal: 239,
        day: 8,
    },
    {
        goal: 300,
        day: 9,
    },
    {
        goal: 200,
        day: 10,
    },
    {
        goal: 278,
        day: 11,
    },
    {
        goal: 189,
        day: 12,
    },
    {
        goal: 349,
        day: 13,
    },
]

export function CardsActivityGoal() {
    // const theme = useMantineTheme()
    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    return (
        <Card w={rem(300)}>
            <Stack gap="md">
                <Box pb="4">
                    <Text fw="700">Move Goal</Text>
                    <Text>Set your daily activity goal.</Text>
                </Box>

                <Group justify="space-between">
                    <ActionIcon
                        variant="outline"
                        size="md"
                        onClick={() => onClick(-10)}
                        disabled={goal <= 200}
                        radius="50%"
                    >
                        <MinusIcon className="h-4 w-4" />
                    </ActionIcon>
                    <Box>
                        <Text size="xxxxxl" fw={"bold"} h={rem(60)}>{goal}</Text>
                        <Text c="dimmed" size="sm" tt={"uppercase"}>
                            Calories/day
                        </Text>
                    </Box>
                    <ActionIcon
                        variant="outline"
                        size="md"
                        onClick={() => onClick(10)}
                        disabled={goal >= 400}
                        radius="50%"
                    >
                        <PlusIcon className="h-4 w-4" />
                    </ActionIcon>
                </Group>
                <Box my="3">
                    <BarChart data={data}
                        h={rem(60)}
                        dataKey="day"
                        series={[{ name: 'goal' }]}
                        tickLine="none"
                        gridAxis="none"
                        withXAxis={false}
                        withYAxis={false}
                    />

                </Box>

                <Box>
                    <Button w="100%">Set Goal</Button>
                </Box>
            </Stack>
        </Card>
    )
}