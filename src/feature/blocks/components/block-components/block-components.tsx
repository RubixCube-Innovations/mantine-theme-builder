import { Container } from "@mantine/core";
import { ComponentCanvas } from "../component-canvas/component-canvas";
import { components } from "../../data/components";

const BlockComponents = () => {
  const canvases = components.map((component, index) => (
    <ComponentCanvas {...component} key={component.slug} zIndex={components.length - index} />
  ));

  return (
    <Container size="xl" pt={"xl"} miw={"100%"} px={0}>
      {canvases}
    </Container>
  );
};

export default BlockComponents;
