import { useState } from "react";
import { Box, Card, Container, Title, Text, Button, Stack, Group, Switch, Badge, Flex } from "@mantine/core";
import { CheckCircledIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import classes from "./pricing5.module.css";

export const Pricing5 = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 15,
      yearlyPrice: 12,
      description: "For individuals getting started",
      badge: null,
      features: ["5 projects", "Basic analytics", "Email support", "1GB storage"],
    },
    {
      name: "Growth",
      monthlyPrice: 45,
      yearlyPrice: 36,
      description: "For growing teams and businesses",
      badge: { text: "Best Value", color: "var(--mantine-primary-color-filled)" },
      features: ["Unlimited projects", "Advanced analytics", "Priority support", "25GB storage", "API access", "Team collaboration"],
      highlighted: true,
    },
    {
      name: "Scale",
      monthlyPrice: 99,
      yearlyPrice: 79,
      description: "For enterprises with advanced needs",
      badge: { text: "Most Features", color: "var(--mantine-color-gray-6)" },
      features: ["Everything in Growth", "Unlimited storage", "24/7 phone support", "Custom integrations", "SSO & SAML", "Dedicated manager"],
    },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl">
        <Stack gap="xl">
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" className={classes.title}>
              Choose Your Plan
            </Title>
            <Text c="dimmed" size="lg" ta="center" maw={500}>
              Scale as you grow with flexible pricing
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

          <Stack gap="md">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                withBorder
                radius="lg"
                padding="xl"
                className={`${classes.planCard} ${plan.highlighted ? classes.highlightedCard : ""}`}
              >
                <Flex
                  direction={{ base: "column", sm: "row" }}
                  gap="xl"
                  align={{ base: "stretch", sm: "center" }}
                  justify="space-between"
                >
                  {/* Left: Plan name and price */}
                  <Stack gap="xs" miw={200}>
                    <Group gap="sm">
                      <Title order={3}>{plan.name}</Title>
                      {plan.badge && (
                        <Badge
                          color={plan.badge.color}
                          variant={plan.highlighted ? "filled" : "light"}
                          size="sm"
                        >
                          {plan.badge.text}
                        </Badge>
                      )}
                    </Group>
                    <Text c="dimmed" size="sm">{plan.description}</Text>
                    <Group gap="xs" align="baseline">
                      <Text className={classes.price} fz={32} fw={800}>
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </Text>
                      <Text c="dimmed" size="sm">/month</Text>
                    </Group>
                  </Stack>

                  {/* Middle: Features */}
                  <Group gap="xl" style={{ flex: 1 }} wrap="wrap" justify="center">
                    {plan.features.map((feature) => (
                      <Group key={feature} gap="xs" wrap="nowrap">
                        <CheckCircledIcon
                          color="var(--mantine-primary-color-filled)"
                          width={16}
                          height={16}
                          style={{ flexShrink: 0 }}
                        />
                        <Text size="sm">{feature}</Text>
                      </Group>
                    ))}
                  </Group>

                  {/* Right: CTA */}
                  <Button
                    size="md"
                    variant={plan.highlighted ? "filled" : "outline"}
                    color="var(--mantine-primary-color-filled)"
                    rightSection={<ArrowRightIcon />}
                    miw={160}
                    {...(plan.highlighted ? { c: "var(--mantine-primary-color-contrast)" } : {})}
                  >
                    Get Started
                  </Button>
                </Flex>
              </Card>
            ))}
          </Stack>

          <Text c="dimmed" size="sm" ta="center">
            All plans include a 14-day free trial. No credit card required.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
