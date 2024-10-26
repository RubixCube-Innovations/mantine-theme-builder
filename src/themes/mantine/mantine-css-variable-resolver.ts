import { CSSVariablesResolver } from "@mantine/core";

export const mantineCssVariableResolver: CSSVariablesResolver = () => ({
    variables: {
      //  variables that do not depend on color scheme
    },
    light: {
      // variables for light color scheme only
    },
    dark: {
      // variables for dark color scheme only
    },
  });