import { Group, Paper, Stack, Text } from "@mantine/core";
import { IconHome, IconMapPinFilled } from "@tabler/icons-react";
import { ICON_SIZE } from "../../utils/data";

const AboutCard = () => {
  return (
    <Paper>
      <Stack>
        <Text size="lg" fw={600}>
          About
        </Text>
        <Group>
          <IconHome size={ICON_SIZE} />
          <Text>Lives in Nairobi, Kenya</Text>
        </Group>
        <Group>
          <IconMapPinFilled size={ICON_SIZE} />
          <Text>Works at Company ABC</Text>
        </Group>
      </Stack>
    </Paper>
  );
};

export default AboutCard;
