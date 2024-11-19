import BlockComponents from "./block-components";
import ThemeCustomizer from "../../../../components/theme-customizer";
import PageLayout from "../../../../components/layout/page-layout";
import { LandingTestimonialReadMoreWrapper } from "../../../../components/testimonial/testimonial-read-more-wrapper";
import { LandingTestimonialGrid } from "../../../../components/testimonial/testimonial-grid";

const BlockPage = () => {
  const testimonialItems = [
    {
      name: "Mathew",
      text: "After using this, I cannot imagine going back to the old way of doing things.",
      handle: "@heymatt_oo",
      imageSrc: "https://picsum.photos/100/100.webp?random=2",
    },
    {
      name: "Joshua",
      text: "Perfect for my use case",
      handle: "@joshua",
      imageSrc: "https://picsum.photos/100/100.webp?random=3",
    },
    {
      name: "Parl Coppa",
      text: "This is the best thing since sliced bread. I cannot believe I did not think of it myself.",
      handle: "@coppalipse",
      imageSrc: "https://picsum.photos/100/100.webp?random=1",
      featured: true, // Feature this testimonial
    },
    {
      name: "Mandy",
      text: "Excellent product!",
      handle: "@mandy",
      imageSrc: "https://picsum.photos/100/100.webp?random=4",
    },
    {
      name: "Alex",
      text: "Can easily recommend!",
      handle: "@alex",
      imageSrc: "https://picsum.photos/100/100.webp?random=5",
    },
    {
      name: "Sam",
      text: "I am very happy with the results.",
      handle: "@sama",
      imageSrc: "https://picsum.photos/100/100.webp?random=6",
    },
  ];

  return (
    <PageLayout
      title="Mantine UI Blocks"
      description="Accelerate your development with our ever-growing library of beautifully designed UI blocks. Just copy, paste, and customize."
    >
      <LandingTestimonialReadMoreWrapper size="md">
        <LandingTestimonialGrid
          title="Community Reviews"
          // description="See what other people have to say."
          testimonialItems={testimonialItems}
        />
      </LandingTestimonialReadMoreWrapper>

      <ThemeCustomizer isBlockPage={true} />
      <BlockComponents />
    </PageLayout>
  );
};

export default BlockPage;
