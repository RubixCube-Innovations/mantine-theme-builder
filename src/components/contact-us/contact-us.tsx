import {
  Button,
  Card,
  Group,
  SimpleGrid,
  Switch,
  Textarea,
  TextInput,
} from "@mantine/core";

const ContactUs = () => {
  return (
    <Card>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput label="Your name" placeholder="Your name" />
        <TextInput
          label="Your email"
          placeholder="hello@mantine.dev"
          required
        />
      </SimpleGrid>

      <TextInput mt="md" label="Subject" placeholder="Subject" required />

      <Textarea
        mt="md"
        label="Your message"
        placeholder="Please include all relevant information"
        minRows={3}
      />

      <Switch mt="md" defaultChecked label="I agree to sell my privacy" />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Send message</Button>
      </Group>
    </Card>
  );
};

export default ContactUs;
