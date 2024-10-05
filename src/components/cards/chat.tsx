import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Input,
  Tooltip,
  Dialog,
  MultiSelect,
  Group,
  Text,
  ActionIcon,
  Divider,
  ScrollArea,
  rem,
} from "@mantine/core";
import { PaperPlaneIcon, PlusIcon } from "@radix-ui/react-icons";

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
  const [open, setOpen] = useState(false);
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

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group align="center">
          <Group>
            <Avatar src="/avatars/01.png" alt="Sofia Davis" radius="xl" />
            <div>
              <Text fw={500}>Sofia Davis</Text>
              <Text size="xs" color="dimmed">
                m@example.com
              </Text>
            </div>
          </Group>
          <Tooltip label="New message">
            <ActionIcon variant="outline" onClick={() => setOpen(true)}>
              <PlusIcon width={rem(16)} />
            </ActionIcon>
          </Tooltip>
        </Group>

        <Divider my="sm" />

        <ScrollArea style={{ maxHeight: 250 }}>
          {messages.map((message, index) => (
            <Group
              key={index}
              align={message.role === "user" ? "right" : "left"}
            >
              <Card
                radius="md"
                padding="sm"
                shadow="sm"
                style={{
                  backgroundColor:
                    message.role === "user" ? "#228be6" : "#f1f3f5",
                  color: message.role === "user" ? "white" : "black",
                }}
              >
                <Text size="sm">{message.content}</Text>
              </Card>
            </Group>
          ))}
        </ScrollArea>

        <Divider my="sm" />

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
            <Input
              value={input}
              onChange={(event) => setInput(event.currentTarget.value)}
              placeholder="Type your message..."
              style={{ flex: 1 }}
            />
            <Button type="submit" disabled={inputLength === 0}>
              <PaperPlaneIcon width={rem(16)} />
            </Button>
          </Group>
        </form>
      </Card>

      <Dialog
        opened={open}
        onClose={() => setOpen(false)}
        title="New message"
        p="lg"
        size="lg"
      >
        <Text>Invite a user to this thread. This will create a new group message.</Text>

        <MultiSelect
          data={users.map((user) => ({
            value: user.email,
            label: `${user.name} (${user.email})`,
          }))}
          placeholder="Search users..."
          onChange={(value) => {
            const newSelectedUsers = users.filter((user) =>
              value.includes(user.email)
            );
            setSelectedUsers(newSelectedUsers);
          }}
          searchable
          value={selectedUsers.map((user) => user.email)}
        />

        <Group mt="md" gap="xs">
          {selectedUsers.length > 0 ? (
            selectedUsers.map((user) => (
              <Avatar key={user.email} src={user.avatar} radius="xl" />
            ))
          ) : (
            <Text color="dimmed">Select users to add to this thread.</Text>
          )}
        </Group>

        <Group align="right" mt="md">
          <Button
            onClick={() => setOpen(false)}
            disabled={selectedUsers.length < 2}
          >
            Continue
          </Button>
        </Group>
      </Dialog>
    </>
  );
}
