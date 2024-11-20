import { Box, Container, Text, Group, Stack } from "@mantine/core";
// import { MagnifyingGlassIcon, TwitterLogoIcon, InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import styles from "./coming-soon.module.css";

export const ComingSoon = () => {
  // const [email, setEmail] = useState("");
  // const [isSubscribed, setIsSubscribed] = useState(false);

  // const handleSubscribe = () => {
  //   if (email && email.includes("@")) {
  //     setIsSubscribed(true);
  //     setEmail("");
  //     // Here you would typically handle the email subscription
  //   }
  // };

  // const handleSocialClick = (url: string) => {
  //   window.open(url, "_blank", "noopener,noreferrer");
  // };

  return (
    <Box>
      <Container size="md" className={styles.container}>
        <Stack gap="xl" align="center">
          <Group ta={"center"} justify="center" gap={"xl"}>
            <Text fz={"4rem"} fw={600} className={styles.title} ta={"center"}>
              Coming Soon
            </Text>
            <Text c={"dimmed"} maw={"380"}>
              We're working hard to bring you more awesome block. Stay tuned for updates!
            </Text>
          </Group>

          {/* <Box my={rem(24)}>
            {!isSubscribed ? (
              <Group gap={8}>
                <TextInput
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  leftSection={<MagnifyingGlassIcon className={styles.searchIcon} />}
                  size="lg"
                />
                <Button size="lg" radius="md" onClick={handleSubscribe}>
                  Notify Me
                </Button>
              </Group>
            ) : (
              <Text className={styles.successMessage}>Thanks for subscribing! We'll keep you posted.</Text>
            )}
          </Box> */}

          {/* <Group gap="lg">
            <Button
              variant="subtle"
              className={styles.socialButton}
              onClick={() => handleSocialClick("https://twitter.com")}
            >
              <TwitterLogoIcon className={styles.socialIcon} />
            </Button>
            <Button
              variant="subtle"
              className={styles.socialButton}
              onClick={() => handleSocialClick("https://instagram.com")}
            >
              <InstagramLogoIcon className={styles.socialIcon} />
            </Button>
            <Button
              variant="subtle"
              className={styles.socialButton}
              onClick={() => handleSocialClick("https://github.com")}
            >
              <GitHubLogoIcon className={styles.socialIcon} />
            </Button>
          </Group> */}
        </Stack>
      </Container>
    </Box>
  );
};
