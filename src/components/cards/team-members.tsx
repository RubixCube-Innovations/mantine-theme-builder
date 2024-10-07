import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Avatar, Button, Card, Text, Popover, TextInput, Group, Stack, Divider, Box, Title } from '@mantine/core';

export function CardsTeamMembers() {
    return (
        <Card>
            <Box>
                <Title order={3}>Team Members</Title>
                <Text size="sm" c="dimmed">
                    Invite your team members to collaborate.
                </Text>
            </Box>
            <Box mt="lg">
                <Stack gap="lg">
                    <Group justify="space-between">
                        <Group>
                            <Avatar src="/avatars/01.png" alt="Image" radius="xl" />
                            <div>
                                <Text size="sm" fw={500}>Sofia Davis</Text>
                                <Text size="xs" c="dimmed">m@example.com</Text>
                            </div>
                        </Group>
                        <Popover width={200} position="bottom-end" withArrow shadow="md">
                            <Popover.Target>
                                <Button variant="outline" size="xs" rightSection={<ChevronDownIcon />}>
                                    Owner
                                </Button>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <TextInput placeholder="Select new role..." />
                                <Divider my="sm" />
                                <Stack gap="xs">
                                    <Text size="sm">Viewer</Text>
                                    <Text size="xs" c="dimmed">Can view and comment.</Text>
                                    <Text size="sm">Developer</Text>
                                    <Text size="xs" c="dimmed">Can view, comment and edit.</Text>
                                    <Text size="sm">Billing</Text>
                                    <Text size="xs" c="dimmed">Can view, comment and manage billing.</Text>
                                    <Text size="sm">Owner</Text>
                                    <Text size="xs" c="dimmed">Admin-level access to all resources.</Text>
                                </Stack>
                            </Popover.Dropdown>
                        </Popover>
                    </Group>
                    <Group justify="space-between">
                        <Group>
                            <Avatar src="/avatars/02.png" alt="Image" radius="xl" />
                            <div>
                                <Text size="sm" fw={500}>Jackson Lee</Text>
                                <Text size="xs" c="dimmed">p@example.com</Text>
                            </div>
                        </Group>
                        <Popover width={200} position="bottom-end" withArrow shadow="md">
                            <Popover.Target>
                                <Button variant="outline" size="xs" rightSection={<ChevronDownIcon />}>
                                    Member
                                </Button>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <TextInput placeholder="Select new role..." />
                                <Divider my="sm" />
                                <Stack gap="xs">
                                    <Text size="sm">Viewer</Text>
                                    <Text size="xs" c="dimmed">Can view and comment.</Text>
                                    <Text size="sm">Developer</Text>
                                    <Text size="xs" c="dimmed">Can view, comment and edit.</Text>
                                    <Text size="sm">Billing</Text>
                                    <Text size="xs" c="dimmed">Can view, comment and manage billing.</Text>
                                    <Text size="sm">Owner</Text>
                                    <Text size="xs" c="dimmed">Admin-level access to all resources.</Text>
                                </Stack>
                            </Popover.Dropdown>
                        </Popover>
                    </Group>
                    <Group justify="space-between">
                        <Group>
                            <Avatar src="/avatars/03.png" alt="Image" radius="xl" />
                            <div>
                                <Text size="sm" fw={500}>Isabella Nguyen</Text>
                                <Text size="xs" c="dimmed">i@example.com</Text>
                            </div>
                        </Group>
                        <Popover width={200} position="bottom-end" withArrow shadow="md">
                            <Popover.Target>
                                <Button variant="outline" size="xs" rightSection={<ChevronDownIcon />}>
                                    Member
                                </Button>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <TextInput placeholder="Select new role..." />
                                <Divider my="sm" />
                                <Stack gap="xs">
                                    <Text size="sm">Viewer</Text>
                                    <Text size="xs" c="dimmed">Can view and comment.</Text>
                                    <Text size="sm">Developer</Text>
                                    <Text size="xs" c="dimmed">Can view, comment and edit.</Text>
                                    <Text size="sm">Billing</Text>
                                    <Text size="xs" c="dimmed">Can view, comment and manage billing.</Text>
                                    <Text size="sm">Owner</Text>
                                    <Text size="xs" c="dimmed">Admin-level access to all resources.</Text>
                                </Stack>
                            </Popover.Dropdown>
                        </Popover>
                    </Group>
                </Stack>
            </Box>
        </Card>
    )
}
