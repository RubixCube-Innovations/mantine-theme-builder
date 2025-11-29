import { Box, Container, Title, Text, Accordion, Stack } from "@mantine/core";
import classes from "./faq1.module.css";

export const Faq1 = () => {
  const faqs = [
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply sign up for an account, complete the onboarding process, and you'll be ready to go in minutes. Our intuitive interface guides you through each step.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through our payment partners.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access until the end of your billing period. We don't offer refunds for partial months.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan anytime during or after your trial.",
    },
    {
      question: "How secure is my data?",
      answer: "Security is our top priority. We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Our infrastructure is hosted on AWS with SOC 2 Type II compliance.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! We offer email support for all plans, with priority support and live chat available on Pro plans and above. Enterprise customers get a dedicated account manager.",
    },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="lg">
        <Stack gap="xl">
          <Stack align="center" gap="xs">
            <Title order={1} className={classes.title}>
              Frequently Asked Questions
            </Title>
            <Text c="dimmed" size="lg" ta="center" maw={500}>
              Everything you need to know about our product
            </Text>
          </Stack>

          <Accordion variant="separated" radius="lg" className={classes.accordion}>
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} value={`item-${index}`} className={classes.item}>
                <Accordion.Control className={classes.control}>
                  <Text fw={600}>{faq.question}</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text c="dimmed" size="sm" lh={1.7}>
                    {faq.answer}
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Stack>
      </Container>
    </Box>
  );
};
