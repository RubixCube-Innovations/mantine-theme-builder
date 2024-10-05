import { Badge, Group, Paper, Text } from "@mantine/core";
import { skills } from "../../utils/data";

const SkillCard = () => {
  return (
    <Paper>
      <Text size="lg" fw={600} mb="md">
        Skills
      </Text>
      <Group gap="xs">
        {skills.map((s) => (
          <Badge key={s} variant="filled" c="primary.8">
            {s}
          </Badge>
        ))}
      </Group>
    </Paper>
  );
};

export default SkillCard;
