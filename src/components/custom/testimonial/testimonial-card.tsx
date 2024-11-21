import { Card, Grid, Text, Avatar, Container } from "@mantine/core";
import { QuoteIcon, StarFilledIcon } from "@radix-ui/react-icons";
import classes from "./testimonial-card.module.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations",
    quote: "Absolutely transformative solution that exceeded all our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    quote: `Elegant design and incredible performance. Couldn't be happier.`,
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Product Manager",
    quote: "A game-changing tool that streamlined our entire workflow.",
    rating: 4,
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    quote: "Intuitive, powerful, and exactly what our team needed.",
    rating: 5,
  },
];

const TestimonialCard = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <StarFilledIcon key={index} color={index < rating ? "#FFD700" : "#E0E0E0"} className={classes.starIcon} />
    ));
  };

  return (
    <Container size="lg" className={classes.container}>
      <Grid>
        {testimonials.map((testimonial, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 3 }}>
            <Card shadow="sm" padding="lg" radius="md" className={classes.testimonialCard}>
              <QuoteIcon className={classes.quoteIcon} />
              <Text className={classes.quoteText} c="dimmed" ta="center">
                "{testimonial.quote}"
              </Text>

              <div className={classes.testimonialFooter}>
                <Avatar src={null} alt={testimonial.name} color="blue" radius="xl" className={classes.avatar}>
                  {testimonial.name.charAt(0)}
                </Avatar>
                <div>
                  <Text fw={700} size="sm">
                    {testimonial.name}
                  </Text>
                  <Text c="dimmed" size="xs">
                    {testimonial.role}
                  </Text>
                  <div className={classes.starRating}>{renderStars(testimonial.rating)}</div>
                </div>
              </div>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialCard;
