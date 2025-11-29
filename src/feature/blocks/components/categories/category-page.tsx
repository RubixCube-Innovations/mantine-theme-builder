"use client";

import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, ActionIcon, Container, Transition } from "@mantine/core";
import { ComponentCanvas } from "../component-canvas/component-canvas";
import { Category, UiComponent } from "../../data/types";

interface CategoryPageProps {
  category?: Category;
  components: UiComponent[];
}

const CategoryPage = ({ components }: CategoryPageProps) => {
  const [scroll, scrollTo] = useWindowScroll();

  const canvases = components?.map((component, index) => (
    <ComponentCanvas {...component} key={component.slug} zindex={components.length - index} />
  ));

  return (
    <Container size="xl" pt={"xl"} miw={"100%"} maw={"100%"} px={0}>
      {canvases}

      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              size="xl"
              radius="xl"
              variant="filled"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              aria-label="Scroll to top"
            >
              <IconArrowUp size={20} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </Container>
  );
};

export default CategoryPage;
