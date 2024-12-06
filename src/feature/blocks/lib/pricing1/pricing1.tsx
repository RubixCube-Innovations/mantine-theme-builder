import { useState } from "react";
import { Box, Card, Grid, Title, Text, Button, Switch, Divider, Group, Stack, Container } from "@mantine/core";
import { CheckCircledIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import classes from "./pricing1.module.css";

export const Pricing1 = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Plus",
      subtitle: "For personal use",
      monthlyPrice: 19,
      yearlyPrice: 15,
      annualBilling: {
        monthly: 228,
        yearly: 180,
      },
      badgeColor: "var(--mantine-primary-color-6)",
      features: [
        "Unlimited basic features",
        "Standard support",
        "Basic analytics",
        "Single user account",
        "Lorem ipsum dolor sit.",
      ],
    },
    {
      name: "Pro",
      subtitle: "For professionals",
      monthlyPrice: 49,
      yearlyPrice: 35,
      annualBilling: {
        monthly: 588,
        yearly: 420,
      },
      badgeColor: "var(--mantine-primary-color-filled)",
      features: [
        "Everything in Plus",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "Custom integrations",
        "Lorem ipsum dolor sit.",
      ],
      recommended: true,
    },
  ];

  return (
    <Box className={classes.pricingWrapper}>
      <Container size="xl">
        <Stack align="center" gap="xl">
          <Stack align="center" gap="xs">
            <Title order={1} fz={"2.6rem"} className={classes.mainTitle}>
              Pricing Plans
            </Title>
            <Text className={classes.mainSubtitle} c="dimmed">
              Choose the perfect plan for your needs
            </Text>
          </Stack>

          <Group align="center" gap="md">
            <Text>Monthly</Text>
            <Switch
              size="lg"
              color="var(--mantine-primary-color-filled)"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className={classes.billingSwitch}
            />
            <Text>Yearly</Text>
          </Group>

          <Grid gutter="xl" w="90%">
            {plans.map((plan) => (
              <Grid.Col key={plan.name} span={{ base: 12, lg: 6 }}>
                <Card
                  withBorder
                  radius="lg"
                  className={`${classes.pricingCard} ${plan.recommended ? classes.recommendedCard : ""}`}
                  style={{ overflow: "visible" }}
                >
                  <Stack gap="xl" h={"100%"}>
                    <Group justify="space-between" align="start">
                      <Stack gap="xs">
                        <Title order={1} fw={600} className={classes.planTitle}>
                          {plan.name}

                          {plan.recommended && <Box className={classes.recommendedBadge}>Most Popular</Box>}
                        </Title>
                        <Text c="dimmed" size="md">
                          {plan.subtitle}
                        </Text>
                      </Stack>
                      <Stack align="end" gap={4}>
                        <Text fz={"h1"} fw={600} className={classes.price} lh={"lg"}>
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </Text>
                        <Text c="dimmed" size="sm">
                          Billed {isYearly ? "yearly" : "monthly"}
                        </Text>
                      </Stack>
                    </Group>

                    <Divider />

                    <Stack gap="md" mb={"xs"}>
                      {plan.features.map((feature) => (
                        <Group key={feature} gap="md" align="center">
                          <CheckCircledIcon color="var(--mantine-primary-color-6)" />
                          <Text>{feature}</Text>
                        </Group>
                      ))}
                    </Stack>

                    <Button
                      className="mt-auto"
                      size="lg"
                      variant="filled"
                      color={plan.badgeColor}
                      c={"var(--mantine-primary-color-contrast)"}
                      rightSection={<ArrowRightIcon />}
                      fullWidth
                    >
                      Get Started
                    </Button>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};
