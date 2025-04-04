import React from "react";
import { Container, Title, Text, Button, ThemeIcon, Box, Group, Paper, Code } from "@mantine/core";
import {
  ArrowRightIcon,
  GitHubLogoIcon,
  LightningBoltIcon,
  BellIcon,
  LayoutIcon,
  CodeIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import classes from "./hero2.module.css";

export const Hero2 = () => {
  return (
    <Box className={classes.heroWrapper}>
      <Container size="xl" py={80}>
        <Box>
          {/* Content Column */}
          <Box className={classes.contentColumn}>
            <Title className={classes.mainTitle}>
              <span className={classes.titleLine}>
                Transform your <span className={classes.accent}>workflow</span>
              </span>
            </Title>

            <Text size="lg" c="dimmed" className={classes.description}>
              Build scalable applications with a powerful toolkit that combines developer experience with
              production-grade infrastructure.
            </Text>

            {/* Stats */}
            <Box className={classes.statsContainer}>
              <Box className={classes.statItem}>
                <Text className={classes.statValue}>10x</Text>
                <Text size="sm" c="dimmed">
                  Faster Deployment
                </Text>
              </Box>
              <Box className={classes.divider} />
              <Box className={classes.statItem}>
                <Text className={classes.statValue}>2.5k+</Text>
                <Text size="sm" c="dimmed">
                  Active Developers
                </Text>
              </Box>
              <Box className={classes.divider} />
              <Box className={classes.statItem}>
                <Text className={classes.statValue}>99.9%</Text>
                <Text size="sm" c="dimmed">
                  Uptime Guarantee
                </Text>
              </Box>
            </Box>

            {/* Buttons */}
            <Group className={classes.buttonContainer}>
              <Button
                radius="xl"
                size="lg"
                rightSection={<ArrowRightIcon style={{ width: 16, height: 16 }} />}
                className={classes.primaryBtn}
              >
                Get Started Now
              </Button>

              <Button
                variant="outline"
                radius="xl"
                size="lg"
                leftSection={<GitHubLogoIcon style={{ width: 16, height: 16 }} />}
                className={classes.secondaryBtn}
              >
                View Source
              </Button>
            </Group>
          </Box>

          {/* Visual Column */}
          <Box className={classes.visualColumn}>
            {/* Feature Pills */}
            <Paper shadow="sm" p="xs" radius="xl" className={classes.featurePill} style={{ top: "15%", left: "10%" }}>
              <Group gap="xs">
                <ThemeIcon radius="xl" size="md" color="violet">
                  <LightningBoltIcon />
                </ThemeIcon>
                <Text size="sm" fw={500}>
                  High Performance
                </Text>
              </Group>
            </Paper>

            <Paper
              shadow="sm"
              p="xs"
              radius="xl"
              className={classes.featurePill}
              style={{ bottom: "5%", right: "12%" }}
            >
              <Group gap="xs">
                <ThemeIcon radius="xl" size="md" color="green">
                  <LayoutIcon />
                </ThemeIcon>
                <Text size="sm" fw={500}>
                  Responsive UI
                </Text>
              </Group>
            </Paper>

            <Paper
              shadow="sm"
              p="xs"
              radius="xl"
              className={classes.featurePill}
              style={{ bottom: "15%", left: "15%" }}
            >
              <Group gap="xs">
                <ThemeIcon radius="xl" size="md" color="blue">
                  <GlobeIcon />
                </ThemeIcon>
                <Text size="sm" fw={500}>
                  Global CDN
                </Text>
              </Group>
            </Paper>

            {/* Main Visual */}
            <Box className={classes.mainVisual}>
              <Box className={classes.codeWindow}>
                <Group className={classes.codeHeader}>
                  <Group className={classes.codeDots}>
                    <Box className={classes.dotRed} />
                    <Box className={classes.dotYellow} />
                    <Box className={classes.dotGreen} />
                  </Group>
                  <Group className={classes.codeTabs}>
                    <Text size="sm" className={classes.activeTab}>
                      main.jsx
                    </Text>
                    <Text size="sm" c="gray.5">
                      config.js
                    </Text>
                  </Group>
                </Group>

                <Box className={classes.codeBody}>
                  <Code block className={classes.codeSyntax}>
                    {`import { createApp, injectFeatures } from 'platform';
import { analytics, router, store } from './plugins';

// Initialize application
const app = createApp({
  features: injectFeatures([
    analytics(),
    router(),
    store({ hydration: true })
  ]),
  render: (state) => (
    <Dashboard 
      data={state.data}
      user={state.user}
      theme="auto"
    />
  )
});

// Launch your application
app.launch('#root');`}
                  </Code>
                </Box>
              </Box>

              {/* Floating Cards */}
              <Paper
                shadow="md"
                p="xs"
                radius="md"
                className={classes.floatingCard}
                style={{ top: "-20px", right: "-20px" }}
              >
                <Group gap="xs">
                  <CodeIcon color="var(--mantine-color-gray-6)" />
                  <Text size="xs">Auto-optimizing</Text>
                </Group>
              </Paper>

              <Paper
                shadow="md"
                p="xs"
                radius="md"
                className={classes.floatingCard}
                style={{ bottom: "-25px", left: "30px" }}
              >
                <Group gap="xs">
                  <BellIcon color="var(--mantine-color-yellow-6)" />
                  <Text size="xs">Real-time updates</Text>
                </Group>
              </Paper>

              <Box className={classes.glowEffect} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
