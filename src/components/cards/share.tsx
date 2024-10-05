import { Avatar, Button, Card, Input, Select, Text, Divider, Title, Group, Box } from '@mantine/core';

export function CardsShare() {
    return (
        <Card>
            <Card.Section p="md"  py="xs">
                <Title order={3}>Share this document</Title>
                <Text size="sm" c="dimmed">
                    Anyone with the link can view this document.
                </Text>
            </Card.Section>
            <Card.Section p="md" py="xs">
                <Group>
                    <Input
                        id="link"
                        value="http://example.com/link/to/document"
                        readOnly
                        style={{ flexGrow: 1 }}
                    />
                    <Button>Copy Link</Button>
                </Group>
            </Card.Section>
            <Divider my="xs" />
            <Box>
                <Text fw={"500"}>People with access</Text>
                <Box style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
                    {[
                        { name: 'Olivia Martin', email: 'm@example.com', avatar: '/avatars/03.png', fallback: 'OM', access: 'edit' },
                        { name: 'Isabella Nguyen', email: 'b@example.com', avatar: '/avatars/05.png', fallback: 'IN', access: 'view' },
                        { name: 'Sofia Davis', email: 'p@example.com', avatar: '/avatars/01.png', fallback: 'SD', access: 'view' },
                    ].map((person) => (
                        <Group key={person.email} justify='space-between'>
                            <Group>
                                <Avatar src={person.avatar} alt="Image">{person.fallback}</Avatar>
                                <div>
                                    <Text size="sm" fw={500}>{person.name}</Text>
                                    <Text size="sm" c="dimmed">{person.email}</Text>
                                </div>
                            </Group>
                            <Select
                                data={[
                                    { value: 'edit', label: 'Can edit' },
                                    { value: 'view', label: 'Can view' },
                                ]}
                                defaultValue={person.access}
                                style={{ width: '110px' }}
                            />
                        </Group>
                    ))}
                </Box>
            </Box>
        </Card>
    );
}
