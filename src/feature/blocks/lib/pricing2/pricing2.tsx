import { Box, Card, SimpleGrid, Title, Text, Button, Stack, Group, Container, Divider } from "@mantine/core";
import { CheckCircledIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import classes from "./pricing2.module.css";

export const Pricing2 = () => {
  const plans = [
    {
      name: "Starter",
      price: 9,
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "Email support",
        "1GB storage",
        "API access",
      ],
    },
    {
      name: "Professional",
      price: 29,
      description: "Best for growing teams and businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "API access",
        "Custom integrations",
        "Team collaboration",
      ],
      popular: true,
    },
    {
      name: "Business",
      price: 79,
      description: "For large teams with advanced needs",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "24/7 phone support",
        "Custom branding",
        "SSO authentication",
        "Dedicated account manager",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl">
        <Stack align="center" gap="xl">
          <Stack align="center" gap="xs">
            <Title order={1} fw={800}>
              Simple, Transparent Pricing
            </Title>
            <Text c="dimmed" size="lg" ta="center" maw={500}>
              Choose the plan that works best for you and your team
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl" w="100%">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                withBorder
                radius="lg"
                className={`${classes.card} ${plan.popular ? classes.popularCard : ""}`}
                padding="xl"
              >
                {plan.popular && (
                  <Box className={classes.popularBadge}>Most Popular</Box>
                )}
                <Stack gap="lg" h="100%">
                  <Stack gap="xs">
                    <Title order={3} className={classes.planName}>
                      {plan.name}
                    </Title>
                    <Text c="dimmed" size="sm">
                      {plan.description}
                    </Text>
                  </Stack>

                  <Group gap="xs" align="baseline">
                    <Text className={`${classes.price} ${plan.popular ? classes.popularPrice : ""}`} fz={41} fw={700}>
                      ${plan.price}
                    </Text>
                    <Text c="dimmed" size="sm">
                      /month
                    </Text>
                  </Group>

                  <Divider />

                  <Stack gap="sm" style={{ flex: 1 }}>
                    {plan.features.map((feature) => (
                      <Group key={feature} gap="sm" wrap="nowrap">
                        <CheckCircledIcon
                          color="var(--mantine-primary-color-filled)"
                          width={18}
                          height={18}
                          style={{ flexShrink: 0 }}
                        />
                        <Text size="sm">{feature}</Text>
                      </Group>
                    ))}
                  </Stack>

                  <Button
                    size="md"
                    fullWidth
                    variant={plan.popular ? "filled" : "outline"}
                    color="var(--mantine-primary-color-filled)"
                    rightSection={<ArrowRightIcon />}
                    {...(plan.popular ? { c: "var(--mantine-primary-color-contrast)" } : {})}
                  >
                    Get Started
                  </Button>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
