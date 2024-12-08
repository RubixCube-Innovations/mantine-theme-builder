import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Avatar, Button, Card, Text, Popover, TextInput, Group, Stack, Divider, Box, Title } from '@mantine/core';
import { IconSearch } from "@tabler/icons-react";

export function CardsTeamMembers() {
    const options = [
        { value: 'viewer', label: 'Viewer', description: 'Can view and comment.' },
        { value: 'developer', label: 'Developer', description: 'Can view, comment and edit.' },
        { value: 'billing', label: 'Billing', description: 'Can view, comment and manage billing.' },
        { value: 'owner', label: 'Owner', description: 'Admin-level access to all resources.' },
    ];
    return (
      <Card>
        <Box>
          <Title order={5}>Team Members</Title>
          <Text size="sm" c="dimmed">
            Invite your team members to collaborate.
          </Text>
        </Box>
        <Box mt="lg">
          <Stack gap="lg">
            <Group justify="space-between">
              <Group>
                <Avatar src="https://ui.shadcn.com/avatars/01.png" alt="Image" radius="xl" />
                <div>
                  <Text size="sm" fw={500}>
                    Sofia Davis
                  </Text>
                  <Text size="xs" c="dimmed">
                    m@example.com
                  </Text>
                </div>
              </Group>

              <Popover width={200} position="bottom-end" withArrow shadow="md">
                <Popover.Target>
                  <Button variant="default" size="xs" rightSection={<ChevronDownIcon />}>
                    Owner
                  </Button>
                </Popover.Target>
                <Popover.Dropdown p={0}>
                  <TextInput
                    pt={0}
                    variant="transparant"
                    placeholder="Select new role..."
                    leftSection={<IconSearch size={"16px"} />}
                  />
                  <Divider />
                  <Stack gap={0}>
                    {options?.map((option)=><Button
                      variant="subtle"
                      size="lg"
                      ta={"left"}
                      px={"xs"}
                      styles={{ inner: { justifyContent: "flex-start" } }}
                      radius={0}
                    >
                      <Box>
                        <Text size="sm">{option.label}</Text>
                        <Text size="xs" c="dimmed">
                          {option.description}
                        </Text>
                      </Box>
                    </Button>)}
                  </Stack>
                </Popover.Dropdown>
              </Popover>
            </Group>
            <Group justify="space-between">
              <Group>
                <Avatar src="https://ui.shadcn.com/avatars/02.png" alt="Image" radius="xl" />
                <div>
                  <Text size="sm" fw={500}>
                    Jackson Lee
                  </Text>
                  <Text size="xs" c="dimmed">
                    p@example.com
                  </Text>
                </div>
              </Group>
              <Popover width={200} position="bottom-end" withArrow shadow="md">
                <Popover.Target>
                  <Button variant="default" size="xs" rightSection={<ChevronDownIcon />}>
                    Member
                  </Button>
                </Popover.Target>
                <Popover.Dropdown p={0}>
                  <TextInput
                    pt={0}
                    variant="transparant"
                    placeholder="Select new role..."
                    leftSection={<IconSearch size={"16px"} />}
                  />
                  <Divider />
                  <Stack gap={0}>
                    {options?.map((option)=><Button
                      variant="subtle"
                      size="lg"
                      ta={"left"}
                      px={"xs"}
                      styles={{ inner: { justifyContent: "flex-start" } }}
                      radius={0}
                    >
                      <Box>
                        <Text size="sm">{option.label}</Text>
                        <Text size="xs" c="dimmed">
                          {option.description}
                        </Text>
                      </Box>
                    </Button>)}
                  </Stack>
                </Popover.Dropdown>
              </Popover>
            </Group>
            <Group justify="space-between">
              <Group>
                <Avatar src="https://ui.shadcn.com/avatars/03.png" alt="Image" radius="xl" />
                <div>
                  <Text size="sm" fw={500}>
                    Isabella Nguyen
                  </Text>
                  <Text size="xs" c="dimmed">
                    i@example.com
                  </Text>
                </div>
              </Group>
              <Popover width={200} position="bottom-end" withArrow shadow="md">
                <Popover.Target>
                  <Button variant="default" size="xs" rightSection={<ChevronDownIcon />}>
                    Member
                  </Button>
                </Popover.Target>
                <Popover.Dropdown p={0}>
                  <TextInput
                    pt={0}
                    variant="transparant"
                    placeholder="Select new role..."
                    leftSection={<IconSearch size={"16px"} />}
                  />
                  <Divider />
                  <Stack gap={0}>
                    {options?.map((option)=><Button
                      variant="subtle"
                      size="lg"
                      ta={"left"}
                      px={"xs"}
                      styles={{ inner: { justifyContent: "flex-start" } }}
                      radius={0}
                    >
                      <Box>
                        <Text size="sm">{option.label}</Text>
                        <Text size="xs" c="dimmed">
                          {option.description}
                        </Text>
                      </Box>
                    </Button>)}
                  </Stack>
                </Popover.Dropdown>
              </Popover>
            </Group>
          </Stack>
        </Box>
      </Card>
    );
}
