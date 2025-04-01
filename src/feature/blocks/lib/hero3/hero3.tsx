import { Container, Title, Text, Button, Group, Box } from "@mantine/core";
import styles from "./hero3.module.css";

export const Hero3 = () => {
  return (
    <Box className={styles.heroContainer}>
      {/* Animated background elements */}
      <div className={styles.gradientBackground}></div>
      <div className={styles.gridOverlay}></div>

      <div className={styles.particleContainer}>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <Container size="xl" className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <div className={styles.tagLine}>
              <div className={styles.tag}>
                <span className={styles.pulse}></span>
                <Text size="sm" className={styles.tagText}>
                  NEXT GENERATION AI
                </Text>
              </div>
            </div>

            <Title className={styles.mainTitle}>
              <span className={styles.titleLine}>Quantum Neural</span>
              <span className={styles.titleLine}>
                <span className={styles.highlight}>Intelligence</span> System
              </span>
            </Title>

            <Text className={styles.description}>
              Experience the convergence of quantum computing and neural networks, enabling unprecedented computational
              power and problem-solving capabilities beyond classical limitations.
            </Text>

            <Group className={styles.buttonGroup}>
              <Button className={styles.primaryButton}>
                <span className={styles.buttonInner}>
                  <span className={styles.buttonGlow}></span>
                  <span className={styles.buttonText}>Explore Platform</span>
                </span>
              </Button>

              <Button variant="outline" className={styles.secondaryButton}>
                Technical Documentation
              </Button>
            </Group>

            <div className={styles.metricsContainer}>
              <div className={styles.metric}>
                <div className={styles.metricValue}>
                  <span className={styles.metricNumber}>850</span>
                  <span className={styles.metricUnit}>+</span>
                </div>
                <Text size="xs" className={styles.metricLabel}>
                  QUANTUM CORES
                </Text>
              </div>

              <div className={styles.metric}>
                <div className={styles.metricValue}>
                  <span className={styles.metricNumber}>10</span>
                  <span className={styles.metricUnit}>-15s</span>
                </div>
                <Text size="xs" className={styles.metricLabel}>
                  RESPONSE TIME
                </Text>
              </div>

              <div className={styles.metric}>
                <div className={styles.metricValue}>
                  <span className={styles.metricNumber}>99.99</span>
                  <span className={styles.metricUnit}>%</span>
                </div>
                <Text size="xs" className={styles.metricLabel}>
                  ACCURACY RATE
                </Text>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.visualElement}>
              <div className={styles.hologramContainer}>
                <div className={styles.hologramCore}>
                  <div className={styles.coreInner}></div>
                  <div className={styles.coreRing}></div>
                  <div className={styles.corePulse}></div>
                </div>

                <div className={styles.orbitalRing1}></div>
                <div className={styles.orbitalRing2}></div>

                <div className={styles.dataPoint1}>
                  <div className={styles.dataPointDot}></div>
                  <div className={styles.dataPointLabel}>Neural Link</div>
                </div>

                <div className={styles.dataPoint2}>
                  <div className={styles.dataPointDot}></div>
                  <div className={styles.dataPointLabel}>Quantum Core</div>
                </div>

                <div className={styles.dataPoint3}>
                  <div className={styles.dataPointDot}></div>
                  <div className={styles.dataPointLabel}>Data Nexus</div>
                </div>

                <div className={styles.scanLines}></div>
              </div>

              <div className={styles.blueprint}>
                <div className={styles.blueprintLines}></div>
                <div className={styles.blueprintCircle}></div>
                <div className={styles.blueprintGrid}></div>
              </div>

              <div className={styles.dataStream}>
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={styles.dataLine}
                    style={{
                      top: `${i * 5}%`,
                      left: `${Math.random() * 100}%`,
                      width: `${Math.random() * 100 + 50}px`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.partnersSection}>
          <Text className={styles.partnersTitle}>TRUSTED BY LEADING ORGANIZATIONS</Text>
          <div className={styles.partnersLogos}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className={styles.partnerLogo}>
                <div className={styles.glowBorder}></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Box>
  );
};
