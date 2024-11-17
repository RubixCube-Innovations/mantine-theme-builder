import { Grid, Card, Text, Title, Center, Box } from "@mantine/core";
import { ZoomInIcon, BarChartIcon, CircleIcon, HandIcon, LayersIcon, BellIcon } from "@radix-ui/react-icons";

const reasons = [
  {
    title: "Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <ZoomInIcon />,
  },
  {
    title: "Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <BarChartIcon />,
  },
  {
    title: "Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <CircleIcon />,
  },
  {
    title: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <HandIcon />,
  },
  {
    title: "Results",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <LayersIcon />,
  },
  {
    title: "Efficiency",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <BellIcon />,
  },
];

export const Feature1 = () => {
  return (
    <Box py={96}>
      <Box className="container mx-auto">
        <Box mb={40}>
          <Title order={2} ta="center" fz={{ base: 24, lg: 40 }} fw={600}>
            Why Work With Us?
          </Title>
        </Box>
        <Grid gutter={40}>
          {reasons.map((reason, i) => (
            <Grid.Col key={i} span={{ base: 12, md: 6, lg: 3 }}>
              <Card p="lg" shadow="sm" radius="md" withBorder>
                <Center mb={20}>{reason.icon}</Center>
                <Title order={3} mb={10}>
                  {reason.title}
                </Title>
                <Text color="dimmed">{reason.description}</Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
