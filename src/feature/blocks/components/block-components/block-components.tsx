import { Container } from "@mantine/core";
// import { ComponentCanvas } from "../component-canvas/component-canvas";
// import { components } from "../../data/components";
import { countComponentsByCategory } from "../../data/fn";
import { CategoriesList } from "../categories/category-list";
import { CATEGORIES } from "../../data/categories";

const BlockComponents = () => {
  // const canvases = components.map((component, index) => (
  //   <ComponentCanvas {...component} key={component.slug} zindex={components.length - index} />
  // ));

  const componentsCountByCategory = countComponentsByCategory();

  return (
    <Container size="xl" pt={"xl"} miw={"100%"} maw={"100%"} px={0}>
      <div id="main">
        <CategoriesList groups={CATEGORIES} componentsCountByCategory={componentsCountByCategory} />
      </div>
      {/* {canvases} */}
    </Container>
  );
};

export default BlockComponents;
