import { Box, Container, Title, Text, Stack, Group, Grid, ThemeIcon } from "@mantine/core";
import { QuestionMarkCircledIcon, PlusCircledIcon, MinusCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import classes from "./faq2.module.css";

export const Faq2 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes your platform different?",
      answer: "Our platform combines powerful features with an intuitive interface, backed by industry-leading support. We focus on delivering real value through continuous innovation and listening to customer feedback.",
    },
    {
      question: "How long does implementation take?",
      answer: "Most teams are up and running within a day. Our streamlined onboarding process and comprehensive documentation make implementation quick and painless. Enterprise setups may take 1-2 weeks depending on complexity.",
    },
    {
      question: "Can I integrate with existing tools?",
      answer: "Yes! We offer native integrations with 100+ popular tools including Slack, Jira, GitHub, and Salesforce. Our robust API also allows you to build custom integrations for any workflow.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your data remains accessible for 30 days after cancellation. You can export all your data at any time. After the grace period, data is securely deleted from our servers in accordance with our privacy policy.",
    },
    {
      question: "Do you offer training and onboarding?",
      answer: "All plans include access to our knowledge base and video tutorials. Pro plans get live webinar training, and Enterprise customers receive personalized onboarding sessions with our customer success team.",
    },
    {
      question: "What's your uptime guarantee?",
      answer: "We maintain a 99.9% uptime SLA for all paid plans. Our status page provides real-time updates on system health. Enterprise plans include custom SLAs with financial guarantees.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box className={classes.wrapper}>
      <Container size="xl">
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="md" className={classes.sidebar}>
              <ThemeIcon size={48} radius="md" variant="light" color="var(--mantine-primary-color-filled)">
                <QuestionMarkCircledIcon width={24} height={24} />
              </ThemeIcon>
              <Title order={1} className={classes.title}>
                Got Questions?
              </Title>
              <Text c="dimmed" size="lg">
                Find answers to commonly asked questions about our platform and services.
              </Text>
              <Text size="sm" c="dimmed">
                Can't find what you're looking for?{" "}
                <Text span c="var(--mantine-primary-color-filled)" fw={600} className={classes.contactLink}>
                  Contact our support team
                </Text>
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap="md">
              {faqs.map((faq, index) => (
                <Box
                  key={index}
                  className={`${classes.faqItem} ${openIndex === index ? classes.active : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  <Group justify="space-between" wrap="nowrap">
                    <Text fw={600}>{faq.question}</Text>
                    {openIndex === index ? (
                      <MinusCircledIcon width={20} height={20} color="var(--mantine-primary-color-filled)" />
                    ) : (
                      <PlusCircledIcon width={20} height={20} />
                    )}
                  </Group>
                  {openIndex === index && (
                    <Text c="dimmed" size="sm" mt="md" lh={1.7}>
                      {faq.answer}
                    </Text>
                  )}
                </Box>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
