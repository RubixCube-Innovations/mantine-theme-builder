import { components } from "./components";
import { ComponentsMap } from "./types";

export function getComponentsByCategory(): ComponentsMap {
  return components.reduce<ComponentsMap>((acc, component) => {
    if (!(component.attributes.category in acc)) {
      acc[component.attributes.category] = [];
    }
    acc[component.attributes.category].push(component);
    return acc;
  }, {});
}

export function countComponentsByCategory() {
  return components.reduce<Record<string, number>>((acc, component) => {
    if (!(component.attributes.category in acc)) {
      acc[component.attributes.category] = 0;
    }
    acc[component.attributes.category] += 1;
    return acc;
  }, {});
}
