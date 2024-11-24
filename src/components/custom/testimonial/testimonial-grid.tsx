import { SimpleGrid } from "@mantine/core";
import { ITestimonialItem, TestimonialItem } from "./testimonial-item";

export const TestimonialGrid = ({ testimonialItems }: { testimonialItems: Array<ITestimonialItem> }) => {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2, lg: 3 }}
      spacing="md"
    >
      {testimonialItems.map((testimonial, index) => (
        <TestimonialItem key={index} {...testimonial} />
      ))}
    </SimpleGrid>
  );
};