import { Box, Container, Text, Group, Stack } from "@mantine/core";
import styles from "./coming-soon.module.css";

export const ComingSoon = () => {
  return (
    <Box>
      <Container size="md" className={styles.container}>
        <Stack gap="xl" align="center">
          <Group ta={"center"} justify="center" gap={"xl"}>
            <Text fz={"4rem"} fw={600} lh={"4rem"} className={styles.title} ta={"center"}>
              Coming Soon..
            </Text>
            <Text c={"dimmed"} maw={"380"}>
              We're working hard to bring you more awesome blocks. Stay tuned for updates!
            </Text>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
};
