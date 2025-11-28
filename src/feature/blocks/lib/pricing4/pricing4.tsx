import { useState } from "react";
import { Box, Card, Container, Title, Text, Button, Stack, Group, Switch, SimpleGrid, Progress, Badge } from "@mantine/core";
import { CheckCircledIcon, ArrowRightIcon, PlusIcon } from "@radix-ui/react-icons";
import classes from "./pricing4.module.css";

export const Pricing4 = () => {
  const [isYearly, setIsYearly] = useState(false);

  const mainPlan = {
    name: "Professional",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "Everything you need to grow your business",
    features: [
      "Unlimited projects",
      "Advanced analytics dashboard",
      "Priority email & chat support",
      "50GB cloud storage",
      "API access with 10k requests/day",
      "Team collaboration tools",
      "Custom branding",
    ],
    usage: [
      { name: "Storage", used: 12, total: 50, unit: "GB" },
      { name: "API Requests", used: 4500, total: 10000, unit: "" },
      { name: "Team Members", used: 8, total: 20, unit: "" },
    ],
  };

  const addons = [
    {
      name: "Extra Storage",
      description: "Add 100GB of additional storage",
      monthlyPrice: 9,
      yearlyPrice: 7,
    },
    {
      name: "API Boost",
      description: "Increase to 50k API requests/day",
      monthlyPrice: 19,
      yearlyPrice: 15,
    },
    {
      name: "White Label",
      description: "Remove all branding completely",
      monthlyPrice: 29,
      yearlyPrice: 23,
    },
    {
      name: "Priority Support",
      description: "24/7 phone support & 1hr response",
      monthlyPrice: 39,
      yearlyPrice: 31,
    },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl">
        <Stack gap="xl">
          <Stack align="center" gap="xs">
            <Title order={1} className={classes.title}>
              One Plan, Full Power
            </Title>
            <Text c="dimmed" size="lg" ta="center" maw={500}>
              Get everything you need with optional add-ons
            </Text>
          </Stack>

          <Group justify="center" gap="md">
            <Text fw={isYearly ? 400 : 600}>Monthly</Text>
            <Switch
              size="lg"
              color="var(--mantine-primary-color-filled)"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <Group gap="xs">
              <Text fw={isYearly ? 600 : 400}>Yearly</Text>
              <Badge variant="light" color="var(--mantine-primary-color-filled)" size="sm">
                Save 20%
              </Badge>
            </Group>
          </Group>

          {/* Main Plan Card */}
          <Card withBorder radius="lg" padding="xl" className={classes.mainCard}>
            <Group justify="space-between" align="flex-start" wrap="wrap" gap="xl">
              <Stack gap="md" style={{ flex: 1, minWidth: 280 }}>
                <Group gap="sm">
                  <Title order={2}>{mainPlan.name}</Title>
                  <Badge color="var(--mantine-primary-color-filled)" variant="light">
                    Most Popular
                  </Badge>
                </Group>
                <Text c="dimmed">{mainPlan.description}</Text>

                <Stack gap="sm" mt="md">
                  {mainPlan.features.map((feature) => (
                    <Group key={feature} gap="sm">
                      <CheckCircledIcon
                        color="var(--mantine-primary-color-filled)"
                        width={18}
                        height={18}
                      />
                      <Text size="sm">{feature}</Text>
                    </Group>
                  ))}
                </Stack>
              </Stack>

              <Stack align="center" gap="md" className={classes.priceSection}>
                <Stack align="center" gap={4}>
                  <Text className={classes.price} fz={48} fw={800} lh={1}>
                    ${isYearly ? mainPlan.yearlyPrice : mainPlan.monthlyPrice}
                  </Text>
                  <Text c="dimmed" size="sm">
                    per month, billed {isYearly ? "yearly" : "monthly"}
                  </Text>
                </Stack>

                <Button
                  size="lg"
                  color="var(--mantine-primary-color-filled)"
                  rightSection={<ArrowRightIcon />}
                  c="var(--mantine-primary-color-contrast)"
                  fullWidth
                >
                  Get Started
                </Button>

                <Stack gap="xs" w="100%" mt="md">
                  <Text size="sm" fw={600}>Current Usage</Text>
                  {mainPlan.usage.map((item) => (
                    <Stack key={item.name} gap={4}>
                      <Group justify="space-between">
                        <Text size="xs" c="dimmed">{item.name}</Text>
                        <Text size="xs" c="dimmed">
                          {item.used}{item.unit} / {item.total}{item.unit}
                        </Text>
                      </Group>
                      <Progress
                        value={(item.used / item.total) * 100}
                        size="sm"
                        color="var(--mantine-primary-color-filled)"
                        radius="xl"
                      />
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Group>
          </Card>

          {/* Add-ons Section */}
          <Stack gap="md">
            <Title order={3} ta="center">Optional Add-ons</Title>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
              {addons.map((addon) => (
                <Card key={addon.name} withBorder radius="md" padding="lg" className={classes.addonCard}>
                  <Stack gap="sm" h="100%">
                    <Text fw={600}>{addon.name}</Text>
                    <Text size="sm" c="dimmed" style={{ flex: 1 }}>
                      {addon.description}
                    </Text>
                    <Group justify="space-between" align="center">
                      <Text fw={700} className={classes.addonPrice}>
                        +${isYearly ? addon.yearlyPrice : addon.monthlyPrice}/mo
                      </Text>
                      <Button
                        size="xs"
                        variant="light"
                        color="var(--mantine-primary-color-filled)"
                        leftSection={<PlusIcon width={14} height={14} />}
                      >
                        Add
                      </Button>
                    </Group>
                  </Stack>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
