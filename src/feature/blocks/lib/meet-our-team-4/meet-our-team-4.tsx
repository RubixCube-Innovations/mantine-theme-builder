import { Card, Avatar, Text, Stack, Container, Title, SimpleGrid, Progress, Tabs, Badge, Group } from "@mantine/core";
import { IconAward } from "@tabler/icons-react";
import classes from "./meet-our-team-4.module.css";

const teamMembers = [
  {
    name: "Alexandra Foster",
    role: "Creative Director",
    avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_7.png",
    department: "Design",
    stats: { projects: 156, experience: 12, awards: 23 },
    skills: [
      { name: "Leadership", value: 95 },
      { name: "Design Thinking", value: 90 },
      { name: "Strategy", value: 88 },
    ],
    achievements: ["Design Excellence Award 2023", "50+ Patents Filed", "100% Client Satisfaction"],
  },
  {
    name: "Marcus Thompson",
    role: "Technical Architect",
    avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_9.png",
    department: "Engineering",
    stats: { projects: 89, experience: 10, awards: 15 },
    skills: [
      { name: "Architecture", value: 96 },
      { name: "Cloud Systems", value: 93 },
      { name: "Performance", value: 91 },
    ],
    achievements: ["10M+ Lines of Code", "50+ Successful Launches", "Mentored 100+ Developers"],
  },
  {
    name: "Priya Sharma",
    role: "Product Strategist",
    avatar: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_6.png",
    department: "Product",
    stats: { projects: 67, experience: 8, awards: 18 },
    skills: [
      { name: "Market Analysis", value: 94 },
      { name: "User Research", value: 91 },
      { name: "Roadmapping", value: 88 },
    ],
    achievements: ["3x Revenue Growth", "1M+ Users Impacted", "20+ Product Launches"],
  },
];

interface IMember {
  name: string;
  role: string;
  avatar: string;
  department: string;
  stats: { projects: number; experience: number; awards: number };
  skills: { name: string; value: number }[];
  achievements: string[];
}

const TeamMemberCard = ({ member }: { member: IMember }) => {
  return (
    <Card className={classes.card} radius="md" withBorder>
      <Stack align="center" gap="md">
        <Badge size="sm" variant="light" color="var(--mantine-primary-color-filled)">{member.department}</Badge>
        <Avatar src={member.avatar} size={100} radius="xl" />
        <Stack align="center" gap={4}>
          <Title order={4}>{member.name}</Title>
          <Text size="sm" c="dimmed" tt="uppercase" fw={600} lts={1}>
            {member.role}
          </Text>
        </Stack>
      </Stack>

      <Tabs defaultValue="stats" mt="lg" color="var(--mantine-primary-color-filled)">
        <Tabs.List grow>
          <Tabs.Tab value="stats">Stats</Tabs.Tab>
          <Tabs.Tab value="skills">Skills</Tabs.Tab>
          <Tabs.Tab value="achievements">Awards</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="stats" pt="md">
          <SimpleGrid cols={3}>
            <Stack align="center" gap={4}>
              <Text fw={700} size="xl">{member.stats.projects}</Text>
              <Text size="xs" c="dimmed" tt="uppercase">Projects</Text>
            </Stack>
            <Stack align="center" gap={4}>
              <Text fw={700} size="xl">{member.stats.experience}</Text>
              <Text size="xs" c="dimmed" tt="uppercase">Years</Text>
            </Stack>
            <Stack align="center" gap={4}>
              <Text fw={700} size="xl">{member.stats.awards}</Text>
              <Text size="xs" c="dimmed" tt="uppercase">Awards</Text>
            </Stack>
          </SimpleGrid>
        </Tabs.Panel>

        <Tabs.Panel value="skills" pt="md">
          <Stack gap="xs">
            {member.skills.map((skill, index) => (
              <Stack key={index} gap={4}>
                <Group justify="space-between">
                  <Text size="sm">{skill.name}</Text>
                  <Text size="xs" c="dimmed">{skill.value}%</Text>
                </Group>
                <Progress value={skill.value} size="sm" radius="xl" color="var(--mantine-primary-color-filled)" />
              </Stack>
            ))}
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="achievements" pt="md">
          <Stack gap="xs">
            {member.achievements.map((achievement, index) => (
              <Group key={index} gap="sm">
                <IconAward size={16} />
                <Text size="sm">{achievement}</Text>
              </Group>
            ))}
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export const MeetOurTeam4 = () => {
  return (
    <Container size="xl" py="xl">
      <Stack align="center" mb="xl">
        <Title order={1} ta="center" className={classes.title}>
          Meet Our Visionaries
        </Title>
        <Text size="lg" c="dimmed" ta="center" maw={600}>
          The brilliant minds behind our success story. Each bringing unique expertise and passion to drive innovation forward.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
