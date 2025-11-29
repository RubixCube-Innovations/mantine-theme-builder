import { Box, Container, Title, Text, Stack, SimpleGrid, Card, Badge } from "@mantine/core";
import { RocketIcon, LockClosedIcon, MixerHorizontalIcon, ChatBubbleIcon, BarChartIcon, GlobeIcon } from "@radix-ui/react-icons";
import classes from "./faq3.module.css";

export const Faq3 = () => {
  const categories = [
    {
      icon: <RocketIcon width={20} height={20} />,
      title: "Getting Started",
      questions: [
        { q: "How do I create an account?", a: "Click 'Sign Up' and follow the simple registration process." },
        { q: "Is there a setup fee?", a: "No, there are no setup fees for any of our plans." },
        { q: "How long is the free trial?", a: "Our free trial lasts 14 days with full feature access." },
      ],
    },
    {
      icon: <LockClosedIcon width={20} height={20} />,
      title: "Security",
      questions: [
        { q: "Is my data encrypted?", a: "Yes, we use AES-256 encryption for all data at rest." },
        { q: "Do you support 2FA?", a: "Yes, two-factor authentication is available on all plans." },
        { q: "Where is data stored?", a: "Data is stored in SOC 2 compliant AWS data centers." },
      ],
    },
    {
      icon: <MixerHorizontalIcon width={20} height={20} />,
      title: "Features",
      questions: [
        { q: "Can I customize the dashboard?", a: "Yes, dashboards are fully customizable to your needs." },
        { q: "Do you have an API?", a: "Yes, we offer a comprehensive REST API with full documentation." },
        { q: "Are there usage limits?", a: "Limits vary by plan. Check our pricing page for details." },
      ],
    },
    {
      icon: <ChatBubbleIcon width={20} height={20} />,
      title: "Support",
      questions: [
        { q: "How can I contact support?", a: "Via email, chat, or phone depending on your plan." },
        { q: "What are support hours?", a: "Email: 24/7. Chat: Business hours. Phone: Enterprise only." },
        { q: "Is there a knowledge base?", a: "Yes, with 500+ articles and video tutorials." },
      ],
    },
    {
      icon: <BarChartIcon width={20} height={20} />,
      title: "Billing",
      questions: [
        { q: "What payment methods accepted?", a: "Credit cards, PayPal, and bank transfers for annual plans." },
        { q: "Can I change plans anytime?", a: "Yes, upgrade or downgrade at any time." },
        { q: "Do you offer refunds?", a: "30-day money-back guarantee on annual plans." },
      ],
    },
    {
      icon: <GlobeIcon width={20} height={20} />,
      title: "Integrations",
      questions: [
        { q: "Which tools do you integrate with?", a: "100+ integrations including Slack, Jira, and Salesforce." },
        { q: "Can I build custom integrations?", a: "Yes, via our API or Zapier for no-code options." },
        { q: "Is there a marketplace?", a: "Yes, with community-built apps and extensions." },
      ],
    },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl">
        <Stack gap="xl">
          <Stack align="center" gap="xs">
            <Title order={1} ta="center" className={classes.title}>
              Questions & Answers
            </Title>
            <Text c="dimmed" size="lg" ta="center" maw={500}>
              Browse by category to find what you need
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            {categories.map((category) => (
              <Card key={category.title} withBorder radius="lg" padding="xl" className={classes.card}>
                <Stack gap="lg">
                  <Box className={classes.iconWrapper}>
                    {category.icon}
                  </Box>
                  <Title order={4}>{category.title}</Title>
                  <Stack gap="md">
                    {category.questions.map((item, index) => (
                      <Box key={index}>
                        <Text fw={600} size="sm">{item.q}</Text>
                        <Text c="dimmed" size="sm" mt={4}>{item.a}</Text>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
