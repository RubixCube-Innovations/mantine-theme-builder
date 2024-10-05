import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Group,
  rem,
  Space,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { spotlight, Spotlight } from "@mantine/spotlight";
import {
  MagnifyingGlassIcon,
  PaperPlaneIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

const users = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/01.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/avatars/05.png",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "/avatars/02.png",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "/avatars/04.png",
  },
] as const;

type User = (typeof users)[number];

export function CardsChat() {
  const [query, setQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
  ]);

  const [input, setInput] = useState("");
  const inputLength = input.trim().length;

  const items = users
    .filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase().trim())
    )
    .map((item) => (
      <Spotlight.Action
        key={item.email}
        label={item.name}
        px={0}
        leftSection={
          <Avatar
            src={item.avatar}
            radius="xl"
            onClick={() => setSelectedUsers([...selectedUsers, item])}
          />
        }
      />
    ));

  return (
    <>
      <Card radius="md" w={rem(350)}>
        <Group align="center" justify="space-between">
          <Group>
            <Avatar src="/avatars/01.png" alt="Sofia Davis" radius="xl" />
            <div>
              <Text fw={500} size="sm">
                Sofia Davis
              </Text>
              <Text size="xs" color="dimmed">
                m@example.com
              </Text>
            </div>
          </Group>
          <Tooltip label="New message">
            <ActionIcon
              variant="outline"
              radius={"50%"}
              onClick={() => spotlight.open()}
            >
              <PlusIcon width={rem(16)} />
            </ActionIcon>
          </Tooltip>
        </Group>

        <Space my="sm" />

        <Stack gap="md" style={{ maxHeight: 250 }}>
          {messages.map((message, index) => (
            <Card
              p="xs"
              key={index}
              style={{
                alignSelf: message.role === "user" ? "flex-end" : "flex-start",
              }}
              c={
                message.role === "user"
                  ? "var(--mantine-primary-color-contrast)"
                  : "var(--mantine-color-text)"
              }
              bg={
                message.role === "user"
                  ? "var(--mantine-primary-color-filled)"
                  : "var(--mantine-color-gray-light)"
              }
            >
              <Text size="sm">{message.content}</Text>
            </Card>
          ))}
        </Stack>

        <Space my="sm" />

        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (inputLength === 0) return;
            setMessages([
              ...messages,
              {
                role: "user",
                content: input,
              },
            ]);
            setInput("");
          }}
        >
          <Group>
            <TextInput
              value={input}
              onChange={(event) => setInput(event.currentTarget.value)}
              placeholder="Type your message..."
              style={{ flex: 1 }}
            />
            <Button type="submit" disabled={inputLength === 0} p={"xs"}>
              <PaperPlaneIcon
                width={rem(16)}
                style={{ transform: "rotate(-45deg)" }}
              />
            </Button>
          </Group>
        </form>
      </Card>

      <Spotlight.Root query={query} onQueryChange={setQuery} size={"lg"}>
        <Box mb="sm">
          <Text size="lg" fw={"bold"}>New message</Text>
          <Text c={"dimmed"} size="sm">
            Invite a user to this thread. This will create a new group message.
          </Text>
        </Box>

        <Divider />
        <Spotlight.Search
          size="sm"
          placeholder="Search users..."
          leftSection={
            <MagnifyingGlassIcon style={{ width: rem(20), height: rem(20) }} />
          }
        />
        <Spotlight.ActionsList>
          {items.length > 0 ? (
            items
          ) : (
            <Spotlight.Empty>Nothing found...</Spotlight.Empty>
          )}
        </Spotlight.ActionsList>

<Divider />
        <Group gap="xs" justify="space-between" mt="md">
          {selectedUsers.length > 0 ? (
            selectedUsers.map((user) => (
              <Avatar key={user.email} src={user.avatar} radius="xl" />
            ))
          ) : (
            <Text c="dimmed" size="sm">Select users to add to this thread.</Text>
          )}
          <Button
            onClick={() => spotlight.close()}
            disabled={selectedUsers.length < 2}
          >
            Continue
          </Button>
        </Group>
      </Spotlight.Root>
    </>
  );
}