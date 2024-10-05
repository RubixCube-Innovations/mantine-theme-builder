import {
  Box,
  Container,
  Flex,
  Grid,
  SimpleGrid,
  Space,
  Title,
} from "@mantine/core";
import "./App.css";
import ColorSchemeSwitch from "./components/color-scheme-switch/color-scheme-switch";
import ProfileCard from "./components/profile-card/profile-card";
import ProfileStatCard from "./components/profile-stat-card/profile-stat-card";
import SkillCard from "./components/skill-card/skill-card";
import AboutCard from "./components/about-card/about-card";
import ColorSwitcher from "./components/color-switcher/color-switcher";

function App() {
  return (
    <Container size={"lg"}>
      <Flex justify={"center"} align="center" mb="md" gap={"xs"}>
        <Title size={"h1"}>Hello Mantine!</Title>
        <ColorSchemeSwitch />
      </Flex>
      <Space h="xl" />
      <Box component="div">
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <ProfileCard />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <SimpleGrid cols={{ base: 1, md: 1, lg: 2 }} spacing="xl">
              <SkillCard />
              <AboutCard />
            </SimpleGrid>
            <Space h="xl" />

            <SimpleGrid
              cols={{ base: 1, md: 1, lg: 3 }}
              spacing={{ base: 10, sm: "xl" }}
              verticalSpacing={{ base: "md", sm: "xl" }}
            >
              <ProfileStatCard />
              <ProfileStatCard />
              <ProfileStatCard />
            </SimpleGrid>
            <Space h="xl" />

            <ColorSwitcher />
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
