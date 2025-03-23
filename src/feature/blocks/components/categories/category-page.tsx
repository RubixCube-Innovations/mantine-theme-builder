import { Container } from "@mantine/core";
import { ComponentCanvas } from "../component-canvas/component-canvas";
import { Category, UiComponent } from "../../data/types";

interface CategoryPageProps {
  category?: Category;
  components: UiComponent[];
}

const CategoryPage = ({ components }: CategoryPageProps) => {
  const canvases = components?.map((component, index) => (
    <ComponentCanvas {...component} key={component.slug} zindex={components.length - index} />
  ));

  return (
    <Container size="xl" pt={"xl"} miw={"100%"} maw={"100%"} px={0}>
      {canvases}
    </Container>
  );
};

export default CategoryPage;
