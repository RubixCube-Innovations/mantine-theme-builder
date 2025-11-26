import { Card, Avatar, Text, Group, Stack, Container, Title, SimpleGrid, Badge, ActionIcon } from "@mantine/core";
import { IconBrandLinkedin, IconBrandTwitter, IconBrandGithub, IconMail } from "@tabler/icons-react";
import classes from "./meet-our-team-2.module.css";

const teamMembers = [
  {
    name: "Sophia Williams",
    role: "Chief Product Officer",
    bio: "Building products that matter, with over a decade of startup experience.",
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_11.png",
    skills: ["Product Strategy", "UX Design", "Analytics"],
    socials: { linkedin: "#", twitter: "#", github: "#", email: "sophia@example.com" },
  },
  {
    name: "David Kim",
    role: "VP Engineering",
    bio: "Architecting scalable solutions for tomorrow's challenges.",
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_18.png",
    skills: ["System Design", "Cloud Architecture", "DevOps"],
    socials: { linkedin: "#", twitter: "#", github: "#", email: "david@example.com" },
  },
  {
    name: "Maya Thompson",
    role: "Head of Marketing",
    bio: "Crafting compelling narratives that connect brands with people.",
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_15.png",
    skills: ["Brand Strategy", "Content Marketing", "Growth"],
    socials: { linkedin: "#", twitter: "#", github: "#", email: "maya@example.com" },
  },
  {
    name: "Robert Zhang",
    role: "Lead Data Scientist",
    bio: "Transforming data into actionable insights through AI and ML.",
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_19.png",
    skills: ["Machine Learning", "Data Analysis", "Python"],
    socials: { linkedin: "#", twitter: "#", github: "#", email: "robert@example.com" },
  },
];

interface IMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  socials: { linkedin: string; twitter: string; github: string; email: string };
}

const TeamMemberCard = ({ member }: { member: IMember }) => {
  return (
    <Card className={classes.card} padding="lg" radius="md" withBorder>
      <Stack align="center" gap="md">
        <Avatar src={member.image} size={100} radius="xl" className={classes.avatar} />

        <Stack align="center" gap={4}>
          <Title order={4} className={classes.name}>{member.name}</Title>
          <Text size="sm" c="dimmed" tt="uppercase" fw={600} lts={1}>
            {member.role}
          </Text>
        </Stack>

        <Text size="sm" c="dimmed" ta="center" lh={1.6}>
          {member.bio}
        </Text>

        <Group gap={6}>
          {member.skills.map((skill, index) => (
            <Badge key={index} size="sm" variant="light" color="var(--mantine-primary-color-filled)">
              {skill}
            </Badge>
          ))}
        </Group>

        <Group gap="xs">
          <ActionIcon variant="subtle" color="var(--mantine-primary-color-filled)" component="a" href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
            <IconBrandLinkedin size={18} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="var(--mantine-primary-color-filled)" component="a" href={member.socials.twitter} target="_blank" aria-label="Twitter">
            <IconBrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="var(--mantine-primary-color-filled)" component="a" href={member.socials.github} target="_blank" aria-label="GitHub">
            <IconBrandGithub size={18} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="var(--mantine-primary-color-filled)" component="a" href={`mailto:${member.socials.email}`} aria-label="Email">
            <IconMail size={18} />
          </ActionIcon>
        </Group>
      </Stack>
    </Card>
  );
};

export const MeetOurTeam2 = () => {
  return (
    <Container size="xl" py="xl">
      <Stack align="center" mb="xl">
        <Badge size="lg" variant="light" color="var(--mantine-primary-color-filled)">Our Team</Badge>
        <Title order={1} ta="center" className={classes.title}>
          The People Behind Our Success
        </Title>
        <Text size="lg" c="dimmed" ta="center" maw={600}>
          Meet the talented individuals who are passionate about innovation and committed to delivering excellence.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
