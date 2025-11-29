import { Box, Container, Title, Text, Button, Stack, Group, Paper } from "@mantine/core";
import { CheckIcon, Cross2Icon, ArrowRightIcon } from "@radix-ui/react-icons";
import classes from "./pricing3.module.css";

export const Pricing3 = () => {
  const plans = [
    { name: "Free", price: 0, description: "For trying out" },
    { name: "Basic", price: 12, description: "For individuals" },
    { name: "Pro", price: 32, description: "For professionals", recommended: true },
    { name: "Enterprise", price: 89, description: "For large teams" },
  ];

  const features = [
    { name: "Projects", values: ["3", "10", "Unlimited", "Unlimited"] },
    { name: "Storage", values: ["500MB", "5GB", "50GB", "Unlimited"] },
    { name: "Team members", values: ["1", "5", "20", "Unlimited"] },
    { name: "API access", values: [false, true, true, true] },
    { name: "Analytics", values: [false, "Basic", "Advanced", "Advanced"] },
    { name: "Priority support", values: [false, false, true, true] },
    { name: "Custom integrations", values: [false, false, true, true] },
    { name: "SSO", values: [false, false, false, true] },
    { name: "Dedicated manager", values: [false, false, false, true] },
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckIcon color="var(--mantine-primary-color-filled)" width={18} height={18} />
      ) : (
        <Cross2Icon color="var(--mantine-color-dimmed)" width={18} height={18} />
      );
    }
    return <Text size="sm" fw={500}>{value}</Text>;
  };

  return (
    <Box className={classes.wrapper}>
      <Container size="xl">
        <Stack gap="xl">
          <Stack align="center" gap="xs">
            <Title order={1} className={classes.title} mb="xs">
              Compare Plans
            </Title>
            <Text c="dimmed" size="lg" ta="center" maw={500}>
              Find the perfect plan for your needs
            </Text>
          </Stack>

          <Paper radius="lg" className={classes.tableWrapper}>
            {/* Header Row */}
            <Box className={classes.headerRow}>
              <Box className={classes.featureColumn}>
                <Text fw={600} c="dimmed">Features</Text>
              </Box>
              {plans.map((plan) => (
                <Box
                  key={plan.name}
                  className={`${classes.planColumn} ${plan.recommended ? classes.recommendedColumn : ""}`}
                >
                  {plan.recommended && (
                    <Text className={classes.recommendedLabel}>Recommended</Text>
                  )}
                  <Text fw={700} size="lg">{plan.name}</Text>
                  <Group gap={4} align="baseline">
                    <Text className={classes.price} fw={800} fz={28}>
                      ${plan.price}
                    </Text>
                    <Text c="dimmed" size="xs">/mo</Text>
                  </Group>
                  <Text c="dimmed" size="xs">{plan.description}</Text>
                </Box>
              ))}
            </Box>

            {/* Feature Rows */}
            {features.map((feature, index) => (
              <Box key={feature.name} className={`${classes.featureRow} ${index % 2 === 0 ? classes.evenRow : ""}`}>
                <Box className={classes.featureColumn}>
                  <Text size="sm">{feature.name}</Text>
                </Box>
                {feature.values.map((value, i) => (
                  <Box
                    key={i}
                    className={`${classes.valueColumn} ${plans[i].recommended ? classes.recommendedValueColumn : ""}`}
                  >
                    {renderValue(value)}
                  </Box>
                ))}
              </Box>
            ))}

            {/* CTA Row */}
            <Box className={classes.ctaRow}>
              <Box className={classes.featureColumn} />
              {plans.map((plan) => (
                <Box
                  key={plan.name}
                  className={`${classes.ctaColumn} ${plan.recommended ? classes.recommendedColumn : ""}`}
                >
                  <Button
                    size="sm"
                    variant={plan.recommended ? "filled" : "outline"}
                    color="var(--mantine-primary-color-filled)"
                    rightSection={<ArrowRightIcon />}
                    fullWidth
                    {...(plan.recommended ? { c: "var(--mantine-primary-color-contrast)" } : {})}
                  >
                    Choose {plan.name}
                  </Button>
                </Box>
              ))}
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};
