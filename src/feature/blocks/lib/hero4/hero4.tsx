import React from "react";
import { Container, Title, Text, Button, Group, Box } from "@mantine/core";
import styles from "./hero4.module.css";

export const Hero4 = () => {
  return (
    <Box className={styles.heroContainer}>
      {/* Simple background */}
      <div className={styles.gradientBackground}></div>

      <Container size="xl" className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.centerColumn}>
            <div className={styles.tagLine}>
              <div className={styles.tag}>
                <Text size="sm" className={styles.tagText}>
                  New Release
                </Text>
              </div>
            </div>

            <div className={styles.getStartedText}>
              <Text>Get started with our new product release today</Text>
              <span className={styles.arrow}>→</span>
            </div>

            <Title className={styles.mainTitle}>
              <span className={styles.titleLine}>Smart home automation</span>
              <span className={styles.titleLine}>and security system for you</span>
            </Title>

            <Text className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus fugit ab cumque consequuntur
              pariatur provident? Nulla consequuntur nisi eum!
            </Text>

            <Group className={styles.buttonGroup}>
              <Button className={styles.primaryButton}>
                <span className={styles.buttonText}>Get Started</span>
                <span className={styles.buttonArrow}>→</span>
              </Button>

              <Button variant="outline" className={styles.secondaryButton}>
                <span className={styles.playIcon}>▶</span>
                Watch Demo
              </Button>

              <div className={styles.scheduleCall}>
                <Text>Schedule a call</Text>
                <span className={styles.arrow}>→</span>
              </div>
            </Group>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.logoImage}>{/* Add image here */}</div>
        </div>
      </Container>
    </Box>
  );
};
