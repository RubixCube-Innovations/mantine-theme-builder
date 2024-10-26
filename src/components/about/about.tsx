import { Anchor, Box, Divider, List, Stack, Text, Title } from '@mantine/core';

export const AboutPage = () => {
  return (
    <Stack>
      {/* <Title order={2}>About Mantine Theme Builder</Title> */}
      <Box>
        <Title order={3}>🤘 Motivation</Title>
        <Divider my="sm" />
        <Text>
          Mantine is an amazing library with a wide range of components, extensive customization options, and a vibrant
          community. It offers a developer experience unmatched by many React libraries.  However, its default styling can feel 
          less modern compared to frameworks like shadcn and Radix, which many companies prefer.
           Setting up colors and styles to match those modern aesthetics can be time-consuming and may hinder projects that need a quick start.
        </Text>
        <br />
        <Text>
          That's where Mantine Theme Builder comes in. This tool provides pre-configured themes inspired by shadcn,
          allowing you to easily integrate modern styling into your Mantine project. Simply copy and paste the theme
          configuration, and you're good to go. In the future, we plan to add more sought-after themes, including the
          popular glasmorphic theme from Radix.
        </Text>
      </Box>
      <Box mt="md">
        <Title order={3}>🤔 How to Use</Title>
        <Divider my="sm" />
        <List type="ordered">
          <List.Item>Copy the `theme.ts` file from Mantine Theme Builder and paste it into your project.</List.Item>
          <List.Item>Import the theme object and pass it to `MantineProvider` in your project.</List.Item>
          <List.Item>Import the `cssVariableResolver` and pass it to the same component.</List.Item>
          <List.Item>Copy the `mantine.css` file from the builder and include it in your project.</List.Item>
        </List>
        <Text>
          <br />
          By following these simple steps, you'll have a modern, shadcn-like theme integrated seamlessly with your
          Mantine components, saving you time and effort.
        </Text>
      </Box>
      <Box mt={"md"}>
        <Title order={3}>🧑‍💻 Contributors</Title>
        <Divider my="sm" />
        <Text>
          This project is maintained by{" "}
          <Anchor href="https://github.com/Abhishek-S-Lal" target="_blank">
            Abhishek-S-Lal
          </Anchor>{" "}
          and{" "}
          <Anchor href="https://github.com/gopukr" target="_blank">
            gopukr
          </Anchor>
          . Contributions from the community are welcome and appreciated. Please see our CONTRIBUTING.md file for more
          information on how to get involved.
        </Text>
      </Box>
      <Box mt="md">
        <Title order={4}>🎗️ Support</Title>
        <Divider my="sm" />
        <Text>If you find this project useful, plese consider</Text>
        <List type="unordered">
          <List.Item icon="⭐️">Starring the repository on GitHub</List.Item>
          <List.Item icon="🫶">Sharing the project with your friends and colleagues</List.Item>
          <List.Item icon="👩‍💻">Contributing to the project</List.Item>
          {/* <List.Item icon="🥤">Buy me a coffee</List.Item> */}
        </List>
        <br />
      </Box>
    </Stack>
  );
};
