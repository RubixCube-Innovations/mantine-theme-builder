import * as React from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { ActionIcon, alpha, Box, Button, Card, Group, rem, Stack, Text, Title } from "@mantine/core"
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
        <Card style={{minWidth: rem(300)}}>
            <Stack>
                <Box>
                    <Title order={5}>Move Goal</Title>
                    <Text size="sm" c="dimmed">Set your daily activity goal.</Text>
                </Box>

                <Group justify="space-between">
                    <ActionIcon
                        variant="default"
                        size="md"
                        onClick={() => onClick(-10)}
                        disabled={goal <= 200}
                        radius="50%"
                    >
                        <MinusIcon className="h-4 w-4" />
                    </ActionIcon>
                    <Box>
                        <Text size="5xl" fw={"bold"} lh={rem(40)}>{goal}</Text>
                        <Text c="dimmed" size="xs" tt={"uppercase"} mt={rem(8)}>
                            Calories/day
                        </Text>
                    </Box>
                    <ActionIcon
                        variant="default"
                        size="md"
                        onClick={() => onClick(10)}
                        disabled={goal >= 400}
                        radius="50%"
                    >
                        <PlusIcon className="h-4 w-4" />
                    </ActionIcon>
                </Group>
                <Box>
                    <BarChart data={data}
                        h={rem(60)}
                        dataKey="day"
                        series={[{ name: 'goal', color: alpha("var(--mantine-primary-color-filled)", 0.2) }]}
                        tickLine="none"
                        gridAxis="none"
                        withXAxis={false}
                        withYAxis={false}
                        barProps={() => ({
                            isAnimationActive: true,
                        })}
                    />

                </Box>

                <Box>
                    <Button w="100%">Set Goal</Button>
                </Box>
            </Stack>
        </Card>
    )
}