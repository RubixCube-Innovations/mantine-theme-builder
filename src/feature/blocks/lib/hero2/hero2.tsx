// HeroSection.jsx
import React from "react";
import { Container, Title, Text, Button, Grid, ThemeIcon, Box } from "@mantine/core";
import {
  ArrowRightIcon,
  GitHubLogoIcon,
  LightningBoltIcon,
  BellIcon,
  LayoutIcon,
  CodeIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import styles from "./hero2.module.css";

export const Hero2 = () => {
  return (
    <Box className={styles.heroWrapper}>
      <Container size="xl" py={80}>
        <Grid gutter={60}>
          <Grid.Col span={{ base: 12, md: 6 }} className={styles.contentColumn}>
            <Title className={styles.mainTitle}>
              <span className={styles.titleLine}>Transform your</span>
              <span className={styles.titleLine}>
                development <span className={styles.accent}>workflow</span>
              </span>
            </Title>

            <Text size="lg" c="dimmed" className={styles.description}>
              Build scalable applications with a powerful toolkit that combines developer experience with
              production-grade infrastructure.
            </Text>

            <div className={styles.buttonContainer}>
              <Button
                radius="xl"
                size="lg"
                rightSection={<ArrowRightIcon className={styles.btnIcon} />}
                bg="var(--mantine-primary-color-filled)"
                className={styles.primaryBtn}
              >
                Get Started Now
              </Button>

              <Button
                variant="outline"
                radius="xl"
                size="lg"
                leftSection={<GitHubLogoIcon className={styles.btnIcon} />}
                c="var(--mantine-primary-color-filled)"
                className={styles.secondaryBtn}
              >
                View Source
              </Button>
            </div>

            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>10x</span>
                <Text size="sm" c="dimmed">
                  Faster Deployment
                </Text>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>2.5k+</span>
                <Text size="sm" c="dimmed">
                  Active Developers
                </Text>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>99.9%</span>
                <Text size="sm" c="dimmed">
                  Uptime Guarantee
                </Text>
              </div>
            </div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }} className={styles.visualColumn}>
            <div className={styles.featurePill} style={{ top: "15%", left: "10%" }}>
              <ThemeIcon radius="xl" size="md" color="var(--mantine-color-violet-6)">
                <LightningBoltIcon />
              </ThemeIcon>
              <Text size="sm" fw={500} c="var(--mantine-color-dark-7)">
                High Performance
              </Text>
            </div>

            <div className={styles.featurePill} style={{ top: "35%", right: "5%" }}>
              <ThemeIcon radius="xl" size="md" color="var(--mantine-color-green-6)">
                <LayoutIcon />
              </ThemeIcon>
              <Text size="sm" fw={500} c="var(--mantine-color-dark-7)">
                Responsive UI
              </Text>
            </div>

            <div className={styles.featurePill} style={{ bottom: "15%", left: "15%" }}>
              <ThemeIcon radius="xl" size="md" color="var(--mantine-color-blue-6)">
                <GlobeIcon />
              </ThemeIcon>
              <Text size="sm" fw={500} c="var(--mantine-color-dark-7)">
                Global CDN
              </Text>
            </div>

            <div className={styles.mainVisual}>
              <div className={styles.codeWindow}>
                <div className={styles.codeHeader}>
                  <div className={styles.codeDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className={styles.codeTabs}>
                    <div className={styles.activeTab}>main.jsx</div>
                    <div>config.js</div>
                  </div>
                </div>
                <div className={styles.codeBody}>
                  <pre className={styles.codeSyntax}>
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
                  </pre>
                </div>
              </div>

              <div className={styles.floatingCard} style={{ top: "-30px", right: "-20px" }}>
                <CodeIcon color="var(--mantine-color-gray-6)" />
                <Text size="xs" c="var(--mantine-color-dark-7)">
                  Auto-optimizing
                </Text>
              </div>

              <div className={styles.floatingCard} style={{ bottom: "-25px", left: "30px" }}>
                <BellIcon color="var(--mantine-color-yellow-6)" />
                <Text size="xs" c="var(--mantine-color-dark-7)">
                  Real-time updates
                </Text>
              </div>

              <div className={styles.glowEffect}></div>
            </div>
          </Grid.Col>
        </Grid>

        <div className={styles.trustedSection}>
          <Text c="dimmed" ta="center" size="sm" fw={500}>
            TRUSTED BY LEADING COMPANIES
          </Text>
          <div className={styles.logosStrip}>
            <div className={styles.logoPlaceholder}></div>
            <div className={styles.logoPlaceholder}></div>
            <div className={styles.logoPlaceholder}></div>
            <div className={styles.logoPlaceholder}></div>
            <div className={styles.logoPlaceholder}></div>
          </div>
        </div>
      </Container>
    </Box>
  );
};
