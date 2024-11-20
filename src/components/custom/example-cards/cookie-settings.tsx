import { Button, Card, Text, Switch, Group, Title } from '@mantine/core';

export function CardsCookieSettings() {
    return (
        <Card>
            <Card.Section p="md" pb="xs">
                <Title order={5}>Cookie Settings</Title>
                <Text size="sm" c="dimmed">Manage your cookie settings here.</Text>
            </Card.Section>
            <Card.Section p="md" pt="xs">
                <Group wrap='nowrap'>
                    <div>
                        <Text size='sm'>Strictly Necessary</Text>
                        <Text size="xs" c="dimmed">
                            These cookies are essential in order to use the website and use its features.
                        </Text>
                    </div>
                    <Switch id="necessary" defaultChecked aria-label="Necessary" />
                </Group>
                <Group wrap='nowrap' mt="md">
                    <div>
                        <Text size='sm'>Functional Cookies</Text>
                        <Text size="xs" c="dimmed">
                            These cookies allow the website to provide personalized functionality.
                        </Text>
                    </div>
                    <Switch id="functional" aria-label="Functional" />
                </Group>
                <Group wrap='nowrap' mt="md">
                    <div>
                        <Text size='sm'>Performance Cookies</Text>
                        <Text size="xs" c="dimmed">
                            These cookies help to improve the performance of the website.
                        </Text>
                    </div>
                    <Switch id="performance" aria-label="Performance" />
                </Group>
            </Card.Section>
            <Card.Section p="md">
                <Button variant="default" fullWidth>
                    Save preferences
                </Button>
            </Card.Section>
        </Card>
    );
}
