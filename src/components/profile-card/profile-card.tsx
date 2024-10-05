import { Avatar, Button, Paper, Stack, Text } from "@mantine/core";
import { UserProfileData } from "../../utils/data";
import { IconSend } from "@tabler/icons-react";

const ProfileCard = () => {
  const { avatar, name, email, job } = UserProfileData;

  return (
    <Paper withBorder>
      <Stack gap={4} align="center">
        <Text size="lg" fw={600} mb="md">
          Profile details
        </Text>
        <Avatar src={avatar} size={120} radius={120} mx="auto" mb="md" />
        <Text fz="md" fw={500} mt="md" mx="auto">
          {name}
        </Text>
        <Text c="dimmed" fz="xs" component="a" href={`mailto:${email}`}>
          {email}
        </Text>
        <Text c="dimmed" fz="xs" ta="center">
          {job}
        </Text>

        <Button
          variant="outline"
          fullWidth
          mt="md"
          rightSection={<IconSend size={14} />}
        >
          Slide to DM
        </Button>
      </Stack>
    </Paper>
  );
};

export default ProfileCard;
