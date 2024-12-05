import { Card, Avatar, Text, Group, Stack, Container, Title, SimpleGrid } from "@mantine/core";
import { LinkedInLogoIcon, TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import classes from "./meet-our-team-1.module.css";

const teamMembers = [
  {
    name: "Elena Rodriguez",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 15 years of tech innovation experience.",
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_22.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Marcus Chen",
    role: "Chief Technology Officer",
    bio: "Engineering maestro driving cutting-edge technological solutions.",
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_17.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Aria Patel",
    role: "Design Director",
    bio: "Creative genius transforming complex ideas into elegant designs.",
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_14.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Jackson Wright",
    role: "Product Strategy Lead",
    bio: "Strategic mastermind connecting user needs with business goals.",
    image: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/upstream_16.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

interface IMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin: string;
    twitter: string;
    github: string;
  };
}

const TeamMemberCard = ({ member }: { member: IMember }) => {
  return (
    <Card shadow="lg" radius="md" className={classes.teamMemberCard} padding="xl">
      <Stack align="center" gap="md">
        <Avatar src={member.image} size={120} radius="50%" className={classes.memberAvatar} />

        <Stack align="center" gap="xs">
          <Title order={3} className={classes.memberName}>
            {member.name}
          </Title>
          <Text c="dimmed" ta={"center"} className={classes.memberRole}>
            {member.role}
          </Text>
        </Stack>

        <Text
          ta="center"
          c={"light-dark(var(--mantine-color-dark-6), var(--mantine-color-dark-4)"}
          className={classes.memberBio}
        >
          {member.bio}
        </Text>

        <Group gap="md" className={classes.socialIcons}>
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInLogoIcon width={24} height={24} />
          </a>
          <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
            <TwitterLogoIcon width={24} height={24} />
          </a>
          <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
            <GitHubLogoIcon width={24} height={24} />
          </a>
        </Group>
      </Stack>
    </Card>
  );
};

export const MeetOurTeam1 = () => {
  return (
    <Container size="xl" py="xl">
      <Stack align="center" mb="xl">
        <Title order={1} className={classes.sectionTitle}>
          Meet Our Extraordinary Team
        </Title>
        <Text c="dimmed" ta="center" maw={600}>
          Behind every breakthrough is a passionate team of innovators, dedicated to pushing the boundaries of what's
          possible.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="xl">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
