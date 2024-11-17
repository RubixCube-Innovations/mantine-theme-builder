import { Box, Container, Title, Text, TextInput, Button, Group, Stack } from "@mantine/core";
import { MagnifyingGlassIcon, TwitterLogoIcon, InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export const ComingSoon = () => {
  return (
    <Box className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center">
      <Container size="md" className="py-16">
        <Stack gap="xl" align="center">
          {/* Header */}
          <Title order={1} className="text-center text-4xl md:text-5xl font-bold mb-4">
            Something Amazing Is Coming Soon
          </Title>
          <Text className="text-center text-gray-600 text-lg mb-8 max-w-xl">
            We're working hard to bring you something awesome. Stay tuned for updates!
          </Text>

          {/* Email Signup */}
          <Box className="w-full max-w-md">
            <Group gap={8}>
              <TextInput
                placeholder="Enter your email"
                leftSection={<MagnifyingGlassIcon />}
                className="flex-grow"
                radius="md"
                size="lg"
              />
              <Button size="lg" radius="md">
                Notify Me
              </Button>
            </Group>
          </Box>

          {/* Social Links */}
          <Group gap="lg" mt="xl">
            <Button
              variant="subtle"
              color="gray"
              radius="xl"
              className="hover:bg-gray-200 transition-colors"
              onClick={() => window.open("https://twitter.com", "_blank")}
            >
              <TwitterLogoIcon />
            </Button>
            <Button
              variant="subtle"
              color="gray"
              radius="xl"
              className="hover:bg-gray-200 transition-colors"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              <InstagramLogoIcon />
            </Button>
            <Button
              variant="subtle"
              color="gray"
              radius="xl"
              className="hover:bg-gray-200 transition-colors"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <GitHubLogoIcon />
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
};
