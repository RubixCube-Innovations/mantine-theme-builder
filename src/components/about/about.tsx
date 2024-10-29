import { Anchor, Box, Divider, List, Stack, Text, Title } from "@mantine/core";

export const AboutPage = () => {
  return (
    <Stack>
      {/* <Title order={2}>About Mantine Theme Builder</Title> */}
      <Box>
        <Title order={3}>🤘 Motivation</Title>
        <Divider my="sm" />
        <Text>
          Mantine is an amazing library with a wide range of components, extensive customization options, and a vibrant
          community. It offers a developer experience unmatched by many React libraries. However, its default styling
          can feel less modern compared to frameworks like shadcn and Radix, which many companies prefer. Setting up
          colors and styles to match those modern aesthetics can be time-consuming and may hinder projects that need a
          quick start.
        </Text>
        <br />
        <Text>
          That's where Mantine Theme Builder comes in. This tool provides pre-configured themes inspired by shadcn,
          allowing you to easily integrate modern styling into your Mantine project. Simply copy and paste the theme
          configuration, and you're good to go. In the future, we plan to add more sought-after themes, including the
          popular Glassmorphic theme from Radix.
        </Text>
      </Box>
      <Box mt="md">
        <Title order={3}>📌 Project Maintenance and Future Plans</Title>
        <Divider my="sm" />
        <Text>
          Currently, all the components used in this project's theme are completed. The basic styling and variable color
          assignments are set up for you, making it easy to get started. However, Mantine offers over 100 components,
          and we plan to extensively verify that the generated themes for styles such as Shadcn, Radix, or any new
          theme, support all Mantine components, variants, and states.
          <br />
          <br />
          For now, we're checking whether this project is useful for the community. If you find value in it, please star
          the repository and share your feedback{" "}
          <Anchor href="#tally-open=mex2Dx&tally-emoji-text=👋&tally-emoji-animation=wave">via this form.</Anchor> This
          will help us understand its impact. If there's enough interest, we'll make sure to bring comprehensive support
          for all components, making it easier for anyone looking to adopt modern theming for Mantine projects and get
          started instantly.
        </Text>
      </Box>
      <Box mt="lg">
        <Title order={3}>🎨 Understanding the Color Schema</Title>
        <Divider my="sm" />
        <Text>
          Mantine offers a robust and flexible theming system that we have fully leveraged to create modern, cohesive
          designs. The themes and color schemes you see on this site are a result of carefully crafted configurations,
          making it easy to integrate modern aesthetics. Understanding how these variables and customizations work is
          essential to fully unlock the potential of your theme.
        </Text>
        <br />
        <Text>
          To learn about these variables, their roles, and best practices for theming, refer to our detailed blogs where
          we explain the color schema and provide practical examples. Our blogs cover how to approach theming your
          components, how to use these variables effectively, and how to create a cohesive design system for your
          project.
          <br />
          <br />
          We encourage you to read through these articles if you're looking to customize this theme or understand the
          best way to utilize the predefined color variables. This will help you maintain consistency and visual harmony
          throughout your project.
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
          . Contributions from the community are welcome and appreciated. Please see our{" "}
          <Anchor href="https://github.com/RubixCube-Innovations/mantine-theme-builder/blob/main/CONTRIBUTING.md">
            CONTRIBUTING.md file
          </Anchor>{" "}
          for more information on how to get involved.
        </Text>
      </Box>
      <Box mt="md">
        <Title order={4}>🎗️ Support</Title>
        <Divider my="sm" />
        <Text>If you find this project useful, please consider</Text>
        <List type="unordered">
          <List.Item icon="⭐️">
            Starring the repository on{" "}
            <Anchor href="https://github.com/RubixCube-Innovations/mantine-theme-builder" target="_blank">
              GitHub
            </Anchor>
          </List.Item>
          <List.Item icon="🫶">Sharing the project with your friends and colleagues</List.Item>
          <List.Item icon="👩‍💻">Contributing to the project</List.Item>
          {/* <List.Item icon="🥤">Buy me a coffee</List.Item> */}
        </List>
        <br />
      </Box>
    </Stack>
  );
};
