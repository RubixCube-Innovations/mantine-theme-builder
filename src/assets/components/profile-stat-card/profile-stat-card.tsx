import { Flex, Paper, Progress, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCoin } from "@tabler/icons-react";

const ProfileStatCard = () => {
  const asCurrency = true;
  const amount = 1000;
  const title = "Total Earnings";
  const color = "blue";
  const icon = <IconCoin stroke={1.5} />;
  const progressValue = 80;

  return (
    <Paper withBorder>
      <Flex align="center" justify="space-between" mb="md">
        <Stack gap={2}>
          <Text size="lg" fw={700} tt="capitalize">
            {asCurrency && "$ "}
            {amount}
          </Text>
          <Text size="sm" c="dimmed" tt="capitalize">
            {title}
          </Text>
        </Stack>
        <ThemeIcon color={color} size="lg" radius="xl">
          {icon}
        </ThemeIcon>
      </Flex>
      <Progress value={progressValue} color={color} size="sm" />
    </Paper>
  );
};

export default ProfileStatCard;
