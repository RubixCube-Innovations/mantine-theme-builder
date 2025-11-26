import { Card, Avatar, Text, Stack, Container, Title, Flex, Button, Group, Anchor, Badge, ActionIcon } from "@mantine/core";
import { IconBrandLinkedin, IconBrandTwitter, IconBrandGithub, IconMail, IconMapPin } from "@tabler/icons-react";
import classes from "./meet-our-team-3.module.css";

const teamMembers = [
  {
    name: "Jessica Martinez",
    role: "Founder & CEO",
    bio: "Serial entrepreneur with a passion for building products that change how people work and live.",
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_4.png",
    location: "San Francisco, CA",
    email: "jessica@company.com",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Thomas Anderson",
    role: "Chief Technology Officer",
    bio: "Former Google engineer leading our technical vision and innovation strategy.",
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_2.png",
    location: "New York, NY",
    email: "thomas@company.com",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Emily Chen",
    role: "VP of Design",
    bio: "Award-winning designer creating intuitive experiences that users love.",
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/teams_3.png",
    location: "Seattle, WA",
    email: "emily@company.com",
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
];

interface IMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  location: string;
  email: string;
  socials: { linkedin: string; twitter: string; github: string };
}

const TeamMemberCard = ({ member }: { member: IMember }) => {
  return (
    <Card className={classes.card} radius="md" p={0} withBorder>
      <Flex direction={{ base: "column", sm: "row" }}>
        <Stack className={classes.imageSection} align="center" justify="center" p="xl">
          <Avatar src={member.image} size={140} radius="md" />
        </Stack>

        <Stack className={classes.content} p="xl" gap="md">
          <Stack gap={4}>
            <Title order={3}>{member.name}</Title>
            <Text size="sm" c="dimmed" tt="uppercase" fw={600} lts={1}>
              {member.role}
            </Text>
          </Stack>

          <Text size="sm" c="dimmed" lh={1.6}>
            {member.bio}
          </Text>

          <Group gap="lg">
            <Group gap={6}>
              <IconMapPin size={16} />
              <Text size="sm" c="dimmed">{member.location}</Text>
            </Group>
            <Group gap={6}>
              <IconMail size={16} />
              <Anchor size="sm" href={`mailto:\${member.email}`}>{member.email}</Anchor>
            </Group>
          </Group>

          <Group gap="md" mt="sm">
            <Button variant="filled" size="sm">Connect</Button>
            <Group gap="xs">
              <ActionIcon variant="subtle" component="a" href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
                <IconBrandLinkedin size={18} />
              </ActionIcon>
              <ActionIcon variant="subtle" component="a" href={member.socials.twitter} target="_blank" aria-label="Twitter">
                <IconBrandTwitter size={18} />
              </ActionIcon>
              <ActionIcon variant="subtle" component="a" href={member.socials.github} target="_blank" aria-label="GitHub">
                <IconBrandGithub size={18} />
              </ActionIcon>
            </Group>
          </Group>
        </Stack>
      </Flex>
    </Card>
  );
};

export const MeetOurTeam3 = () => {
  return (
    <Container size="xl" py="xl">
      <Stack align="center" mb="xl">
        <Badge size="lg" variant="light">Leadership</Badge>
        <Title order={1} ta="center" className={classes.title}>
          Leadership Team
        </Title>
        <Text size="lg" c="dimmed" ta="center" maw={600}>
          Experienced professionals driving our mission forward with expertise, vision, and dedication
        </Text>
      </Stack>

      <Stack gap="lg">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </Stack>
    </Container>
  );
};
