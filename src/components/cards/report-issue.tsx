import {
    Button,
    Card,
    Group,
    Select,
    Stack,
    Text,
    TextInput,
    Textarea,
    Title
} from "@mantine/core";
import * as React from "react";

export function CardsReportIssue() {
  const id = React.useId();

  return (
    <Card>
      <Card.Section p="md">
        <Title order={3}>Report an issue</Title>
        <Text size="sm" c="dimmed">
          What area are you having problems with?
        </Text>
      </Card.Section>
      <Stack>
        <Group grow>
          <Select
            id={`area-${id}`}
            label="Area"
            placeholder="Select"
            data={[
              { value: "team", label: "Team" },
              { value: "billing", label: "Billing" },
              { value: "account", label: "Account" },
              { value: "deployments", label: "Deployments" },
              { value: "support", label: "Support" },
            ]}
            defaultValue="billing"
          />

          <Select
            id={`security-level-${id}`}
            label="Security level"
            placeholder="Select level"
            data={[
              { value: "1", label: "Severity 1 (Highest)" },
              { value: "2", label: "Severity 2" },
              { value: "3", label: "Severity 3" },
              { value: "4", label: "Severity 4 (Lowest)" },
            ]}
            defaultValue="2"
          />
        </Group>

        <TextInput
          label="Subject"
          id={`subject-${id}`}
          placeholder="I need help with..."
        />

        <Textarea
          label="Description"
          id={`description-${id}`}
          placeholder="Please include all information relevant to your issue."
        />
      </Stack>
      <Group justify="space-between" mt="xl">
        <Button variant="default">Cancel</Button>
        <Button>Submit</Button>
      </Group>
    </Card>
  );
}
