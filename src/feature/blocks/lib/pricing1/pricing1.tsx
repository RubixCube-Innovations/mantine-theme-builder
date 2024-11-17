import { useState } from "react";
import { ArrowRightIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { Box, Button } from "@mantine/core";
import { Card, CardSection, Text, Title, Divider, Switch, Grid } from "@mantine/core";

export const Pricing1 = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Box py={96}>
      <Box className="container mx-auto flex flex-col items-center gap-24 text-center">
        <Box>
          <Title order={2} mb={8} fz={{ base: 24, lg: 40 }} fw={700}>
            Pricing
          </Title>
          <Text color="dimmed" fz={{ base: 16, lg: 20 }}>
            Check out our affordable pricing plans
          </Text>
        </Box>
        <Box className="flex items-center gap-3 text-lg">
          Monthly
          <Switch checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
          Yearly
        </Box>
        <Grid gutter={24} justify="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Card shadow="sm" radius="md" withBorder>
              <CardSection>
                <Box p="lg">
                  <Title order={3} mb={4}>
                    Plus
                  </Title>
                  <Text color="dimmed" fz="sm">
                    For personal use
                  </Text>
                  <Text fz={32} fw={700} mt={8}>
                    {isYearly ? "$15" : "$19"}
                  </Text>
                  <Text color="dimmed">Billed {isYearly ? "$180" : "$228"} annually</Text>
                </Box>
              </CardSection>
              <CardSection p="lg">
                <Divider mb={24} />
                <ul className="space-y-16">
                  <li className="flex items-center gap-8">
                    <CheckCircledIcon />
                    <Text>Lorem ipsum dolor sit.</Text>
                  </li>
                  <li className="flex items-center gap-8">
                    <CheckCircledIcon />
                    <Text>Lorem ipsum dolor sit.</Text>
                  </li>
                  <li className="flex items-center gap-8">
                    <CheckCircledIcon />
                    <Text>Lorem ipsum dolor sit.</Text>
                  </li>
                  <li className="flex items-center gap-8">
                    <CheckCircledIcon />
                    <Text>Lorem ipsum dolor sit.</Text>
                  </li>
                </ul>
              </CardSection>
              <CardSection p="lg" mt="auto">
                <Button fullWidth leftSection={<ArrowRightIcon />}>
                  Get Started
                </Button>
              </CardSection>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card shadow="sm" radius="md" withBorder>
              <CardSection>
                <Box p="lg">
                  <Title order={3} mb={4}>
                    Pro
                  </Title>
                  <Text color="dimmed" fz="sm">
                    For professionals
                  </Text>
                  <Text fz={32} fw={700} mt={8}>
                    {isYearly ? "$35" : "$49"}
                  </Text>
                  <Text color="dimmed">Billed {isYearly ? "$420" : "$588"} annually</Text>
                </Box>
              </CardSection>
              <CardSection p="lg">
                <Divider mb={24} />
                <Text mb={12} fz="lg" fw={600}>
                  Everything in Plus, and:
                </Text>
                <ul className="space-y-16">
                  <li className="flex items-center gap-8">
                    <CheckCircledIcon />
                    <Text>Lorem ipsum dolor sit.</Text>
                  </li>
                  <li className="flex items-center gap-8">
                    <CheckCircledIcon />
                    <Text>Lorem ipsum dolor sit.</Text>
                  </li>
                  <li className="flex items-center gap-8">
                    <CheckCircledIcon />
                    <Text>Lorem ipsum dolor sit.</Text>
                  </li>
                  <li className="flex items-center gap-8">
                    <CheckCircledIcon />
                    <Text>Lorem ipsum dolor sit.</Text>
                  </li>
                </ul>
              </CardSection>
              <CardSection p="lg" mt="auto">
                <Button fullWidth leftSection={<ArrowRightIcon />}>
                  Get Started
                </Button>
              </CardSection>
            </Card>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
};
