import { Container } from "@mantine/core";
import { ComponentCanvas } from "../component-canvas/component-canvas";
import { components } from "../../data/components";

const BlockPage = () => {
  const canvases = components.map((component, index) => (
    <ComponentCanvas {...component} key={component.slug} zIndex={components.length - index} />
  ));

  return (
    <Container size="xl" mt={50}>
      {canvases}
    </Container>
  );
};

export default BlockPage;
